var jednadzba = "122/2*3+4";

function eval(jednadzba) {
    var brojac = [];
    var brojac_br = 0;
    var j = 0;
    var n = 0;
    var prvi_br = 0;
    var prvi_br_string = "";
    var drugi_br = 0;
    var drugi_br_string = "";
    var rez = 0;
    var rez_string = jednadzba;
    var toContinue = true;
    
    while(toContinue === true){
        for (var i = 0; i < rez_string.length; i++) {
            brojac = [];
            for (let m = 0; m < rez_string.length; m++) {
                if (rez_string[m] === '*' || rez_string[m] === '/') {
                    brojac.push(m);
                    toContinue = true;
                }
            }
            if(brojac.length === 0){
                toContinue = false;
            }
            if (rez_string[i] === '*' || rez_string[i] === '/' && toContinue === true) {
                for (n = i - 1; rez_string[n] !== '*' && rez_string[n] !== '/' && rez_string[n] !== '+' && rez_string[n] !== '-' && n >= 0; n--) {
                    brojac_br++;
                }
                n = i - brojac_br;
                console.log(rez_string);
                for(let k = n; k < brojac[j]; k++){
                    
                    //DODATI PROVJERU JELI TO MATRICA
                    
                    prvi_br_string += rez_string[k];
                }
                prvi_br = parseFloat(prvi_br_string);
        
                brojac_br = 0;
                prvi_br_string = "";
                
                for (n = i + 1; rez_string[n] !== '*' && rez_string[n] !== '/' && rez_string[n] !== '+' && rez_string[n] !== '-' && n < rez_string.length; n++) {
                    brojac_br++;
                }
                n = i + brojac_br + 1;
                
                for(let k = i+1; k < n; k++){
                    
                    //DODATI PROVJERU JELI TO MATRICA
                    
                    drugi_br_string += rez_string[k];
                }
                drugi_br = parseFloat(drugi_br_string);


                drugi_br_string = "";
                
                //NADODATI ZBRAJANJE I ODUZIMANJE
                
                switch(rez_string[brojac[j]]){
                    case '*':
                        rez = prvi_br * drugi_br;
                        break;
                    case '/':
                        rez = prvi_br / drugi_br;
                        break;
                }
                
                string_test = rez_string;
                rez_string = "";
    
                for(let k = n; k < string_test.length; k++){
                    rez_string += string_test[k];
                }
                rez_string = rez.toString() + rez_string;
        
                brojac_br = 0;
            }
        }
        
    }
    return rez_string;
}

console.log(eval(jednadzba));
