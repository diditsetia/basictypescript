let name: String = "Didit";
let username : number = 123;
let isDead : boolean = false;



let pacarSaya: number | String | String[] | [string, number, boolean];
pacarSaya = ["dia", 2, true];


// custome type
type temanType = {
 nama : string;
 baik: boolean;
//  ? adalah optional
 umur?: number;
}
let temanKita : temanType;

temanKita = {
    nama : "abdul", 
    baik : false,
    umur : 69
}

// fuction ts

function create () : string | number {
    return 2;
}

// arrow fuction

const create2 = (): string => {
    return 'supri';

}

// void tidak mengembalikan nilai cuma mencetak;

function create3 () : void {
    console.log('kicuy'); 
}

// parameter 

function add(a: number,b : number): void {
    const jum : number =  a + b ;
    console.log(jum);
}

// fuction parameter bukan void 
function add2 (a: number , b: number) : number {
 return a + b;
}

// fuction parameter bukan void 
function add3 (a: number , b: number) : string {
 return `acab jika di jumalahkan jadi ${a + b}`;
}

// type custom lanjutan

type Wanita = string;
type Pria = boolean;

let siti : Wanita;

siti = "siti semilikiti";

// union type 

type Gender = Wanita | Pria;

let alien : Gender;

alien = true;

//inteface

interface Merekskateboard {
    brand: string;
    size : number;
    truckSize : number;
    wheelsSize : number;
    bearingBrand : string;
}

// penambahan interface

interface Merekskateboard {
    truckBrand: string;
}

interface brandLokal extends Merekskateboard {
    nutBrand : string;
}

interface brandCampur extends Merekskateboard {
    nutBrandCampur : string;

}







function create4 (skateboard : Merekskateboard) : void {
    console.log(`Skateboard impianku' :
        brand : ${skateboard.brand}
        size : ${skateboard.size}
        truckSize : ${skateboard.truckSize}
        wheelsSize : ${skateboard.wheelsSize}
        bearing Brand : ${skateboard.bearingBrand}
        Truck Brand : ${skateboard.truckBrand}
        `);
}

function lokal (skateboard: brandLokal) : void {
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







console.log({name});
console.log({username});
console.log({isDead});
console.log({pacarSaya});
console.log ({temanKita});
console.log(create());
console.log(create2());

create3();
add(10, 20);
console.log(add2(12, 13));
console.log(add3(12, 13));
console.log(siti);
console.log({alien});

// param bisa di tamabah type 

const brandLuar : Merekskateboard = {
    brand : "baker",
    size : 8,
    truckSize: 139,
    wheelsSize : 54,
    bearingBrand: "bronson",
    truckBrand : "ace"
}

const brandLokala : brandLokal = {
 
    brand: 'kamu',
    size : 8,
    truckSize : 8,
    wheelsSize : 54,
    bearingBrand : "ace",
    nutBrand: "ace",
     truckBrand: "ace",
}
create4(brandLuar);
lokal(brandLokala);
