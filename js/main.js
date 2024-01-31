console.log("JS file connected");

const vectorGraphics = document.querySelector('#badge');

function logthisId(element) {
    console.log(this);
    console.log('clicked on this element:', this.id);
}

vectorGraphic.addEventListener('click', logthisId);