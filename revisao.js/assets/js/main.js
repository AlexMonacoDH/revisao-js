//seletores
let img = document.querySelector('img');
let section = document.querySelector('section');
let p = document.querySelector('p');


let horarioAtual = 19;

if(horarioAtual >= 6 && horarioAtual <= 12){
    p.textContent = 'São ' + horarioAtual + ' horas da manhã';
    img.setAttribute('src','./assets/img/manha_icone.jpg');
    section.style.backgroundImage = "url('./assets/img/manha.jpg')";
}

else if(horarioAtual >= 13 && horarioAtual <= 18){
    p.textContent = 'São ' + horarioAtual + ' horas da tarde';
    img.setAttribute('src','./assets/img/tarde_icone.jpg');
    section.style.backgroundImage = "url('./assets/img/tarde.jpg')";
}
else{
    p.textContent = 'São ' + horarioAtual + ' horas da noite';
    img.setAttribute('src','./assets/img/noite_icone.jpg');
    section.style.backgroundImage = "url('./assets/img/noite.jpg')";
}