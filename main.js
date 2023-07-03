const touch = [...document.querySelectorAll('.button')];
console.log(touch);

const listKeyCode = touch.map(touch => touch.dataset.key);
console.log(listKeyCode);

const screen = document.querySelector('.ecran');
console.log(screen);

document.addEventListener('keydown', (e) =>{
    const value = e.keyCode.toString();
    calcul(value)
})

document.addEventListener('click', (e) =>{
    const value = e.target.dataset.key;
    calcul(value)
})

const calcul = (value) =>{
    if(listKeyCode.includes(value)){
        switch (value){
            case '8':
                screen.textContent = ''
                break
            case '13':
                const total = eval(screen.textContent);
                screen.textContent = total;
                break
            default:
                const indexKeyCode = listKeyCode.indexOf(value);
                const key = touch[indexKeyCode]
                screen.textContent += key.innerHTML;
        }
    }
}

window.addEventListener('error', (e) => {
    alert('une erreur est survenue lors de votre calcul , veuillez resseyez:' + e.message);
    screen.textContent = ''
})