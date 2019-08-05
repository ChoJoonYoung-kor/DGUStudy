
var spinbox = {
  inputBox: null,
  upButton: null,
  downButton: null,
  initializer: function() {
    var elements = document.querySelector('.spinbox').childNodes;
    console.log(this);
    for (var i = 0; i < elements.length; i += 1) {
      if (elements[i].dataset) {
        if (elements[i].dataset.buttonType === 'input') {
          this.inputBox = elements[i];
          // console.log(elements[i]);
          // console.log(this.inputBox);
        }
        else if (elements[i].dataset.buttonType === 'up') {
          this.upButton = elements[i];
          // console.log(elements[i]);
          // console.log(this.upButton);
        }
        else if (elements[i].dataset.buttonType === 'down') {
          this.downButton = elements[i];
          // console.log(elements[i]);
          // console.log(this.downButton);
        }
      }
      // console.log(elements[i]);
    }
  },
  addNum: function() {
    // console.log(this.inputBox);
    var curNum = Number(this.inputBox.value);
    curNum += 1;
    this.inputBox.value = curNum;
  },
  minusNum: function() {
    var curNum = Number(this.inputBox.value);
    curNum -= 1;
    this.inputBox.value = curNum;
  }
}
spinbox.initializer();
