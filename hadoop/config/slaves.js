{% for host in groups['hadoop_nodes'] %}
{{hostvars[host]['ansible_hostname']}}
{% endfor %}
