const currentButtons = ["one","two","three","four","five","six","seven","eight"];

console.log(currentButtons);

$(function(){
    $.ajax({ type:"GET",
        url:"https://api.giphy.com/v1/gifs/search?q=top&api_key=dc6zaTOxFJmzC&limit=24",
        success: function(data){
            console.log(data);
            
        }
        
    });
    //let's get a buttons that we need to create
    // for ( let i = 0; i < currentButtons.length; i++){
    //     console.log(currentButtons[i]);
    //     let x = currentButtons[i];
    //     let y = $('<button></button>').text(x).addClass('clickThis mr-2 p-2 btn btn-info').attr('name', x);
    //     $('.mainMenu').append(y);
    // }

    // $(document).on('click', '.clickThis', function(event){
    //     event.preventDefault();
    //     // console.log(event.target.name);
    //     // let a = event.target.name;
    //     // console.log(a);
        
        


    // });

//document ends here
});





