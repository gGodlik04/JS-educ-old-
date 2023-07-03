/* lesson 2 

function removeByUser(event)
        {
            if (event.target.innerHTML==`Удалено пользователем`)
            {
                let elem=event.target.id; 
                let removeElem=document.getElementById(elem).remove();
            }
            else
            {
                event.target.innerHTML=`Удалено пользователем`; 
            }
        }


        document.getElementById(`container1`).addEventListener(`click`,removeByUser);

*/

/* lesson 3

function clickLink(event)
        {
            event.preventDefault();
        }
        
        document.addEventListener(`DOMContentLoaded`,function(event)
        {
            for(let a of document.querySelectorAll(`a`))
            {
                a.addEventListener(`click`,clickLink)
            }
        });

        document.querySelectorAll(`a`).addEventListener(`click`,clickLink)

*/

/* lesson 4

function mouseClickPDown(event)
        {
            let divId=event.target.id;
            let div=document.getElementById(divId);
            let p=div.querySelector(`p`);
            p.style.fontWeight=`bold`;
        }

        function mouseClickPUp(event)
        {
            let divId=event.target.id;
            let div=document.getElementById(divId);
            let p=div.querySelector(`p`);
            p.style.fontWeight=`normal`;
        }

        function mouseClickPOut(event)
        {
            let divId=event.target.id;
            let div=document.getElementById(divId);
            let p=div.querySelector(`p`);
            p.remove();
        }

        function mouseoverDiv (event)
        {
            let divId=event.target.id;
            let div=document.getElementById(divId);
            let p=document.createElement(`p`)
            p.append(`Какой-то текст`);
            div.append(p);
            p=div.getElementsByTagName(`p`);
        }

        document.addEventListener(`DOMContentLoaded`, function(event){
            let div=document.getElementById(`div1`);
            div.addEventListener(`mouseover`, mouseoverDiv);
            div.addEventListener(`mousedown`,mouseClickPDown);
            div.addEventListener(`mouseup`,mouseClickPUp);
            div.addEventListener(`mouseout`,mouseClickPOut);
        });

*/

/* lesson 5

//<div id="div1" tabindex=0 style="border: 1px solid red; height:100px; width:200px;">
     </div>


let horizon=0;
        let vertical=0;
        function keydown(event)
        {
            let div1=document.getElementById(`div1`);
            console.log(event.key);
            let c=100;
            if(event.key==`ArrowDown`)
            {
                vertical+=100;
                div1.style.top=`${vertical}px`;
            }
            if(event.key==`ArrowUp`)
            {
                vertical-=100;
                div1.style.top=`${vertical}px`;
            }
            if(event.key==`ArrowLeft`)
            {
                horizon-=100;
                div1.style.left=`${horizon}px`;
            }
            if(event.key==`ArrowRight`)
            {
                horizon+=100;
                div1.style.left=`${horizon}px`;
            }
        }
        document.addEventListener(`DOMContentLoaded`,function(event)
        {
            div1.style.position=`relative`;
            div1.style.zIndex=`999`;
            document.getElementById(`div1`).addEventListener(`keydown`,keydown);
        })

*/


/*

<form name="myForm" action="#" method="post">
        <div>
            <div>
                <label for="label1">Форма для регестрации</label><br>
                <label for="label1">Введите логин</label>
                <input type="text" name="login" id="login"><p id="errorLogin"></p>
            </div>

            <div>
                <label for="label1">Введите e-mail</label>
                <input type="text" name="e-mail" id="e-mail">
            </div>

            <div>
                <label for="label1">Введите пороль</label>
                <input type="text" name="password" id="password"><p id="errorPassword"></p>
            </div>

            <div>
                <label for="label1">Подтвердите пороль</label>
                <input type="text" name="checkPassword" id="checkPassword"><p id="errorCheckPassword"></p>
            </div>
            <div>
                <input type="submit" name="sbutton" value="Зарегестрироваться" >
            </div>
        </div>
    </form>



 _____________________________
let regLogin=/[a-zA-Z]{3,32}/;
        let regPassword=/.{4,}/;

        function checkLogin(event)
        {
            let form=event.target;
            let error=form.querySelector(`#errorLogin`);
            error.innerHTML=``;
            let login=form.querySelector(`input[name="login"]`);
            let bool_=login.value.match(regLogin);
            if (!bool_)
            {
                error.innerHTML=`Длина логина должна быть от 3-32. только буквы`;
                login.focus();
                error.style.display=`inline`;
            }   
            event.preventDefault();
        }

        function Password()
        {
            let form=event.target;
            let error=form.querySelector(`#errorPassword`);
            error.innerHTML=``;
            let password=form.querySelector(`input[name="password"]`);
            let bool_=password.value.match(regPassword);
            if (!bool_)
            {
                error.innerHTML=`Пороль должен быть больше 4 символов`;
                password.focus();
                error.style.display=`inline`;
            }   
            
        }

        function checkPassword(event)
        {
            let form=event.target;
            console.log(form);
            let error=form.querySelector(`#errorCheckPassword`);
            error.innerHTML=``;
            let password=form.querySelector(`input[name="password"]`);
            let checkPassword=form.querySelector(`input[name="checkPassword"]`);
            console.log(password);
            if(password.value!=checkPassword.value)
            {
                console.log(`xuy`);
                console.log(password);
                console.log(checkPassword);
                error.innerHTML=`Не верно введен пороль </br> `;
                checkPassword.focus();
                error.style.display=`inline`;
            }

        }


        function submitForm(event)
        {
            checkLogin(event);        
            Password(event);
            checkPassword(event);
            event.preventDefault();
        }

        document.addEventListener(`DOMContentLoaded`,function(event){
            document.querySelector(`form`).addEventListener(`submit`,submitForm)
        })

*/

