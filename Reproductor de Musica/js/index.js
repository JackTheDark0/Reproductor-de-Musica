let atras=document.getElementById('atras')
 let pause=document.getElementById('pause')
 let siguiente=document.getElementById('siguiente')
 let play=document.getElementById('play')
 let title=document.getElementById('TitleMusica')
let audio=document.getElementById('audio')
let canciones=['Musica/Yakuza - Baka Mitai.mp3','Musica/Yakuza - Shiawase nara ii ya.mp3','Musica/Yakuza 0 (Japanese Version).mp3','Musica/Yakuza 0 (USA Version).mp3',
'Musica/Yakuza 1 Kiwami.mp3','Musica/Yakuza 1.mp3','Musica/Yakuza 2.mp3','Musica/Yakuza 3.mp3','Musica/Yakuza 4.mp3','Musica/Yakuza 5 (Japanese Version).mp3',
'Musica/Yakuza 5 (US).mp3','Musica/Yakuza 6.mp3', 'Musica/Yakuza 7.mp3','Musica/Yakuza The Movie.mp3']
let logo=document.getElementById('logo')
let arrImg=['Imagenes/Cover 1.jpg','Imagenes/Cover 2.jpg','Imagenes/Cover 3A.jpg','Imagenes/Cover 3B.jpg','Imagenes/Cover 4.jpg','Imagenes/Cover 5.jpg','Imagenes/Cover 6.jpg',
'Imagenes/Cover 7.jpg','Imagenes/Cover 8.jpg','Imagenes/Cover 9.jpg','Imagenes/Cover 10.jpg','Imagenes/Cover 11.jpg','Imagenes/Cover 12.jpg',
'Imagenes/Cover 13.jpg','Imagenes/Cover 14.jpg']

let contimg=0

logo.setAttribute("src",arrImg[contimg])
let parlante=document.getElementById('parlante')
let BarraProgreso=document.getElementById('BarraPogre')
let music=audio
let contador=0
title.textContent=canciones[contador]
music.setAttribute("src",canciones[0])

function playMusic(){ 
    logo.setAttribute('src',arrImg[contimg])
    music.src=canciones[contador]
    music.play()
    title.textContent=canciones[contador]
}

function bar1() {{
    let bar=document.querySelectorAll('.largo, .mediano')

for(let i of bar)
{
    i.classList.add('bar1')
}
}   
}

function eliminarBar() {{
let bar=document.querySelectorAll('.largo, .mediano')
for(let i of bar)
{i.classList.remove('bar1')}
}}

play.addEventListener('click',()=>{
music.play()
  pause.style.display='inline-block'
  play.style.display='none'
    bar1()
  parlante.classList.add('bibrar')
})
pause.addEventListener('click',()=>{
    music.pause()
    eliminarBar()
    pause.style.display='none'
    play.style.display='inline-block'
    parlante.classList.remove('bibrar')
})
music.addEventListener('timeupdate',()=>{
    let position=music.currentTime / music.duration
    BarraProgreso.style.width=position * 100 + '%'
})
siguiente.addEventListener('click',()=>{
    contador++
    contimg++
    if(contador>canciones.length-1 || contimg>arrImg.length-1){
        contador=0
        contimg=0
    }
    playMusic()
})
atras.addEventListener('click',()=>{
    contador--
    contimg--
    if(contador<0 || contimg<0){
        contador=canciones.length-1
        contimg=arrImg.length-1
    }
    playMusic()
})








































/* audio.setAttribute('src',canciones[0])
 function detener() {
    audio.pause()
}
function  empesar() {
    audio.play()
}
 function reproducir() {
    let result=cont++
    if(result>canciones.length-1){
        result=canciones.length
    }

    let cantCanciones=canciones[result]
    audio.setAttribute("src",cantCanciones)
    cantCanciones.play()
    console.log(audio)
}

siguiente.addEventListener('click',()=>{
   reproducir()
})
atras.addEventListener('click',()=>{
    let cantCa=canciones.length
    cantCa--
    console.log(cantCa)
 })

pause.addEventListener('click',()=>{
   //otro proceso :S 
   detener()
    play.style.display='block'
    pause.style.display='none'

})
play.addEventListener('click',()=>{
    let musica=document.getElementById('musica')
    let cantCanciones=canciones[0]
    audio.setAttribute("src",cantCanciones)
    empesar()
    pause.style.display='block'
    play.style.display='none'
    let c=canciones[0]
    
})
siguiente.addEventListener('click',()=>{
    reproducir()
})


*/
