// Custom handlers for Node-RED FlexDash Time-Plot node
// Copyright ©2022 by Thorsten von Eicken, see LICENSE

// handler for Node-RED messages coming into the node, receives props (shallow clone of msg)
// can modify them, and returns bool: handling is aborted if false
onNodeRedCustom = (props, options) => {
    // special handling for payload
    if (props.data) {
        this.warn("msg.data is deprecated, please use msg.payload instead")
        props.payload = props.data
        delete props.data
    }
    if ('payload' in props) {
        const pl = props.payload
        delete props.payload
        if (pl !== null && !Array.isArray(pl)) return

        // full array update
        if (pl === null || pl.length == 0 || Array.isArray(pl[0])) {
            // array of arrays: the whole data set is being replaced, we can pass this through as-is
            props.data = pl
            return
        }

        // single data point append
        //this.log(`Single data point: ${pl}`)
        if (props._fd_socket) {
            this.error("Cannot unicast (_fd_socket!=null) single data points")
            return
        }

        // check cardinality
        let data = widget.get("data", options)
        //console.log(`Cardinality: ${JSON.stringify(data)}`)
        if (Array.isArray(data) && data.length > 0 && data[0].length != pl.length) {
            this.error(`Data point has ${pl.length} values, expected ${data[0].length}`)
            return
        }

        // append data point to existing data set
        widget.push("data", pl, options)

        // remove old data points if necessary
        data = widget.get("data", options)
        const max_points = widget.get("max_points", options)
        if (Number.isFinite(max_points)) {
            // limit the number of data points
            for (let i=0; i<data.length-max_points; i++) widget.shift("data", options)
        } else if(typeof max_points === 'string') {
            // limit the age of the oldest data point
            const max = Number.parseInt(max_points)
            const unit = max_points.slice(-1)
            if (Number.isFinite(max)) {
                let limit = Math.trunc(Date.now()/1000)
                switch (unit) {
                    case 's': limit -= max; break
                    case 'm': limit -= max * 60; break
                    case 'h': limit -= max * 3600; break
                    case 'd': limit -= max * 86400; break
                    default: this.warn("Invalid unit for max_points: " + unit); limit = 0; break
                }
                while (data.length > 0 && data[0][0] < limit) widget.shift("data", options)
            }
        }

        // hard limit the number of data points to 10k
        for (let i=0; i<data.length-10000; i++) widget.shift("data", options)
    }
}
