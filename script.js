
// JavaScript Code using jQuery:

$(document).ready(function () {
    // Function to handle fading effect:
    function fadeTransition(imgSrc) {
        $("#display-image").fadeOut(function () {
            $(this).attr("src", imgSrc).fadeIn();
        });
    }

    // Function to handle sliding effect:
    function slideTransition(imgSrc) {
        $("#display-image").slideUp(function () {
            $(this).attr("src", imgSrc).slideDown();
        });
    }

    // Attach click event listeners to thumbnail images:
    $(".thumbnail").click(function () {
        // Get the source of the clicked thumbnail:
        let imgSrc = $(this).attr("src");
        
    });
});


// Define functions to handle fading and sliding effects, incorporating callbacks and closures. 

// Click functions for thumbnails and the transition toggle button trigger alerts when changing the transition effect.
// providing information about the previous and newly applied effect.

let useFadeTransition = true;
let previousEffect = "Fade"; 

// Function to handle fading effect:
function fadeTransition(imgSrc) {
    $("#display-image").fadeOut(function () {
        $(this).attr("src", imgSrc).fadeIn();
    });
}

// Function to handle sliding effect:
function slideTransition(imgSrc) {
    $("#display-image").slideUp(function () {
        $(this).attr("src", imgSrc).slideDown();
    });
}

$(document).ready(function () {
    // Attach click event listeners to thumbnail images:
    $(".thumbnail").click(function () {
        // Get the source of the clicked thumbnail:
        let imgSrc = $(this).attr("src");

        // Use fadeTransition or slideTransition based on the current setting:
        if (useFadeTransition) {
            fadeTransition(imgSrc);
        } else {
            slideTransition(imgSrc);
        }
    });

    // Attach click event listener to the transition toggle button:
    $("#transition-toggle").click(function () {
        //Save previous effect before changing it:
        let previousEffectName = useFadeTransition ? "Fade" : "Slide";

        // Toggle between fade and slide transitions
        useFadeTransition = !useFadeTransition;

        //Show the alert only when the effect is changed
        if (useFadeTransition !== !useFadeTransition) {
            // Show an alert with the information about the change in the effect
            alert("Transition effect changed!\n\n-Previous effect was : " + previousEffectName + "\n\n-Newly implemented effect is : " + (useFadeTransition ? "Fade" : "Slide") + "\n\nTry it now!" + "\n\n-> Select an image");

            // Update the previous effect:
            previousEffect = useFadeTransition ? "Fade" : "Slide";
        }
    });
});

$(document).ready(function () {
    // Function to handle fading effect with a callback:
    function fadeTransition(imgSrc, callback) {
        $("#display-image").fadeOut(function () {
            $(this).attr("src", imgSrc).fadeIn(callback);
        });
    }

    // Function to handle sliding effect with a callback:
    function slideTransition(imgSrc, callback) {
        $("#display-image").slideUp(function () {
            $(this).attr("src", imgSrc).slideDown(callback);
        });
    }

    // Attach click event listeners to thumbnail images:
    $(".thumbnail").click(function () {
        // Get the source of the clicked thumbnail:
        let imgSrc = $(this).attr("src");

        // Use fadeTransition or slideTransition based on the current setting:
        if (useFadeTransition) {
            fadeTransition(imgSrc, function () {
                // Callback function executed after the fade transition:
                
            });
        } else {
            slideTransition(imgSrc, function () {
                // Callback function executed after the slide transition:
               
            });
        }
    });
});


// Clear All Images Button:

$(document).ready(function () {
    // Attach click event listener to the "Clear All Images" button:
    $("#clear-images-btn").click(function () {
        // Set src attribute of #display-image into an empty string to remove the image:
        $("#display-image").attr("src", "");
        $("#display-image").attr("alt", "");
    });
});



