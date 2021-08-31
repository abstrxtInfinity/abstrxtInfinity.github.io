const header = document.getElementById('header')
const title = document.getElementById('title')
const description = document.getElementById('description')
const profile_img = document.getElementById('profile_img')
const name = document.getElementById('name')
const date = document.getElementById('date')

const animated_bgs = document.querySelectorAll('.animated-bg')
const animated_bg_texts = document.querySelectorAll('.animated-bg-text')


setTimeout(getData, 2500)


function getData() {
    header.innerHTML = ' <img src="./image.jpg" alt="background" />'

    title.innerHTML = 'Among Us'
    description.innerHTML = 'A very popular game in 2020, where there is an murderer impostor among the crew mates boarded on a space shuttle.'
    profile_img.innerHTML = '<img src="https://randomuser.me/api/portraits/men/45.jpg" alt="#" />'
    name.innerHTML = 'Ram Purohit'
    date.innerHTML = 'Jan 12, 2021'

    animated_bgs.forEach(bg => bg.classList.remove('animated-bg'))
    animated_bg_texts.forEach(bg => bg.classList.remove('animated-bg-text'))

}

