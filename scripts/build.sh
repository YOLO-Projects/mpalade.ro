#!/bin/bash

git pull
yarn
quasar build
cp .htaccess dist/spa
chown -R lifebuff:lifebuff .
chmod -R u+rwX,go+rX,go-w .
