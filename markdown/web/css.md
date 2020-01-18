# CSS関連

## クラスの追加、削除

~~~js
const selectios = [{navi: access}, ....];   

function toggleNavi(i) {
    sections.forEach(function (el) {
      if (i === el) {
        el.navi.classList.add('highlight')
      } else {
        el.navi.classList.remove('highlight');
      }
    });
  }
~~~
