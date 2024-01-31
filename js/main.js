console.log("JS file connected");

const vectorGraphic = document.querySelector('#badge');
console.log(vectorGraphic);
// console.log(this);

function logthisId(element) {
    console.log(this);
    // console.log(vectorGraphic);
    console.log('clicked on this element:', this.id);
}

// logthisId('blue');
// logthisId('orange');

vectorGraphic.addEventListener('click', logThisId);


// Half

const vectorGraphics = document.querySelector('#badge');

function logthisId(element) {
    console.log(this);
    console.log('clicked on this element:', this.id);
}

vectorGraphic.addEventListener('click', logthisId);