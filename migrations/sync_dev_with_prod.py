#!/usr/bin/env python

from ConfigParser import ConfigParser
import MySQLdb
import os
import subprocess
import time


def main():
	path = os.path.dirname(os.path.realpath(__file__))
	config = ConfigParser()
	config.read('%s/db.ini' % path)
	reset_database(config)
	sync_database(path, config)


def reset_database(config):
	"""Drops the existing dev lincs database and then creates it afresh.
	"""
	print('=' * 80)
	print('RESETING DATABASE')
	db = config.get('development', 'database')
	conn = MySQLdb.connect(
		host=config.get('development', 'host'),
		user=config.get('development', 'user'),
		passwd=config.get('development', 'password'),
		db=db
	)
	cur = conn.cursor()
	cur.execute('DROP DATABASE %s' % db)
	cur.execute('CREATE DATABASE %s' % db)
	conn.close()


def sync_database(path, config):
	"""Dumps the production database and then uploads it to dev.
	"""
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


if __name__ == '__main__':
	main()

