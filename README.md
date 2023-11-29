# MatrixCalculator
Primjenjena Matematika Matrix Calculator

----------------FUNKCIJE----------------

mul(a,b) -> Množi matrice tim redoslijedom a * b

zbr(a,b) -> Zbraja matrice a + b;

oduz(a,b) -> Oduzima matrice a - b;

mulBr(broj,matrica,z) -> Pretvara broj u matricu kako bi je mogao pomnožiti s matricom. Pošto množenje matrica nije svejedno množimo li A * B ili B * A onda z određuje redoslijed množenja.
		      
                      Z = 0 -> A(na početku samo broj) * B(matrica)
		      Z = 1 -> B(matrica) * A(na početku samo broj)

zbrBr(broj,matrica) -> Pretvara broj u matricu i zbraja matrici.

oduzBr(broj,matrica,z) -> Pretvara broj u matricu i oduzme je sa matricom. Z je redoslijed i primjenjuje se ista sintaksa kao i za mulBr().

trans(matrica) -> Translatira matricu

----------------------------------------

IMPORT FUNKCIJA

var { mul, zbr, oduz, zbrBr, oduzBr, mulBr, trans } = require(path);


Zalijepi kod na početak file-a u kojem misliš koristiti funkcije. Umjesto path napiši gdje ti se nalazi glavni file Matrix.js

----------------------------------------

Sretno buraz! :)
