let share = document.querySelector('.profile__share');
let icon = document.querySelector('.profile__share_icon');
share.addEventListener('click',e=>{
    if(icon.style.display === 'flex'){
    icon.style.display = 'none';
    if(window.matchMedia('max-width: 630px')){
        share.style.backgroundColor = 'hsl(217, 19%, 35%)';
    }
    share.style.backgroundColor = 'hsl(210, 46%, 95%)';
}
    else{
    icon.style.display = 'flex';
    if(window.matchMedia('max-width: 630px')){
        share.style.backgroundColor = 'hsl(210, 46%, 95%)';
    }
    share.style.backgroundColor = 'hsl(217, 19%, 35%)';
}
})