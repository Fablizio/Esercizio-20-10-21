let str = prompt('Inserisci 5 nomi separati da una virgola', 'Stefania, Sandro, Maria, Giacomo, Giorgia');

let nomi = str.split(',');

let arrAge = [32, 21, 47, 12, 78];

//nomi

let risultato = nomi.splice(3, 1, 'Marta');

nomi.unshift ('Giacomo');

nomi.push ('Franco','Valentina');

//numeri

let result = arrAge.splice(3, 1, 6);

arrAge.unshift (12);

arrAge.push (54,32);

//unione delle 2 array

let unito = [nomi, arrAge];

//console log

console.log(unito);

