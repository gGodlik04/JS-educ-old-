/* work7  lesson 1

 function addImage(success, error)
    {
        let img=document.createElement(`img`);
        img.src=`#`;
        document.body.append(img);
        img.onload=success;
        img.onerror=error;
    }

    function success ()
    {
        console.log(`Загрузка завершена`);
    }

    function error ()
    {
        console.log(`Ошибка загрузки`);
    }

    document.addEventListener(`DOMContentLoaded`, function(){
        addImage(success,error);
    })    

*/

/* lesson 2

function addImage(success, error)
    {
        return new Promise(function(resolve,reject){
                let img=document.createElement(`img`);
                img.src=`#`;
                document.body.append(img);
                img.onload=resolve;
                img.onerror=reject;
            }
        )
    }

    function success ()
    {
        console.log(`Загрузка завершена`);
    }

    function error ()
    {
        console.log(`Ошибка загрузки`);
    }

    document.addEventListener(`DOMContentLoaded`, function(){
        let promise=addImage(success,error);
        promise.then(addImage).then(success).then(error).catch(error);
    })    

*/


/*

async function addImage()
        {
                await new Promise(function(resolve,reject){
                    let img=document.createElement(`img`);
                    img.src=``;
                    document.body.append(img);
                    img.onload=resolve;
                    img.onerror=reject;
                }
            )
            console.log(`Вывод после await promise`);
        }

        function success ()
        {
            console.log(`Загрузка завершена`);
        }

        function error ()
        {
            console.log(`Ошибка загрузки`);
        }

        document.addEventListener(`DOMContentLoaded`, function(){
            addImage().then(addImage).then(success).then(error).catch(error);
            console.log('Вывод в domloaded');
        })     

*/

/* lesson 4

async function img1 ()
    {
        await new Promise (function(resolve,reject){
            let img=document.createElement(`img`);
            img.src=`#`;
            document.body.append(img);
            let img2=document.createElement(`img`);
            img2.src=`#`;
            document.body.append(img2);
            let img3=document.createElement(`img`);
            img3.src=`#`;
            document.body.append(img3);
        })
        console.log(`Все`);
    }
    img1();

*/