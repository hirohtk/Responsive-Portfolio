var modalPr1 = document.getElementById("project1Modal");
var modalAss1 = document.getElementById("Ass1Modal");
var modalAss2 = document.getElementById("Ass2Modal");
var modalAss3 = document.getElementById("Ass3Modal");
var modalAss4 = document.getElementById("Ass4Modal");
var modalAss5 = document.getElementById("Ass5Modal");
var modalAss6 = document.getElementById("Ass6Modal");

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

$("#thumbnailBox2").on("click", function () {
   
    modalAss2.style.display = "block";
    disableScroll();

    span.onclick = function () {
        modalAss2.style.display = "none";
        enableScroll();
    }

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function (event) {
        if (event.target == modalAss2) {
            modalAss2.style.display = "none";
            enableScroll();
        }
    }
});

$("#thumbnailBox3").on("click", function () {
   
    modalAss3.style.display = "block";
    disableScroll();
    

    span.onclick = function () {
        modalAss3.style.display = "none";
        enableScroll();
    }

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function (event) {
        if (event.target == modalAss3) {
            modalAss3.style.display = "none";
            enableScroll();
            
        }
    }
});

$("#thumbnailBox4").on("click", function () {
   
    modalAss4.style.display = "block";
    disableScroll();

    span.onclick = function () {
        modalAss4.style.display = "none";
        enableScroll();
    }

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function (event) {
        if (event.target == modalAss4) {
            modalAss4.style.display = "none";
            enableScroll();
        }
    }
});

$("#thumbnailBox5").on("click", function () {
   
    modalAss5.style.display = "block";
    disableScroll();

    span.onclick = function () {
        modalAss5.style.display = "none";
        enableScroll();
    }

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function (event) {
        if (event.target == modalAss5) {
            modalAss5.style.display = "none";
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

$("#thumbnailBox7").on("click", function () {
    modalAss6.style.display = "block";
    disableScroll();

    // When the user clicks on <span> (x), close the modal
    span.onclick = function () {
        modalAss6.style.display = "none";
        enableScroll();
    }

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function (event) {
        if (event.target == modalAss6) {
            modalAss6.style.display = "none";
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