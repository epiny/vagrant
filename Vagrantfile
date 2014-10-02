# -*- mode: ruby -*-
# vi: set ft=ruby :

# Vagrantfile API/syntax version. Don't touch unless you know what you're doing!
VAGRANTFILE_API_VERSION = "2"

Vagrant.configure(VAGRANTFILE_API_VERSION) do |config|
  config.vm.box = "ubuntu/trusty64"
  config.vm.box_check_update = false
  config.vm.provision :shell, :path => "install.sh"

  config.vm.synced_folder "./www", "/var/www"
  config.vm.network "forwarded_port", guest: 80, host: 8080
end