/* 7 урок     3 ЗАДАНИЯ


_____________ЗАДАНИЕ 1 ПОДМЕНЮ

<div id="menu">
        <ul>
            <li>
                <span class="menu">Пункт меню 1</span>
                <ul>
                    <li>Подпункт меню 1</li>
                    <li>Подпункт меню 2</li>
                </ul><br>
            </li>
            <li>
                <span class="menu">Пункт меню 2</span>
                <ul>
                    <li>Подпункт меню 1</li>
                    <li>Подпункт меню 2</li>
                </ul>
            </li>
        </ul>
    </div>



    <div id="menu">
        <ul>
            <li>
                <span class="menu">Пункт меню 1</span>
                <ul>
                    <li>Подпункт меню 1</li>
                    <li>Подпункт меню 2</li>
                </ul><br>
            </li>
            <li>
                <span class="menu">Пункт меню 2</span>
                <ul>
                    <li>Подпункт меню 1</li>
                    <li>Подпункт меню 2</li>
                </ul>
            </li>
        </ul>
    </div>

_____________ЗАДАНИЕ 1 ПОДМЕНЮ




_____________ЗАДАНИЕ 2 Коментарии

<h2>Комментарии <span id="count">0</span></h2>
    <div class="comment"></div>
    <textarea placeholder="Введите комментарий" name="comment" id="comment" cols="30" rows="10"></textarea>
    <button id="Comit">Отправить</button>
______________________________________________


function Comments (event)
    {
        let text=document.querySelector(`textarea`);
        if(text.value.length==0)
        {
            alert(`Введите комментарий`);
        }
        else
        {
            let commentt=document.querySelector(`.comment`).cloneNode();
            commentt.innerHTML=`${text.value}`;
            document.querySelector(`#count`).innerHTML=document.querySelectorAll(`.comment`).length;
            text.before(commentt);
        }
        event.preventDefault();
    }

    document.addEventListener(`DOMContentLoaded`,function(event)
    {
        document.querySelector(`button`).addEventListener(`click`,Comments)
        event.preventDefault();
    })    

_____________ЗАДАНИЕ 2 Коментарии



_____________ЗАДАНИЕ 3  ОСНОВНОЕ ЗАДАНИЕ 

<textarea placeholder="Введите произвольный текст" name="text" id="text" cols="30" rows="10"></textarea>
<button id="comit">Отправить</button>
<ul id="ul">
</ul>

_______________________________________________________



function MapFunc(event)
    {
        let text=document.querySelector(`textarea`);
        let textString=text.value;
        let array=textString.split(` `);
        let mapArray=new Map();
        let count=0;

        for (let elemToCompare=0; elemToCompare<array.length; elemToCompare++)
        {
            for (let elemOfCompare=elemToCompare+1; elemOfCompare<array.length ; elemOfCompare++)
            {   
                let bool_=mapArray.has(array[elemToCompare]);
                    if ((array[elemToCompare]==array[elemOfCompare]) && (!bool_))
                    {
                        count++;
                    }
            }
            if (count!=0)
            {
                mapArray.set(array[elemToCompare],count);
            }
            count=0;
        }
        console.log(mapArray);
        
        for (let entry of mapArray)
        {
            let li=document.createElement(`li`);
            li.innerHTML=`Слово \"${entry[0]}\" : ${entry[1]} `;
            let ul=document.querySelector(`ul`);
            ul.appendChild(li);
        }

    }

    document.addEventListener(`DOMContentLoaded`,function(event)
    {
        document.querySelector(`#comit`).addEventListener(`click`,MapFunc)
    })




_____________ЗАДАНИЕ 3  ОСНОВНОЕ ЗАДАНИЕ 



*/