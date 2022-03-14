export default {
  "vue_file": "node-red-fd-corewidgets/widgets/datetime.vue",
  "base_filename": "datetime",
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
  "name": "DateTime",
  "name_text": "Date Time",
  "name_kebab": "date-time",
  "help": "Display colored date-time.\n",
  "help_title": "Display colored date-time",
  "help_body": "<p><i>Please write some help text in the widget's help property.</i></p>",
  "output": false,
  "payload_param": "value",
  "props": {
    "value": {
      "name": "value",
      "name_text": "Value",
      "name_kebab": "value",
      "tip": "",
      "default": "null",
      "default_text": "Default: null",
      "input_type": "any"
    },
    "color": {
      "name": "color",
      "name_text": "Color",
      "name_kebab": "color",
      "tip": "Value color, null->text color. ",
      "default": "null",
      "default_text": "Default: null",
      "type": "string",
      "input_type": "str"
    },
    "low_color": {
      "name": "low_color",
      "name_text": "Low Color",
      "name_kebab": "low-color",
      "tip": "Color below low threshold. ",
      "default": "\"blue\"",
      "default_text": "Default: \"blue\"",
      "type": "string",
      "input_type": "str"
    },
    "high_color": {
      "name": "high_color",
      "name_text": "High Color",
      "name_kebab": "high-color",
      "tip": "Color above high threshold. ",
      "default": "\"pink\"",
      "default_text": "Default: \"pink\"",
      "type": "string",
      "input_type": "str"
    },
    "low_threshold": {
      "name": "low_threshold",
      "name_text": "Low Threshold",
      "name_kebab": "low-threshold",
      "tip": "Threshold for low_color, null to disable. ",
      "default": "null",
      "default_text": "Default: null",
      "type": "number",
      "input_type": "num"
    },
    "high_threshold": {
      "name": "high_threshold",
      "name_text": "High Threshold",
      "name_kebab": "high-threshold",
      "tip": "Threshold for high_color, null to disable. ",
      "default": "null",
      "default_text": "Default: null",
      "type": "number",
      "input_type": "num"
    },
    "chip": {
      "name": "chip",
      "name_text": "Chip",
      "name_kebab": "chip",
      "tip": "Display value in a chip/pill. ",
      "default": "false",
      "default_text": "Default: false",
      "type": "boolean",
      "input_type": "bool"
    },
    "start_mode": {
      "name": "start_mode",
      "name_text": "Start Mode",
      "name_kebab": "start-mode",
      "tip": "0=local TZ, 1=UTC, 2=ago. ",
      "default": "0",
      "default_text": "Default: 0",
      "type": "number",
      "input_type": "num"
    },
    "units": {
      "name": "units",
      "name_text": "Units",
      "name_kebab": "units",
      "tip": "In/ago unit text. ",
      "default": "[\"now\",\"sec\",\"min\",\"hr\",\"days\",\"weeks\",\"months\"]",
      "default_text": "Default: [\"now\",\"sec\",\"min\",\"hr\",\"days\",\"weeks\",\"months\"]",
      "type": "array",
      "input_type": "json"
    },
    "zoom": {
      "name": "zoom",
      "name_text": "Zoom",
      "name_kebab": "zoom",
      "tip": "Zoom factor in % (N/A to chip). ",
      "default": "100",
      "default_text": "Default: 100",
      "type": "number",
      "input_type": "num"
    }
  }
}