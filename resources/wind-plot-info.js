export default {
  "vue_file": "node-red-fd-corewidgets/widgets/wind-plot.vue",
  "base_filename": "wind-plot",
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
  "name": "WindPlot",
  "name_text": "Wind Plot",
  "name_kebab": "wind-plot",
  "help": "Wind speed, gust and direction time-series plot\nWindPlot uses the TimePlotRaw widget to render a cmbined wind speed and direction\ntime-series plot.\n\nThe data must be input in the form of \"data points\" where a data point is an array consisting\na unix timestamp (seconds since 1970-01-01) followed by wind direction in degrees, followed by\nwind speed and wind gust speed (using any unit of choice). Null values are OK\nto designate missing data.\n**Important**: each and every data point must have _exactly_ four values, otherwise\nnothing will be plotted.\n\nEach data message may be either an array of data points or a single data point. If an array is\nprovided then it replaces the entire dataset being shown. If a single point is provided\nit is appended to the current dataset and an old data point may be rotated out.\nNote that this \"row-wise\" structure gets transposed to the columnar structure expected by uPlot.\n",
  "help_title": "Wind speed, gust and direction time-series plot",
  "help_body": "<p>WindPlot uses the TimePlotRaw widget to render a cmbined wind speed and direction\ntime-series plot.</p><p>The data must be input in the form of \"data points\" where a data point is an array consisting\na unix timestamp (seconds since 1970-01-01) followed by wind direction in degrees, followed by\nwind speed and wind gust speed (using any unit of choice). Null values are OK\nto designate missing data.\n**Important**: each and every data point must have _exactly_ four values, otherwise\nnothing will be plotted.</p><p>Each data message may be either an array of data points or a single data point. If an array is\nprovided then it replaces the entire dataset being shown. If a single point is provided\nit is appended to the current dataset and an old data point may be rotated out.\nNote that this \"row-wise\" structure gets transposed to the columnar structure expected by uPlot.</p>",
  "output": true,
  "payload_param": "value",
  "props": {
    "data": {
      "name": "data",
      "name_text": "Data",
      "name_kebab": "data",
      "tip": "Array with unix timestamp, wind direction, speed and gust. ",
      "default": "",
      "default_text": "",
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
    "unit": {
      "name": "unit",
      "name_text": "Unit",
      "name_kebab": "unit",
      "tip": "Unit to label wind speed. ",
      "default": "\"\"",
      "default_text": "Default: \"\"",
      "type": "string",
      "input_type": "str"
    }
  }
}