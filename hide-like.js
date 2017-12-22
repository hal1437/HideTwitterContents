
//要素を取得
var ee = document.getElementsByClassName('ProfileTweet-actionList');
for(var i = 0;i<ee.length;i++){
	//いいね(三番目)を削除
	ee[i].removeChild(ee[i].children[2]);
}
