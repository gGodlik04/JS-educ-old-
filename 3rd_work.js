/* lesson 1
function rounding (){
            let number=+prompt(`Введите десятичное число`);
            let rounding=prompt(`До какого знака после запятой округлить число`);
            switch (rounding)
            {
                case `1`:  return number.toFixed(1);
                case `2`:  return number.toFixed(2);
                case `3`: return number.toFixed(3);
                case `4`: return number.toFixed(4);
                case `5`: return number.toFixed(5);
            }
        }
        let x=rounding();
        alert(`${x}`);
*/

/* lesson 2
let str=prompt(`Введите строку`);
        function Search (str)
        {
            let counter=0;
            lengthOfStr=str.length;
            let letterToSearchFor=`a`;
            for (let i=0;i<lengthOfStr;i++)
            {
                if ((str[i]==letterToSearchFor.toLowerCase()) || (str[i]==letterToSearchFor.toUpperCase()))
                {
                    counter++;
                }
            }
            return counter;
        }
        let outputValue=Search(str);
        alert(`Кол-во вохождений буквы а= ${outputValue}`);
*/


/*
 lesson 2.1
 //Логин должен быть от 3 до 32 символов и содержать только буквы и цифры.
        let str=prompt(`Введите логин`);
        let reg=/[A-Za-z0-9]\.{2,5}/;
        let bool_=str.match(reg);
        if (bool_)
         {
             alert(`da`);
        }
         else 
         {
             alert(`net`);
         }

lesson 2.2

        let str2=prompt(`Введите 1 или несколько email адресов`);
        let reg2=/(\s[a-z]+@[a-z]{2,}\.[a-z]{2,5}\s?){1,}/;
        let bool2_=str2.match(reg2);
        console.log(bool2_[0]);
        let index=str2.indexOf(`@`);
        str2=str2.slice(index);
        let bool3_=str2.match(reg2);
        console.log(bool3_[0]);
        if (bool2_)
        {
            alert(`da`);
        }
        else 
        {
            alert(`net`);
        }
*/

/* lesson 5
let array=[];
       let lengthOfArray=Math.round(Math.random()*10+5)
       for (let i=0;i<lengthOfArray;i++)
       {
        array[i]=Math.round(Math.random()*100);
        console.log(array[i]);
       }
       array.sort(function(item2, item1) {
        return item1-item2;
       })
       console.log(`____________________`);
       console.log(array);

       let countMore50=0;
       let countLess50=0;
       for(elem of array)
       {
        if (elem>=50)
        {
            countMore50++;
        }
        else
        {
            countLess50++;
        }
       }
       console.log(`больше = ${countMore50}   меньше= ${countLess50}`);
*/

/* lesson 7
let m=new Map();
        m.set(`wood`,`дерево`);
        m.set(`choice`,`выбор`);
        m.set(`good`,`хорошо`);
        m.set(`length`,`длина`);
        for (let entry of m)
        {
            console.log(`ключ= ${entry[0]},  значение= ${entry[1]}`);
        }
        let str=prompt(`введите значение Map`);
        //через split вводим в Map
        let word1=str.split(`,`);
        m.set(word1[0],word1[1]);
        console.log(`______________`);
        for (let entry of m)
        {
            console.log(`ключ= ${entry[0]},  значение= ${entry[1]}`);
        }
*/

/*  lesson 8
let setArray=new Set();
       lengthOfArray=100;
       for (let i=0;i<lengthOfArray;i++)
       {
        setArray.add(Math.round(Math.random()*100));
       }
       console.log(setArray);
       console.log(setArray.size);
*/
/* lesson 9

let dateNow=  new Date();
       let dateBeginOfTheYear=new Date(2021,12,1,00,00,00,000);
       console.log(dateBeginOfTheYear);
       console.log(`дней с начала года= `+(dateNow-dateBeginOfTheYear)/86400000);
       console.log(`часов с начала года= `+ (dateNow-dateBeginOfTheYear)/86400000*24);
       console.log(`минут с начала года= `+(dateNow-dateBeginOfTheYear)/86400000*24*60);
       console.log(`секунд с начала года= `+(dateNow-dateBeginOfTheYear)/86400000*24*60*60);
       let days=(dateNow-dateBeginOfTheYear)/86400000;
       let hours=(dateNow-dateBeginOfTheYear)/86400000*24;
       let minutes=(dateNow-dateBeginOfTheYear)/86400000*24*60;
       let seconds=(dateNow-dateBeginOfTheYear)/86400000*24*60*60;
       let dateMap=new Map();
       dateMap.set(`days`,days);
       dateMap.set(`hours`,hours);
       dateMap.set(`minutes`,minutes);
       dateMap.set(`seconds`,seconds);
       console.log(`__________________`);
       for (let entry of dateMap)
       {
        console.log(`ключ= `+ entry[0]+ ` значение= `+ entry[1]);
       }

       // до нового года
       console.log(`__________________`);
       let dateToNewYear= new Date(2022,11,31,00,00,00,000);
       console.log(`До нового года дней=`+ ((dateToNewYear-dateNow)/86400000));
       console.log(`До нового года часов=`+((dateToNewYear-dateNow)/86400000*24))
       console.log(`__________________`);
*/

/* lesson 9

let time=1;
       function timeSpend()
       {
        console.log(`С начала запуска скрипта прошло= `+ time);
        time++;
       }
       

      function ms500 ()
      {
        time+=500;
        return time;
      }
       setInterval(timeSpend,1000);

*/


/*  lesson10

let reg=/\d+/g;
        let str=prompt(`Введите текст с числами`);
        let arratOfString=str.split(/\s/);
        console.log(`Кол-во слов= ` +arratOfString.length);
        let x= str.match(reg);
        for (elem in x)
        {
            console.log(x[elem]);
        }
        x.sort();
        console.log(x);
        // ластовое сстрокой
        let map=new Map();
        for (let j=0;j<str.length;j++)
        {
            let count=0;
            for (let i=0;i<str.length;i++)
            {
                if (str[j]==str[i])
                count++;
            }
            map.set(str[j],count);
        }
        console.log(map);

*/

