/* lista - azonos típusú változók tárolására */
let lista = ["első", "második"]

console.log(lista[0])

lista[0] = "átírt első"

console.log(lista)

lista[10] = "tizenegyedik elem"

console.log(lista)
console.log(lista[5])

// listához elemadás - utolsó hely után teszi az elemet

lista.push("következő elem")
console.log(lista)

// utolsó elem eltávolítása
lista.pop()
console.log(lista)

const szam = 5;
// szam = 12; - konstans értéke nem változtatható meg

const lista2 = [12, 13, 14, 15]
console.log(lista2)
// lista2 = [23, 24, 25] - hiba, mert konstansnak akartam új értéket adni
lista2[0] = 2222222;
console.log(lista2)
lista2.push(333333)
console.log(lista2)

// a konstans egyszerű adatszerkezet esetén const-tal való deklarációval, a konstans értékét nem lehet megváltoztatni. Összetett adatszerkezet esetén const használatával az összetett adatszerkezet memória címe lesz állandó az nem változtatható meg, de az egyes értékek megváltoztathatóak.Összetett adatszerkezet a lista, objektum. Pl: a konstans listához tudunk új elemet adni, törölni, lista elemének az értékét megváltoztathatjuk. A listákat mindig const-ként definiáljuk.

/* Objektumok */
/* étlapos feladat
ételnév lista -> szöveges típusú
ételár lista -> szám típusú
ezt egy egységként tudnám kezelni
*/

const etel1 = {
    nev: "Brassói pecsenye",
    ar: 2990
}
// az objektum egy olyan összetett adatszerkezet, amely kulcs értékpárokból áll, egységként tudunk vele kezelni összetartozó halmazokat, többnyire const-ként deklaráljuk.
console.log(etel1.nev)
console.log(etel1.ar)

etel1.mennyiseg = 3
console.log(etel1)

const etel2 = {
    nev: "BBQ pizza",
    ar: 4200,
    meret: 45,
    mennyiseg: 2
}



    const kutya1 = {
        neve: "Dezi",
        fajta: "pittbull",
        szin: "fekete",
        magassag: 34,
        szul_datum: 2020,
        szul_hely: "Budapest",

    }

    const kutya2 = {
        neve: "Fruzsina",
        fajta: "keverék",
        szin: "tarka",
        magassag: 34,
        szul_datum: 2020,
        szul_hely: "Budapest",
        
    }


