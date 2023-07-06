//スクロールしたらtopに戻るボタンが表示されるようにする
const returnTop = document.querySelector('.returnTop')
window.addEventListener('scroll' , function(){
    if(window.scrollY >= 200 || window.scrollY == document.body.scrollHeight){
        returnTop.style.display = 'block'
    }else{
        returnTop.style.display = 'none'
    }
})
returnTop.addEventListener('click', function(){
    window.scrollTo({
        top : 0,
        behavior : 'smooth'
    });
});

//overviewに適用
//画像と文章をsetIntervalを用いて順番に表示する
let img = 0 //グローバル変数
//画像を配列で取得
const imgs = ['img/kirara2.jpg' , 'img/ship.jpg' , 'img/kirara4.jpg' , 'img/kirara5.webp'];
const overviewHero = document.querySelectorAll('.hero.overview') ;
let intervalId; // intervalIdをグローバルスコープで宣言
function bgi(){
    if (img >= imgs.length) {
        clearInterval(intervalId); // 画像切り替えのタイマーを停止
        return;
    }

    overviewHero[0].style.backgroundImage = `url(${imgs[img]})`;
    position();
    img++;
}

//imgsの状況によってbackground-positionを変更
function position(){
    if(img === 0){
        overviewHero[0].style.backgroundPosition = 'left';
        overviewHero[0].style.textAlign = 'left';
        overviewHero[0].style.color = 'pink';
        overviewHero[0].textContent = '狛荷屋です！';
    } else if(img === 1){
        overviewHero[0].style.backgroundPosition = 'right';
        overviewHero[0].style.textAlign = 'right';
        overviewHero[0].style.color = 'blue';
        overviewHero[0].textContent = '新たな道を切り開き！';
    } else if(img === 2){
        overviewHero[0].style.backgroundPosition = 'center';
        overviewHero[0].style.textAlign = 'center';
        overviewHero[0].style.color = 'green';
        overviewHero[0].textContent = '世界へ貴重な荷物を届けます!';
    } else {
        overviewHero[0].style.backgroundPosition = 'center';
        overviewHero[0].style.color = 'black';
        overviewHero[0].textContent = '狛荷屋、新たな道を切り拓き、世界へ貴重な荷物を届けます!';
    }
}
intervalId = setInterval(bgi , 2000);
