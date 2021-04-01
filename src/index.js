import { registerImage } from './lazy'

const minimum = 1
const maximum = 122
const random = () => Math.floor(Math.random() * (maximum - minimum)) + minimum

const createImageNode = () => {
    const container = document.createElement('div')
    container.className = "container p-4"

    const imagen = document.createElement('img')
    imagen.className = "mx-auto"
    imagen.width = '320'
    imagen.dataset.src = `https://randomfox.ca/images/${random()}.jpg` 
    container.appendChild(imagen)

    return container
}

const mountNode = document.getElementById('images')
const addButton = document.querySelector('button')

const addImage =()=>{
    const nuevaImagen = createImageNode()
    mountNode.append(nuevaImagen)
    registerImage(nuevaImagen)
}

addButton.addEventListener("click",addImage)



