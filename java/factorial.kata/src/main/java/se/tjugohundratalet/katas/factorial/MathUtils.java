package se.tjugohundratalet.katas.factorial;

import java.math.BigInteger;

/**
 *
 * @author ansjob
 */
public class MathUtils {

	public static BigInteger factorialRecursive(long n) {
		if (n == 0) {
			return new BigInteger("1", 10);
		}
		BigInteger tail = factorialRecursive(n - 1);
		BigInteger N = new BigInteger("" + n, 10);
		return N.multiply(tail);
	}

	public static BigInteger factorialIterative(long n) {
		BigInteger result = new BigInteger("1", 10);
		for (int i = 1; i <= n; ++i) {
			result = result.multiply(new BigInteger("" + i, 10));
		}
		return result;
	}

	public static BigInteger factorial(long n) {
		return factorialIterative(n);
	}
}
