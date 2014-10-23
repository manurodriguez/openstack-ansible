openstack-ansible
=================

Openstack deployment using Ansible

This repository provides a series of playbooks in ansible to install Openstack services in a single node

Instrucctions

1. Install ansible on your client machine:
http://docs.ansible.com/intro_installation.html
 
2. Create hosts intentory for ansible

File: /etc/ansible/hosts
[my-openstack-server]
IP_server

3. Create user on Openstack server with sudo privileges
$ useradd user
$ visudo
 user        ALL=(ALL)       NOPASSWD: ALL

4. Upload public ssh on Openstack server
$ ssh-copy-id -i .ssh/public.key user@IP_server

5. Basic test, almost ready to start
$ ansible all -m ping -u user

6. Run initial setup 
$ ansible-playbook init_setup.yml -u user --sudo

7. Configure rabbitmq and mysql
$ ansible-playbook rabbitmq_mysql.yml -u user --sudo

8. Configure keystone
$ ansible-playbook keystone.yml -u user --sudo

9. Configure glance
$ ansible-playbook glance.yml -u user --sudo
