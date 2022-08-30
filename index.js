// console.log("Hello, World!")
// console.log(2+3)
// console.log(10-2);
// console.log(2*3);
// console.log(10/5);
// console.log(2**3);
// console.log((2+3)+(10-2)+(2*3)+(10/5)+(2**3));

// let, const (переменные)
// let n1 = 2+2
// let n2 = 2*4
// let n3 = 10/2
// let n4 = 4-1
// let n5 = 2**3
// console.log(n1 + n2 + n3 + n4 + n5);
// n1 = 10+2
// console.log(n1 + n2 + n3 + n4 + n5)
// типы данных
// let num = 1 Number

// let str1 = "My name is" String  
// let str2 = 'my name is'
// let str3 = `my name is`

// let bool1 = true Boolean
// let bool2 = false
// let n1 = 5*2
// let n2 = 17*8
// let n3 = 66*3
// let n4 = 43
// let n5 = 45/4
// let str1 = "Ibra"
// let str2 = "Movs"
// let str3 = "Sed"
// let str4 = "Adam"
// let str5 = "Vitalya"
// console.log(n1, n2, n3, n4, n5, str1, str2, str3, str4, str5);
// str1 = "Vanya"
// str2 = "Kachok"
// str3 = "John"
// n1 = 145
// n2 = 23
// n3 = 301*2
// console.log(n1, n2, n3, n4, n5, str1, str2, str3, str4, str5)

// let nums = [1,2,3,4,5] массив чисел в квадратных скобках
// let names = [Adam...] массив имен                              console.log(nums[0])

// let n1 = ["Movsar", 32, "Sed", 30, "Ibra", 25, "Movs", 24, "Medina", 1]
// console.log("Имя:", n1[2], ",", "Возраст", n1[3]);
// console.log("Имя:", n1[0], ",", "Возраст", n1[1])
// console.log("Имя:", n1[4], ",", "Возраст", n1[5])
// console.log("Имя:", n1[6], ",", "Возраст", n1[7])


                        //   20.08.2022
// let myName = "Sed"
// let age = 30
// let myFriendsName = "James"
// let car = "Aston martin db9"
// let myCar = car
// console.log("Моя машина " + myCar + " такая же как у " + myFriendsName + ". Его машина", car)
// node index.js
// let names = [
//     ["Sed", 30],
//     ["Anzor", 34],
//     ["Shamil", 32],
//     ["Ibra", 25],
//     ["Adam", 22]
// ]
// console.log("My name is " + names[0][0] + ". I'am " + names[0][1] + ".");
// console.log("My brother name is " + names[1][0] + ". Hi is " + names[1][1] + ".");
// console.log("My brother name is " + names[2][0] + ". Hi is " + names[2][1] + ".");
// console.log("My brother name is " + names[3][0] + ". Hi is " + names[3][1] + ".");
// console.log("My brother name is " + names[4][0] + ". Hi is " + names[4][1] + ".");
// let str = "I live in Grozny"
// console.log(str [0]);
// console.log(str [1]);
// console.log(str [2]);
// console.log(str [3]);
// console.log(str [4]);
// console.log(str [5]);
// console.log(str [6]);
// console.log(str [7]);
// console.log(str [8]);
// console.log(str [9]);
// console.log(str [10]);
// console.log(str [11]);
// console.log(str [12]);
// console.log(str [13]);
// console.log(str [14]);
// console.log(str [15]);

// let index = 0
// let religion = "ISLAM"
// console.log(religion [index]);
// console.log(religion [0 + 1]);
// console.log(religion [ 0 + 2]);
// console.log(religion [0 + 3]);
// console.log(religion [0 + 4]);
// console.log(religion [0 + 5]);

// let in1 = 0
// let in2 = 1
// console.log(in1++);
// console.log(++in2);

// === сравнение
// !== не равно       <   >   >=  <=

// let str = "My name is Sed. I was born in Grozny."
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]
// console.log(str.length);
// console.log(arr.length);

// console.log(3<5);
// console.log(3>5);
// console.log(3<=3);
// console.log("ab"==="ab");
// console.log("ad"!=="ab");
// console.log("ad"==="ad");

// в условие иф заходим только когда true
// если сработает одно из условий остальные работать не будут

// let age = 10
// let myName = "Luka"
// let zh1 = "ужас"
// let zh2 = "боевик"
// let zh3 = "мультфильм"
// if (age > 18) {
//     console.log ("Вам "+ age+ " лет, поэтому можно смотреть "+ zh1+" жанр");
// }
// else if (age > 18) {
//     console.log("Вам "+ age+ " лет, поэтому можно смотреть "+ zh2+" жанр");
// }
// else if (age > 6) {
//     console.log("Вам "+ age+ " лет, поэтому можно смотреть жанр "+ zh3);
// }

