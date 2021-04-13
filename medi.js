document.addEventListener('DOMContentLoaded', function(){
    
    function test(data) {
        alert(data)
    }
    let one = document.querySelectorAll('.option__circle--inner')
    let modal = document.querySelector('.modal')
    let time = document.querySelector('.time')
    let min = document.querySelector('.time__min')
    let sec = document.querySelector('.time__sec')
    let close = document.querySelector('.fa-times')
    let audio = new Audio('sounds/GONG.wav');
    let start_time
    
    one.forEach(elm => {
        
        elm.addEventListener('click', function() {
        
        modal.style.display = 'block'
        start_time = this.dataset.time

        if (this.dataset.time < 10) {
            min.innerHTML = `0${this.dataset.time}`
            sec.innerHTML = '00'
        }

        else {
            min.innerHTML = `${this.dataset.time}`
            sec.innerHTML = '00'
        }
  
    })
    })

    close.addEventListener('click', function(){
        modal.style.display = 'none'
        play.style.display = 'inline-block'
        pause.style.display = 'none'

        reseter()
    })

    // click play
    // conut every second 
    // wenn 00:00 stop 
    let play = document.querySelector('.fa-play')
    let pause = document.querySelector('.fa-pause')
    let reset = document.querySelector('.fa-stop')
    let count
    
    
    // play
    play.addEventListener('click', function() {
       
        play.style.display = 'none'
        pause.style.display = 'inline-block' // oder inline-bloc     
        audio.play()
        count = setInterval(counter, 1000)

    })

    //  pause
    pause.addEventListener('click', function() {

        play.style.display = 'inline-block'
        pause.style.display = 'none'

        clearInterval(count)
    })

    //  reset
    reset.addEventListener('click', function() {

        play.style.display = 'inline-block'
        pause.style.display = 'none' // oder inline-bloc  
        
        reseter()
        
    })

    function counter()
    {
        let time = parseInt(min.innerHTML * 60 ) + parseInt(sec.innerHTML), new_min, new_sec
        console.log(time)
        time -= 1
        if( time > 0 ) {
            new_min = parseInt(time / 60, 10)
            new_sec = parseInt( time % 60, 10)
            min.innerHTML = new_min < 10 ? '0' + new_min : new_min
            sec.innerHTML = new_sec < 10 ? '0' + new_sec : new_sec
        }
        else {
            clearInterval(count)
            audio.play()
        }

    }

    function reseter() {
        
        clearInterval(count)
        
        if (start_time < 10) {
            min.innerHTML = `0${start_time}`
            sec.innerHTML = '00'
        }

        else {
            min.innerHTML = `${start_time}`
            sec.innerHTML = '00'
        }


    }
})