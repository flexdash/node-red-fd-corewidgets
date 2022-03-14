export default {
  "vue_file": "node-red-fd-corewidgets/widgets/thermostat.vue",
  "base_filename": "thermostat",
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
  "name": "Thermostat",
  "name_text": "Thermostat",
  "name_kebab": "thermostat",
  "help": "Thermostat control with gauge and day/night setpoints.",
  "help_title": "Thermostat control with gauge and day/night setpoints",
  "help_body": "<p><i>Please write some help text in the widget's help property.</i></p>",
  "output": true,
  "payload_param": "value",
  "props": {
    "unit": {
      "name": "unit",
      "name_text": "Unit",
      "name_kebab": "unit",
      "tip": "Unit shown after temperatures. ",
      "default": "\"°F\"",
      "default_text": "Default: \"°F\"",
      "type": "string",
      "input_type": "str"
    },
    "temperature": {
      "name": "temperature",
      "name_text": "Temperature",
      "name_kebab": "temperature",
      "tip": "Temperature shown by gauge. ",
      "default": "null",
      "default_text": "Default: null",
      "input_type": "any"
    },
    "min": {
      "name": "min",
      "name_text": "Min",
      "name_kebab": "min",
      "tip": "Minimum of gauge range. ",
      "default": "50",
      "default_text": "Default: 50",
      "type": "number",
      "input_type": "num"
    },
    "max": {
      "name": "max",
      "name_text": "Max",
      "name_kebab": "max",
      "tip": "Maximum of gauge range. ",
      "default": "100",
      "default_text": "Default: 100",
      "type": "number",
      "input_type": "num"
    },
    "color": {
      "name": "color",
      "name_text": "Color",
      "name_kebab": "color",
      "tip": "Gauge color between low/high thresholds. ",
      "default": "\"green\"",
      "default_text": "Default: \"green\"",
      "type": "string",
      "input_type": "str"
    },
    "low_color": {
      "name": "low_color",
      "name_text": "Low Color",
      "name_kebab": "low-color",
      "tip": "Gauge color below low threshold. ",
      "default": "\"blue\"",
      "default_text": "Default: \"blue\"",
      "type": "string",
      "input_type": "str"
    },
    "high_color": {
      "name": "high_color",
      "name_text": "High Color",
      "name_kebab": "high-color",
      "tip": "Gauge color above high threshold. ",
      "default": "\"pink\"",
      "default_text": "Default: \"pink\"",
      "type": "string",
      "input_type": "str"
    },
    "low_threshold": {
      "name": "low_threshold",
      "name_text": "Low Threshold",
      "name_kebab": "low-threshold",
      "tip": "Temperature for color change, null to disable. ",
      "default": "62",
      "default_text": "Default: 62",
      "type": "number",
      "input_type": "num"
    },
    "high_threshold": {
      "name": "high_threshold",
      "name_text": "High Threshold",
      "name_kebab": "high-threshold",
      "tip": "Temperature for color change, null to disable. ",
      "default": "80",
      "default_text": "Default: 80",
      "type": "number",
      "input_type": "num"
    },
    "day_setpoint": {
      "name": "day_setpoint",
      "name_text": "Day Setpoint",
      "name_kebab": "day-setpoint",
      "tip": "Target temperature during the day. ",
      "default": "70",
      "default_text": "Default: 70",
      "type": "number",
      "input_type": "num"
    },
    "night_setpoint": {
      "name": "night_setpoint",
      "name_text": "Night Setpoint",
      "name_kebab": "night-setpoint",
      "tip": "Target temperature during the night. ",
      "default": "65",
      "default_text": "Default: 65",
      "type": "number",
      "input_type": "num"
    },
    "setpoint_min": {
      "name": "setpoint_min",
      "name_text": "Setpoint Min",
      "name_kebab": "setpoint-min",
      "tip": "Minimum possible setpoint. ",
      "default": "60",
      "default_text": "Default: 60",
      "type": "number",
      "input_type": "num"
    },
    "setpoint_max": {
      "name": "setpoint_max",
      "name_text": "Setpoint Max",
      "name_kebab": "setpoint-max",
      "tip": "Maximum possible setpoint. ",
      "default": "80",
      "default_text": "Default: 80",
      "type": "number",
      "input_type": "num"
    },
    "active": {
      "name": "active",
      "name_text": "Active",
      "name_kebab": "active",
      "tip": "Appliance active boolean. ",
      "default": "",
      "default_text": "",
      "type": "boolean",
      "input_type": "bool"
    },
    "active_label": {
      "name": "active_label",
      "name_text": "Active Label",
      "name_kebab": "active-label",
      "tip": "Label next to active status. ",
      "default": "\"Heater\"",
      "default_text": "Default: \"Heater\"",
      "type": "string",
      "input_type": "str"
    }
  }
}