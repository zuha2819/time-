// console.info(document)
// console.dir(document)

console.info(document.querySelector('.h'))
console.dir(document.querySelector('.h'))

const hour = document.querySelector('.h'),
sec = document.querySelector('.s'),
min = document.querySelector('.m'),
numberHour = document.querySelector('.hours'),
numberMinutes = document.querySelector('.minutes')

// console.info(hour,sec,min)

function soat(){
    const time = new Date,
    hours = time.getHours(),
    minutes = time.getMinutes(),
    secunds = time.getSeconds()


    // console.info(hours,minutes,secunds)
    // console.dir(hours,minutes,secunds)


    sec.style.transform = `rotate(${secunds *6}deg)`
    min.style.transform = `rotate(${minutes *6}deg)`
    hour.style.transform = `rotate(${hours *30}deg)`

numberHour.innerHTML = hours < 10 ? `0${hours}` : hours
numberMinutes.innerHTML =  minutes < 10 ? `0${minutes}` : minutes



    setTimeout(soat,1000)
}

soat()



const tabsLink = document.querySelectorAll('.tabsItem'),
tabsItem = document.querySelectorAll('.tabsContentItem')

// console.info(tabsLink,tabsItem)

for(const key in tabsLink) {
if(typeof tabsLink[key] === 'object')
    tabsLink[key].addEventListener('click',function(){
        // console.info('elementni bostim',this.inner)
        for(let i =0; i < tabsLink.length;i++){
            tabsLink[i].classList.remove('active')
            tabsItem[i].classList.remove('active')

        }
       addActive(this, tabsItem[key])
    })
}


function addActive(link, content){
    link.classList.add('active')
    content.classList.add('active')
}