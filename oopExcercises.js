// Bài tập: Xây dựng lớp mô tả hình chữ nhật

class Rectangle
    {
        constructor(height, width)
            {
                this.height = height;
                this.width = width;
            };
        setHeight(newHeight)
            {
                this.height = newHeight;
            };
        setWidth(newWidth)
            {
                this.width = newWidth;
            };
        calculateArea()
            {
                return this.height * this.width;
            };
        calculatePerimeter()
            {
                return 2 * (this.height + this.width);
            };
    };

function showInfoRec()
    {
        let h = +document.getElementById("inputHeight").value;
        let w = +document.getElementById("inputWidth").value;
        let rec = new Rectangle(h, w);
        document.getElementById("result11").innerText = "Diện tích hình chữ nhật là: " + rec.calculateArea();
        document.getElementById("result12").innerText = "Chu vi hình chữ nhật là: " + rec.calculatePerimeter();

        let ctx = document.getElementById("myRec").getContext('2d');
        ctx.fillRect (0, 0, w, h);
    };


    
// Bài tập: Xây dưng lớp mô tả Temperature

class Temperature
    {
        constructor(t)
            {
                this.t = t;
            };
        setT(newT)
            {
                this.t = newT;
            };
        convertToFahrenheit()
            {
                return (this.t * 1.8) + 32;
            };
        convertToKelvin()
            {
                return this.t + 273.15;
            };
    };

function showOtherUnits()
    {
        let c = +document.getElementById("inputCelcius").value;
        let tem = new Temperature(c);
        document.getElementById("result21").innerText = "Kết quả đổi sang độ F: " + tem.convertToFahrenheit();
        document.getElementById("result22").innerText = "Kết quả đổi sang độ K: " + tem.convertToKelvin();
    };


// Bài tập: Ứng dụng mô phỏng câu chuyện Adam và Eva

class Apple
    {
        constructor (weight)
            {
                this.weight = weight;
            };
        setWeight (newWeight)
            {
                this.weight = newWeight;
            };
        decrease()
            {
                return this.weight--;
            };
        isEmpty()
            {
                if (this.weight === 0) return true;
                else return false;
            };
    };

class Human
    {
        constructor (name, gender, weight)
            {
                this.name = name;
                this.gender = gender;
                this.weight = weight;
            };
        setName (newName)
            {
                this.name = newName;
            };
        setGender (newGender)
            {
                this.gender = newGender;
            };
        setWeight (newWeight)
            {
                this.weight = newWeight;
            };
        checkApple(forApple)
            {
                if (forApple.isEmpty()) return true;
            };
        eatApple()
            {
                this.weight++;
            };
        saySth(str)
            {
                alert (str);
            };
    };

function enjoyApple()
    {
        let adam = new Human();
        adam.setName ('Adam');
        adam.setGender (true);
        adam.setWeight (75);

        let eva = new Human();
        eva.setName ('eva');
        eva.setGender (false);
        eva.setWeight (60);

        let apple = new Apple();
        apple.setWeight(+prompt("Táo to bao nhiêu?"));

        while (true)
            {
                adam.saySth ("Anh ăn nhé!");
                adam.eatApple();
                apple.decrease();
                if (!adam.checkApple (apple))
                    {
                        adam.saySth ("Eva! Em ăn đi!");
                        eva.saySth ("Vâng. Em ăn đây!");
                        eva.eatApple();
                        apple.decrease();
                    }
                else 
                    {
                        adam.saySth ("Eva! Hết mất rồi em!");
                        break;
                    };
                if (!adam.checkApple (apple)) eva.saySth ("Adam! Anh ăn đi!");
                else 
                    {
                        eva.saySth ("Adam! Hết mất rồi anh!");
                        break;
                    };
            };
    };