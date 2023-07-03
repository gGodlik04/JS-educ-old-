/* lesson 1


    <script>
    async function randomNumber()
    {
        let response = await fetch ('lesson1.php')
        if (response.status == 200)
            {
                let number = await response.text();
                let elem = document.createElement('p');
                elem.innerHTML= `сгенерированное число = `+number;
                let toRemove= document.getElementById(`number`);
                let elem2= document.querySelector(`p`);
                elem2.parentNode.removeChild(elem2);
                toRemove.append(elem);
            }
    }
        
    document.addEventListener('DOMContentLoaded', function(){
        document.getElementById(`buttonPHP`).addEventListener(`click`, randomNumber);
    })    
</script>
<button id="buttonPHP">Сгенерировать случайное число.</button>
    <div id="number">
        <p></p>
    </div>


    php <?php echo mt_rand(1, 100); ?>
*/



/* lesson 2

<script>
    async function randomNumber()
    {
        let number1= document.querySelector(`input[name="1st"]`).value;
        let number2= document.querySelector(`input[name="2nd"]`).value;

        console.log(number1 + number2);

        let response = await fetch ('lesson1.php', {
            method: 'POST',
            headers: {'Content-Type':'application/json;charset=utf-8'},
            body: JSON.stringify({'x':number1, 'y':number2}),
        });
        if (response.status == 200)
            {
                let number = await response.text();
                let elem = document.createElement('p');
                elem.innerHTML= `сгенерированное число = `+number;
                let toRemove= document.getElementById(`number`);
                let elem2= document.querySelector(`p`);
                elem2.parentNode.removeChild(elem2);
                toRemove.append(elem);
            } 
    }
      
    document.addEventListener('DOMContentLoaded', function(){
        document.getElementById(`buttonPHP`).addEventListener(`click`, randomNumber);
    })    
</script>
    <input type="text" name="1st">
    <input type="text" name="2nd">
    <button id="buttonPHP">Сгенерировать случайное число.</button>
    <div id="number">
        <p></p>
    </div>

/*



/*  lesson3

let input;


    async function sendFile()
    {
        let file= event.target.files[0];
        let response= await fetch('lesson3.php', {
            method: `POST`,
            body: file
        });

        if(response.ok)
        {
            let fileh= await response.text();
            let url= document.createElement(`a`);
            url.innerHTML= fileh;
            url.href=fileh;
            inputname= document.querySelector(`form`);
            inputname.append(url);
        }
        else 
        {
            console.log(`Error`);
        }
    }

    document.addEventListener(`DOMContentLoaded`, function(event){
        input= document.querySelector(`input[name="files"]`);
        input.addEventListener(`change`,sendFile);
    })
</script>
<form name="myForm">
    <input type="file" name="files">
</form>

*/


/*

<body>
    <script>
        async function randomNumber(event)
        {
            event.preventDefault();
            let number1= document.querySelector(`input[name="x"]`).value;
            let number2= document.querySelector(`input[name="y"]`).value;
    
            console.log(number1 + number2);
    
            let response = await fetch ('lesson4.php', {
                method: 'POST',
                body: new FormData(event.target),
            });
            if (response.ok)
                {
                    let number = await response.text();
                    let elem = document.createElement('p');
                    elem.innerHTML= `сгенерированное число = `+number;
                    let toRemove= document.getElementById(`number`);
                    let elem2= document.querySelector(`p`);
                    elem2.parentNode.removeChild(elem2);
                    toRemove.append(elem);
                } 
        }
          
        document.addEventListener('DOMContentLoaded', function(){
            document.querySelector(`form`).addEventListener(`submit`, randomNumber);
        })    
    </script>
    <form name="myForm">
            <input type="text" name="x">
            <input type="text" name="y">
            <input type="submit" name="sbutton" value="Отправить">
            <div id="number">
                <p></p>
            </div>
    </form>
</body>

*/

/* lesson 5

<body>
    <script>
        async function frequentRequest ()
        {
            let response= await fetch ('lesson5.php',{
                method: `POST`
            })
            if (response.ok)
            {
                let text= await response.text();
                let elem= document.createElement('p');
                elem.innerHTML=text;
                let div=document.querySelector(`div`);
                div.append(elem);
            }
            setTimeout (frequentRequest, 1000);
            }
        frequentRequest();
    </script>
    <div>
    </div>

    */


    /* lesson 6

    <body>
    <script>

        async function openTab(event)
        {
            let response;
            
            let ptag= document.querySelector('p');
            ptag.parentNode.removeChild(ptag);

            switch (event.target.id)
            {
                case '1st':
                    console.log('1aya');
                    response= await fetch('lesson6-1.php',{
                        method:'POST'
                    });
                    break;
                case '2nd':
                console.log('2aya');
                    response= await fetch('lesson6-2.php',{
                        method:'POST'
                    });
                    break;
                case '3rd':
                console.log('3aya');
                    response= await fetch('lesson6-3.php',{
                        method:'POST'
                    });
                    break;
            }

            let text= await response.text();
            let p= document.createElement('p');
            p.innerHTML=text;
            event.target.append(p);
        }

        document.addEventListener("DOMContentLoaded",function(){
            document.getElementById('1st').addEventListener('click',openTab);
            document.getElementById('2nd').addEventListener('click',openTab);
            document.getElementById('3rd').addEventListener('click',openTab);
        })
    </script>
    <div>
        <p></p>
        <a id="1st" class="href">Вкладка #1<br></a>
        <a id="2nd" class="href">Вкладка #2<br></a>
        <a id="3rd" class="href">Вкладка #3<br></a>
    </div>
</body>

*/