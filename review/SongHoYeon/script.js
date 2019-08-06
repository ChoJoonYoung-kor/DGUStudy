var boxArr = document.querySelectorAll('.spinbox');
var objArr = new Array();
for (var i = 0; i < boxArr.length; i++)
    objArr.push(new Spinbox(boxArr[i]));


// 3. 왜 밖에서 접근 못하는가. this로 써도
// objArr[i].downBtn.addEventListener("mouseup", objArr[i].BtnUp);
// objArr[i].downBtn.addEventListener("mousedown", objArr[i].UpBtnDown);

// 4. removeEventListener의 사용 위치는?
function Spinbox(boxObj) {
    if (boxObj.hasChildNodes()) {
        var inputBox;
        var upBtn;
        var downBtn;
        var value = 2;
        var mouseDown = false;
        var mouseDownChecker;
        var mouseDownInterval;

        // 1. 왜 함수로 빼면 안되는가
        // BtnUp = function () {

        // };
        // UpBtnDown = function () {

        // }
        // UpBtnDown = function () {

        // }

        // 2. 왜 Update 쓰면 아래div만 먹는가
        Update = function(offset){
            value += offset;
            inputBox.value = value;
        }

        var childrenArr = boxObj.children;
        for (var i = 0; i < childrenArr.length; i++) {
            if (childrenArr[i].dataset) {
                if (childrenArr[i].dataset.buttonType === 'input') {
                    inputBox = childrenArr[i];
                    inputBox.value = value;
                }
                else if (childrenArr[i].dataset.buttonType === 'up') {
                    upBtn = childrenArr[i];
                    upBtn.addEventListener("mouseup", function () {
                        mouseDown = false;
                        clearTimeout(mouseDownChecker);
                        clearInterval(mouseDownInterval);
                    });
                    upBtn.addEventListener("mousedown", function () {
                        mouseDown = true;
                        mouseDownChecker = setTimeout(() => {
                            if (mouseDown)
                                mouseDownInterval = setInterval(() => {
                                    if (mouseDown) {
                                        value += 1;
                                        inputBox.value = value;
                                        // 2.
                                        //Update(1);
                                    }
                                }, 100);
                        }, 500);
                    });
                }
                else if (childrenArr[i].dataset.buttonType === 'down') {
                    downBtn = childrenArr[i];
                    downBtn.addEventListener("mouseup", function () {
                        mouseDown = false;
                        clearTimeout(mouseDownChecker);
                        clearInterval(mouseDownInterval);
                    });
                    downBtn.addEventListener("mousedown", function () {
                        mouseDown = true;
                        mouseDownChecker = setTimeout(() => {
                            if (mouseDown)
                                mouseDownInterval = setInterval(() => {
                                    if (mouseDown) {
                                        value -= 1;
                                        inputBox.value = value;
                                    }
                                }, 100);
                        }, 500);
                    });
                }
            }
        }
    }
}
