"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
const superagent_1 = __importDefault(require("superagent"));
let text = " "; //זה יהיה המטבע שאליו נהפוך ערך ברירת מחדל
//let amount :number= 1;//זה יהיה הסכום שיקרא מהקובץ input.txt
const writeCallback = function (err) {
    if (err) {
        console.log("Failed writing result to file:", err);
    }
    else
        console.log("Finish to write");
};
const getCallback = function (err, res) {
    if (err) {
        console.log(`API request to the url has failed: ${err}`);
        return;
    }
    const result = res.body.language; //קבלת השפה מהתשובה של ה API
    console.log(`Detected language: ${result}`);
    fs_1.default.writeFile('output.txt', result.toString(), writeCallback); //כתיבת התוצאה לקובץ output.txt
};
const readCallBack = function (err, data) {
    if (err) {
        console.log("Failed reading input data:", err);
        return;
    }
    console.log(data.toString());
    const input = data.toString().split(" ");
    text = input[0];
    const url = `https://google-translate112.p.rapidapi.com/lang-detect?text=${text}`;
    superagent_1.default.get(url, getCallback); //קריאה ל API עם הקולבק המתאים
};
fs_1.default.readFile('src/input.txt', readCallBack); //קריאה לקובץ input.txt עם הקולבק המתאים
//npx ts-node src/2_API_callback.ts
