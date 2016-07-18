Run this script to sync the development database with production. In order to run the script, create a file called `db.ini` and place it in this directory. The contents of the file should be:

```
[development]
host=<DEV DATABASE SERVER>
database=<DEV DATABASE>
user=<ROOT USER>
password=<ROOT PASSWORD>

[production]
host=<PROD DATABASE SERVER>
database=<PROD DATABASE>
user=<ROOT USER>
password=<ROOT PASSWORD>
```
