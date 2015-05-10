#!/usr/bin/env bash


echo "--- Discover Node ---"
curl -sL https://deb.nodesource.com/setup | sudo bash -

echo "--- Install Node"
sudo apt-get install -y build-essential git  nodejs 

echo "--- Install Node Dependencies --- "
npm install -g bower gulp

echo "--- Install Project Dependencies --- "
npm install /var/www

echo "--- Install Bower Dependencies --- "
cd /var/www
bower install --allow-root
cd -

echo "--- All Done! ---"
