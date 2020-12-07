# 関数

## 残余引数(Rest Parameters)

- [MDN](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Functions/rest_parameters)

~~~js
function myFun(a,  b, ...restParams) {
  console.log("a", a)
  console.log("b", b)
  console.log("Rest Parameters", restParams)
}
~~~
