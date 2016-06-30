#!/usr/bin/env python

from ConfigParser import ConfigParser
import os
import subprocess
import time


path = os.path.dirname(os.path.realpath(__file__))
config = ConfigParser()
config.read('%s/db.ini' % path)
tmp_file = '%s/lincs.sql' % path

dump_cmd = 'mysqldump -h %s -u %s -p%s %s > %s' % (
    config.get('production', 'host'),
    config.get('production', 'user'),
    config.get('production', 'password'),
    config.get('production', 'database'),
    tmp_file
)

load_cmd = 'mysql -h %s -u %s -p%s %s < %s' % (
    config.get('development', 'host'),
    config.get('development', 'user'),
    config.get('development', 'password'),
    config.get('development', 'database'),
    tmp_file
)

print('=' * 80)
print('DUMPING DATABASE FROM PRODUCTION')
print(dump_cmd)
subprocess.Popen(dump_cmd, shell=True)
time.sleep(10)
print('=' * 80)
print('UPLOADING DATABASE TO DEVELOPMENT')
print(load_cmd)
p = subprocess.Popen(load_cmd, shell=True)
p.communicate()
print('=' * 80)
print('SYNC COMPLETE')
