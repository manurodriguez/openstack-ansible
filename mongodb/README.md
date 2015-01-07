mongodb replica
=================

Deployment of a replica using Ansible


Instrucctions

- Create three Openstack instances for mongo (see main readme)


- Add mongo instances on intentory file

	File: /etc/ansible/hosts

	 [mongo-repl]
 
	 IP_mongo1

	 IP_mongo2

	 IP_mongo3


- Create user on mongo instances with sudo privileges

	$ useradd user

	$ visudo

	  user        ALL=(ALL)       NOPASSWD: ALL


- Upload public ssh on mongo instances

	$ ssh-copy-id -i .ssh/public.key user@IP_mongo[1-3]


- Basic test, almost ready to start

	$ ansible all -m ping -u user


- Run Playbook, to install and configure mongodb

	$ ansible-playbook mongo-replica.yml --sudo  


- Login to one node and start the replica

	[root@mongo1 ~]# mongo 

	> rs.initiate() 

	myrepl:PRIMARY> rs.conf() 


- Add nodes to the replica

	myrepl:PRIMARY> rs.add("mongo2") 

	myrepl:PRIMARY> rs.add("mongo3") 

	myrepl:PRIMARY> rs.conf() 


- Verification

	myrepl:PRIMARY> rs.status() 

