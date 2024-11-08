let prevButton=document.getElementById('prev')
let nextButton=document.getElementById('next')
let container=document.querySelector('.container')
let items=container.querySelectorAll('.list .item')
let indicators=document.querySelector('.indicators')
let dots=document.querySelectorAll('ul  li')

let active=0
let firstposition=0
let lastposition=items.length-1

nextButton.onclick=()=>{
    let itemOld=container.querySelector('.list .item.active')
    itemOld.classList.remove('active')
    
 if(active+1>lastposition){
  active=0
 }
 else{
  active+=1
 }

 items[active].classList.add('active')
 

  let dotsOld=indicators.querySelector('ul li.active')
dotsOld.classList.remove('active')
  dots[active].classList.add('active')

  indicators.querySelector('.number').innerHTML='0'+(active + 1)
 

  
}


prevButton.onclick=()=>{
    let itemOld=container.querySelector('.list .item.active')
    itemOld.classList.remove('active')

    if(active-1<0){
      active=lastposition
    }
    else{
      active-=1
    }



   items[active].classList.add('active')
  
  let dotsOld=indicators.querySelector('ul li.active')
  dotsOld.classList.remove('active')
  dots[active].classList.add('active')

  indicators.querySelector('.number').innerText='0'+(active +1)
}