const fs = require('fs')
let pkg = JSON.parse(fs.readFileSync('package.json', 'utf8'))
let nodes = JSON.parse(fs.readFileSync('package-nodes.json', 'utf8'))
pkg["node-red"].nodes = nodes
fs.writeFileSync('package.json', JSON.stringify(pkg, null, 2))
