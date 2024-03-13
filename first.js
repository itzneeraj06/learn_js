// console.log("hey everyone")

//basic array
const myArr = [2, 12, 4, 5, 0];
// console.log(myArr);

const myArr1 = new Array(1, 2, 3)
// console.log(myArr1[2])

//push pop shift unshift
myArr.push(5);
// console.log(myArr);
myArr.pop();
// console.log(myArr);
myArr.unshift(8);
// console.log(myArr);
myArr.shift();
// console.log(myArr);

//join
const newjoin = myArr.join();
// console.log(newjoin);

//slice or splice

// slice dont manipulate org value
// splice manipulate org value

// ______________________________________________________

// scope

function myFunction() {
    let a = 10
    const b = 11
    var c = 12
}
// console.log(a)
// console.log(b)
// console.log(c)   //dont access outside the scope 


function one()
{
    const x=1
    function two()
    {
        const y=2

    }
    //console.log(y)
    two()
    console.log(x)
}
one()
// console.log(one())


//_________________________________________________________

function five()
{
    // console.log(this)
}
five()


// for of_________________________________
const arr=[1,2,3,4,5]
for (const num of arr) {
    // console.log(num);
}
const greeting ="hello world"
for (const greet of greeting) {
    // console.log(`each char is ${greet}`);
    
}

//maps
// in order ,unique value ,not duplicated 


const map=new Map()
map.set('in','india')
map.set('fr','france')
map.set('in','india')//not print duplicated value 
// console.log(map);

for (const [key,value] of map) {
    // console.log(key,"->",value);
    
}

const myObject={
    game1:'nfs',
    game2:'pubg'
}

// for(const key of myObject) {
//     // console.log(key);//not work 
// }


//forin
const myObj={
    js:'jacascript',
    cpp:'c++',
    rb:'ruby',
    py:'python'
}

// for (const key in myObj) {
//     console.log(key);
// }
// for (const key in myObj) {
//     console.log(`${key} is shortcut for ${myObj[key]}`);
// }

const pr=["js","rb","py","java","cpp"]
for (const key of pr) {
    // console.log(key);//for of loop
    
}
for (const key in pr) {
    // console.log(key);

}


// for each
const language=["js","cpp","py","java","html","css"]
language.forEach(function (val){
    // console.log(val);
})
// language.forEach((value)=>{console.log(value);})

function printme(item)
{
    // console.log(item);
}
// language.forEach(printme)

language.forEach((item,index,arr)=>{
    // console.log(item,index,arr);
})

const myLoopLanguage=[
    {
        langname:"javascript",
        langfile:"js"
    },
    {
        langname:"c++",
        langfile:"cpp"
    },
    {
        langname:"python",
        langfile:"py"
    }
]
// myLoopLanguage.forEach((item)=>{console.log(item.langname);})

// ___________________________________________________

// filter
const myNum =[1,2,34,4,5,66,7]
const myVal=myNum.filter((myNum)=>{
    return myNum>34
})
// console.log(myVal);
const books=[
    {
        title:'book one',genre:'fiction',publish:'1981'
    },
    {
        title:'book two',genre:'non-fiction',publish:'1992'
    },
    {
        title:'book three',genre:'history',publish:'1999'
    },
    {
        title:'book four',genre:'non-fiction',publish:'1989'
    },
    {
        title:'book five',genre:'science',publish:'2009'
    },
    {
        title:'book six',genre:'fiction',publish:'1987'
    },
    {
        title:'book seven',genre:'history',publish:'1986'
    }
]

let myBooks=books.filter((buk)=>buk.genre==='history')
// console.log(myBooks);

myBooks=books.filter((buk)=>buk.genre==='history'&&buk.publish>=1990)
// console.log(myBooks);


// ______________________________________________________
// map

const myValue=[1,2,3,4,5,5,6,8]
const nums=myValue.map((num)=>(num*10)).map((num)=>(num+4)).filter((num)=>(num>=25))
// console.log(nums);

//_______________________________________________________
// reduce

const myNums = [1,2,3]
const myTotal = myNums.reduce((acc,curr)=>acc+curr,0)
// console.log(myTotal);

const shoppingCart=[
    {
        itemName:'jscourse',
        price:2999
    },
    {
        itemName:'javacourse',
        price:4999
    },
    {
        itemName:'python course',
        price:1999
    },
    {
        itemName:'dsa course',
        price:7999
    },
]
const myCart=shoppingCart.reduce((acc,item)=>(acc+item.price),0)
// console.log(myCart);


// events 



 











