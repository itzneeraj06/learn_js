// outside the scope var cannot be accessed
// function myfunc1() {
//     let username = "neer";
// }
// console.log(username)

// inner function toh username ko access kr pa rha hai pr outside the function cannot be accessed (lexical scoping)
// function outerfunction() {
//     let username = "neer"
//     function innerfunction() {
//         console.log(username);
//     }
//     innerfunction();
// }
// outerfunction();
// console.log(username);

// yhi h closure jab mene innerfunc ko return kra toh uske sath lexicle scope bhi pass ho gye
// function outerfunc(){
//     let username="neer" 
//     function innerfunc(){
//         console.log(username);
//     }
//     return innerfunc();
// }
// outerfunc();