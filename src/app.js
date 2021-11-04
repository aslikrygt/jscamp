console.log("Merhaba Kodlama.io")

// js type safe değildir
let dolarBugun = 9.30
let dolarDun = 9.20
dolarDun = "9.20"
{
    let dolarDun = 9.10
}
console.log(dolarDun)

const euroDun = 11.2
//euroDun = 11 hatalı yanlış 

console.log(euroDun)
//array dizi demek 
//camelClasing 
//PascalCasing kelimelerin ilk harfleri büyük 
let konutKredileri = ["Konut kredisi","Emlak Konut Kredisi","Kamu Kredisi","özel konut"]
console.log("<ul>")
for(let i =0; i<konutKredileri.length;i++){
    console.log("<li>"+konutKredileri[i]+"</li>")

}
console.log("</ul>")

console.log(konutKredileri)

