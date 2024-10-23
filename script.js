const moon = document.getElementById('moon');
const body = document.getElementById('body');
const logo = document.getElementById('logo');
const sun = document.getElementById('sun');
const fonte = document.getElementById('fonte');
const fonteb = document.getElementById('fonteb');
const names = document.querySelectorAll('.names');
const modo = document.getElementById('modo');
const modoc = document.getElementById('modoc');
const titles = document.getElementById('titles');
const white = document.getElementById('white');
const black = document.getElementById('black');
const you = document.getElementById('you');
const face = document.getElementById('face');
const tik = document.getElementById('tik');
const about = document.getElementById('about');
const youtube = document.getElementById('youtube');
const facebook = document.getElementById('facebook');
const facebookb = document.getElementById('facebookb');
const youtubeb = document.getElementById('youtubeb');
const tiktokb = document.getElementById('tiktokb');
const tiktok = document.getElementById('tiktok');
const info = document.getElementById('info');
const infob = document.getElementById('infob');
const back = document.getElementById('back');
const backw = document.getElementById('backw');
const sidebar = document.getElementById('sidebar');
const palavra = document.getElementById('palavra');
const vidpalavra = document.getElementById('vidpalavra');
const palco = document.getElementById('palco');
const videoback = document.getElementById('videoback');
const nomebig = document.getElementById('nomebig');
const nomebig2 = document.getElementById('nomebig2');
const videos = document.getElementById('videos');
const melhor = document.getElementById('melhor');
const vidmelhor = document.getElementById('vidmelhor');
const nem = document.getElementById('nem');
const vidnem = document.getElementById('vidnem');
const des = document.getElementById('des');
const viddes = document.getElementById('viddes');
const ele = document.getElementById('ele');
const videle = document.getElementById('videle');
const eassim = document.getElementById('eassim');
const vidassim = document.getElementById('vidassim');
const ovideo = document.getElementById('ovideo');
const vidvideo = document.getElementById('vidvideo');
const names2 = document.querySelectorAll('.names2');
const names3 = document.querySelectorAll('.names3');
const respecto = document.getElementById('respecto');
const vidrespect = document.getElementById('vidrespect');
const respeito = document.getElementById('respeito')
const vidrespeito = document.getElementById('vidrespeito');
const ate = document.getElementById('ate');
const vidate = document.getElementById('vidate');
const favela = document.getElementById('favela');
const vidcomo = document.getElementById('vidcomo');
const quando = document.getElementById('quando');
const vidquando = document.getElementById('vidquando');
const touraro = document.getElementById('touraro');
const sobre = 'Paginas/sobre/sobre.html';
const canal = 'https://www.youtube.com/@MozAnima%C3%A7%C3%B5es';
const pagina = 'https://www.facebook.com/profile.php?id=100083674427789';
const paginatik = 'https://vm.tiktok.com/ZMhUMkTbF/';
const tourarourl = 'https://wa.me/258848810637?text=Olá%20vim%20do%20Moz%20Animações'

function mudarCorNames(cor  ) {
    names.forEach(function(name) {
        name.style.color = cor;
    });
    names2.forEach(function (name) {
        name.style.color = cor;
    });
    names3.forEach(function (name) {
        name.style.color = cor;
    })
}

moon.addEventListener('click', function() {
    body.style.backgroundColor = '#37474f';
    moon.style.display = 'none';
    sun.style.display = 'block';
    modo.style.display = 'none';
    modoc.style.display = 'block';
    titles.style.color = 'white';
    sidebar.style.backgroundColor = '#263238'
    white.style.display = 'none';
    black.style.display = 'block';
    you.style.color = 'white';
    face.style.color = 'white';
    tik.style.color = 'white';
    mudarCorNames('white');
    info.style.display = 'none';
    infob.style.display = 'block';
    about.style.color = 'white';
    facebookb.style.display = 'block';
    facebook.style.display = 'none';
    tiktokb.style.display = 'block';
    tiktok.style.display = 'none';
    youtubeb.style.display = 'block';
    youtube.style.display = 'none';
    backw.style.display = 'block';
    back.style.display = 'none';
    videoback.style.backgroundColor = '#263238';
    nomebig.style.color = 'white'
    nomebig2.style.color = 'white'
})

