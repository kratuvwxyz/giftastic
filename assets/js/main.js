	$(document).ready(function() {

	    var movies = ["Winter is coming!"];

	    var add = -6;
	    var newAdd = add + 6;

	    // function to make buttons and add to page
	    function populateButtons(arrayToUse, classToAdd, areaToAddTo) {
	        $(areaToAddTo).empty();

	        for (var i = 0; i < arrayToUse.length; i++) {
	            var a = $("<button>");
	            a.addClass(classToAdd);
	            a.attr("data-game", arrayToUse[i]);
	            a.text(arrayToUse[i]);
	            $(areaToAddTo).append(a);
	            console.log(a);
	        }

	    }

	    $(document).on("click", ".search", function(event) {

	        if (newAdd < 24) {
	            add += 6;
	            newAdd = add + 6;
	        } else {
	            add = 0;
	            newAdd = add + 6;
	        }

	        $(".hideSec").css("display", "none");

	        event.preventDefault();

	        $("#gifs-appear-here").empty();

	        var GOT = $(this).attr("data-game");

	        var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + GOT + "&api_key=dc6zaTOxFJmzC&limit=24";

	        $.ajax({
	            url: queryURL,
	            method: "GET"
	        }).then(function(res) {
	            console.log(queryURL);
	            console.log(res);

	            var results = res.data;

	            for (var i = add; i < newAdd; i++) {

	                var animated = results[i].images.fixed_height.url;
	                var still = results[i].images.fixed_height_still.url;

	                var main = $("<div>").addClass("specialmain");

	                var gameGifDiv = $("<div>").addClass("figure");

	                var gameGifImage = $("<img>").addClass("card awesomeImage");
	                gameGifImage.attr("src", still);
	                gameGifImage.attr("data-still", still);
	                gameGifImage.attr("data-animate", animated);
	                gameGifImage.attr("data-state", "still");

	                var p = $("<p>").text("Rating: " + results[i].rating);

	                var s = $("<p>").text("Search: " + GOT);

	                gameGifDiv.append(p);
	                gameGifDiv.append(gameGifImage);
	                gameGifDiv.append(s);
	                main.append(gameGifDiv);

	                $("#gifs-appear-here").prepend(main);
	            }
	        });
	    });

	    $(document).on("click", ".card", function() {

	        var state = $(this).attr("data-state");

	        if (state === "still") {
	            $(this).attr("src", $(this).attr("data-animate"));
	            $(this).attr("data-state", "animate");
	        } else {
	            $(this).attr("src", $(this).attr("data-still"));
	            $(this).attr("data-state", "still");
	        }
	    });

	    $("#add-movie").on("click", function(event) {
	        event.preventDefault();

	        var movie = $("#movie-input").val().trim();

	        for (var i = 0; i < movies.length; i++) {
	            if (movie === movies[i] || movie === "") {
	                alert("Sorry, Either Your Search Is Empty Or IT Is Already Placed In The Search Results, Please Check!");
	                return false;
	            }
	        }


	        console.log(typeof(movie));
	        console.log(movie);

	        movies.push(movie);
	        console.log(movies);

	        populateButtons(movies, "btn btn-outline-light search m-1", "#movies-view");

	    });

	    populateButtons(movies, "btn btn-outline-light search m-1", "#movies-view");



	});