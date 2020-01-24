readme

Alt+A,Alt+W押下でそれぞれアラートを表示する。
ブラウザの上部ではなく、メインディスプレイのど真ん中にアラートが出る。
操作不能に陥ったと思わないように。

アイコンデザインはなにか決定次第差し替えてください。


他にコマンドとして使用可能な候補は
Alt+の場合「Q,A,Z,S,X,C」などです。「E,D,F」は使用できませんでしたが使用できないキーは他にもあると思われます。
(※他のショートカットで使用されているため使用できない)
Alt+Shit、Ctrl+Shiftなどの場合、殆どのキーが使用可能となると思われます。

===開発者備忘録===
backgroundは非推奨でcontent_scriptsのほうが良いらしい。
でもコマンドはbackgroundじゃないと動かん
以下はcontent_scripts用

//  "content_scripts": [
//  {
//  "matches": [ "http://*/*", "https://*/*" ],
//    "js": [ "background.js" ]
//  }],

//chrome.browserAction.onClicked.addListener(function(tab) {
// alert("test");
//});
BackGroundと共存はできない。

