import fs from 'fs';
import superagent, { Response } from 'superagent';

let city :string= "san fran";//זה יהיה המטבע שאליו נהפוך ערך ברירת מחדל
let language :string= "en-US";//זה יהיה המטבע שאליו נהפוך ערך ברירת מחדל
//let amount :number= 1;//זה יהיה הסכום שיקרא מהקובץ input.txt
const writeCallback = function (err: any)//זה הקולבק של כתיבת התוצאה לקובץ output.txt
{
    if (err) {
        console.log("Failed writing result to file:", err)
    }
    else console.log("Finish to write")
}
const getCallback = function (err: any, res: Response)//זה הקולבק של קריאת ה API 
 {
    if (err) {
        console.log(`API request to the url has failed: ${err}`)
        return;
    }
    const result = res.body.language;//קבלת השפה מהתשובה של ה API

    console.log(`Detected language: ${result}`);

    fs.writeFile('output.txt', result.toString(),writeCallback );//כתיבת התוצאה לקובץ output.txt
}

const readCallBack = function (err: any, data: Buffer) //זה הקולבק של קריאת הקובץ input.txt 
{
    if (err) {
        console.log("Failed reading input data:", err);
        return;
    }
    console.log(data.toString());
    const input = data.toString().split(" ");
    city = input[0];
    language = input[1];
    
   
    
    const url = `https://weather338.p.rapidapi.com/locations/search?query=${city}&language=${language}`;
    // Note: RapidAPI often requires header keys (x-rapidapi-key / x-rapidapi-host).
    // If you have an API key, add it with `.set(...)` before `.end(...)`.
    superagent.get(url).end(getCallback); // קריאה ל-API עם הקולבק המתאים
    console.log("the API tells what wheather is going to be");
}
fs.readFile('src/input.txt', readCallBack);//קריאה לקובץ input.txt עם הקולבק המתאים
//npx ts-node src/2_API_callback.ts
