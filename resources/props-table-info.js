export default {
  "vue_file": "node-red-fd-corewidgets/widgets/props-table.vue",
  "base_filename": "props-table",
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
  "name": "PropsTable",
  "name_text": "Props Table",
  "name_kebab": "props-table",
  "help": "Display key-value pairs in tabular form.\nIf the `fields` property is empty the table shows all data field in alphanumeric order.\nIf the `fields` property is set, the table shows only the listed fields in the order specified.\n\nThe table can be set as editable which allows the user to change the property values.\n`send_all` controls whether only the edited fields or all fields are sent to the\n`output` topic.",
  "help_title": "Display key-value pairs in tabular form",
  "help_body": "<p>If the <tt>fields</tt><tt> property is empty the table shows all data field in alphanumeric order.</tt>\nIf the <tt>fields</tt><tt> property is set, the table shows only the listed fields in the order specified.</p><p>The table can be set as editable which allows the user to change the property values.</tt>\n<tt>send_all</tt><tt> controls whether only the edited fields or all fields are sent to the</tt>\n<tt>output</tt><tt> topic.</tt></p>",
  "output": true,
  "payload_param": "value",
  "props": {
    "title": {
      "name": "title",
      "name_text": "Title",
      "name_kebab": "title",
      "tip": "",
      "default": "\"PropsTable\"",
      "default_text": "Default: \"PropsTable\"",
      "type": "string",
      "input_type": "str"
    },
    "data": {
      "name": "data",
      "name_text": "Data",
      "name_kebab": "data",
      "tip": "Simple key-value pairs to show in table. ",
      "default": "{\"key1\":\"value1\",\"key2\":\"value2\"}",
      "default_text": "Default: {\"key1\":\"value1\",\"key2\":\"value2\"}",
      "type": "object",
      "input_type": "json"
    },
    "editable": {
      "name": "editable",
      "name_text": "Editable",
      "name_kebab": "editable",
      "tip": "Allow editing of the table. ",
      "default": "false",
      "default_text": "Default: false",
      "type": "boolean",
      "input_type": "bool"
    },
    "fields": {
      "name": "fields",
      "name_text": "Fields",
      "name_kebab": "fields",
      "tip": "Fields to show in table in order, show all if empty. ",
      "default": "[\"key1\",\"key2\"]",
      "default_text": "Default: [\"key1\",\"key2\"]",
      "type": "array",
      "input_type": "json"
    },
    "send_all": {
      "name": "send_all",
      "name_text": "Send All",
      "name_kebab": "send-all",
      "tip": "Send all fields to topic, not just changed ones. ",
      "default": "false",
      "default_text": "Default: false",
      "type": "boolean",
      "input_type": "bool"
    }
  }
}