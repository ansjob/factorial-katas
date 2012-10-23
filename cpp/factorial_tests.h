#include <cxxtest/TestSuite.h>
#include <gmpxx.h>
#include "factorial.h"
#include <iostream>

using namespace std;
class FactorialTests : public CxxTest::TestSuite {
	public:

	void testSimpleFactorial() {
		int three = 3;
		mpz_class result = factorial(three);
		TS_ASSERT_EQUALS(6, result);
	}

	void testTemplatedFactorial() {
		mpz_class x = 4;
		mpz_class result = factorial(x);
		TS_ASSERT_EQUALS(24, result);
	}

	void testLargeFactorial() {
		mpz_class expected("93326215443944152681699238856266700490715968264381621468592963895217599993229915608941463976156518286253697920827223758251185210916864000000000000000000000000");
		mpz_class actual = factorial(100);
		TS_ASSERT_EQUALS(expected, actual);
	}

	void testZeroFactorial() {
		char zero = 0;
		mpz_class result = factorial(zero);
		TS_ASSERT_EQUALS(1, result);
	}

};
