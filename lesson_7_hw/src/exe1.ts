import fs from 'fs';
console.log("1"); //1
function f()
{
    return "2";
}
const timer = setTimeout(() => { 
    console.log("8");  
}, 5000); //2
console.log(f());//3
 


let count=5;
const interval = setInterval(() => { 
    console.log(`${count}`); 
    count++; 
    if (count > 7) clearInterval(interval); 
}, 1000);//4


const callback = function (err: any, data: Buffer) 
{
        if(err)
                console.log("Can't read the file", err);
        else 
        {
                console.log(data.toString());
        }

}

fs.readFile('src/file.txt', callback);//5
console.log("3"); //6