sun.addEventListener('click', function(){
    body.style.backgroundColor = 'white';
    moon.style.display = 'block';
    sun.style.display = 'none';
    modo.style.display = 'block';
    modoc.style.display = 'none';
    titles.style.color = 'black';
    sidebar.style.backgroundColor = '#e6e6e6';
    white.style.display = 'block';
    black.style.display = 'none';
    you.style.color = 'black';
    face.style.color = 'black';
    tik.style.color = 'black';
    mudarCorNames('black');
    info.style.display = 'block';
    infob.style.display = 'none';
    about.style.color = 'black';
    facebookb.style.display = 'none';
    facebook.style.display = 'block';
    tiktokb.style.display = 'none';
    tiktok.style.display = 'block';
    youtubeb.style.display = 'none';
    youtube.style.display = 'block';
    backw.style.display = 'block';
    back.style.display = 'none';
    videoback.style.backgroundColor = '#b0bec5';
    nomebig.style.color = 'black'
    nomebig2.style.color = 'black'
})

youtube.onclick = function(){
    window.open(canal, '_blank')
}

facebook.onclick = function() {
    window.open(pagina, '_blank')
}
tiktok.onclick = function () {
    window.open(paginatik, '_blank')
}
info.addEventListener('click', function() {
    window.open(sobre, '_self')
})
infob.addEventListener('click', function() {
    window.open(sobre, '_self')
})
touraro.addEventListener('click', function() {
    window.open(tourarourl, '_blank')
})
palco.addEventListener('click', function() {
    palco.style.display = 'none'
    videoback.style.display = 'none'
    vidpalavra.style.display = 'none'
    vidmelhor.style.display = 'none'
    vidnem.style.display = 'none'
    viddes.style.display = 'none'
    videle.style.display = 'none'
    vidassim.style.display = 'none'
    vidvideo.style.display = 'none'
    vidrespect.style.display = 'none'
    vidrespeito.style.display = 'none'
    vidate.style.display = 'none'
    vidcomo.style.display = 'none'
    nomebig.textContent = ''
    nomebig2.textContent = ''
    vidquando.style.display = 'none'
    touraro.style.display = 'none'
})
palavra.addEventListener('click', function(){
    palco.style.display = 'block'
    videoback.style.display = 'block'
    vidpalavra.style.display = 'block'
    nomebig.textContent = 'A palavra de Deus'
})
melhor.addEventListener('click', function(){
    palco.style.display = 'block'
    videoback.style.display = 'block'
    vidmelhor.style.display = 'block'
    nomebig.textContent = 'O melhor homem de todos'
})
nem.addEventListener('click', function(){
    palco.style.display = 'block'
    videoback.style.display = 'block'
    vidnem.style.display = 'block'
    nomebig.textContent = 'Nem Deus tava a espera dessa'
})
des.addEventListener('click', function(){
    palco.style.display = 'block'
    videoback.style.display = 'block'
    viddes.style.display = 'block'
    nomebig.textContent = 'Desejo sus'
})
ele.addEventListener('click', function(){
    palco.style.display = 'block'
    videoback.style.display = 'block'
    videle.style.display = 'block'
    nomebig.textContent = 'Ele pulou muro com geladeira'
})
eassim.addEventListener('click', function(){
    palco.style.display = 'block'
    videoback.style.display = 'block'
    vidassim.style.display = 'block'
    nomebig2.innerHTML = 'É assim que fica <br>no tempo de frio'
})
ovideo.addEventListener('click', function(){
    palco.style.display = 'block'
    videoback.style.display = 'block'
    vidvideo.style.display = 'block'
    nomebig.innerHTML = 'O vídeo mais engraçado<br>do mundo'
})
respecto.addEventListener('click', function(){
    palco.style.display = 'block'
    videoback.style.display = 'block'
    vidrespect.style.display = 'block'
    nomebig.innerHTML = 'Respect, o velho é um génio'
})
respeito.addEventListener('click', function() {
    palco.style.display = 'block'
    videoback.style.display = 'block'
    vidrespeito.style.display = 'block'
    nomebig.innerHTML = 'Respeito!'
})

ate.addEventListener('click', function() {
    palco.style.display = 'block'
    videoback.style.display = 'block'
    vidate.style.display = 'block'
    nomebig.innerHTML = 'Até Deus achou sus'
})

