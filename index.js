/* Função geradora de números aleatórios */
function getRandomInt(min, max) {
min = Math.ceil(min);
max = Math.floor(max);
return Math.floor(Math.random() * (max - min)) + min;
}

/* Emojis ツ */
const emoji = [
'(*°○°*)♡',
'↖(^o^)↗',
'(。♡‿♡。)',
'ʕ•̫͡•ʔ♡ʕ•̫͡•ʔ',
'ʕ•̫͡•ʔ❤ʕ•̫͡•ʔ',
'ο(^_^)ο♡彡',
'(。♡‿♡。)',
'(*˘︶˘*).。.:*♡',
'(♡ര‿ര)',
];

/* Emojis pra quando der merda ¯\_(ツ)_/¯ */
const emojiFail = [
'¯\_(ツ)_/¯',
'⊙﹏⊙',
'(￣＿￣)',
'╭∩╮（￣▽￣）╭∩╮',
'┌П┐⚀▄⚀┌П┐',
'( T_T)',
'【・_・?】',
'┗(-_-;)┛',
'(╬￣皿￣)凸',
];
/* Objeto com as decorações do boxen */
const decorations = {
border: '︵‿︵‿︵‿︵‿︵‿︵‿︵‿︵‿︵‿︵‿୨♡୧‿︵‿︵‿︵‿︵‿︵‿︵‿︵‿︵‿︵‿︵',
borderMobile: '︵‿︵‿︵‿︵‿୨♡୧‿︵‿︵‿︵‿︵',
borderFail: '╭∩╮（￣▽￣）╭∩╮ ┌П┐⚀▄⚀┌П┐ ╭∩╮︶︿︶╭∩╮ 凸-.-凸 凸(｀0´)凸 (╬▔〔▔)凸',
emoji: emoji[getRandomInt(0, 8)],
emojiFail: emojiFail[getRandomInt(0, 8)]
}

/* Utilidades... (Quebra linha e espaçador) */
const newline = '\n';
const space = ' | ';
/* URL da API Rest com todas as cantadas */
const url = 'https://5edc022111cb1d001665cc23.mockapi.io/cantada/homem/';

/* 
Função construtora da mensagem

A função recebe a cantada da api(response) e após isso retorna a
mensagem formatada, com emojis e tudo mais... ~(˘▽˘~)(~˘▽˘)~
*/
function buildMessage(response) {
return (
 
    /* ------------------------------------------------------------- */
    decorations.emoji + space + response + space + decorations.emoji
    /* ------------------------------------------------------------- */
);
}

/* 
Função construtora da mensagem de erro

Quando a api não retorna uma cantada, esta função retorna uma
mensagem formatada, com emojis e tudo mais... 凸(｀0´)凸
*/
function buildFailMessage(message) {
return (
    decorations.borderFail + 
    newline + newline + 
    /* ------------------------------------------------------------- */
    message +
    /* ------------------------------------------------------------- */
    newline + newline +
    decorations.borderFail
);
}

function getCantada() {

    try {
        var xmlHttp = new XMLHttpRequest();
        xmlHttp.open( "GET", url + getRandomInt(1, 32), false ); // false for synchronous request
        xmlHttp.send( null );
        return buildMessage(JSON.parse(xmlHttp.responseText).desc);
    } catch (error) {
        return buildFailMessage('Sua beleza é tão grande que bugou esse pacote npm.');
    }
}

document.querySelector("#cantada").innerText = getCantada();

if(!/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){
    document.querySelector("#cantada").classList.add('typewriter');
}

let border = document.querySelectorAll(".border");

for(i = 0; i < 2; i++){
    if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){
        border[i].innerText = decorations.borderMobile;
    }
    else{
        border[i].innerText = decorations.border;
    }
}