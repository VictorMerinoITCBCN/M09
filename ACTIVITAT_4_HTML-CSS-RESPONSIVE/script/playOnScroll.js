let observer = new IntersectionObserver((entries)=> {
    entries.forEach((entry)=> {
        if (entry.isIntersecting) {
            btnPlay.play()
            video.volume = volume
        }
    })
})

observer.observe(video)

