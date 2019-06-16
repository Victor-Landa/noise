window.addEventListener('load', () => {
    const sounds = document.querySelectorAll('.sound')
    const pads = document.querySelectorAll('.pads div')
    const visual = document.querySelector('.visual')
    const colors = [
        "#0DB0FF",
        "#4CE84A",
        "#FFDF5E",
        "#E8694A",
        "#B852FF",
        "#4E5CFF"
    ]
    // console.log(sounds)

    pads.forEach((pad, index) => {
        pad.addEventListener('click', function(){
            sounds[index].currentTime = 0;
            sounds[index].play();

            createAnimation(index)
        })
    })

    const createAnimation = index => {
        const animation = document.createElement('div')
        visual.appendChild(animation)
        animation.style.backgroundColor = colors[index]
        animation.style.animation = "jump 1.5s ease"
        animation.addEventListener('animationend', function(){
            visual.removeChild(this)
        })
    }
})
