export default {
  "vue_file": "node-red-fd-corewidgets/widgets/gauge.vue",
  "base_filename": "gauge",
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
  "name": "Gauge",
  "name_text": "Gauge",
  "name_kebab": "gauge",
  "help": "Simple SVG gauge.",
  "help_title": "Simple SVG gauge",
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
      "type": "number",
      "input_type": "num"
    },
    "unit": {
      "name": "unit",
      "name_text": "Unit",
      "name_kebab": "unit",
      "tip": "Superscript after the value. ",
      "default": "\"\"",
      "default_text": "Default: \"\"",
      "type": "string",
      "input_type": "str"
    },
    "title": {
      "name": "title",
      "name_text": "Title",
      "name_kebab": "title",
      "tip": "",
      "default": "\"Gauge\"",
      "default_text": "Default: \"Gauge\"",
      "type": "string",
      "input_type": "str"
    },
    "arc": {
      "name": "arc",
      "name_text": "Arc",
      "name_kebab": "arc",
      "tip": "Degrees spanned by the arc of the gauge. ",
      "default": "90",
      "default_text": "Default: 90",
      "type": "number",
      "input_type": "num"
    },
    "min": {
      "name": "min",
      "name_text": "Min",
      "name_kebab": "min",
      "tip": "Minimum value. ",
      "default": "0",
      "default_text": "Default: 0",
      "type": "number",
      "input_type": "num"
    },
    "max": {
      "name": "max",
      "name_text": "Max",
      "name_kebab": "max",
      "tip": "Maximum value. ",
      "default": "100",
      "default_text": "Default: 100",
      "type": "number",
      "input_type": "num"
    },
    "color": {
      "name": "color",
      "name_text": "Color",
      "name_kebab": "color",
      "tip": "Color of filled segment. ",
      "default": "\"green\"",
      "default_text": "Default: \"green\"",
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
    "base_color": {
      "name": "base_color",
      "name_text": "Base Color",
      "name_kebab": "base-color",
      "tip": "Color of unfilled segment. ",
      "default": "\"lightgrey\"",
      "default_text": "Default: \"lightgrey\"",
      "type": "string",
      "input_type": "str"
    },
    "needle_color": {
      "name": "needle_color",
      "name_text": "Needle Color",
      "name_kebab": "needle-color",
      "tip": "Color of needle. ",
      "default": "\"white\"",
      "default_text": "Default: \"white\"",
      "type": "string",
      "input_type": "str"
    },
    "radius": {
      "name": "radius",
      "name_text": "Radius",
      "name_kebab": "radius",
      "tip": "Inner radius, outer being 100. ",
      "default": "70",
      "default_text": "Default: 70",
      "type": "number",
      "input_type": "num"
    },
    "stretch": {
      "name": "stretch",
      "name_text": "Stretch",
      "name_kebab": "stretch",
      "tip": "False: 2:1 aspect ratio, true: stretch. ",
      "default": "false",
      "default_text": "Default: false",
      "type": "boolean",
      "input_type": "bool"
    }
  }
}