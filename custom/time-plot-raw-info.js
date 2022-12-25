module.exports = {
  props: {
    "max_points": {
      "msg_name": "max_points",
      "name": "max_points",
      "name_text": "Max Points",
      "name_kebab": "max-points",
      "tip": "Max data points (int) or period ([0-9]*[smhd] for secs/mins/hrs/days). ",
      "default": null,
      "default_html": null,
      "input_type": "any"
    },
  },
  help: `Time-series chart.
TimePlotRaw displays a time-series chart using [uPlot](https://github.com/leeoniya/uPlot).
It deals with resizing, and transposes the data coming in.
The uPlot options must be provided via the \`options\` input otherwise
nothing will show. For an easier way to use uPlot see the TimePlot widget.

The documentation on the uPlot options "leaves something to be desired"...
See https://github.com/leeoniya/uPlot/tree/master/docs for an overview.
More info can be gleaned from the demos at https://leeoniya.github.io/uPlot/demos/index.html
and the ultimate reference is https://github.com/leeoniya/uPlot/blob/master/dist/uPlot.d.ts

The data must be input in the form of "data points" where a data point is an array consisting of
a unix timestamp (seconds since 1970-01-01) followed by a value per series. Null values are OK
to designate missing data. Note: each and every data point must have one value per series.

Each data message may be either an array of data points or a single data point. If an array is
provided then it replaces the entire dataset being shown. If a single point is provided
it is appended to the current dataset and an old data point may be rotated out.
Note that this "row-wise" structure gets transposed to the columnar structure expected by uPlot.

The \`max_points\` prop can be used to limit the number of data points to keep when
sending data points incrementally.
If it is an integer it is interpreted as the number of points to keep.
If it is a string of the form \`[0-9]*[smhd]\` it is interpreted as a period of time
in seconds, minutes, hours, or days. E.g. "2h" means keep the last 2 hours of data.
There is an additional hard-coded limit of 10k data points.
`,
}
