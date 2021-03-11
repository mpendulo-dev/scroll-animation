// funcionality
const boxes = document.querySelectorAll('.box');

window.addEventListener('scroll',checkBoxes);

// function call
checkBoxes();

function checkBoxes() {
    
    // innerHeight property returns the height of a window's content area
    const trigger = window.innerHeight/5 * 4;

    // looping through the box array list
    boxes.forEach(box => {

        // getBoundingClientRect() method returns the size of an element, in this case which is the top of the viewport
        const boxTop = box.getBoundingClientRect().top;

        if(boxTop < trigger) {
            box.classList.add('show');
        } else {
            box.classList.remove('show');
        }
    });


}
