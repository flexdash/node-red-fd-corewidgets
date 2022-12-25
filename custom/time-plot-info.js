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
  help: `Time-series chart with simple options.
TimePlot displays a time-series chart using [uPlot](https://github.com/leeoniya/uPlot).
It is a wrapper around TimePlot which deals with resizing, and transposes the data coming in.
TimePlot simplifies the configuration of typical
time-series plots compared to TimePlotRaw.

The data (\`payload\`) must be input in the form of "data points" where a data point is an array
consisting of a unix timestamp (seconds since 1970-01-01) followed by a value per series.
Null values are OK to designate missing data.
**Important**: each and every data point must have _exactly_ one value per series, otherwise
nothing will be plotted.

Each \`payload\` may be either an array of data points or a single data point. If an array is
provided then it replaces the entire dataset being shown. If a single point is provided
it is appended to the current dataset and an old data point may be rotated out.

The \`max_points\` prop can be used to limit the number of data points to keep when
sending data points incrementally.
If it is an integer it is interpreted as the number of points to keep.
If it is a string of the form \`[0-9]*[smhd]\` it is interpreted as a period of time
in seconds, minutes, hours, or days. E.g. "2h" means keep the last 2 hours of data.
There is an additional hard-coded limit of 10k data points.

The \`labels\`, \`colors\`, \`axes\`, and \`series\` props control the options passed to uPLot.
By default, with all these inputs empty ([]) a single series is plotted without label.
If any of the array inputs are specified the longest array determines the number of series.

The default color sequence is blue, green, yellow, red, cyan, purple, orange, teal, pink, lime,
magenta, lavender, brown, beige, maroon, mint, olive, apricot, navy, and grey from
https://sashamaps.net/docs/resources/20-colors/.
These color names can be used in the \`colors\` prop.

TimePlot outputs the uPlot options it constructs to the browser console.
This can be handy as a starting point if you need to switch to TimePlotRaw to get
the full uPlot flexibility.
`,
}
