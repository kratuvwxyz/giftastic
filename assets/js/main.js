//  var movies = ["You know nothing, Jon Snow", "Winter is coming!"];
//
//	// Function for displaying movie data
//	function renderButtons() {
//
//	// Deleting the movie buttons prior to adding new movie buttons
//	// (this is necessary otherwise we will have repeat buttons)
////	$("#movies-view").empty();
//
//	// Looping through the array of movies
//	for (var i = 0; i < movies.length; i++) {
//
//	// Then dynamicaly generating buttons for each movie in the array.
//	// This code $("<button>") is all jQuery needs to create the start and end tag. (<button></button>)
//	var a = $("<button>");
//	// Adding a class
//	a.addClass("btn btn-outline-warning m-1");
//	// Adding a data-attribute with a value of the movie at index i
//	a.attr("data-game", movies[i]);
//	// Providing the button's text with a value of the movie at index i
//	a.text(movies[i]);
//	// Adding the button to the HTML
//	$("#movies-view").append(a);
//	}
//	}
//
//	// This function handles events where one button is clicked
//	$("#add-movie").on("click", function(event) {
//	// event.preventDefault() prevents the form from trying to submit itself.
//	// We're using a form so that the user can hit enter instead of clicking the button if they want
//	event.preventDefault();
//
//	// This line will grab the text from the input box
//	var movie = $("#movie-input").val().trim();
//	// The movie from the textbox is then added to our array
//	movies.push(movie);
//
//		// calling renderButtons which handles the processing of our movie array
//		renderButtons();
//	});
//
//		// Calling the renderButtons function at least once to display the initial list of movies
//		renderButtons();
//
//
////	$(renderButtonClick).on("click", function(event){
////		event.preventDefault();
////	});
//		
//	
//
//	// Adding click event listen listener to all buttons
//	$("button").on("click", function(event) {
//
//			// event.preventDefault() can be used to prevent an event's default behavior.
//			// Here, it prevents the submit button from trying to submit a form when clicked
//			event.preventDefault();
//		
//
//
//			  // Grabbing and storing the data-GOT property value from the button
//			  var GOT = $(this).attr("data-game");
//
//			  // Constructing a queryURL using the GOT name
//			  var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
//				GOT + "&api_key=dc6zaTOxFJmzC&limit=12";
//
//			  // Performing an AJAX request with the queryURL
//			  $.ajax({
//				url: queryURL,
//				method: "GET"
//			  })
//
//			// After data comes back from the request
//			.then(function(response) {
//			  console.log(queryURL);
//			  console.log(response);
//
//				// storing the data from the AJAX request in the results variable
//				var results = response.data;
//
//				// Looping through each result item
//				for (var i = 0; i < 12; i++) {
//
//					//Creating main div container
//					var main = $("<div>").addClass("specialmain");
//
//					// Creating and storing a div tag
//					var gameGifDiv = $("<div>").addClass("figure");
//
//					// Creating and storing an image tag
//					var gameGifImage = $("<img>").addClass("card awesomeImage");
//
//					// Setting the src attribute of the image to a property pulled off the result item
//					gameGifImage.attr("src", results[i].images.fixed_width.url);
//
//					// Creating a paragraph tag with the result item's rating
//					var p = $("<p>").text("Rating: " + results[i].rating);
//					var s = $("<p>").text("Search: " + GOT);
//
//					// Appending the paragraph and image tag to the gameGifDiv
//
//					gameGifDiv.append(p);
//					gameGifDiv.append(gameGifImage);
//					gameGifDiv.append(s);
//					main.append(gameGifDiv);
//
//				// Prependng the gameGifDiv to the HTML page in the "#gifs-appear-here" div
//				$("#gifs-appear-here").prepend(main);
//
//			  }
//			});
//		});
//
//
