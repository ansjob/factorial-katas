my_factorial(0, 0).
my_factorial(1, 1).

my_factorial(X, Y):-
	X \= 1,
	factorial_help(X, 1, 1, Y).

factorial_help(XMAX, XMAX, CUMULATIVE, OUT):-
	OUT is CUMULATIVE * XMAX.

factorial_help(XMAX, CURX, CUMULATIVE, OUT):-
	CURX < XMAX,
	NEXTX is CURX + 1,
	factorial_help(XMAX, NEXTX, CUMULATIVE * CURX, OUT).

