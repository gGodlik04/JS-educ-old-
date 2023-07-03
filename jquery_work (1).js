/* lesson 3
function succses()
        {
            console.log('удачно загружен jQuery ' + $);
        }
        function error()
        {
            console.log('ошибка в загрузке jQuery');
        }

        function loadJqurey(){
            return new Promise (function(resolve, reject){
                let jquery = document.createElement('script');
                jquery.src='https://code.jquery.com/jquery-3.6.4.min.js';
                document.head.append(jquery);
                jquery.onload= resolve;
                jquery.onerror= reject;
            })
        }

*/


/*  lesson 3

<body>
    <script>
        $(document).ready(function()
        {
            let tag= $('#1st');
            console.log($(tag).text());
            let p= $('p');
            for (let m of p)
            {
                console.log($(m).text());
            }
            console.log($(tag).parent().text());
            console.log($(tag).parent().html());
            console.log($(tag).next().html());
        })
    </script>
    <div>
        <p id="1st">Какой-то произвольный текст</p>
        <p id="2st">Что-то на мусульманском, текст не имеющий смысла</p>
        <p id="3rd">Шла саша по шоссеи сосала сушку</p>
    </div>
</body>

*/


/* lesson 4

<body>
    <script>
      $(document).ready(function(){
        let div= $('div');
        let count= 1;
        for (let elem of div)
        {
            if ((count % 2) == 0)
            {
                $(elem).text('измененно');
            }
            count++;
        }
      })
    </script>
    <div>Ветер</div>
    <div>С моря </div>
    <div>Вихри</div>
    <div>Снежные</div>
    <div>Крутя</div>
    <div>То</div>
    <div>Дул</div>
    <div>Нагонял</div>
    <div>Завоет</div>
    <div>Беду</div>
</body>

*/

/* lesson 5

<body>
    <script>
        $(document).ready(function(){
            let url= $('a');
            for (let elem of url)
            {
                if ($(elem).attr('rel'))
                {
                    $(elem).attr('target', '_blank');
                }
            }
        })
    </script>
<a href="" rel=”external”>Ссылка номер 1</a>
<a href="" rel=”external”>Ссылка номер 2</a>
<a href="">Ссылка номер 3</a>
<a href="" rel=”external”>Ссылка номер 4</a>
<a href="" >Ссылка номер 5</a>
</body>

*/


/*  lesson 6

<body>
    <script>
 
        let p;      
        let fontSize=16;
        function More(event)
        {
            event.preventDefault();
            fontSize+=5;
            fontSizeString=fontSize + 'px';
            $('p').css('font-size', fontSize);
            console.log('1ya');
        }
        function Less(event)
        {
            event.preventDefault();
            fontSize-=5;
            fontSizeString=fontSize + 'px';
            $('p').css('font-size', fontSize);
            console.log('2aya');
        }

        $(document).ready(function()
        {
            document.getElementById('1st').addEventListener('click',More);
            document.getElementById('2nd').addEventListener('click',Less);
            console.log('adv');
        })
    </script>

    <p style="font-size: 16px;">Филармо́ния — в некоторых странах: музыкальное общество или учреждение, занимающееся организацией концертов, содействием развитию и пропагандой музыкального искусства.</p>
    <a href="" id="1st">Крупнее<br></a>
    <a href="" id="2nd">Мельче</a>
</body>

*/



/* lesson 7

<body>
    <script>

        $(document).ready(function()
        {
            let p=$('p');
            for (elem of p)
            {
                $(elem).prepend('Здравствуйте это JQuery ');
                $(elem).append(' <i>С Уважением, Автор!</i>');
            }
        })
    </script>

    <p style="font-size: 16px;">Филармо́ния — в некоторых странах: музыкальное общество или учреждение, занимающееся организацией концертов, содействием развитию и пропагандой музыкального искусства.</p>
    <p>Что означает фраза Каждый охотник желает знать где сидит фазан? Каждый охотник желает знать, где сидит фазан (вариант: где сидят фазаны) — мнемоническая фраза, используемая для запоминания основных цветов видимого спектра светового излучения. Является так называемым акростихом</p>
    <a href="" id="1st">Крупнее<br></a>
    <a href="" id="2nd">Мельче</a>
</body>

*/


/*   lesson 8

<body>
    <style>
        img{
            width: 400px;
            height: 250px;
        }
    </style>
    <script>

        $(document).ready(function(){
            $('#1st').click(function(e){
                let img= $('img[src="images/1.jpeg"]');
                img.remove();
                e.target.remove();
            })
            $('#2nd').click(function(e){
                let img= $('img[src="images/2.jpeg"]');
                img.remove();
                e.target.remove();
            })
            $('#3rd').click(function(e){
                let img= $('img[src="images/3   .jpeg"]');
                img.remove();
                e.target.remove();
            })
        })
    </script>
    <img src="images/1.jpeg" alt="">
    <button id="1st">Удалить</button>
    <img src="images/2.jpeg" alt="">
    <button id="2nd">Удалить</button>
    <img src="images/3.jpeg" alt="">
    <button id="3rd">Удалить</button>
</body>

*/



/* lesson 9 

<body>
    <style>
        img{
            width: 400px;
            height: 250px;
        }
    </style>
    <script>

        $(document).ready(function(){
            $('#1st').click(function(e){
                let img= $('img[src="images/1.jpeg"]');
                $(img).animate({
                    'opacity':0
                }, 3500)
                e.target.remove();
            })
            $('#2nd').click(function(e){
                let img= $('img[src="images/2.jpeg"]');
                $(img).animate({
                    'opacity':0
                }, 3500)
                e.target.remove();
            })
            $('#3rd').click(function(e){
                let img= $('img[src="images/3.jpeg"]');
                $(img).animate({
                    'opacity':0
                }, 3500)
                e.target.remove();
            })
        })
    </script>
    <img src="images/1.jpeg" alt="">
    <button id="1st">Удалить</button>
    <img src="images/2.jpeg" alt="">
    <button id="2nd">Удалить</button>
    <img src="images/3.jpeg" alt="">
    <button id="3rd">Удалить</button>
</body>

*/


/*  lesson 10



*/