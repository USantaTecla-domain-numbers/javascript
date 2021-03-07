let amount = +prompt("Dame la cantidad de céntimos: ")

let amount50 = amount - amount % 50
amount -=  amount50
let coin50 = amount50 / 50
let msg50 = coin50 > 0 ? coin50 + " moneda(s) de 50, \n" : ""

let amount20 = amount - amount % 20
amount -=  amount20
let coin20 = amount20 / 20
let msg20 =  coin20 > 0 ? coin20 + " moneda(s) de 20, \n" : ""

let amount10 = amount - amount % 10
amount -= amount10
let coin10 = amount10 / 10
let msg10 = coin10 > 0 ? coin10 + " moneda(s) de 10, \n" : ""

let amount5 = amount - amount % 5
amount -= amount5
let coin5 = amount5 / 5
let msg5 = coin5 > 0 ? coin5 + " moneda(s) de 5, \n" : ""

let amount2 = amount - amount % 2
amount -= amount2
let coin2 = amount2 / 2
let msg2 = coin2 > 0 ? coin2 + " moneda(s) de 2, \n" : ""

let msg1 = amount > 0 ? amount + " moneda(s) de 1, \n" : ""
alert(msg50 + msg20 + msg10 + msg5 + msg2 + msg1)

