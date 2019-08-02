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
      <input type="number" value="0"/>
      <button type="button" onclick=null />
      ▲
      <button type="button" onclick=null />
      ▼
    </div>
   </body>
  </html>
```
---

##### 과제 스펙
- 마우스가 up & down button에 맞게 작동
- 만약 사용자가 일반문자 입력시 숫자만 필터링 처리   ex) '123sdasd5' -> 1235
- ▲ 버튼 또는 ▼ 버튼을 누르고 있으면 처음 누르기 시작한지 0.5초 후부터 0.1초마다 1씩 증감

##### 바라는 사항
- 반드시 ES5 prototype을 사용
- 객체지향을 사용하여 여러개 div가 들어왔을때 처리
- 이벤트콜백 사용시 생성과 소멸 -> 이벤트 함수 소거도 공부해볼것(removeeventlistener)


# html, js 파일 같이 작성하지 말것! 분리 필수!! 
