let persoon = {
    voornaam : prompt("Wat is je naam?"),
    achternaam : prompt("Wat is je achternaam?"),
    leeftijd : prompt("Wat is je leeftijd?"),
    email : prompt("Wat is je e-mail?"),
    woonplaats : prompt("Wat is je woonplaats?")
};

if(persoon.leeftijd == 16){
    document.body.style.backgroundColor = 'orange';
}

if(persoon.leeftijd == 17){
    document.body.style.backgroundColor = 'blue';
}

if(persoon.leeftijd == 18){
    document.body.style.backgroundColor = 'gold';
}

if(persoon.leeftijd == 19){
    document.body.style.backgroundColor = 'green';
}

if(persoon.leeftijd == null){
    document.body.style.backgroundColor = 'turquoise';
}