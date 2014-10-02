#!/usr/bin/env bash

echo "--- Updating packages list ---"
sudo apt-get update

echo "--- Discover Node ---"
curl -sL https://deb.nodesource.com/setup | sudo bash -

echo "--- Install Node"
sudo apt-get install -y build-essential nodejs

echo "--- All Done! ---"
