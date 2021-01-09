const apple = ['Maçã', 'A maçã é o pseudofruto pomáceo da macieira (Malus domestica), árvore da família Rosaceae. É um dos pseudofrutos de árvore mais cultivados, e o mais conhecido dos muitos membros do género Malus que são usados ​​pelos seres humanos. As maçãs crescem em pequenas árvores, de folha caducifólia que florescem na Primavera e produzem fruto no Outono. A árvore é originária da Ásia Ocidental, onde o seu ancestral selvagem, Malus sieversii, ainda é encontrado atualmente.', './images/macaWiki.jpg', 'red'] 
const banana = ['Banana', 'Banana, pacoba ou pacova é uma pseudobaga da bananeira, uma planta herbácea vivaz acaule da família Musaceae (género Musa - além do género Ensete, que produz as chamadas "falsas bananas"). São cultivadas em 130 países. Originárias do sudeste da Ásia são atualmente cultivadas em praticamente todas as regiões tropicais do planeta.', './images/bananaWiki.jpg', 'yellow']
const pear = ['Pera', 'A pera é o fruto comestível da pereira, uma árvore do gênero Pyrus L., pertencente à família Rosaceae, e que conta com mais de três mil variedades de espécies cultivadas em todo o mundo. A fruta pode ser consumida in natura, enlatada, em suco e desidratada.', './images/peraWiki.png', 'green']
const pineapple = ['Abacaxi', 'O Ananás ou abacaxi é uma infrutescência tropical produzida pela planta de mesmo nome, caracterizada como uma planta monocotiledônea da família das bromeliáceas da subfamília Bromelioideae. É um símbolo das regiões tropicais e subtropicais. Os abacaxizeiros cultivados pertencem à espécie Ananas comosus, que compreende muitas variedades frutíferas. Há também várias espécies selvagens, pertencentes ao mesmo gênero. O fruto, quando maduro, tem o sabor bastante ácido e, muitas vezes, adocicado.', './images/abacaxiWiki.png', 'orange']


let fruitClick

function info(fruit){
    if(fruit == 'maca'){
        fruitClick = apple
        addInfo(fruitClick)
    }
    
    if(fruit == 'banana'){
        fruitClick = banana
        addInfo(fruitClick)
    }
    
    if(fruit == 'pera'){
        fruitClick = pear
        addInfo(fruitClick)
    }

    if(fruit == 'abacaxi'){
        fruitClick = pineapple
        addInfo(fruitClick)
    }
}



function addInfo(arrInfos){

    let sectionFruit = document.querySelector('.info.active')
    let textFruit = document.querySelector('.info.active .wikiFruit p')
    let titleFruit = document.querySelector('.info.active .wikiFruit h3')
    let sourceFruit = document.querySelector('.info.active img')

    textFruit.innerHTML = ""
    titleFruit.innerHTML = ""
    sourceFruit.src = ""
    if(sectionFruit.classList.length >= 2){
        sectionFruit.classList.remove(sectionFruit.classList[2])
    }

    titleFruit.insertAdjacentHTML('afterbegin', `${arrInfos[0]}`)
    textFruit.insertAdjacentHTML('afterbegin', `${arrInfos[1]}`)
    sourceFruit.src = arrInfos[2]
    sectionFruit.classList.add(arrInfos[3])
}



function headerMobile(){
    const header = document.querySelector('header')
    const navHeader = document.querySelector('nav')
    const groupButton = document.querySelector('.groupButton')


    if(header.classList[0] == 'activeHeader'){
        groupButton.classList.remove('activeBtn')
        header.classList.remove('activeHeader')
        navHeader.classList.remove('active')
    }else{
        groupButton.classList.add('activeBtn')
        header.classList.add('activeHeader')
        navHeader.classList.add('active')
    }
}