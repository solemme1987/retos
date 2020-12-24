const panels = document.querySelectorAll('.panel');

panels.forEach((panel, index) => {
    panel.addEventListener('click', () => {
        panel.classList.add('active');
        console.log('PANEL QUE ENVIO', index);
        removeActiveClasses(index);
    });

});

function removeActiveClasses(panelActive) {
    panels.forEach((panel, index) => {
        if (index != panelActive) {
            panel.classList.remove('active');
        }
    });
}