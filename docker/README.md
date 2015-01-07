Docker installation
=================

Deployment of a docker containing using Ansible and bash


Instrucctions

- Create an Openstack instance for docker (see main readme)


- Add docker instance on intentory file

	File: /etc/ansible/hosts

	 [docker]
 
	 IP_docker


- Create user on docker instance with sudo privileges

	$ useradd user

	$ visudo

	  user        ALL=(ALL)       NOPASSWD: ALL


- Upload public ssh on docker instance

	$ ssh-copy-id -i .ssh/public.key user@IP_docker


- Basic test, almost ready to start

	$ ansible all -m ping -u user


- Run Playbook, to install docker

	$ ansible-playbook docker-install.yml --sudo  


- Login to docker instance and download the image to run containers

	# docker pull manudocker/apache-php


- Start the container

	# docker run -d -p 80:80 manudocker/apache-php /usr/sbin/apache2ctl -D FOREGROUND 


- Verification from external server

	$ curl http://IP_docker/index.php
	
	Hello World PHP!

