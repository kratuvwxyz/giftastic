let gifs = ["Winter is coming!", "John Snow"],
  add = -6,
  newAdd = add + 6;
(newLinkGif = (a, t) => {
  $(a).empty();
  for (let i = 0; i < t.length; i++) {
    $("<li>")
      .addClass("nav-item navitem-" + i)
      .appendTo(a),
      $("<a>")
        .addClass("nav-link search")
        .text(t[i])
        .attr("area-current", "page")
        .attr("value", t[i])
        .attr("href", "#!")
        .appendTo(".navitem-" + i);
  }
}),
  newLinkGif(".navGifs", gifs),
  (newGifImg = (a, t, i, e, d, n, s, r) => {
    let l = $("<div>").addClass("specialmain").attr("id", s),
      m = $("<div>").addClass("card bg-dark text-white figure"),
      f = $("<img>").attr("src", a).addClass("card-img awesomeImage").attr("alt", a).attr("src", e).attr("data-still", e).attr("data-animate", d).attr("data-state", n),
      c = $("<div>").addClass("card-img-overlay"),
      g = $("<a>").attr("href", r).attr("target", "_blank").addClass("text-decoration-none text-light"),
      p = $("<h5>").addClass("card-title").text(t),
      o = $("<p>")
        .addClass("card-text")
        .text("Rating: " + i);
    m.append(f).append(c), g.append(p), c.append(g).append(o), l.append(m), $(".main").prepend(l);
  }),
  $(document).on("click", ".search", function (a) {
    a.preventDefault();
    let t = $(this).attr("value");
    searchGif(t);
  }),
  (searchGif = (a) => {
    $(".main").empty(),
      $.ajax({ url: `https://api.giphy.com/v1/gifs/search?q=${a}&api_key=dc6zaTOxFJmzC&limit=24`, method: "GET" }).then(function (t) {
        for (let i = 0; i < 24; i++) {
          let e = t.data[i].id,
            d = t.data[i].url,
            n = t.data[i].title;
          " " === n && (n = a);
          let s = t.data[i].rating,
            r = t.data[i].images.original.url,
            l = (t.data[i].images.fixed_width.url, t.data[i].images.original_still.url);
          t.data[i].images.original_mp4.mp4;
          newGifImg(r, n, s, l, r, "still", e, d);
        }
      });
  }),
  $(document).on("click", ".specialmain", function () {
    "still" === $(this).find("img").attr("data-state") ? ($(this).find("img").attr("src", $(this).find("img").attr("data-animate")), $(this).find("img").attr("data-state", "animate")) : ($(this).find("img").attr("src", $(this).find("img").attr("data-still")), $(this).find("img").attr("data-state", "still"));
  }),
  $(document).on("click", ".giform", function (a) {
    a.preventDefault();
    let t = $(".gifinput").val();
    gifs.push(t), newLinkGif(".navGifs", gifs), $(".gifinput").val(""), searchGif(t);
  }),
  $(document).ready(function () {
    searchGif("Game of Thrones");
  });

/*  
        ╥╥  DESIGNED AND DEVELOPED BY...
        ║║ 
        ║║ ╓╓──╖╖ ╓╓──── ────╖╖ ╓╖ ╓╓──╖╖ ╓╓──╖╖ TM
        ║║ ║║  ║║ ║║         ║║ ╙╜ ║║  ║║ ║║  ║║
    ╓╓──╫╫ ╫╫──╜╜ ╙╙──╖╖ ╓╓──╫╫ ╖╖ ║║  ║║ ║║  ║║
    ║║  ║║ ║║         ║║ ║║  ║║ ║║ ║║  ║║ ║║  ║║
    ║║  ║║ ║║         ║║ ║║  ║║ ║║ ║║  ║║ ║║  ║║
    ║║  ║║ ╙╙──── ────╜╜ ╙╙──╜╜ ║║ ╙╙──╫╫ ╜╜  ║║
    ║║  ║║  HTTPS://DESAIGN.APP ║║     ║║     ╙╙ LLC
    ╙╙──╜╜  SINCE TWENTYELEVEN  ╙╙─ ───╜╜
            Copyright © 2021
            ALL RIGHTS RESERVED
            --
            Call: 1-860-DESAIGN
            Mail: MEET@DESAIGN.STUDIO
            Post: PO BOX 200001, AUSTIN TX 78720
            --
            Book an appointment with us at
            https://calendly.com/desaignstudio
            --
            Follow us: #desaignstudio
*/