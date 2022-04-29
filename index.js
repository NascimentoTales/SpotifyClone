const body = document.querySelector('body')
body.style.overflowX = "hidden"

init()

function init() {
    const h1 = document.createElement('h1')
    h1.classList.add('h1')
    h1.innerHTML = "Spotify"


    body.appendChild(h1)

    creatHtml()
    chooseMusic()
}

function creatHtml() {
    
    for (let index = 0; index < datas.length; index++) {
        
        const containerElement = document.createElement('div')
        containerElement.classList.add('container')

        const containerStyleElement = document.createElement('div')
        containerStyleElement.classList.add('styleContainer')

        const h2Element = document.createElement('h2')
        h2Element.classList.add('style')
        h2Element.innerHTML = datas[index].style

        const collectionElement = document.createElement('div')
        collectionElement.classList.add('collection')

        // const arrowContainer = document.createElement('div')
        // arrowContainer.classList.add('arrowContainer')

        const arrowLeft = document.createElement('i')
        arrowLeft.classList.add('fa-solid')
        arrowLeft.classList.add('fa-angle-left')
        arrowLeft.classList.add('left')

        const arrowRight = document.createElement('i')
        arrowRight.classList.add('fa-solid')
        arrowRight.classList.add('fa-angle-right')
        arrowRight.classList.add('right')
    
        datas[index].songs.forEach(song => {

            const cdElementPai = document.createElement('div')
            cdElementPai.classList.add('cdPai')

            const cdElement = document.createElement('div')
            cdElement.classList.add('cd')

            const containerPaiSinger = document.createElement('div')
            containerPaiSinger.classList.add('paiSinger')

            const imgElement = document.createElement('img')
            imgElement.classList.add('image')
            imgElement.src = song["thumb"]

            const h3Element = document.createElement('h3')
            h3Element.classList.add('singer')
            h3Element.innerHTML = song["cantor"] 

            const pElement = document.createElement('p')
            pElement.classList.add('play')
            pElement.innerHTML = song["play"] 

            const musica = document.createElement('input')
            // musica.
            musica.classList.add('musics')
            musica.value = song["musicas"];

            collectionElement.appendChild(cdElementPai);
            cdElementPai.appendChild(cdElement)
            cdElement.appendChild(imgElement)
            
            cdElement.appendChild(containerPaiSinger)
            containerPaiSinger.appendChild(pElement)
            containerPaiSinger.appendChild(h3Element)
            containerPaiSinger.appendChild(musica)

            console.log(containerPaiSinger);
        })


        body.appendChild(containerElement)
        containerElement.appendChild(containerStyleElement)
        containerElement.appendChild(collectionElement)
                
        collectionElement.appendChild(arrowLeft)
        collectionElement.appendChild(arrowRight)
        
        containerStyleElement.appendChild(h2Element)

        // console.log(containerElement);

    }

}

function chooseMusic() {
    
    let cds = document.querySelectorAll('.play')

    cds.forEach(cd => {
        cd.addEventListener('click', (e) =>{
            let openCd = e.composedPath();
            playCd(openCd)
        } )
    })
}

function playCd(openCd) {

    let imagemCd = openCd[2].querySelector('img').src

    let audio = openCd[2].querySelector('input').value

    // console.log(openCd);

    let arrayAudios = []

    arrayAudios.push(audio.split(","))
    
    const containerCdElement = document.createElement('div')
    containerCdElement.classList.add('containerCd')

    const containerImagem = document.createElement('div')
    containerImagem.classList.add('image')

    const image = document.createElement('img')
    image.classList.add('img')
    image.src = imagemCd

    const containerMusicsElement = document.createElement('div')
    containerMusicsElement.classList.add('containerMusics')

    // console.log(arrayAudios[0].length);

    for (let index = 0; index < arrayAudios[0].length; index++) {
       

        arrayAudios.forEach(audio => {

            const button = document.createElement('button')
            button.classList.add('button')
            button.innerHTML = audio[index]
            button.id = audio[index]
            console.log(button);
            
            containerMusicsElement.appendChild(button)

            button.addEventListener("click", (e) =>{

                tocar(e.target);
            })
        });
    }
    
    body.appendChild(containerCdElement)
    containerCdElement.appendChild(containerImagem)
    containerImagem.appendChild(image)
    containerCdElement.appendChild(containerMusicsElement)    

    console.log(containerCdElement);
    
}

function tocar(e) {

    let play = document.getElementById(e.id);
    play.play();
}