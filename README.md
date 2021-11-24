<h1>QJS</h1>
Это очень легковесный файл, который содержит в себе функции, константы и другое...
Которые призваны улучшить опыт написание простейших програм на Java Script

<h2>Это некоторые из примеров использования:</h2>
- Для того чтоб получить элемент по селектору, достаточно воспользоваться функцией

<pre>
    <code>get(selectorName, parrentNode='document');</code>
</pre>

<b><i>selectorName</i></b> это селектор который мы ищем в DOM, а второй параметр это элемент
где будет происходить поиск. Если вы не указали элемент в котором будет осуществлен поиск, то будет
использоваться <b>document</b>.


<h2>Вот как выглядит код без искользования <b>QJS<b></h2>
<pre>
    <code>
        function get(selectorElement, parentElement) {
            if(!parentElement) {
                parentElement = document;
            }
            return parentElement.querySelector(selectorElement);
        }
    </code>
</pre>
<hr>