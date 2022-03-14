export default {
  "vue_file": "node-red-fd-corewidgets/widgets/stat.vue",
  "base_filename": "stat",
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
  "name": "Stat",
  "name_text": "Stat",
  "name_kebab": "stat",
  "help": "Display colored numeric or text status value.\nThe Stat widget displays a colored centered numerical or text value. Optionally a unit string\ncan be appended and is rendered as a superscript. THree colors can be defined: low, normal, high.\nThe low-color is displayed if the value is below the low-threshold, the high-color if it's above\nthe high-threshold. For string values low and high colors are selected using regexps.",
  "help_title": "Display colored numeric or text status value",
  "help_body": "<p>The Stat widget displays a colored centered numerical or text value. Optionally a unit string\ncan be appended and is rendered as a superscript. THree colors can be defined: low, normal, high.\nThe low-color is displayed if the value is below the low-threshold, the high-color if it's above\nthe high-threshold. For string values low and high colors are selected using regexps.</p>",
  "output": false,
  "payload_param": "value",
  "props": {
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
    "low_regexp": {
      "name": "low_regexp",
      "name_text": "Low Regexp",
      "name_kebab": "low-regexp",
      "tip": "Match produces low_color for non-number value. ",
      "default": "null",
      "default_text": "Default: null",
      "type": "string",
      "input_type": "str"
    },
    "high_regexp": {
      "name": "high_regexp",
      "name_text": "High Regexp",
      "name_kebab": "high-regexp",
      "tip": "Match produces high_color for non-number value. ",
      "default": "null",
      "default_text": "Default: null",
      "type": "string",
      "input_type": "str"
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
    "iso_prefix": {
      "name": "iso_prefix",
      "name_text": "Iso Prefix",
      "name_kebab": "iso-prefix",
      "tip": "Display unit with ISO prefix (K, M, G, m, ...). ",
      "default": "true",
      "default_text": "Default: true",
      "type": "boolean",
      "input_type": "bool"
    },
    "zoom": {
      "name": "zoom",
      "name_text": "Zoom",
      "name_kebab": "zoom",
      "tip": "Zoom factor for value text. ",
      "default": "1",
      "default_text": "Default: 1",
      "type": "number",
      "input_type": "num"
    }
  }
}