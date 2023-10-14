function expandSample(){
    const frame = event.target.previousElementSibling;
    frame.classList.toggle('expand');
    const buttonIcon = event.target.firstElementChild;
    buttonIcon.classList.toggle('fa-rotate-180');
    event.target.classList.toggle('buttonBuffer');
}

function showDetails(){
    let target = event.target.id;
    let togo = document.getElementById('default');
    togo.classList.add('gone');
    console.log(target);
    let windows = Array.from(document.getElementsByClassName('Window'));
    console.log(windows);
    windows.forEach(element => {
        element.classList.add('transparent');
    });


    let targetWindow = document.getElementsByClassName(target)[0];
    setTimeout(targetWindow.classList.remove('transparent'), 500)
    
}

function showItems(id){
    let target = document.getElementById(id);
    target.classList.toggle('shown');

}