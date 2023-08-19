
function recordAnswer(button) {
    const buttons = button.parentNode.querySelectorAll('.answer-button');
    
    buttons.forEach(btn => {
        if (btn === button) {
            btn.classList.add('clicked');
        } else {
            btn.classList.remove('clicked');
        }
        
        btn.disabled = true;
    });
}



