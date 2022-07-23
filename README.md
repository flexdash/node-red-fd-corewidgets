Core FlexDash Widgets for Node-RED
==================================

This repository builds a core set of Node-RED nodes corresponding to the core FlexDash widgets,
i.e. the ones built into FlexDash.
This repository itself does not contain any widgets or any nodes, the way it works is as follows:
- the FlexDash source is downloaded and the widgets in
  https://github.com/tve/flexdash/tree/v0.3/src/widgets are copied into `./widgets`
- the [@flexdash/node-red-fd-flexdash](https://npmjs.org/package/@flexdash/node-red-flexdash)
  NPM module is installed (`npm install`)
- the node code generator from node-red-fd-flexdash is run to generate the nodes
- the set of generated nodes are published to NPM
