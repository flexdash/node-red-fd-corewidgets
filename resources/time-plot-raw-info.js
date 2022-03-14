export default {
  "vue_file": "node-red-fd-corewidgets/widgets/time-plot-raw.vue",
  "base_filename": "time-plot-raw",
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
  "name": "TimePlotRaw",
  "name_text": "Time Plot Raw",
  "name_kebab": "time-plot-raw",
  "help": "Time-series chart.\nTimePlotRaw displays a time-series chart using [uPlot](https://github.com/leeoniya/uPlot).\nIt deals with resizing, and transposes the data coming in.\nThe uPlot options must be provided via the `options` input otherwise\nnothing will show. For an easier way to use uPlot see the TimePlot widget.\n\nThe documentation on the uPlot options \"leaves something to be desired\"...\nSee https://github.com/leeoniya/uPlot/tree/master/docs for an overview.\nMore info can be gleaned from the demos at https://leeoniya.github.io/uPlot/demos/index.html\nand the ultimate reference is https://github.com/leeoniya/uPlot/blob/master/dist/uPlot.d.ts\n\nThe data must be input in the form of \"data points\" where a data point is an array consisting\na unix timestamp (seconds since 1970-01-01) followed by a value per series. Null values are OK\nto designate missing data. Note: each an every data point must have one value per series.\n\nEach data message may be either an array of data points or a single data point. If an array is\nprovided then it replaces the entire dataset being shown. If a single point is provided\nit is appended to the current dataset and an old data point may be rotated out.\nNote that this \"row-wise\" structure gets transposed to the columnar structure expected by uPlot.\n",
  "help_title": "Time-series chart",
  "help_body": "<p>TimePlotRaw displays a time-series chart using [uPlot](https://github.com/leeoniya/uPlot).\nIt deals with resizing, and transposes the data coming in.\nThe uPlot options must be provided via the <tt>options</tt><tt> input otherwise</tt>\nnothing will show. For an easier way to use uPlot see the TimePlot widget.</p><p>The documentation on the uPlot options \"leaves something to be desired\"...\nSee https://github.com/leeoniya/uPlot/tree/master/docs for an overview.\nMore info can be gleaned from the demos at https://leeoniya.github.io/uPlot/demos/index.html\nand the ultimate reference is https://github.com/leeoniya/uPlot/blob/master/dist/uPlot.d.ts</p><p>The data must be input in the form of \"data points\" where a data point is an array consisting\na unix timestamp (seconds since 1970-01-01) followed by a value per series. Null values are OK\nto designate missing data. Note: each an every data point must have one value per series.</p><p>Each data message may be either an array of data points or a single data point. If an array is\nprovided then it replaces the entire dataset being shown. If a single point is provided\nit is appended to the current dataset and an old data point may be rotated out.\nNote that this \"row-wise\" structure gets transposed to the columnar structure expected by uPlot.</p>",
  "output": false,
  "payload_param": "value",
  "props": {
    "options": {
      "name": "options",
      "name_text": "Options",
      "name_kebab": "options",
      "tip": "",
      "default": "null",
      "default_text": "Default: null",
      "type": "object",
      "input_type": "json"
    },
    "data": {
      "name": "data",
      "name_text": "Data",
      "name_kebab": "data",
      "tip": "",
      "default": "",
      "default_text": "",
      "type": "array",
      "input_type": "json"
    }
  }
}