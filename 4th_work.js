/* lesson 1
for(let node of document.body.childNodes)
        {
            console.log(node);
            if(node.nodeName==`UL`)
            {
                console.log(node.childNodes);
            }
        }

    console.log(`________________`);
    console.log(document.body.childNodes[7].childNodes[1].nextSibling.nextSibling);
    console.log(document.body.childNodes[7].childNodes[1].parentNode);
*/

/* lesson 4

let normalLink="http://mysite.local/";
        let beginLink=`http://mysite.local/r?`;
        let link= document.querySelectorAll(`a`);
        for(let elem of link)
        {
            if (elem.href!=normalLink)
            {
                console.log(elem.href);
                temporaryLink=beginLink+elem.href;
                elem.href=temporaryLink;
            }
        }

*/

/* lesson 5 рандомные цвета на странице 

let elem=document.querySelector(`body`);
        let count=1;
        let f=``
        function forInterval(){
            if (count<20)
            {
               let division=(count % 2);
                if(division ==0)
                {
                    console.log(`vhod`);
                    elem.style.color=`#${parseInt(Math.random()*(256),16)}`;
                    count++;
                    setTimeout(forInterval,1000);
                }
                else
                {
                    console.log(`vho222d`);
                    elem.style.color=`#${parseInt(Math.random()*(256),16)}`;
                    count++;
                    setTimeout(forInterval,1000);
                }
                console.log(count);
            }
        }
        setTimeout(forInterval,500);

*/

/* lesson 6 добавление и удаление в список

let elem=document.getElementById(`clear`);
        while (true)
        {
            let text=prompt(`Введите значение списка`);
            if (text==`clear`)
            {
                let liRemove=elem.querySelectorAll(`li`);
                for(elem1 of liRemove)
                {
                    elem1.remove();
                }
            }
            else{
                if (text=='exit')
                {
                    break;
                }
                    else
                    {
                        let lilast=document.createElement(`li`);
                        lilast.innerHTML=`${text}`;
                        elem.append(lilast);
                    }
            }
        }

*/ 

/* lesson 7 практическая

        
        let arrayName = [`Константин`,`Евгений`,`Владимир`,`Петр`,`Сергей`,`Ян`,`Олег`];
        let arrayText = [`Папа мама идут гулять`,`Гуси лебеди или медведь`,`Много зайцев прыгает`,`Компьютер пишет текс`,`Филармония играет музыку`,`Сын наводит шорох`,`По полям в сапогах`,`Берем меч и идем во тьму`,`Добряки  и рыбы`,`Охото идет хорошо`];
        let date=new Date();
        
       function output ()
       {
            for (let i=0;i<10;i++)
            {
                let document1=document.getElementById(`template`).cloneNode(true);
                let randomName= arrayName[Math.round(Math.round(Math.random()*6))];
                let randomText= arrayText[Math.round(Math.random()*9)];
                let date=new Date(Math.random()*(2020-1970)+1970,Math.random()*12,Math.random()*31);
                document1.querySelector(`.date`).innerHTML=date;
                document1.querySelector(`.name`).innerHTML=randomName;
                document1.querySelector(`.text`).innerHTML=randomText;
                document1.style.fontSize=`130%`;
                document1.style.color=`#00f`;
                document.body.append(document1);
            }   
       }
       output();

*/