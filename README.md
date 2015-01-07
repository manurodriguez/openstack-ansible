openstack-ansible
=================

Openstack deployment using Ansible

This repository provides a series of playbooks in ansible to install Openstack ice-house services
in a single node, with single NIC on ubuntu 12.04.

Instrucctions

- Install ansible on your client machine:

	http://docs.ansible.com/intro_installation.html
 

- Create hosts intentory for ansible

	File: /etc/ansible/hosts

	 [my-openstack-server]
 
	 IP_server


- Create user on Openstack server with sudo privileges

	$ useradd user

	$ visudo

	  user        ALL=(ALL)       NOPASSWD: ALL


- Upload public ssh on Openstack server

	$ ssh-copy-id -i .ssh/public.key user@IP_server


- Basic test, almost ready to start

	$ ansible all -m ping -u user


- Run Playbook, either from stg or prod directory

	$ ansible-playbook openstack-[stg|prod]/allinone.yml -u user --sudo


- If you are running this on a cloud server apply this fix :P

	$ ansible-playbook openstack-[stg|prod]/cloud-libvirt-fix.yml -u user --sudo


- Create instance and apply security rules

	$ ansible-playbook openstack-[stg|prod]/create-instance.yml -u user --sudo


- Verify your instance is running:

	$ source credentials/admin

	$ nova console-log MyFirstInstance

	$ nova list

