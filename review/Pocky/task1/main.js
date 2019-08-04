var i = 0;
var elements = document.querySelector('.spinbox').childNodes;
var spinbox = new Initializer(elements);

function Initializer(ele) {
    for (i = 0; i < ele.length; i += 1) {
        if (ele[i].dataset) {
          if (ele[i].dataset.buttonType === 'input') {
            this.inputBox = elements[i];
          }
          if (ele[i].dataset.buttonType === 'up') {
            this.upButton = elements[i];
          }
          if (ele[i].dataset.buttonType === 'down') {
            this.downButton = elements[i];
          }
        }
      }
}
function addNum (){
    var curNum = Number(spinbox.inputBox.value);
    curNum += 1;
    spinbox.inputBox.value = curNum;
}
function minusNum (){
    var curNum = Number(spinbox.inputBox.value);
    curNum -= 1;
    spinbox.inputBox.value = curNum;
}