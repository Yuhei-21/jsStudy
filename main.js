// document.addEventListener('DOMContentLoaded',function(event){

//   //変数
//   //値を一時的に保存してくれる箱
//   // var a = 5*10

//   //変数の名前のつけ方
//   //数字からスタートはダメ
//   //全角文字はダメ
//   //誰しもが意味がわかる名前じゃないとダメ

//   //変数の種類
//   //var
//   //let
//   //const
//   //変数はPCのメモリに保存されている
//   //メモリの大きいPCはたくさんの変数が使える
//   //メモリがオーバーして足りなくなった場合ハードディスクがメモリの代わりを果たそうとする
//   //ハードディスクはメモリに比べて書き込み、読み込みスピードが非常に遅いので実行スピードが遅くなる
//   //var : let,const
//   //varはメモリの保存期間が長い（スコープ外に処理が移動しても保持される）
//   //let,constはメモリの保持期間が短い（スコープ内のみで保持される）
//   //letは変更（代入）可能な変数 constは変更（代入）不可の変数
//   // let b = 50
//   // const c = b * 3
//   // // c = 20
//   // b = 5000

//   // alert(b)
//   // alert(c)

//   //四則演算
//   // let a = 10
//   // let b = 15

//   // a = a + b
//   // a = a - b
//   // a = a * b
//   // a = a / b

//   // a = a + a + b * (b + b) / 5

//   //0除算
//   //特定の値を0で割ること　値が無限になるのでやばい　PCの概念では無限は存在しない
//   // b = 0
//   // a = a / b

//   // alert(a)

//   //配列
//   //りんごの甘さのデータを保持する変数があるとする
//   //一つなら変数名はappleでいい
//   //仮にりんご100個の甘さのデータをそれぞれ持つ場合
//   //100個の名前を考えるのは現実的ではない
//   //こういう多くのデータを管理する時に使う概念が配列
//   let apples = [8, 10, 6, 9, 5]

//   //配列の〜番目を指し示す数字（index）は0始まり
//   // alert(apples[4])

//   //繰り返し処理（for文）
//   //同じような動作を繰り返し行うための構文
//   //※超重要※
//   //for(初期化；継続条件；1ループごとの処理)
//   //i++　インクリメント後置
//   //i = i + 1と同じ意味
//   //++i　インクリメント前置
//   // for(let i = 0; i < apples.length; ++i){
//   //   alert(apples[i])
//   // }

//   //条件分岐（if文）
//   //特定の条件の時に実行したい処理を分ける構文
//   //※超重要※
//   // let a = prompt(('数字を入力してね'))
//   // if(a > 10){
//   //   alert('大きい')
//   // }
//   //比較演算子
//   // < 小なり　右辺より左辺が小さい時に正となる
//   // <= 小なりイコール　右辺が左辺と同じか小さい時に正となる
//   // < 大なり　右辺より左辺が大さい時に正となる
//   // <= 大なりイコール　右辺が左辺と同じか大さい時に正となる
//   // == 右辺と左辺が同じ時に正となる
//   // === 右辺と左辺の型と値が同じ時に正となる
//   // == 右辺と左辺が同じ時に正となる

//   // let a = 1
//   //正であれば実行される
//   //負であれば実行されない
//   // let b = '20'
//   // let c = b * 5
//   // alert(c)

//   // if(a){
//   //   alert("実行されるか？")
//   // }

//   //  let a = prompt(('数字を入力してね'))
//   //   if(a == 3){
//   //     alert('3です')
//   //   }
//   //   else{
//   //     alert('3以外です')
//   //   }

//   //入力された値を変数cに文字列として保持し、そのcの型がどんな型なのかを正規表現でチェックする
//   //判断すべき型
//   //数値NUMERIC 日付DATE 文字列STRING BOOL(true or false)
//   //日時のフォーマット 2020-01-01T00:00:00+09:00
//   //日付のフォーマット 2020-01-01

//   let c = prompt(('入力してください'))

//   var time = /^[0-9]{4}\-[0-9]{2}\-[0-9]{2}\T[0-9]{2}\:[0-9]{2}\:[0-9]{2}\+[0-9]{2}\:[0-9]{2}$/;
//   var date = /^[0-9]{4}\-[0-9]{2}\-[0-9]{2}$/;
//   var numeric = /^[-]?([1-9]\d*|0)(\.\d+)?$/;

//   var result1 = c.match(time);
//   var result2 = c.match(date);
//   var result3 = c.match(numeric);

//   if(result1){
//     alert("日時です")
//   }
//   else if(result2){
//     alert("日付です")
//   }
//   else if(result3){
//     alert("数値です")
//   }
//   else{
//     alert("文字列です")
//   }
// })

// console.log("Hello Nodejs")

//オブジェクト
//名前付き配列 辞書型
// let arr = [1,3,6,8]
// let obj = {
//   kinoshita:1,
//   tanaka:3,
//   hirayama:5
// }
// //配列に名前がついただけ、名前のことをkeyと呼ぶ
// //参照の仕方
// console.log(obj.tanaka)
// console.log(obj['kinoshita'])

// let scores = {
//   kinoshita: {
//     japanese: 70,
//     math: 40,
//     english: 20
//   },
//   tanaka:{
//     japanese: 40,
//     math: 80,
//     english: 70
//   },
//   hirayama:{
//     japanese: 50,
//     math: 50,
//     english: 50
//   }
// }

// console.log(scores.kinoshita.japanese)

// let scores = [
//   {
//     name: "kinoshita",
//     japanese: 70,
//     math: 40,
//     english: 80
//   },
//   {
//     name: "tanaka",
//     japanese: 90,
//     math: 60,
//     english: 20
//   },
//   {
//     name: "hirayama",
//     japanese: 20,
//     math: 80,
//     english: 70
//   }
// ]

// for(let i = 0; i < scores.length; ++i){
//   if(scores[i].japanese < 50){
//     console.log(scores[i].name + (" 国語赤点"))
//   }
//   if(scores[i].math < 50){
//     console.log(scores[i].name + (" 数学赤点"))
//   }
//   if(scores[i].english < 50){
//     console.log(scores[i].name + (" 英語赤点"))
//   }
// }

// const select = 0
// const blog = [
//   {
//     title:"a",
//     date:"2020-01-01",
//     text:"sample1"
//   },
//   {
//     title:"b",
//     date:"2020-02-01",
//     text:"sample2"
//   },
//   {
//     title:"c",
//     date:"2020-03-01",
//     text:"sample3"
//   }
// ]
// const readline = require('readline').createInterface({
//   input: process.stdin,
//   output: process.stdout
// });

// readline.question('titleを入力してください', (answer) => {

//   for(let i = 0; i < blog.length; ++i){
//     if(blog[i].title == `${answer}`){
//       console.log(blog[i])
//     }
//   }
//   readline.close();
// });

//ゲームのキャラクターの一覧のデータ
const charctar = [
  {
    name:"クラウド",
    lv:23,
    items:[]
  },
  {
    name:"ライトニング",
    lv:30,
    items:[]
  }
]

const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
  });

readline.question('追加するキャラクターを選んでください', (answer1) => {
  readline.question('追加するアイテムを選んでください', (answer2) => {
    for(let i = 0; i < charctar.length; ++i){
      if(charctar[i].name == `${answer1}`){
        charctar[i].items.push(`${answer2}`);

        var data = `${answer2}`;
        // console.log(data)
        JSON.stringify(data);
        var fs = require('fs');
        fs.writeFile(charctar[i].items, data);

      }
    }
    for(let i = 0; i < charctar.length; ++i){
      console.log(charctar[i])
    }
    readline.close()
  });
});