
var ele_spinbox = document.querySelectorAll('.spinbox');
var obj_spinbox = [];
function spinbox (){
    this.inputBox = null;
    this.upButton = null;
    this.downButton = null;
    this.isPressed = false;
    this.initializer = function (ele_box) {
        var elements = ele_box.childNodes;
        for (var i = 0; i < elements.length; i += 1) {
            if (elements[i].dataset) {
                if (elements[i].dataset.buttonType === 'input') {
                    this.inputBox = elements[i];
                    // console.log("init input");
                }
                else if (elements[i].dataset.buttonType === 'up') {
                    this.upButton = elements[i];
                    this.upButton.addEventListener('click', this.addNum.bind(this));
                    this.upButton.addEventListener('mousedown', this.addNum.bind(this));
                    this.upButton.addEventListener('mouseup', this.addNum.bind(this));
                    this.upButton.addEventListener('mousedown', this.checkPress.bind(this));
                    this.upButton.addEventListener('mouseup', this.checkPress.bind(this));
                    // console.log("init up");
                }
                else if (elements[i].dataset.buttonType === 'down') {
                    this.downButton = elements[i];
                    this.downButton.addEventListener('click', this.minusNum.bind(this));
                    this.downButton.addEventListener('mousedown', this.minusNum.bind(this));
                    this.downButton.addEventListener('mouseup', this.minusNum.bind(this));
                    this.downButton.addEventListener('mousedown', this.checkPress.bind(this));
                    this.downButton.addEventListener('mouseup', this.checkPress.bind(this));
                    // console.log("init down");
                }
            }
        }
    }
    this.checkPress = function(event){
        // console.log("startPress", event.type);
        if(event.type === "mousedown")
            this.isPressed = true;
        else
            this.isPressed = false;
    }
    this.addNum = function (event) {
        // console.log("addNum");
        var curNum = Number(this.inputBox.value);
        if(event.type === "click"){
            curNum += 1;
            this.inputBox.value = curNum;
        }
        else{
            window.setTimeout(function () {
                var timer = window.setInterval(function () {
                    // console.log(this.isPressed);
                    if (this.isPressed) {
                        curNum = Number(this.inputBox.value);
                        curNum += 1;
                        this.inputBox.value = curNum;
                    }
                    else
                        window.clearInterval(timer);
                }.bind(this), 50);
            }.bind(this), 1000);
        }
    }
    this.minusNum = function (event) {
        // console.log("minusNum");
        var curNum = Number(this.inputBox.value);
        if (event.type === "click") {
            curNum -= 1;
            this.inputBox.value = curNum;
        }
        else{
            window.setTimeout(function () {
                var timer = window.setInterval(function () {
                    // console.log(this.isPressed);
                    if (this.isPressed) {
                        curNum = Number(this.inputBox.value);
                        curNum -= 1;
                        this.inputBox.value = curNum;
                    }
                    else
                        window.clearInterval(timer);
                }.bind(this), 50);
            }.bind(this), 500);
        }
    }
}
for (var i = 0; i < ele_spinbox.length; i += 1) {
    var newobj = new spinbox(ele_spinbox[i]);
    newobj.initializer(ele_spinbox[i]);
    obj_spinbox.push(newobj);
}