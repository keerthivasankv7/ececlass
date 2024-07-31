let fs = require("fs")
let axios  = require("axios")

const url = "https://jsonplaceholder.typicode.com/users/";

let asyncfun = async() =>{
    try{
        // let fileData = await fs.promises.readFile('./text.txt',{encoding:"utf-8"});
        // console.log(fileData);
        let axdata = await axios.get(url+1);
        console.log(axdata.data);
    }

    catch(e){
        console.log(e);
    }
}

asyncfun()
