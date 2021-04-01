const isIntersecting = (entry)=>{
    return entry.isIntersecting //true cuando esta dentro de la pantalla
}

const loadImage =(entry)=>{
    const container = entry.target //container div
    const imagen = container.firstChild
    const url = imagen.dataset.src
    //load image
    imagen.src=url

    //desregistra la imagen (unlisten)
    observer.unobserve(container)
}

const observer = new IntersectionObserver((entries)=>{
    entries.filter(isIntersecting).forEach(loadImage)
})
export const registerImage = (imagen)=>{
    //intersectacionObservador - > observer (imagen)
    observer.observe(imagen)
}