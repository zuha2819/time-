const start = document.querySelector('.stopwatch__btn'),/* htmlga ulanish - yoki selectorga ulanish */
tabsSpan = document.querySelector('.tabsLink__span'),
stopSecond = document.querySelector('.stopwatch__seconds'),
stopMinute = document.querySelector('.stopwatch__minutes'),
stopHour = document.querySelector('.stopwatch__hours')

// console.info(start.innerHTML)
// console.info(start.innerText)

start.addEventListener('click' , function(){/*  */
    if(start.innerHTML == 'start'){
        start.innerHTML = 'stop'
        tabsSpan.classList.add('active')
        let i = 0
        setTimeout(() => stopWatch(this, i),100)
    }else if(start.innerHTML == 'stop'){
        start.innerHTML = 'clear'
        tabsSpan.classList.remove('active')
        tabsSpan.classList.add('active_clear')
    }else if(start.innerHTML == 'clear'){
        start.innerHTML = 'start'
        tabsSpan.classList.remove('active_clear')
        stopSecond.innerHTML = 0
        stopMinute.innerHTML = 0
        stopHour.innerHTML = 0
        }
})


function stopWatch(a,b){
    if(a.innerHTML == 'stop'){
        if(b == 59){
            b = 0
            stopSecond.innerHTML = b 
            if(stopMinute.innerHTML == 59){
                stopMinute.innerHTML = 0
                stopHour.innerHTML++
            }else {
                stopMinute.innerHTML++
            }
           
    } else{
        b++
        stopSecond.innerHTML++
    }
    setTimeout(() => stopWatch(a,b),100 )
}

}


const btn = document.querySelector('.btn'),
body = document.querySelector('body')


btn.addEventListener('click', function(){
    if(btn.style.background == ''){
        btn.style.background = 'black'
        body.style.background = 'white'
    }else{
        btn.style.background = ''
        body.style.background = ''
    }
})

