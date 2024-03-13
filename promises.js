// type 1 
const promiseOne = new Promise(function (resolve, reject) {
    //do a async task jisko line by line execute nhi krna hai 
    setTimeout(function () {

        console.log("Async task 1 is completed");
        resolve();

    }, 1000)
})
promiseOne
    .then(function () {

        console.log("promise 1 is resolved  ");

    })

//type 2 isme direct promise use kiya h isme kisi variable me store nhi kiya hai promise ko 

new Promise(function (resolve, reject) {

    setTimeout(function () {

        console.log("Async task 2 is completed");
        resolve();

    }, 1000)
})
    .then(function () {

        console.log("promise 2 is  resolved  ");

    })

//type3 isme resolve me data pass krte hai or .then me handle krte hai  

const promiseThree = new Promise(function (resolve, reject) {

    setTimeout(function () {

        resolve({ username: "neer3", email: "neer3@example.com" });

    }, 1000);
})
promiseThree
    .then(function (users) {
        console.log(users);
    })

// type 4 isme chaining hoti hai or catch or finally use kr rhe hai catch me reject ko handle kara hai 
const promiseFour = new Promise(function (resolve, reject) {

    setTimeout(function () {
        let error = true;
        if (error) {
            resolve({ username: "neer4", password: "neer4@example.com" })
        } else { reject("something happens! check 4 data") }
    }, 1000)
})
promiseFour
    .then(function (user) {
        console.log(user);
        return user.username;

    })
    .catch(function (err) {
        console.log(err);
    })
    .finally(() => {
        console.log("kuch toh hua h resolve or reject in 4  ");
    })

//type 5 isme async await ka use kara hai
const promiseFive = new Promise(function (resolve, reject) {
    setTimeout(function () {
        let error = true;
        if (!error) {
            resolve({ username: "neer5", password: "neer5@example.com" })
        } else { reject("something happens! check data 5") }
    }, 1000)
})
async function type5Promise() {
    try {
        const response = await promiseFive //promise consume kiya hai 
        console.log(response);
    } catch (err) {
        console.log(err);
    }


}
type5Promise();//call a async function 

// type6 

async function getGithub() {
    try {
        const response = await fetch('https://api.github.com/users/itzneeraj06');
        // console.log(response);
        const data = await response.json();
        console.log(data);

    }
    catch (err) {
        console.log("problem", err);
    }
}
getGithub();

// fetch('https://api.github.com/users/itzneeraj06')
//     .then((response) => { return response.json() })
//     .then((data) => console.log(data))
//     .catch((err) => console.log(err))