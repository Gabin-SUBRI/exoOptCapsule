document.body.addEventListener('keydown',
(event)=>{
   if(event.key === "ArrowUp"){
        document.querySelector("#player").src ='https://static.lacapsule.academy/practice/mario/mario-back-1.png'
        let offtop = document.querySelector("#player").offsetTop
        document.querySelector("#player").style.top = `${offtop - 10}px`
    }
    if(event.key === "ArrowDown"){
        document.querySelector("#player").src ='https://static.lacapsule.academy/practice/mario/mario-front-1.png'
        let offtop = document.querySelector("#player").offsetTop
        document.querySelector("#player").style.top = `${offtop + 10}px`
    }
    if(event.key === "ArrowRight"){
        document.querySelector("#player").src ='https://static.lacapsule.academy/practice/mario/mario-right-1.png'
        let offleft = document.querySelector("#player").offsetLeft
        document.querySelector("#player").style.left = `${offleft + 10}px`
    }
    if(event.key === "ArrowLeft"){
        document.querySelector("#player").src ='https://static.lacapsule.academy/practice/mario/mario-left-1.png'
        let offleft = document.querySelector("#player").offsetLeft
        document.querySelector("#player").style.left = `${offleft - 10}px`
    }

});
