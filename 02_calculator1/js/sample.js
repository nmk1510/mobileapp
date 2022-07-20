
////////// OKパターン!!!!!!  case1 無名関数...イベントリスナーの中にかく function()
const btn1 = document.getElementById("btn1");
btn1.addEventListener("click", 
    function(event) { // 引数の(event)は、line9,11のようにイベント要素を取得するロジックがあるときに指定。
        const firstName = document.getElementById("firstName").value;
        const lastName = document.getElementById("lastName").value;
        console.log("case1 無名関数")
        console.log(event);
        console.log(this);
        console.log(event.currentTarget);
        console.log(lastName + firstName + "さん、おはよう～(*´▽｀*)");
        console.log("----------")
    }, false
);

////////// OKパターン!!!!!!  case2 関数 引数なし...別に作った関数 greeting2 引数なし を呼び出す。
const btn2 = document.getElementById("btn2"); // 関数 引数なし
btn2.addEventListener("click", greeting2);
 
function greeting2(e) { // 引数の(e)は、line25,27のようにイベント要素を取得するロジックがあるときに指定。
    const firstName = document.getElementById("firstName").value;
    const lastName = document.getElementById("lastName").value;
    console.log("case2 関数 引数なし")
    console.log(e);
    console.log(this);
    console.log(e.currentTarget);
    console.log(lastName + firstName + "さん、こんにちは～(≧▽≦)");
    console.log("----------")
}

////////// NGパターン!!!!!! case3 関数 引数あり... 別に作った関数 greeting3 引数あり を呼び出す。
// 動きません。addEventListenerの第２引数は関数を指定する必要があるが、これだと「関数を実行した結果」を渡していることになり動かない。
const btn3 = document.getElementById("btn3"); // 関数 引数あり

btn3.addEventListener("click", greeting3("おやすみ～"));
//                                       ↑
//                             この指定だと、関数を指定していることにならない。

function greeting3(message) {
    const firstName = document.getElementById("firstName").value;
    const lastName = document.getElementById("lastName").value;
    console.log("case3 関数 引数あり NG!!!!!!!!!")
    console.log(lastName + firstName + "さん" + message);
    console.log("----------")
}

////////// OKパターン!!!!!! case4 関数 引数あり... 別に作った関数 greeting4 引数あり を呼び出す。
btn4 = document.getElementById("btn4"); // 関数 引数あり
btn4.addEventListener("click", {
    message1: "おやすみなさ～い",
    message2: "(-_-)zzz☆彡",
    handleEvent: greeting3
});
 
function greeting3(e) {
    const firstName = document.getElementById("firstName").value;
    const lastName = document.getElementById("lastName").value;
    console.log("case4 関数 引数あり OKパターン!!!!!!")
    console.log(e);
    console.log(this);
    console.log(e.currentTarget);
    console.log(lastName + firstName + "さん、" + this.message1 + this.message2);
    console.log("----------")
}
