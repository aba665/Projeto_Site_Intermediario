var nomePlaneta = document.getElementsByClassName("nomePlaneta")[0]
var texto = document.getElementById("txtMeio")
var distance = document.getElementById("distancia")
var time =  document.getElementById("tempo")
var lua = document.getElementById("l")
var marte = document.getElementById("m")
var europa = document.getElementById("e")
var titan = document.getElementById("t")
var box = document.getElementById("box")
var imagem = document.getElementById("planeta")
var indexPagina = 0
var collectionPlanets = [
    {nome: "LUA", sobre: "A Lua é o único satélite natural da Terra e o quinto maior do Sistema Solar. É o maior satélite  natural de um planeta no sistema solar em relação ao tamanho do seu corpo primário, tendo 27% do diâmetro e 60% da densidade da Terra", distancia: "225 MIL KM", tempo: "9 Meses", src: "../image/lua.png" },
    {nome: "MARTE", sobre: "Marte é o quarto planeta a partir do Sol, o segundo menor do Sistema Solar. Batizado em homenagem ao deus romano da guerra, muitas vezes é descrito como o 'Planeta Vermelho', porque o óxido de ferro predominante em sua superfície lhe dá uma aparência avermelhada", distancia: "225 milhões de quilômetros", tempo: "150 a 300 dias", src: "../image/marte.png"  },
    {nome: "EUROPA", sobre: "Europa é uma lua de Júpiter de aspecto estranho com um grande número de formações que se entrecruzam. É diferente de Calisto e de Ganímedes com as suas crustas cheias de crateras. Europa quase não tem crateras tal como quase não tem relevo vertical.", distancia: "3121,6 km", tempo: "Sem informação", src: "../image/lua europa.png"},
    {nome: "TITÃ", sobre: "Titã é o maior satélite natural de Saturno e o segundo maior de todo o Sistema Solar, atrás apenas de Ganímedes de Júpiter. É o único satélite que possui uma atmosfera densa e o único objeto estelar além da Terra onde já foram encontradas evidências concretas da existência de corpos líquidos estáveis na superfície. Ele foi descoberto em 1655 pelo astrônomo Christiaan Huygens, o primeiro satélite natural de Saturno descoberto e o sexto do Sistema Solar.", distancia: "1,2 milhão de quilômetros", tempo: "Sem informação", src: "../image/titan.png"}
]

loaderPagina(indexPagina)
function planeta1(){
        indexPagina = 0
        loaderPagina(indexPagina)
        imagem.style.width = "45vh"
}
function planeta2(){
    indexPagina = 1
    loaderPagina(indexPagina)
    imagem.style.width = "55vh"
}
function planeta3(){
    indexPagina = 2
    loaderPagina(indexPagina)
    imagem.style.width = "40vh"
}function planeta4(){
    indexPagina = 3
    loaderPagina(indexPagina)
    imagem.style.width = "40vh"
}

function loaderPagina(index){
   
        nomePlaneta.textContent = collectionPlanets[index].nome
        texto.textContent = collectionPlanets[index].sobre
        distance.textContent = collectionPlanets[index].distancia
        time.textContent = collectionPlanets[index].tempo
        imagem.src = collectionPlanets[index].src

}