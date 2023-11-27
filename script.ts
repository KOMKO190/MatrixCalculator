import * as Matrix from './node_modules/';

function testing() {
    console.log("Hello, World!");

    var a = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
    var A = Matrix.matrix(a);
    A();
    A(0);
}

testing();