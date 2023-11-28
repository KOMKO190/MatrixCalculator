function mul(a, b){
    var rez = [];
    var rez_red = [];
    
    var zbr = 0;
    if(a[0].length === b.length){
        for(let k = 0; k < a.length; k++){
            for(let i = 0; i < b[0].length; i++){
                for(let j = 0; j < b.length; j++){
                    zbr += a[k][j] * b[j][i];
                }
                rez_red.push(zbr);
                zbr = 0;
            }
            rez.push(rez_red);
            rez_red = [];
        }
    } else {
        return "Matrice nisu ulančane!";
    }

    return rez;
}

function zbr(a,b){
    var rez = [];
    var rez_red = [];
    var zbr = 0;
    if(a[0].length === b[0].length && a.length === b.length) {
        for(let i = 0; i < a.length; i++){
            for(let j = 0; j < a[0].length; j++){
                zbr = a[i][j] + b[i][j];
                rez_red.push(zbr);
            }
            rez.push(rez_red);
            rez_red = [];
        }
    }else{
        return "Matrice se ne mogu zbrojiti!";
    }

    return rez;
}

function oduz(a,b){
    var rez = [];
    var rez_red = [];
    var zbr = 0;
    if(a[0].length === b[0].length && a.length === b.length) {
        for(let i = 0; i < a.length; i++){
            for(let j = 0; j < a[0].length; j++){
                zbr = a[i][j] - b[i][j];
                rez_red.push(zbr);
            }
            rez.push(rez_red);
            rez_red = [];
        }
    }else{
        return "Matrice se ne mogu oduzet!";
    }

    return rez;
}

function mulBr(broj,matrica,redoslijed){
    var a = [];
    var c = broj;
    var b = matrica;
    var rez_red = [];
    
    for(let i = 0; i < matrica[0].length; i++){
        for(let j = 0; j < matrica.length; j++){
            rez_red.push(c);
        }
        a.push(rez_red);
        rez_red = [];
    }

    if(redoslijed === 0){
        return mul(a,b);
    }else if(redoslijed === 1){
        return mul(b,a);
    }else{
        return "Matrice se ne mogu množiti tim redoslijedom jer nisu ulančane. Probaj promijeniti redoslijed."
    }
}

function zbrBr(broj,matrica){
    var a = [];
    var c = broj;
    var b = matrica;
    var rez_red = [];
    
    for(let i = 0; i < matrica.length; i++){
        for(let j = 0; j < matrica[0].length; j++){
            rez_red.push(c);
        }
        a.push(rez_red);
        rez_red = [];
    }

    return zbr(a,b);
}

function oduzBr(broj,matrica,redoslijed){
    var a = [];
    var c = broj;
    var b = matrica;
    var rez_red = [];
    
    for(let i = 0; i < matrica.length; i++){
        for(let j = 0; j < matrica[0].length; j++){
            rez_red.push(c);
        }
        a.push(rez_red);
        rez_red = [];
    }

    if(redoslijed === 0){
        return oduz(a,b);
    }else if(redoslijed === 1){
        return oduz(b,a);
    }
}

module.exports = { mul, zbr, oduz, zbrBr, oduzBr, mulBr };