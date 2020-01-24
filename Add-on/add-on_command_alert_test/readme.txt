readme

Alt+A,Alt+W押下でそれぞれアラートを表示する。
ブラウザの上部ではなく、メインディスプレイのど真ん中にアラートが出る。
操作不能に陥ったと思わないように。

アイコンデザインはなにか決定次第差し替えてください。

===開発者備忘録===
backgroundは非推奨でcontent_scriptsのほうが良いらしい。
でもコマンドはbackgroundじゃないと動かん
以下はcontent_scripts用
//chrome.browserAction.onClicked.addListener(function(tab) {
 // alert("test");
//});
BackGroundと共存はできない。

