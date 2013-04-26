#! /usr/bin/env python

def fac(x):
	res = 1
	for i in range(1,x+1):
		res = res * i
	return res

while 1:
	try:
		n = int(raw_input())
		print fac(n)
	except EOFError:
		break
