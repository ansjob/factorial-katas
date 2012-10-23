#include <iostream>
#include "factorial.h"
#include <string>

using namespace std;
int main() {
	mpz_class N;
	string str;
	while (cin >> str) {
		N = str;
		cout << factorial(N) << endl;
	}
	return 0;
}
