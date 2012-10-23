FLAGS = -O3 -Wall -std=c++0x -lgmpxx -lgmp
all: factorial

test: tester
	./tester

tester : tester.cpp
	g++ tester.cpp $(FLAGS) -I./cxxtest/ -o tester

tester.cpp : factorial_tests.h factorial.h
	./cxxtest/bin/cxxtestgen --error-printer -o tester.cpp factorial_tests.h

factorial: factorial.cpp factorial.h
	g++ factorial.cpp $(FLAGS) -o factorial

clean:
	@rm -f tester tester.cpp factorial
