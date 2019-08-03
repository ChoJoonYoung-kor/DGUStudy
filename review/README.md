## 스핀박스 과제

```html
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <title>Spinbox</title>
  </head>
  <body>
    <div class='spinbox'>
      <input type="number" data-button-type='input' value="0"/>
      <button type="button" data-button-type='up' onmousedown=null>
        ▲
      </button>
      <button type="button" data-button-type='down' onmousedown=null>
        ▼
      </button>
    </div>
   </body>
  </html>
```

```javascript
  var i = 0;
  var elements = document.querySelector('.spinbox').childNodes;
  var inputBox, upButton, downButton;

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
```
---

##### 과제 스펙
- 마우스가 up & down button에 맞게 작동
- 만약 사용자가 일반문자 입력시 숫자만 필터링 처리   ex) '123sdasd5' -> 1235
- 사용자가 up button 클릭을 계속 누를경우, mouse up 없이 계속 숫자가 증가하도록 처리 (down도 똑같이)

##### 바라는 사항
- 반드시 ES5 prototype을 사용
- 객체지향을 사용하여 여러개 div가 들어왔을때 처리
- 이벤트콜백 사용시 생성과 소멸 -> 이벤트 함수 소거도 공부해볼것(removeeventlistener)


# html, js 파일 같이 작성하지 말것! 분리 필수!! 
