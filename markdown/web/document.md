# Document

- [MDN:開発者向けのウェブ技術 > Web API>Document](https://developer.mozilla.org/ja/docs/Web/API/Document)

## getElementById

- [Document.getElementById() - Web API インターフェイス | MDN](https://developer.mozilla.org/ja/docs/Web/API/Document/getElementById)

~~~js
function changeColor(newColor) {
  var elem = document.getElementById('para');
  elem.style.color = newColor;
}
~~

## スクロールポジション `scrollTop()`

~~~js

const selections = [{navi: access, offset: 900}, ....];

 $(window).scroll(function () {

    var top = $(document).scrollTop() + 180;
    const el = sections.find(function (i) {
      return top > i.offset;
    })

    toggleNavi(el);
})
~~~
