const _tab = [
    ['Ja chcę powiedzieć jedną rzecz:', 'Trzeba powiedzieć jasno,', 'Jak powiedział wybitny krakowianin Stanisław Lem,', 'Proszę mnie dobrze zrozumieć,', 'Ja chciałem państwu przypomnieć, że', 'Niech państwo nie mają złudzeń,', 'Powiedzmy to wyraźnie,'],
    ['przedstawiciele czerwonej hołoty', 'ci wszyscy (tfu!) geje', 'funkcjonariusze reżymowej telewizji', 'tak zwani ekolodzy', 'ci wszyscy (tfu!) demokraci', 'agenci bezpieki', 'feminazistki'],
    ['zupełnie bezkarnie,', 'całkowicie bezczelnie,', 'o poglądach na lewo od komunizmu,', 'celowo i świadomie,', 'z premedytacją,', 'od czasów Okrągłego Stołu,', 'w ramach postępu,'],
    ['nawołują do podniesienia podatków,', 'próbują wyrzucić kierowców z miast,', 'próbują skłócić Polskę z Rosją,', 'głoszą brednie o globalnym ociepleniu,', 'zakazują posiadania broni,', 'nie dopuszczają prawicy do władzy,', 'uczą dzieci homoseksualizmu,'],
    ['bo dzieki temu mogą kraść,', 'bo dostają za to pieniądze,', 'bo tak się uczy w państwowej szkole,', 'bo bez tego (tfu!) demokracja nie może istnieć,', 'bo głupich jest więcej niż mądrych,', 'bo chcą stworzyć raj na ziemi,', 'bo chcą niszczyć cywilizację białego człowieka,'],
    ['przez kolejne kadencje.', 'o czym się nie mówi.', 'i właśnie dlatego europa umiera.', 'ale przyjdą muzułmanie i zrobią porządek.', '-tak samo zresztą jak za Hitlera.', '-proszę zobaczyć co się dzieje na zachodzie, jeśli mi państwo nie wierzą.', 'co lat temu sto nikomu nie przyszło by nawet do głowy.']
];

const btn = document.querySelector('button');
const paragraph = document.querySelector('p');

btn.addEventListener('click', function(){
    paragraph.innerHTML = `"${getString()}"`;
});

function randomNum() {
    let x = Math.floor(Math.random() * _tab[0].length);
    return x;
}

function getString() {
    let txt = '';
    for (let i = 0; i < _tab.length; i++) {
        let elem = `${_tab[i][randomNum()]} `;
        txt += elem;
    }
    return txt;
}

const consoleText = "Rafał Hawełka";
let str = "";
str += "-";
for (var i=0; i<consoleText.length+4; i++) {
    str += "=";
}
str += "¬\n";
str += "¦  " + consoleText + "  ¦\n";
str += "L";
for (var i=0; i<consoleText.length+4; i++) {
    str += "=";
}
str += "-\n";
console.log(str);
  