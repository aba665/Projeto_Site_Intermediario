var nome = document.getElementById("nome")
var profissao = document.getElementById("profisao")
var texto = document.getElementById("texto")
var imagem = document.getElementById("picture")
var indexProf = 0

var collectionProf = [

    {name: "LUCKVIERI SHUTZEN", profession: "FLIGHT ENGINEER", text: "Luckvieri Shutzen é uma russa formada em engenharia de voo desde 1975, o engenheiro de voo é o membro da tripulação responsável pelo controle e monitoramento de certos sistemas da aeronave ou espaçonave. O trabalho deste profissional é monitorar e ajustar motores, pressurização, combustível.", src: "/image/mulher1.png"},
    {name: "BRITEY ASTEN", profession: "PHYSICAL ENGINEER", text: "Britey Asten é uma inglesa formada em engenharia física desde 1983, Para desenvolver as principais tecnologias que levam um foguete ao espaço, um engenheiro físico é responsável por teorizar e aplicar na prática modelos de fenômenos físicos e ferramentas matemáticas.", src: "/image/mulher2.png"},
    {name: "SERGIO GIMENO", profession: "PHYSICAL", text: "Sergio Gimeno é um espanhol formado em física desde 1968, Não fossem os físicos, o homem nunca teria chegado ao espaço. Os cálculos, as leis explicando fenômenos da natureza e o estudo de teorias da Física são fundamentais para que o universo seja explorado tanto da Terra como do espaço.", src: "/image/homem.png"}

]

loaderPagina(indexProf)

function profOne(){
    indexProf = 0
    loaderPagina(indexProf) 

}

function profTwo(){
    indexProf = 1
    loaderPagina(indexProf) 
}

function profThird(){
    indexProf = 2
    loaderPagina(indexProf) 
}

function loaderPagina(index){
    nome.textContent = collectionProf[index].name
    profissao.textContent = collectionProf[index].profession
    texto.textContent = collectionProf[index].text
    imagem.src = collectionProf[index].src
}