function expandSample(){
    const frame = event.target.previousElementSibling;
    frame.classList.toggle('expand');
    const buttonIcon = event.target.firstElementChild;
    buttonIcon.classList.toggle('fa-rotate-180');
    event.target.classList.toggle('buttonBuffer');
}