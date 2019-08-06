
var spinbox = {
    inputBox: null,
    upButton: null,
    downButton: null,
    isPressed: false,
    initializer: function () {
        var elements = document.querySelector('.spinbox').childNodes;
        console.log(this);
        for (var i = 0; i < elements.length; i += 1) {
            if (elements[i].dataset) {
                if (elements[i].dataset.buttonType === 'input') {
                    this.inputBox = elements[i];
                    console.log("init input");
                }
                else if (elements[i].dataset.buttonType === 'up') {
                    this.upButton = elements[i];
                    // this.upButton.addEventListener('click', function(e){
                    //     this.addNum;
                    // });
                    console.log("init up");
                }
                else if (elements[i].dataset.buttonType === 'down') {
                    this.downButton = elements[i];
                    // this.downButton.addEventListener('click', function(e){
                    //     this.minusNum;
                    // });
                    console.log("init down");
                }
            }
        }
    },
    startPress: function(){
        console.log("startPress");
        this.isPressed = true;
    },
    endPress: function(){
        console.log("endPress");
        this.isPressed = false;
    },
    addNum: function () {
        var curNum = Number(this.inputBox.value);
        curNum += 1;
        this.inputBox.value = curNum;

        window.setTimeout(function(){
            // console.log("setTimeout");
            var timer = window.setInterval(function(){
                // console.log(this);
                // console.log("setInterval", spinbox.isPressed);
                if(spinbox.isPressed){
                    curNum = Number(spinbox.inputBox.value);
                    curNum += 1;
                    spinbox.inputBox.value = curNum;
                }
                else
                    window.clearInterval(timer);
            },50);
        },1000);
    },
    minusNum: function () {
        var curNum = Number(this.inputBox.value);
        curNum -= 1;
        this.inputBox.value = curNum;

        window.setTimeout(function(){
            // console.log("setTimeout");
            var timer = window.setInterval(function(){
                // console.log(this);
                // console.log("setInterval", spinbox.isPressed);
                if(spinbox.isPressed){
                    curNum = Number(spinbox.inputBox.value);
                    curNum -= 1;
                    spinbox.inputBox.value = curNum;
                }
                else
                    window.clearInterval(timer);
            },50);
        },500);
    }
}
spinbox.initializer();