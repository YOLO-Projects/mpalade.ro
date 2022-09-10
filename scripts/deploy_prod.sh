#!/bin/bash

nvm use
git pull
yarn
quasar build
cp .htaccess dist/spa
cp robots.txt dist/spa
sudo chown -R worker:www-data .
sudo chmod -R u+rwX,go+rX,go-w .
