#! /bin/bash -e
FLEXDASH_VERSION=0.3.15

npm install
curl -L https://s3.amazonaws.com/s3.voneicken.com/flexdash/flexdash-${FLEXDASH_VERSION}-src.tgz | \
    tar zxf
rm -r widgets || true
cp -r flexdash/src/widgets widgets
./node_modules/.bin/gen-widgets
node ./update-package-json.js
npm version patch
