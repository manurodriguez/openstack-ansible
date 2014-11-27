openstack-ansible
=================

Openstack deployment using Ansible

This repository provides a series of playbooks in ansible to install Openstack ice-house services
in a single node, with single NIC on ubuntu 12.04.

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

6. Run Playbook 
$ ansible-playbook allinone.yml -u user --sudo

7. If you are running this on a cloud server apply this fix :P
$ ansible-playbook cloud-libvirt-fix.yml -u user --sudo

8. Create instance and apply security rules
$ ansible-playbook create-instance.yml -u user --sudo

9. Verify your instance is running and login:
$ source credentials/admin
$ nova console-log MyFirstInstance
$ PRIVATE_NET_ID=`neutron net-show internal | awk '/ id / { print $4 }'`
$ ip netns
$ PRIVATE_NETNS_ID=qdhcp-$PRIVATE_NET_ID
$ ip netns exec $PRIVATE_NETNS_ID ip addr
$ IP_INSTANCE=`nova list | egrep -o '=[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}' | sed 's/=//'`
$ ip netns exec $PRIVATE_NETNS_ID ping -c 3 $IP_INSTANCE
$ ip netns exec $PRIVATE_NETNS_ID ssh cirros@$IP_INSTANCE
