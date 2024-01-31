console.log("JS file connected");

const vectorGraphic = document.querySelector('#orange');
console.log(vectorGraphic);

function logthisId(element) {
    console.log(this);
    console.log('clicked on this element:', this.id);
}

vectorGraphic.addEventListener('click', logthisId);