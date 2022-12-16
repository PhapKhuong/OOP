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