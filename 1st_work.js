function getTitleOnPage ()
{
    alert("HELLO\nTHAT INIT");
}

function getTitleOnConsole()
{
    console.log("HELLO\nTHAT INIT");
}

function output()
{
    let age =20;
        let name= "Eduard";
        let single = false;
        console.log('тип переменной age= ' + typeof(age)+' тип переменной name= ' + typeof(name)+' тип переменной age= ' + typeof(single) );
}

function constant1()
{
    const g=9.8;
    let m=80;
    let weight=m*g;
    console.log(weight);
}

function lesson5()
{
    let string1 = "12.5";
    let string = "-5.7";
    console.log()
}

function lesson6 ()
{
    let x=8, y=15, t=14, u=9, q=7.8;
    let end=(x+y)/((t-u)*(q-y*t));
    let end2=(8+15)/((14-9)*(7.8-15*14));
    console.log ('end1= ' + end +' end2=' +end2);
     x='12';
     y='40';
     end= (x+y);
     end2=+12 + +40;
    console.log ('end1= ' + end +' end2=' +end2);

}

function lesson7 ()
{
    let x =100*200>200*100;
    console.log (x);
    let y= (400>300);
    console.log(y);
}

function lesson9 ()
{
    confirm ("Хотите вопрос?");
    let x=prompt('Вы мужчина?')
    if (x==true)
    {
        alert ('Я мужчина');
    }
     else 
    {
        alert('Я женщина');
    }
    (x==true) ?alert ('Я мужчина') :alert('Я женщина');
}

function lesson11 ()
{
    let x=0;
    let y=0;
    for (let i=0;i<=20;i++)
    {
        console.log('Здравствуйте');
    }
    while (x<=20)
    {
        console.log('Здравствуйте');
        x++;
    }
    do 
    {
        console.log('Здравствуйте');
        y++;
    }
    while (y<=20);
}

function lesson12 ()
{
    let x=+(prompt('Введите число от 1 до 5'));
    switch (x)
    {
        case 1:{
            alert('один');
            break;
        }
        case 2:{
            alert('два');
            break;
        }
        case 3:{
            alert('три');
            break;
        }
        case 4:{
            alert('четыре');
            break;
        }
        case 5:{
            alert('пять');
            break;
        }
        default :{
            alert('Не верно');
        }
    }
}

function lesson13 ()
{
    let x=+(prompt('Введите число от 1 до 5'));
    switch (x)
    {
        case 1:{
         return   (alert('один'));
        
        }
        case 2:{
            return (alert('два'));
            
        }
        case 3:{
            return (alert('три'));
        }
        case 4:{
            return (alert('четыре'));
            
        }
        case 5:{
            return (alert('пять'));
            
        }
        default :{
            return (alert('Не верно'));
        }
        case 0:{
            return 1;
        }
    }
}

function lesson14_1error (msg)
{
    console.log (msg);
}

function lesson14_2 (x , y , func)
{
    /*main
    let q=12;
        let p='xuy';
        let x=   lesson14_2(q,p,lesson14_1error);
    */
    if(typeof(2) != typeof(x))
    return (x+y);
    else {
    let dd=x+y;
    func(dd);
    }
}

function lesson15 (x , y , func)
{
    /* main
    let q=12;
        let p='xuy';
        let x=   lesson15(q,p,lesson14_1error);
        console.log (x);
        */
        try
    {
        if ((typeof(y) != typeof(x))) throw new Error ('Типы данных не совпали');
        let end=x+y;
        return end;
    }
    catch (e)
    {
        console.log('Введенный неверные данные.'+ e.name);
        console.log (e);
    }
    finally
    {
        let end3='Конец';
        console.log(end3);
    }
}

function lesson16 (arr)
{
    /* main
    arr=[[2,4,6],[7,8,4]];
        let min= lesson16(arr);
        console.log(min);
        */
    let x=arr[0][0];
    console.log(arr.length);
    for (let row in arr)
    {
         for (let col in arr[row])
        {

            if(x<arr[row][col])
                {
                    x=arr[row][col];
                }
        }
    }
    return x;
}

function lesson20_calculateAddition (a , b)
{
    let x= a+b;
    return x;
}

function lesson20_calculateSubstraction ( a, b)
{
    let x= a-b;
    return x;
}

function lesson20_calculateMultiplication (a, b)
{
    let x= a*b;
    return x;
}

function lesson20_calculateDivision (a,b)
{
    let x=a/b;
    return x;
}

function lesson20_Main (a, b , func)
{
    switch (func)
    {
        case lesson20_calculateAddition:{
            let end= lesson20_calculateAddition(a,b);
            return end;
            break;
        }
        case lesson20_calculateSubstraction:{
            let end=lesson20_calculateSubstraction(a,b);
            return end;
            break;
        }
        case lesson20_calculateMultiplication:{
          let end= lesson20_calculateMultiplication(a,b);
            return end;
            break;
        }
        case lesson20_calculateDivision:{
           let end= lesson20_calculateDivision(a,b);
            return end;
            break;
        }
    }
}

function lesson20_Calculate()
{
    /* main
    let end=lesson20_Calculate();
       console.log(end);
       */
    let x= prompt('Введите 1-ое число или exit для выхода');
    let y =prompt('Введите операцию');
    let z= prompt('Введите 2-ое число');
    switch (y)
    {
        case '+':{
           let end2= lesson20_Main(x,z,lesson20_calculateAddition);
           return end2;
        }
        case '-':{
            let end2=lesson20_Main(x,z,lesson20_calculateSubstraction);
            return end2;
        }
        case '*':{
            let end2= lesson20_Main(x,z,lesson20_calculateMultiplication);
            return end2;
        }
        case '/':{
            let end2= lesson20_Main(x,z,lesson20_calculateDivision);
            return end2;
        }
    }
}