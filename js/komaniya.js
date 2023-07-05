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
