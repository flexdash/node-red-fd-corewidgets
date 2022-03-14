export default {
  "vue_file": "node-red-fd-corewidgets/widgets/time-plot.vue",
  "base_filename": "time-plot",
  "module_dir": "node-red-fd-corewidgets",
  "module_name": {
    "name": "@flexdash/node-red-fd-corewidgets",
    "version": "0.0.1",
    "description": "A set of core FlexDash widgets for Node-RED.",
    "dependencies": {
      "@flexdash/node-red-flexdash": ">=0.3.0"
    },
    "author": "Thorsten von Eicken",
    "license": "MIT",
    "keywords": [
      "dashboard",
      "flexdash",
      "node-red"
    ],
    "bugs": {
      "url": "https://github.com/flexdash/node-red-fd-corewidgets/issues"
    },
    "homepage": "https://github.com/flexdash/node-red-fd-corewidgets#README.md",
    "repository": {
      "type": "git",
      "url": "git+https://github.com/flexdash/node-red-fd-corewidgets.git"
    },
    "node-red": {
      "version": "^2.0.0",
      "nodes": {
        "datetime.vue": "widgets/datetime.vue",
        "gauge.vue": "widgets/gauge.vue",
        "iframe.vue": "widgets/iframe.vue",
        "label.vue": "widgets/label.vue",
        "markdown.vue": "widgets/markdown.vue",
        "panel.vue": "widgets/panel.vue",
        "popup-button.vue": "widgets/popup-button.vue",
        "props-table.vue": "widgets/props-table.vue",
        "push-button.vue": "widgets/push-button.vue",
        "random-array.vue": "widgets/random-array.vue",
        "random-value.vue": "widgets/random-value.vue",
        "simple-table.vue": "widgets/simple-table.vue",
        "spark-line.vue": "widgets/spark-line.vue",
        "sparkchart.vue": "widgets/sparkchart.vue",
        "stat.vue": "widgets/stat.vue",
        "text-view.vue": "widgets/text-view.vue",
        "thermostat.vue": "widgets/thermostat.vue",
        "time-plot-raw.vue": "widgets/time-plot-raw.vue",
        "time-plot.vue": "widgets/time-plot.vue",
        "toggle.vue": "widgets/toggle.vue",
        "tree-view.vue": "widgets/tree-view.vue",
        "upload-button.vue": "widgets/upload-button.vue",
        "value-sequence.vue": "widgets/value-sequence.vue",
        "wind-plot.vue": "widgets/wind-plot.vue"
      }
    },
    "engines": {
      "node": ">=12.0.0"
    },
    "scripts": {
      "test": "echo \"Error: no test specified\" && exit 1"
    }
  },
  "resources_dir": "node-red-fd-corewidgets/resources",
  "resources_path": "resources/[object Object]",
  "name": "TimePlot",
  "name_text": "Time Plot",
  "name_kebab": "time-plot",
  "help": "Time-series chart with simple options.\nTimePlot uses the TimePlotRaw widget to render a time-series plot and generates\nthe uPlot options based on a set of relatively simple inputs. If you need to switch to\nTimePlotRaw for the full uPlot flexibility you can use the widget output to see the options\nit constructs as a starting point.\n\nBy default, with all array inputs (labels, colors, axes, ...) empty ([]) a single series\nis plotted without label. If any of the\narray inputs are specified the longest array determines the number of series.\n\nThe default color sequence is blue, green, yellow, red, cyan, purple, orange, teal, pink, lime,\nmagenta, lavender, brown, beige, maroon, mint, olive, apricot, navy, and grey from\nhttps://sashamaps.net/docs/resources/20-colors/\n\nThe data must be input in the form of \"data points\" where a data point is an array consisting\na unix timestamp (seconds since 1970-01-01) followed by a value per series. Null values are OK\nto designate missing data.\n**Important**: each and every data point must have _exactly_ one value per series, otherwise\nnothing will be plotted.\n\nEach data message may be either an array of data points or a single data point. If an array is\nprovided then it replaces the entire dataset being shown. If a single point is provided\nit is appended to the current dataset and an old data point may be rotated out.\n(Currently w/2 datapoints are kept where w is the width of the widget in pixels,\nthis will be revisited.)\nNote that this \"row-wise\" structure gets transposed to the columnar structure expected by uPlot.\n",
  "help_title": "Time-series chart with simple options",
  "help_body": "<p>TimePlot uses the TimePlotRaw widget to render a time-series plot and generates\nthe uPlot options based on a set of relatively simple inputs. If you need to switch to\nTimePlotRaw for the full uPlot flexibility you can use the widget output to see the options\nit constructs as a starting point.</p><p>By default, with all array inputs (labels, colors, axes, ...) empty ([]) a single series\nis plotted without label. If any of the\narray inputs are specified the longest array determines the number of series.</p><p>The default color sequence is blue, green, yellow, red, cyan, purple, orange, teal, pink, lime,\nmagenta, lavender, brown, beige, maroon, mint, olive, apricot, navy, and grey from\nhttps://sashamaps.net/docs/resources/20-colors/</p><p>The data must be input in the form of \"data points\" where a data point is an array consisting\na unix timestamp (seconds since 1970-01-01) followed by a value per series. Null values are OK\nto designate missing data.\n**Important**: each and every data point must have _exactly_ one value per series, otherwise\nnothing will be plotted.</p><p>Each data message may be either an array of data points or a single data point. If an array is\nprovided then it replaces the entire dataset being shown. If a single point is provided\nit is appended to the current dataset and an old data point may be rotated out.\n(Currently w/2 datapoints are kept where w is the width of the widget in pixels,\nthis will be revisited.)\nNote that this \"row-wise\" structure gets transposed to the columnar structure expected by uPlot.</p>",
  "output": true,
  "payload_param": "value",
  "props": {
    "data": {
      "name": "data",
      "name_text": "Data",
      "name_kebab": "data",
      "tip": "Array with unix timestamp followed by a value per series. ",
      "default": "",
      "default_text": "",
      "type": "array",
      "input_type": "json"
    },
    "labels": {
      "name": "labels",
      "name_text": "Labels",
      "name_kebab": "labels",
      "tip": "Array of labels for series. ",
      "default": "[]",
      "default_text": "Default: []",
      "type": "array",
      "input_type": "json"
    },
    "colors": {
      "name": "colors",
      "name_text": "Colors",
      "name_kebab": "colors",
      "tip": "Array of colors for series, names or #rrggbb. ",
      "default": "[]",
      "default_text": "Default: []",
      "type": "array",
      "input_type": "json"
    },
    "axes": {
      "name": "axes",
      "name_text": "Axes",
      "name_kebab": "axes",
      "tip": "Array to assign series to 'left' or 'right' axis. ",
      "default": "[]",
      "default_text": "Default: []",
      "type": "array",
      "input_type": "json"
    },
    "widths": {
      "name": "widths",
      "name_text": "Widths",
      "name_kebab": "widths",
      "tip": "Array of stroke widths for series, default is 2. ",
      "default": "[]",
      "default_text": "Default: []",
      "type": "array",
      "input_type": "json"
    },
    "span_gaps": {
      "name": "span_gaps",
      "name_text": "Span Gaps",
      "name_kebab": "span-gaps",
      "tip": "Array of bool to span over nulls, default is false. ",
      "default": "[]",
      "default_text": "Default: []",
      "type": "array",
      "input_type": "json"
    },
    "left_unit": {
      "name": "left_unit",
      "name_text": "Left Unit",
      "name_kebab": "left-unit",
      "tip": "Unit to label left axis. ",
      "default": "\"\"",
      "default_text": "Default: \"\"",
      "type": "string",
      "input_type": "str"
    },
    "right_unit": {
      "name": "right_unit",
      "name_text": "Right Unit",
      "name_kebab": "right-unit",
      "tip": "Unit to label right axis. ",
      "default": "\"\"",
      "default_text": "Default: \"\"",
      "type": "string",
      "input_type": "str"
    },
    "left_min": {
      "name": "left_min",
      "name_text": "Left Min",
      "name_kebab": "left-min",
      "tip": "Minimum for left axis. ",
      "default": "null",
      "default_text": "Default: null",
      "type": "number",
      "input_type": "num"
    },
    "left_max": {
      "name": "left_max",
      "name_text": "Left Max",
      "name_kebab": "left-max",
      "tip": "Maximum for left axis. ",
      "default": "null",
      "default_text": "Default: null",
      "type": "number",
      "input_type": "num"
    },
    "left_decimals": {
      "name": "left_decimals",
      "name_text": "Left Decimals",
      "name_kebab": "left-decimals",
      "tip": "Decimals on left axis. ",
      "default": "1",
      "default_text": "Default: 1",
      "type": "number",
      "input_type": "num"
    },
    "right_min": {
      "name": "right_min",
      "name_text": "Right Min",
      "name_kebab": "right-min",
      "tip": "Minimum for right axis. ",
      "default": "null",
      "default_text": "Default: null",
      "type": "number",
      "input_type": "num"
    },
    "right_max": {
      "name": "right_max",
      "name_text": "Right Max",
      "name_kebab": "right-max",
      "tip": "Maximum for right axis. ",
      "default": "null",
      "default_text": "Default: null",
      "type": "number",
      "input_type": "num"
    },
    "right_decimals": {
      "name": "right_decimals",
      "name_text": "Right Decimals",
      "name_kebab": "right-decimals",
      "tip": "Decimals on right axis. ",
      "default": "1",
      "default_text": "Default: 1",
      "type": "number",
      "input_type": "num"
    }
  }
}