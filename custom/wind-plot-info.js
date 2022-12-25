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
  help: `Wind speed, gust and direction time-series plot
WindPlot uses the TimePlotRaw widget to render a combined wind speed and direction
time-series plot.

The data must be input in the form of "data points" where a data point is an array consisting
a unix timestamp (seconds since 1970-01-01) followed by wind direction in degrees, followed by
wind speed and wind gust speed (using any unit of choice). Null values are OK
to designate missing data.
**Important**: each and every data point must have _exactly_ four values, otherwise
nothing will be plotted.

Each data message may be either an array of data points or a single data point. If an array is
provided then it replaces the entire dataset being shown. If a single point is provided
it is appended to the current dataset and an old data point may be rotated out.

The \`max_points\` prop can be used to limit the number of data points to keep when
sending data points incrementally.
If it is an integer it is interpreted as the number of points to keep.
If it is a string of the form \`[0-9]*[smhd]\` it is interpreted as a period of time
in seconds, minutes, hours, or days. E.g. "2h" means keep the last 2 hours of data.
There is an additional hard-coded limit of 10k data points.
`,
}
