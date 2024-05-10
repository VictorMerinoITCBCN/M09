const video = document.getElementById('video')

const btnPlay = {
    element : document.getElementById('btn-play'),
    state: false,
    icon : document.getElementById('icon-play-pause'),
    play : function() {
        video.play()
        this.state = true
        this.icon.innerText = 'pause_circle'
    },
    stop : function() {
        video.pause()
        this.state = false
        this.icon.innerText = 'play_circle'
    }
}
btnPlay.element.addEventListener('click',()=> {
    if (!btnPlay.state) btnPlay.play()
    else btnPlay.stop()
})

let volume = 1

const btnVolume = {
    element : document.getElementById('btn-volume'),
    state : true,
    icon : document.getElementById('icon-volume'),
    mute : function() {
        video.volume = 0
        this.state = false
        this.icon.innerText = 'volume_off'
    },
    unmute : function() {
        video.volume = volume
        this.state = true
        this.icon.innerText = 'volume_up'
    }
}

btnVolume.element.addEventListener('click',()=> {
    if (!btnVolume.state) btnVolume.unmute()
        else btnVolume.mute()
})

const rangeVolume = document.getElementById('range-volume')

rangeVolume.addEventListener('input',(event)=> {
    const valueConversion = parseFloat(event.target.value) /100
    volume = valueConversion
    video.volume = volume
})

const videoContainer = document.getElementById('video-container')

const fullscreen = {
    element : document.getElementById('btn-fullscreen'),
    state : false,
    fullscreen : function() {
        videoContainer.classList.add('fullscreen')
        this.state = true
    },
    normalScreen : function() {
        videoContainer.classList.remove('fullscreen')
        this.state = false
    }
}

fullscreen.element.addEventListener('click',()=> {
    if (!fullscreen.state) fullscreen.fullscreen()
    else fullscreen.normalScreen()
})