favela.addEventListener('click', function() {
    palco.style.display = 'block'
    videoback.style.display = 'block'
    vidcomo.style.display = 'block'
    nomebig.innerHTML = 'Como escapar das ruas da<br>favela<br><br><br><br>Parceria paga'
    touraro.style.display = 'block'
})

quando.addEventListener('click', function() {
    palco.style.display = 'block'
    videoback.style.display = 'block'
    vidquando.style.display = 'block'
    nomebig2.textContent = 'Quando eu for rico'
})

if (window.matchMedia("(max-width: 600px)").matches) {
const sidebar = document.getElementById('sidebar');
const logo = document.getElementById('logo');

    favela.addEventListener('click', function() {
        palco.style.display = 'block'
        videoback.style.display = 'block'
        vidcomo.style.display = 'block'
        nomebig.innerHTML = 'Como escapar das ruas da<br>favela (Patrocinado)'
        touraro.style.display = 'block'
    })

    logo.addEventListener('click', function() {
        sidebar.style.left = '0pt'
        youtube.style.left = '5pt'
        youtubeb.style.left = '5pt'
        facebook.style.left = '5pt'
        facebookb.style.left = '5pt'
        tiktok.style.left = '5pt'
        tiktokb.style.left = '5pt'
        info.style.left = '5pt'
        infob.style.left = '5pt'
        moon.style.left = '9pt'
        sun.style.left = '9pt'
        you.style.left = '65pt'
        face.style.left = '65pt'
        tik.style.left = '65pt'
        about.style.left = '65pt'
        modo.style.left = '65pt'
        modoc.style.left = '65pt'
        back.style.left = '10pt'
        backw.style.left = '10pt'
    })
    back.addEventListener('click', function(pose) {
        sidebar.style.left = '-250pt'
        youtube.style.left = '-60pt'
        youtubeb.style.left = '-60pt'
        facebook.style.left = '-60pt'
        facebookb.style.left = '-60pt'
        tiktok.style.left = '-60pt'
        tiktokb.style.left = '-60pt'
        info.style.left = '-60pt'
        infob.style.left = '-60pt'
        moon.style.left = '-80pt'
        sun.style.left = '-68pt'
        you.style.left = '-100pt'
        face.style.left = '-100pt'
        tik.style.left = '-100pt'
        about.style.left = '-100pt'
        modo.style.left = '-120pt'
        modoc.style.left = '-120pt'
        back.style.left = '-70pt'
        backw.style.left = '-70pt'
    })
    backw.addEventListener('click', function(pose) {
        sidebar.style.left = '-250pt'
        youtube.style.left = '-60pt'
        youtubeb.style.left = '-60pt'
        facebook.style.left = '-60pt'
        facebookb.style.left = '-60pt'
        tiktok.style.left = '-60pt'
        tiktokb.style.left = '-60pt'
        info.style.left = '-60pt'
        infob.style.left = '-60pt'
        moon.style.left = '-80pt'
        sun.style.left = '-68pt'
        you.style.left = '-100pt'
        face.style.left = '-100pt'
        tik.style.left = '-100pt'
        about.style.left = '-100pt'
        modo.style.left = '-120pt'
        modoc.style.left = '-120pt'
        back.style.left = '-70pt'
        backw.style.left = '-70pt'
    })
    sun.addEventListener('click', function(){
        body.style.backgroundColor = 'white';
        moon.style.display = 'block';
        sun.style.display = 'none';
        modo.style.display = 'block';
        modoc.style.display = 'none';
        titles.style.color = 'black';
        sidebar.style.backgroundColor = '#e6e6e6';
        white.style.display = 'block';
        black.style.display = 'none';
        you.style.color = 'black';
        face.style.color = 'black';
        tik.style.color = 'black';
        mudarCorNames('black');
        info.style.display = 'block';
        infob.style.display = 'none';
        about.style.color = 'black';
        facebookb.style.display = 'none';
        facebook.style.display = 'block';
        tiktokb.style.display = 'none';
        tiktok.style.display = 'block';
        youtubeb.style.display = 'none';
        youtube.style.display = 'block';
        backw.style.display = 'none';
        back.style.display = 'block';
    })    
}