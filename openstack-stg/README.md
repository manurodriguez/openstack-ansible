openstack-stg
=================

To Verify your instance is running and login perform the following:

$ source credentials/admin

$ nova console-log MyFirstInstance

$ PRIVATE_NET_ID=`neutron net-show internal | awk '/ id / { print $4 }'`

$ ip netns

$ PRIVATE_NETNS_ID=qdhcp-$PRIVATE_NET_ID

$ ip netns exec $PRIVATE_NETNS_ID ip addr

$ IP_INSTANCE=`nova list | egrep -o '=[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}' | sed 's/=//'`

$ ip netns exec $PRIVATE_NETNS_ID ping -c 3 $IP_INSTANCE

$ ip netns exec $PRIVATE_NETNS_ID ssh cirros@$IP_INSTANCE
