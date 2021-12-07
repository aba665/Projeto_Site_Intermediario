var textoInicio = document.getElementById("txtinicio")
var txtMeio = document.getElementById("txtmeio")
var txt = document.getElementById("txt")
var imagem = document.getElementById("picture")
var indexEsp = 0

var collectionEsp = [
    {nome: "O LUNOKHOD...", sobre: "VEÍCULO NÃO TRIPULADO", texto: "Enviado para a lua pela união soviética em 1970 e 1973.Por ter sido o primeiro astromóvel jamais criado, era considerado extremamente sofisticado e revolucionário para a época.", src: "../image/transporte1.jpg"},
    {nome: "Juno I", sobre: "FOGUETE NORTE AMERICANO", texto: "Foi o foguete responsável por colocar em órbita o primeiro satélite americano, o Explorer 1, em 1958. Ele foi derivado de um foguete de sondagem, o Jupiter-C, e apesar do nome, não deve ser confundido com o foguete Juno II, este derivado do míssil PGM-19 Jupiter.", src: "../image/juno_I.jpg"},
    {nome: "O TITAN IV", sobre: "FOI UMA DERIVAÇÃO DO TITAN III", texto:"Foi um veículo de lançamento descartável de origem Norte americana e concebido para conduzir cargas de muito maior porte, da mesma classe das cargas conduzidas pelo Ônibus Espacial por exemplo. O Titan IV, foi lançado 39 vezes, entre 1989 e 2005, a maioria deles, conduzindo satélites de comunicações e várias missões para a NASA, além desses, vários satélites de uso militar, também usaram esse modelo para lançamento", src: "../image/Titan_IV.jpg"}

]

loaderPagina(indexEsp)

function transpOne(){
    indexEsp = 0
    loaderPagina(indexEsp)
}

function transpTwo(){
    indexEsp = 1
    loaderPagina(indexEsp)
}

function transpThird(){
    indexEsp = 2
    loaderPagina(indexEsp)
}

function loaderPagina(index){
    textoInicio.textContent = collectionEsp[index].nome
    txtMeio.textContent = collectionEsp[index].sobre
    txt.textContent = collectionEsp[index].texto
    imagem.src = collectionEsp[index].src
}