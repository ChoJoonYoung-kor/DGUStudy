var Spinbox = function (el) {
  var component = (function (el) {
    if (!el) {
      return
    }
    var i = 0;
    var inputBox;
    var upButton;
    var downButton;
    var elements = el.childNodes;

    function SpinboxComponent() {
      // 객체 바인딩
      for (i = 0; i < elements.length; i += 1) {
        if (elements[i].dataset) {
          if (elements[i].dataset.buttonType === 'input') {
            inputBox = elements[i];
          }
          if (elements[i].dataset.buttonType === 'up') {
            upButton = elements[i];
          }
          if (elements[i].dataset.buttonType === 'down') {
            downButton = elements[i];
          }
        }
      }
      if (!inputBox.value) {
        inputBox.value = '0';
      }

      // 이벤트 초기화
      initEvent();
    }

    function initEvent() {
      console.log('initEvent()');

      // ...생략
      upButton.addEventListener('mousedown', increase);
    }

    function increase() {
      console.log('increase')
    }

    SpinboxComponent.prototype.getInputBox = function() {
      return inputBox;
    };

    SpinboxComponent.prototype.printlog = function() {
      console.log('---------elements----------');
      console.log(inputBox);
      console.log(upButton);
      console.log(downButton);
      console.log('---------------------------');
    };

    SpinboxComponent.prototype.initEvents = function() {
      console.log('initEvents()');
    };

    return SpinboxComponent;
  })(el);

  return new component();
};
