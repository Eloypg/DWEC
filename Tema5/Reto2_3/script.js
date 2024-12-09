window.onload = function() {
    const form = document.getElementById("addForm");
    form.reset();
}

function readParagraph(){
    const emailRegex = /^[a-z][a-z0-9_.]*@[a-z]+\.[a-z]{2,3}$/;

    const email = document.getElementById("emailInput");
    const emailErrMsg = document.getElementById("emailErrMsg");
    const paragraphInput = document.getElementById("paragraphInput");

    if(!emailRegex.test(email.value)) {
        emailErrMsg.style.display = "inline";
        emailErrMsg.textContent = "*El email no es correcto";
    } else {
        emailErrMsg.style.display = "none";
        addParagraph(paragraphInput.value);
    }
}

function addParagraph(paragraphText) {
    const column1 = document.getElementById("column1");
    const column2 = document.getElementById("column2");

    const newParagraph = document.createElement("p");
    newParagraph.innerHTML = `<strong>${paragraphText}</strong>`;
    newParagraph.style.color = "red";

    column1.appendChild(newParagraph);
    const cloneParagraph = newParagraph.cloneNode(true); //Clona el parrafo con su contenido
    cloneParagraph.style.color = "green";
    column2.appendChild(cloneParagraph);
}

document.getElementById("addButton").addEventListener("click", readParagraph);

//CREAR COOKIE
function setCookie(name, value, days){
    const date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    document.cookie = `${name}=${value}; expires=${date.toUTCString()}; path=/`;
}
//LEER COOKIE
function getCookie(name){
    const cookiesList = document.cookie.split("; ");
    for(let cookie of cookiesList){
        const [clave, valor] = cookie.split("=");
        if(clave === name) return valor;
    }
    return null;
}
//BORRAR COOKIES
function deleteCookie(name){
    document.cookie = `${nombre}=; expires=1hu, 01 Jan 1945 00:00:00 GMT; path=/`;
}
//AVISO COOKIES
function showCookiesWarning(){
    const cookieConsent = getCookie("cookieConsent");
    if(!cookieConsent){
        let result = confirm("¿Estás seguro de que quieres continuar? Esta página usa cookies para contar visitas.");
        if(result){
            setCookie("cookieConsent", "true", 365);
            countVisits();
        } else {
            deleteCookie("visitas");
        }
    } else {
        countVisits();
    }
}
//CONTAR VISITAS
function countVisits(){
    let visits = getCookie("visitas");
    visits = visits ? parseInt(visits) + 1 : 1;
    setCookie("visitas", visits, 365);
    document.getElementById("visits-counter").textContent = `Número de visitas: ${visits}`;
}

showCookiesWarning();

//RETO 3

//FUNCIÓN DE BUSCAR
function findWord(){
    const word = document.getElementById("findInputForFirstWord").value;
    window.find(word);
}

//RETO 4

//FUNCION DE REMARCAR
function highlightWords(){
    const marks = document.querySelectorAll('mark');
    marks.forEach(mark => {
        mark.replaceWith(mark.textContent);
    })

    const wordToHighlight = document.getElementById("highlightInput").value;
    const paragraphs = document.querySelectorAll('p');

    paragraphs.forEach(p => {
        const regex = new RegExp(`(${wordToHighlight})`, 'gi');
        p.innerHTML = p.innerHTML.replace(regex, '<mark>$1</mark>');
    })
}

//RETO 5

 0