// let str = "Chechnya"
// console.log(str[0]);
// console.log(str[1]);
// console.log(str[2]);
// console.log(str[3]);
// console.log(str[4]);
// console.log(str[5]);
// console.log(str[6]);
// console.log(str[7]);

// let s = "Chechnya"
// let i = 0

// for (let i = 0; i <s.length; i++) {
//     console.log(s[i]);
// }
// j=j+1   правильно писать j+=1

// написать цикл от 21 до 122, цикл должен идти по нечетным 

// for (let i = 21; i <122; i+=2) {
//     console.log(i);
// }
// for (let i =2; i <37; i++) {if (i %2 === 0)
//     console.log(i);
// }
// for (let i =2; i <37; i++) {if (i %2 === 1)
//     console.log(i);
// }
// for (let i=0; i<=100; i++) {
//     if (i% 2 === 0) {
//         console.log("chetnoe");
//     } else {i%2 === 1 }
//     console.log("nechet");
    
// }
// ||- или &&- и

// let names = ["Adam", "Lee", "Arsen"]
// for (i= 0; i< names.length; i++) {
//     if (names [i]=== "Sed")
//     console.log("I won");
   
// }
// if (i=== names.length) {
//     if (names[i] !== "Sed")
//         console.log("I'am not on the list");
// }
// push добавить в конец массив; pop - удаляет из конца массива; добавить в начало массива - unshift; удаляет из конца массива - shift

// for (i= 0; i< names.length; i++) {
//     let currentName = names[i]
//     let firstLetter= currentName[0]
//     let lastLetter= currentName[currentName.length-1]
//     let nameLength= currentName.length
//     console.log(i+1 + ": " + firstLetter + ", " lastLetter, nameLength    );
// }
// console.log(names[names.length -1]);
// let Alibek = names[names.length -1]
// console.log(Alibek);
// let names = ["Adam", "Lee", "Movsar", "Kazbek", "Alibek"]
// let upperCaseNames = []
// for (let i=0; i < names.length; i++){
//     if (names[i]% 2 === 1){
//     upperCaseNames.push(names[i])}
//     // if(i % 2 === 0) {
//     // upperCaseNames.push(names[i].toUpperCase())}
//     // else if (i % 2 === 1) {
//     //     upperCaseNames.push(names[i].toLowerCase())
//     // }
//     // console.log(upperCaseNames);
//     console.log(upperCaseNames);
// }
//     let x = names [i]
//     upperCaseNames.push(x.toUpperCase())
// }
//     let currentName = names[i]
//     let currentNametouppercase = currentName.toUpperCase()
//     upperCaseNames.push(currentNametouppercase)
//     console.log(upperCaseNames);
// 
// console.log(upperCaseNames);
// console.log("Привет как дела?".substring(4, 1));
// let a = []
// let b = []
// let d = []
// let other = []
// let names = ["Ali", "Baudi", "Daud", "Khavazh", "Bislan", "Adlan", "Supyan", "Selim", "Yakub"]
// for (let i =0; i < names.length; i++) {
//     let currName = names[i]
//     if (currName[0] === "A"){
//         a.push(currName)
//     }
//     else if (currName[0] === "B") {
//         b.push(currName)
//     }
//     else if (currName[0] === "D") {
//         d.push(currName)
//     }
//     else {
//         other.push(currName.toUpperCase())
//     }
// }
// console.log(a);
// console.log(b);
// console.log(d);
// console.log(other);
// let names = ["Ali", "Baudi", "Daud", "Khavazh", "Bislan", "Adlan", "Supyan", "Selim", "Yakub"]
// let shortNames = []
// for (let i= 0; i < names.length; i++){
//     let str = ""
//     let firstletter = names [i][0]
//     let lastletter = names [i][names[i].length -1]
//     if(names[i].length > 3) {
//         str += firstletter + "-" + lastletter
//         shortNames.push(str)
//     }
// }
// console.log(shortNames);

// for (let i = 10; i >= 0; i --1) обратный цикл
let names = ["Ali", "Baudi", "Daud", "Khavazh", "Bislan", "Mo", "Adlan", "Supyan", "Selim", "Yakub"]
let goBackword = []
for (let i = names.length -1; i>= 0; i--){
    goBackword.push(names[i])
}
console.log(goBackword);
// let names = ["Ali", "Baudi", "Daud", "Khavazh", "Bislan", "Mo", "Adlan", "Supyan", "Selim", "Yakub"]
// for (let i = names.length -1; i>= 0; i--) {
//     let str = ""
//     for (let j = names[i].length -1; i>= 0; j--){
//     console.log(names[i][j]);
// }
// }