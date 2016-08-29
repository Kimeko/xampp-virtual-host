## Create virtual host on XAMPP
### Why use npm?
Because I'm too lazy to open files and edit manually :)

## Installation
```
  $ npm install xampp-virtual-host -g
```


## Usage

Please run Git BASH with Admin rights if you need Admin rights to access specific folders.

### Config.json

Change URL's and Ports to ones that you wish to use. By default they are Windows default.

  - xampp_vhost_directory : /xampp/apache/conf/extra/httpd-vhosts.conf
  - xampp_files_directory: C:/xampp/htdocs/
  - hosts_directory: /Windows/System32/drivers/etc/hosts
  - hosts_ip_address: 127.0.0.1
  - xampp_apache_port: 80


### Commands


To add a new site "mydevsite.dev" to htdocs/mydevsitefolder
```js
 $ vhost mydevsite.dev mydevsitefolder
 //Restart XAMPP after successful command.
```

To add a new wordpress site "mydevsite.dev" to htdocs/mycompany/mydevsitefolder
```js
 $ vhost mydevsite.dev mycompany/mydevsitefolder/wordpress
 //Restart XAMPP after successful command.
```
