const fs = rquire('fs')
let pkg = fs.readFileSync('package.json', 'utf8')
let nodes = fs.readFileSync('package-nodes.json', 'utf8')
pkg["node-red"].nodes = nodes
fs.writeFileSync('package.json', JSON.stringify(pkg, null, 2))
