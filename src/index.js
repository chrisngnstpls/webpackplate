import genJoke from './jokes'
import './styles/main.scss'
import photo from './assets/photo.png'

const photoImg = document.getElementById('photoImg')
photoImg.src = photo

const jokeBtn = document.getElementById('jokeBtn')
jokeBtn.addEventListener('click', genJoke)
genJoke()
//console.log(genJoke())