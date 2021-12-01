myButton = document.getElementById("up");

//show button after 20px scroll from top

window.onscroll = function() {
    scrollFunction()
};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20){
        myButton.style.display = "block";
    }
    else{
        myButton.style.display = "none";
    }
}

//scroll to top function
function topFunction() {
    document.documentElement.scrollTop = 0;
}