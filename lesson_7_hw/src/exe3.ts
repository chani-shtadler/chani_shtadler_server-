//import {Promise} from 'fs';
function echShebaLach(): Promise<number> {//הפונקציה הזו מחזירה הבטחה שמסיימת אחרי כמה זמן
    let x=0;
    
setTimeout(() => {//הפונקציה הזו מתבצעת אחרי שנייה
    const interval=setInterval(() => {//הפונקציה הזו מתבצעת כל שנייה
        if (x >5) clearInterval(interval); //אם x גדול מ7 אז מפסיקים את ה interval
        x++;//מגדילים את x ב1
        console.log(`x=${x}`);   //מדפיסים את x 
    }, 1000);     //    הפונקציה הזו מתבצעת כל שנייה
},1);//הפונקציה הזו מתבצעת אחרי שנייה
return Promise.resolve(x);//מחזירים את x בתוך הבטחה
}
console.log("before echShebaLach");//מדפיס לפני הקריאה לפונקציה
echShebaLach().then((result)=>{//קוראים לפונקציה ומקבלים את התוצאה שלה
    console.log(`result=${result}`);//מדפיסים את התוצאה שהתקבלה מהפונקציה
});
console.log("after echShebaLach");//מדפיס אחרי הקריאה לפונקציה