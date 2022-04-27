const musics = [
    {
        style: "Sertanejo",
        cds : [
            {
                capa : 'thumbs/gusttavoLima.jpg',
                nome : 'Gusttavo Lima',
                musicas : ['01', '02', '03']
            },
            {
                capa : 'thumbs/gusttavoLima.jpg',
                nome : 'João Gomes',
                musicas : ['01', '02', '03']
            },
            {
                capa : 'thumbs/gusttavoLima.jpg',
                nome : 'Tarcisio do Acordeon',
                musicas : ['01', '02', '03']
            },
            {
                capa : 'thumbs/gusttavoLima.jpg',
                nome : 'Tarcisio do Acordeon',
                musicas : ['01', '02', '03']
            }
        ]
    },
    {
        style: "Forró",
        cds : [
            {
                capa : 'thumbs/gavoLima.jpg',
                nome : 'Forro 1',
                musicas : ['01', '02', '03']
            },
            {
                capa : 'thumbs/guoLima.jpg',
                nome : 'Foro 2',
                musicas : ['01', '02', '03']
            }
        ]
    },
    {
        style: "Piseiro",
        cds : [
            {
                capa : 'thumbs/gusttavoLima.jpg',
                nome : 'Forro 1',
                musicas : ['01', '02', '03']
            },
            {
                capa : 'thumbs/gusttavoLima.jpg',
                nome : 'Forro 2',
                musicas : ['01', '02', '03']
            }
        ]
    },
    {
        style: "Pop",
        cds : [
            {
                capa : 'thumbs/gusttavoLima.jpg',
                nome : 'Forro 1',
                musicas : ['01', '02', '03']
            },
            {
                capa : 'thumbs/gusttavoLima.jpg',
                nome : 'Forro 2',
                musicas : ['01', '02', '03']
            }
        ]
    },
    {
        style: "Samba",
        cds : [
            {
                capa : 'thumbs/gusttavoLima.jpg',
                nome : 'Forro 1',
                musicas : ['01', '02', '03']
            },
            {
                capa : 'thumbs/gusttavoLima.jpg',
                nome : 'Forro 2',
                musicas : ['01', '02', '03']
            }
        ]
    }
]


const body = document.querySelector('body')

init()

function init() {
    
    creatContainer()
}

function creatContainer() {
    
    musics.forEach(music =>{
        const container = document.createElement('div')
        container.classList.add('container')

        body.appendChild(container)
    })

    const allContainer = document.querySelectorAll('.container')
    
    allContainer.forEach(container =>{
        const styleContainer = document.createElement('div')
        styleContainer.classList.add('styleContainer')

        const collection = document.createElement('div')
        collection.classList.add('collection')

        container.appendChild(styleContainer)
        container.appendChild(collection)

        console.log(container);
    })

    const allStyleContainer = document.querySelectorAll('.styleContainer')


    allStyleContainer.forEach(styleContainer =>{
        const h2 = document.createElement('h2')
        h2.classList.add('style')
        
        styleContainer.appendChild(h2)
    })

    const allCollection = document.querySelectorAll('.collection')

    allCollection.forEach(collection => {
        const cd = document.createElement('div')
        cd.classList.add('cd')


        collection.appendChild(cd)
    })

    const allcd = document.querySelectorAll('.cd')

    allcd.forEach(cd => {
        const img = document.createElement('img')
        img.classList.add('image')

        const h3 = document.createElement('h3')
        h3.classList.add('singer')
        
        cd.appendChild(img)
        cd.appendChild(h3)
    })

    alimentando()

}
function alimentando() {
    
    for (let i = 0; i < musics.length; i++) {

        musics.forEach(music => {
            const h2 = [...document.querySelectorAll('.style')][i]

            h2.innerHTML = music.style
            i++
        })
    }
    nomeCantor()
}


function nomeCantor() {
    
    for (let i = 0; i < 10; i++) {

        musics[0].cds.forEach(nome =>{
            const h3 = [...document.querySelectorAll('.singer')][i]
        
            h3.innerHTML = nome.nome;
            i++
        });
    }
}


