

//いいねを消し去る
function hide_like(){
	//要素を取得
	var elements = document.getElementsByClassName('ProfileTweet-action--favorite');
	while(elements.length != 0){
		//いいねの要素を削除
		elements[0].parentNode.removeChild(elements[0]);
	}
	console.log("hide");
}

//ストリーム変更時にいいねを消し去る
function ObserveStream(){
	//オブザーバーの作成
	var observer = new MutationObserver(hide_like);
	//監視の開始
	observer.observe(document.getElementsByClassName('stream-items')[0], {
	    attributes: true,
	    childList:  true
	});
	console.log("observe");
	hide_like();
} 
//body変更時にObserveStreamを設定する。
//オブザーバーの作成
var observer = new MutationObserver(ObserveStream);
//監視の開始
observer.observe(document.getElementsByTagName("body")[0], {
    attributes: true
});


