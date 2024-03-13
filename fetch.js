async function getGithub() {
    try {
        const response = await fetch('https://api.github.com/users/itzneeraj06');
        // console.log(response);
        const data =  response.json;
        console.log(data);

    }
    catch (err) {
        console.log("problem", err);
    }
}
getGithub();