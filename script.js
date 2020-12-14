const box = document.getElementById('box');
let boxLeft = 200;
let boxTop = 200;

document.addEventListener('keydown', (event) => {
    const keyName = event.key;
    
    if(keyName === 'ArrowUp'){
        boxTop -= 10;
    }
    if(keyName === 'ArrowDown'){
        boxTop += 10;
    }
    if(keyName === 'ArrowLeft'){
        boxLeft -= 10;
    }
    if(keyName === 'ArrowRight'){
        boxLeft += 10;
    }
    box.style.top = boxTop + 'px';
    box.style.left = boxLeft + 'px';
});
