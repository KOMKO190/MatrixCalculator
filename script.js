require('./node_modules/matrix-js', '1.6.1')

function testing() {
    console.log("Hello, World!");
    var a = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
    var A = matrix(a);
    A();
    A(0);
}
testing();
