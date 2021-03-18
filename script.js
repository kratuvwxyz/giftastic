let gifs = ["Winter is coming!", "John Snow"];
let add = -6;
let newAdd = add + 6;

// populate links at .navGifs
/* 
<li class="nav-item"><a class="nav-link" aria-current="page" href="#">Home</a></li> 
a = place it supposed to appendTo
b = array to take data
*/
newLinkGif = (a, b) => {
  $(a).empty();
  for (let i = 0; i < b.length; i++) {
    let li = $("<li>")
      .addClass("nav-item navitem-" + i)
      .appendTo(a);
    let aLi = $("<a>")
      .addClass("nav-link search")
      .text(b[i])
      .attr("area-current", "page")
      .attr("value", b[i])
      .attr("href", "#!")
      .appendTo(".navitem-" + i);
  }
};

newLinkGif(".navGifs", gifs);

// card to show gifs
/* 
<div class="card bg-dark text-white">
  <img src="..." class="card-img" alt="...">
  <div class="card-img-overlay">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Rating: <span>R</span></p>
  </div>
</div>
a = image src
b = title
c = rating
d = still url
e = animated url
f = "still" starting status
g = id
h = url
*/
newGifImg = (a, b, c, d, e, f, g, h) => {
  let specialmain = $("<div>").addClass("specialmain").attr("id", g);
  let mainD = $("<div>").addClass("card bg-dark text-white figure");
  let mainImg = $("<img>").attr("src", a).addClass("card-img awesomeImage").attr("alt", a).attr("src", d).attr("data-still", d).attr("data-animate", e).attr("data-state", f);
  let cardD = $("<div>").addClass("card-img-overlay");
  let aLink = $("<a>").attr("href", h).attr("target", "_blank").addClass("text-decoration-none text-light");
  let mainH5 = $("<h5>").addClass("card-title").text(b);
  let mainP = $("<p>")
    .addClass("card-text")
    .text("Rating: " + c);
  mainD.append(mainImg).append(cardD);
  aLink.append(mainH5);
  cardD.append(aLink).append(mainP);
  specialmain.append(mainD);
  $(".main").prepend(specialmain);
};

// generate Gifs
$(document).on("click", ".search", function (e) {
  e.preventDefault();
  let got = $(this).attr("value");
  searchGif(got);
});

searchGif = (x) => {
  $(".main").empty();
  $.ajax({
    url: `https://api.giphy.com/v1/gifs/search?q=${x}&api_key=dc6zaTOxFJmzC&limit=24`,
    method: "GET",
  }).then(function (res) {
    for (let i = 0; i < 24; i++) {
      let id = res.data[i].id;
      let url = res.data[i].url;
      let title = res.data[i].title;
      title === " " ? (title = x) : console.log(x);
      let rating = res.data[i].rating;
      let gifOriginal = res.data[i].images.original.url;
      let gifFixedWidth = res.data[i].images.fixed_width.url;
      let stillOriginal = res.data[i].images.original_still.url;
      let mp4original = res.data[i].images.original_mp4.mp4;
      //   function
      newGifImg(gifOriginal, title, rating, stillOriginal, gifOriginal, "still", id, url);
    }
  });
};

$(document).on("click", ".specialmain", function () {
  let s = $(this).find("img").attr("data-state");
  s === "still" ? [$(this).find("img").attr("src", $(this).find("img").attr("data-animate")), $(this).find("img").attr("data-state", "animate")] : [$(this).find("img").attr("src", $(this).find("img").attr("data-still")), $(this).find("img").attr("data-state", "still")];
});

$(document).on("click", ".giform", function (e) {
  e.preventDefault();
  let a = $(".gifinput").val();
  gifs.push(a);
  newLinkGif(".navGifs", gifs);
  $(".gifinput").val("");
  searchGif(a);
});

$(document).ready(function () {
    searchGif("Game of Thrones");
})