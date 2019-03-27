# ブラウザでの利用

~~~html
<div id="message"></div>
~~~

~~~html
<script src="//cdnjs.cloudflare.com/ajax/libs/nunjucks/3.0.1/nunjucks.js"></script>
<script>
  var env = new nunjucks.Environment(new nunjucks.WebLoader('/static/tickets/nunjucks'));
  var template = env.getTemplate('ticketorder/thanks.html');
  $(function () {
    $("#message").html(nunjucks.render(template, {
      id: 999
    }));
  })
</script>
~~~