# Splitting.js

## [What is Splitting?](https://splitting.js.org/guide.html#what-is-splitting):

- 小さな[プラグイン](https://splitting.js.org/guide.html#plugins) の集まり
- これらは要素を分割します

    - [単語分割(wrods)](https://splitting.js.org/guide.html#words)
    - [文字分割(chars)](https://splitting.js.org/guide.html#chars)
    - [子要素分割(items)](https://splitting.js.org/guide.html#items)
    - その他...

- アニメーション自体はおこなわないが、他のJS/CSSで可能

Splitting.jsフロー

1. ターゲット要素(`target`)に `Splitting() ` を呼び出す
2. `target` の下に `<span>` をつくる / あるいは`target` の子供をクエリする
3. `<span>` に通し番号を振る : `<span class="word" style="--word-index: 0">`
4. `target` 要素に合計を設定する: `<div data-splitting style="--word-total: 3">`
5. [分割した配列を返す](https://splitting.js.org/guide.html#returns)
6. これらを CSS/JS でアニメーションかける

## 基本

~~~html
<div data-splitting>ABC</div>
<script>
  Splitting();
</script>
~~~

処理されたDOM:

~~~html
<div data-splitting class="words chars splitting" style="--word-total:1; --char-total:3;">
  <span class="word" data-word="ABC" style="--word-index:0;">
    <span class="char" data-char="A" style="--char-index:0;">A</span>
    <span class="char" data-char="B" style="--char-index:1;">B</span>
    <span class="char" data-char="C" style="--char-index:2;">C</span>
  </span>
</div>
~~~

ABCとしてみえるが、３つの文字にアニメーションをかけることができる
