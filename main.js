let nextDom = document.getElementById('next')
let prevDom = document.getElementById('prev')
let carouselDom = document.querySelector('.carousel')
let listItemDom = document.querySelector(".carousel .list")
let thumbnailDom = document.querySelector(".carousel .thumbnail")

nextDom.onclick = function(){
    showSlider('next')
}
prevDom.onclick = function(){
    showSlider('prev')

}

let timeRunning = 3000;
let runTimeOut;
function showSlider(type){
    let itemSlider = document.querySelectorAll('.carousel .list .item')
    let itemThumbnail = document.querySelectorAll('.carousel .thumbnail .item')  // Fix the typo here
    if(type ==='next'){
        listItemDom.appendChild(itemSlider[0])
        thumbnailDom.appendChild(itemThumbnail[0])
        carouselDom.classList.add('next')
    }else{
        let positionlast = itemSlider.length - 1;
        listItemDom.prepend(itemSlider[positionlast])
        thumbnailDom.prepend(itemThumbnail[positionlast])
        carouselDom.classList.add('prev')

    }
    clearTimeout(runTimeOut)
    runTimeOut = setTimeout(() =>{
        carouselDom.classList.remove('next')
        
        carouselDom.classList.remove('prev')

    },timeRunning)
}
