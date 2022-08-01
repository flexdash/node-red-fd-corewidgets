Core FlexDash Widgets for Node-RED
==================================

This repository builds a core set of Node-RED nodes corresponding to the core FlexDash widgets,
i.e. the ones built into FlexDash.

It also contains a set of example flows to get started and see FlexDash in action.

Read the [quick-start docs](https://flexdash.github.io/docs/quick-start/) for info on how to get started.

TL;DR:
- install @flexdash/node-red-fd-corewidgets
- import the 'Hello World' example flow from its examples using the Node-RED import menu
- deploy and point your browser at http://localhost:1880/flexdash (or similar)
- import the 'all-widgets' example, deploy, and see the 'rocket' tab in FlexDash

---

This repository itself does not contain any widgets or any nodes, the way it works is as follows:
- the FlexDash source is downloaded and the widgets in
  https://github.com/tve/flexdash/tree/v0.3/src/widgets are copied into `./widgets`
- the [@flexdash/node-red-fd-flexdash](https://npmjs.org/package/@flexdash/node-red-flexdash)
  NPM module is installed (`npm install`)
- the node code generator from node-red-fd-flexdash is run to generate the nodes
- the set of generated nodes are published to NPM

The widget generation and publishing to npm happens as part of the github
workflow in `.github/workflows/build.yml`.

For help, please read the [FlexDash Docs](https://flexdash.github.io/docs)
and check the [Node-RED forum](https://discourse.nodered.org).
