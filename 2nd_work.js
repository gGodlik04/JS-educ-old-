function Point (x,y) {
    this.x =x;
    this.y=y;
    this.y=123;
    this.output= function output () {
        console.log(`значение х= ${x}, значение y= ${this.y}`);
    }
}

/*lesson2{
let rectangle = {
        x: 10,
        y: 20,
        heigh:5,
        width:7
    };
    function outputOfObject(obj)
    {
        for (let key in obj)
        {
            console.log (`свойство ${key}= ${obj[key]}`);
        }
        console.log('');
    }
    outputOfObject(rectangle);
    rectangle.x=432;
    rectangle.y=3421;
    rectangle.heigh=5432;
    rectangle.width=543;
    outputOfObject(rectangle);
}*/

/* lesson3
function Rectangle (x,y,heigh,width)
       {
            this.x=x;
            this.x=y;
            this.heigh=heigh;
            this.width=width;
       }
       function OutputOfArea (obj)
       {
            let x= obj.heigh *obj.width;
            console.log(`Площадь прямоугольника= ${x}`);
       }
       let obj=new Rectangle(15,32,65,32);
       OutputOfArea(obj);
*/

/* lesson5
       function Rectangle (x,y,heigh,width)
       {
            this.x=x;
            this.y=y;
            this.heigh=heigh;
            this.width=width;
            this.OutputOfArea= function(){
                let x= this.heigh *this.width;
                console.log(`Площадь прямоугольника= ${x}`);
            }
            this.toString=function()
            {
                console.log(`Прямоугольник с координатами (${this.x}; ${this.y}) шириной = ${this.width}  высотой= ${this.heigh}`);
            }
            this.valueOf=function()
            {
                this.OutputOfArea();
            }
       }
       let obj=new Rectangle(15,32,65,32);
       obj.OutputOfArea(); 
       obj.toString();
       obj.valueOf();
*/

/* lesson6-7
class Rectangle 
       {
            _x;
            _y;
            _heigh;
            _width;
            constructor (x,y,heigh,width)
            {
            this._x=x;
            this._y=y;
            this._heigh=heigh;
            this._width=width;
            }
            get Area(){
                let x= this._heigh *this._width;
                console.log(`Площадь прямоугольника= ${x}`);
            }
            get width ()
            {
                return this._width;
            }
            get heigh ()
            {
                return this._heigh;
            }
            set heigh (value)
            {
               if (value<0)  throw new Error (`значение меньше нуля`)
               else this._heigh=value ;
            }
            set width (value)
            {
               if (value<0)  throw new Error (`значение меньше нуля`)
               else this._width=value ;
            }
            toString()
            {
                console.log(`Прямоугольник с координатами (${this._x}; ${this._y}) шириной = ${this._width}  высотой= ${this._heigh}`);
            }
            valueOf()
            {
                this.Area;
            }
       }
       let obj=new Rectangle(15,32,65,32);
       try{
        obj.Area;
        obj.toString();
        obj.valueOf();
        console.log(`x= ${obj.heigh}`);
        obj.heigh=500;
        console.log(`x= ${obj.heigh}`);
        console.log(`ширина= ${obj.width}`);
        obj.width=432;
        obj.width;
        obj.heigh=-500;
        obj.width=-432;
       }
       catch(e){
        console.log (e);
       }
*/ 

/* lesson 8
class Rectangle 
       {
            _x;
            _y;
            _heigh;
            _width;
            static counter=0;
            constructor (x,y,heigh,width)
            {
            this._x=x;
            this._y=y;
            this._heigh=heigh;
            this._width=width;
            Rectangle.counter++;
            }
            get Area(){
                let x= this._heigh *this._width;
                console.log(`Площадь прямоугольника= ${x}`);
            }
            get width ()
            {
                return this._width;
            }
            get heigh ()
            {
                return this._heigh;
            }
            set heigh (value)
            {
               if (value<0)  throw new Error (`значение меньше нуля`)
               else this._heigh=value ;
            }
            set width (value)
            {
               if (value<0)  throw new Error (`значение меньше нуля`)
               else this._width=value ;
            }
            static getCounter ()
            {
                return counter;
            }
            toString()
            {
                console.log(`Прямоугольник с координатами (${this._x}; ${this._y}) шириной = ${this._width}  высотой= ${this._heigh}`);
            }
            valueOf()
            {
                this.Area;
            }
       }
       let obj=new Rectangle(15,32,65,32);
       try{
        obj.Area;
        obj.toString();
        obj.valueOf();
        console.log(`x= ${obj.heigh}`);
        obj.heigh=500;
        console.log(`x= ${obj.heigh}`);
        console.log(`ширина= ${obj.width}`);
       }
       catch(e){
        console.log (e);
       }
       let obj1=new Rectangle(15,32,65,32);
       let obj2=new Rectangle(15,32,65,32);
       let obj3=new Rectangle(15,32,65,32);
       let obj4=new Rectangle(15,32,65,32);
       console.log(`counter= ${Rectangle.counter}`);
*/

/* lesson9
class Car 
        {
            x=0;
            y=0;
            color=``;
            gear=``;
            move(x,y)
            {
                this.x=x;
                this.y=y;
                console.log(`машина передвинулась на коорд. х=${this.x}, y=${this.y}`);
            }
        }

        class TeslaCar extends Car
        {
            electroStyle=``;
            move(x,y)
            {
                this.x=x;
                this.y=y;
                console.log(`Tesla передвинулась на коорд. х=${this.x}, y=${this.y}`);
            }
        }
        let car1=new Car();
        let car2=new TeslaCar();
        car1.move(4,5);
        car1.move(45,53);
        car2.move(54,64);
*/

/* lesson 10
 class Rectangle 
        {
            _width=1;
            _heigh=1;
            get width ()
            {
                return this._width;
            }
            get heigh ()
            {
                return this._heigh
            }
            set width(value)
            {
                let bool1=this.erorrs(value)
                if (bool1==true)
                this._width=value;
            }
            set heigh(value)
            {
                let bool1=this.erorrs(value)
                if (bool1==true)
                this._heigh=value;
            }
            erorrs (value)
            {
                if (value<=0)
                {
                    return false;
                }
                else 
                {
                    return true;
                }
            }
        }
        let shape= new Rectangle();
        console.log(`значение ширины= ${shape.width}`);
        console.log(`значение высоты= ${shape.heigh}`);
        shape.heigh=99;
        shape.width=99;
        console.log(`значение ширины= ${shape.width}`);
        console.log(`значение высоты= ${shape.heigh}`);
*/

/* lesson11 c ошибкой почему-то, не работает смена флагов
class Rectangle 
        {
            x=0;
            y=0;
            width=0;
            heigh=0;
            constructor (x,y,heigh,width)
            {
                this.x=x;
                this.y=y;
                this.heigh=heigh;
                this.width=width;
            }
        }
        shape=new Rectangle(32,43,23,65);
        let descriptor1=Object.getOwnPropertyDescriptor(shape,`x`);
        let descriptor2=Object.getOwnPropertyDescriptor(shape,`y`);
        let descriptor3=Object.getOwnPropertyDescriptor(shape,`heigh`);
        let descriptor4=Object.getOwnPropertyDescriptor(shape,`width`);
        console.log(descriptor1);
        console.log(descriptor2);
        console.log(descriptor3);
        console.log(descriptor4);
        Object.defineProperties(shape,'x',{
            writable:false,
            enumerable:false,
            configurable: false
        })
        shape.x=3213213;
        console.log (``);
        console.log(descriptor1);
        console.log(descriptor2);
        console.log(descriptor3);
        console.log(descriptor4);
*/