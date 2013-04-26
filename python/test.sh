#!/bin/bash
echo "--- Running tests ---"
./fac.py < test.in | diff test.out -
if [ $? -ne 0  ]
then
	echo "--- Failed tests ---"
else
	echo "--- All tests OK ---"
fi
