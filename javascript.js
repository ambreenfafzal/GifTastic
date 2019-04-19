// Pseudo Code: 
// Create HTML and JS files
// In JS files:
// create a variable called topics = array of Strings (The office characters)
// create a loop that appends a button for each string in the array

//  When the user clicks on a button, the page should grab 10 static, non-animated gif images from the GIPHY API and place them on the page.
//   When the user clicks one of the still GIPHY images, the gif should animate. If the user clicks the gif again, it should stop playing.
//   Under every gif, display its rating (PG, G, so on).
// * This data is provided by the GIPHY API.
// * Only once you get images displaying with button presses should you move on to the next step.
// Add a form to your page takes the value from a user input box and adds it into your `topics` array. Then make a function call that takes each topic in the array remakes the buttons on the page.


// this function searches the movie title and displays it in the html page
var theOfficeTheme = ["The Office Dwight", "The Office Jim", " The Office Michael", "The Office Pam", "The Office wedding"];
function createButtons() {

    // create an array with all the topics 

    //create a for loop to loop through each string in the array 
    for (var i = 0; i < theOfficeTheme.length; i++) {
        //create a button for each string
        var buttons = $("<button>").text(theOfficeTheme[i]);
        // display each button in the HTML page in the buttonDiv
        $("#buttonDiv").append(buttons);
        buttons.addClass("giphys");
        buttons.attr("data-name", theOfficeTheme[i]);
    }
};
createButtons();


$(document).on("click", "#submit-button", function () {
    event.preventDefault();

    var giphy = $("#inlineFormInput").val();
    console.log(giphy);
    theOfficeTheme.push(giphy);
    $("#buttonDiv").empty();
    createButtons();
    $("#inlineFormInput").val("");


});


$("#giphyDiv").empty();


$(document).on("click", ".giphys", getName);
function getName() {
    var clickedOn = $(this);
    var buttonName = clickedOn.attr("data-name");
    // construct queryurl using giphyName
    var myUrl = "https://api.giphy.com/v1/gifs/search?q=" + buttonName + "&api_key=fJvWKPKWKy3P04il9oiI1MvvHVBPKx23&limit=10";
    $.ajax({
        url: myUrl,
        method: "GET"
    }).then(function (response) {
        console.log("This is working")
        console.log(response);
        var giphyData = response.data;
        console.log("giphy data", giphyData)
        for (var i = 0; i < giphyData.length; i++) {
            console.log(giphyData[i].type)
            //    var displayType =  $("<div>").text(giphyData[i].type);
            //    var displayRating =  $("<div>").text(giphyData[i].rating);
            //    var displayImage =  $("<img>").attr("src" , giphyData[i].images.original.url);
            // $("#giphyDiv").append("<h6>Type:</h6>", "" , displayType,"<h6>Rating:</h6>" , " " ,displayRating , displayImage);
            var displayImage = $("<img>").attr("src", giphyData[i].images.original.url);
            var displayRating = $("<div>").text("Rating:" + giphyData[i].rating);
            $("#giphyDiv").append( displayRating, displayImage);


        }



    });
    $("#giphyDiv").empty();
};







        // $("#giphyDiv").text(JSON.stringify(response.data , null , 10));

//create a div to hold the giphys



    // $("#giphyDiv").append("<img>" , src = response.data[1].images.source);
            // $("#buttonDiv").append(response.data[0]);
    //    });

//creating an array of Giphy 
// var theOfficeTheme = ["The Office Dwight","The Office Jim", " The Office Michael","The Office Pam","The Office Jokes","The Office wedding"];

// //this will loop througha and create buttons for each string in the array
// 
//     // $("#buttonDiv").append(buttons);

//     // document.getElementById("buttonDiv").innerHTML += "<button>" + theOfficeTheme[i] + "</button>";
// 
//     });

 // this function will trigger when the user clicks on a button, 10 static, non animated gif images will display on the 


// }



// in class
// 

// create for loop
// below the for loop add: 
// var button = $(button tag in quotes) .addClass (".classname")
// .text(array name[i])
// .attr("data-topic"), topicsarray[i]
// $("#buttons")
