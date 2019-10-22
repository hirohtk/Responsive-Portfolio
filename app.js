var modalPr1 = document.getElementById("project1Modal");
var modalAss1 = document.getElementById("Ass1Modal");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];


$("#thumbnailBox1").on("click", function () {
   
    modalAss1.style.display = "block";
    disableScroll();

    span.onclick = function () {
        modalAss1.style.display = "none";
        enableScroll();
    }

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function (event) {
        if (event.target == modalAss1) {
            modalAss1.style.display = "none";
            enableScroll();
        }
    }
});


$("#thumbnailBox6").on("click", function () {
    modalPr1.style.display = "block";
    disableScroll();

    // When the user clicks on <span> (x), close the modal
    span.onclick = function () {
        modalPr1.style.display = "none";
        enableScroll();
    }

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function (event) {
        if (event.target == modalPr1) {
            modalPr1.style.display = "none";
            enableScroll();
        }
    }
});



function disableScroll() {
    // Get the current page scroll position 
    scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,

        // if any scroll is attempted, set this to the previous value 
        window.onscroll = function () {
            window.scrollTo(scrollLeft, scrollTop);
        };
}

function enableScroll() {
    window.onscroll = function () { };
} 