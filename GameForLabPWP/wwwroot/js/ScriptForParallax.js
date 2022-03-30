function CreateParralax(event) {
    this.querySelectorAll('.game-background').forEach(element => {
        element.style.transform = 'translateX(' + event.clientX / 100 + 'px) translateY(' + event.clientY / 100 + 'px)';
    });
}

document.addEventListener('mousemove', CreateParralax);