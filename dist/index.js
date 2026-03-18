"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let name = "Didit";
let username = 123;
let isDead = false;
let pacarSaya;
pacarSaya = ["dia", 2, true];
let temanKita;
temanKita = {
    nama: "abdul",
    baik: false,
    umur: 69
};
// fuction ts
function create() {
    return 2;
}
// arrow fuction
const create2 = () => {
    return 'supri';
};
// void tidak mengembalikan nilai cuma mencetak;
function create3() {
    console.log('kicuy');
}
// parameter 
function add(a, b) {
    const jum = a + b;
    console.log(jum);
}
// fuction parameter bukan void 
function add2(a, b) {
    return a + b;
}
// fuction parameter bukan void 
function add3(a, b) {
    return `acab jika di jumalahkan jadi ${a + b}`;
}
let siti;
siti = "siti semilikiti";
let alien;
alien = true;
function create4(skateboard) {
    console.log(`Skateboard impianku' :
        brand : ${skateboard.brand}
        size : ${skateboard.size}
        truckSize : ${skateboard.truckSize}
        wheelsSize : ${skateboard.wheelsSize}
        bearing Brand : ${skateboard.bearingBrand}
        Truck Brand : ${skateboard.truckBrand}
        `);
}
function lokal(skateboard) {
    console.log(`Skateboard lokal impianku' :
        brand : ${skateboard.brand}
        size : ${skateboard.size}
        truckSize : ${skateboard.truckSize}
        wheelsSize : ${skateboard.wheelsSize}
        bearing Brand : ${skateboard.bearingBrand}
        Truck Brand : ${skateboard.truckBrand}
        Nut Brand : ${skateboard.nutBrand}
        `);
}
console.log({ name });
console.log({ username });
console.log({ isDead });
console.log({ pacarSaya });
console.log({ temanKita });
console.log(create());
console.log(create2());
create3();
add(10, 20);
console.log(add2(12, 13));
console.log(add3(12, 13));
console.log(siti);
console.log({ alien });
// param bisa di tamabah type 
const brandLuar = {
    brand: "baker",
    size: 8,
    truckSize: 139,
    wheelsSize: 54,
    bearingBrand: "bronson",
    truckBrand: "ace"
};
const brandLokala = {
    brand: 'kamu',
    size: 8,
    truckSize: 8,
    wheelsSize: 54,
    bearingBrand: "ace",
    nutBrand: "ace",
    truckBrand: "ace",
};
create4(brandLuar);
lokal(brandLokala);
//# sourceMappingURL=index.js.map