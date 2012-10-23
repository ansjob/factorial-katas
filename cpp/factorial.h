#ifndef FACTORIAL_H
#define FACTORIAL_H

#include <gmpxx.h>
template<class INT>
mpz_class factorial(const INT& x) {
	mpz_class result = 1;
	for (INT i = 1; i <= x; ++i) {
		result *= i;
	}
	return result;
}

#endif
