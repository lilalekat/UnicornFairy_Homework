$(document).ready(function() {

    var childhoodCartoons = ['mickey mouse', 'minnie mouse', 'darkwing duck', 'care bears', 'jimmy neutron', 'duck tales', 'little mermaid', 'tail spin'];

    function takemetochildhood() {
        $("#childhood").empty();
    }
    //for loop for childhood cartoons array//
    for (var i = 0; i < childhoodCartoons.length; i++) {
        //create all buttons
        var clickHere = $('<button>');
        clickHere.addClass('expression');
        clickHere.attr('data-name', childhoodCartoons[i]);
        clickHere.text(childhoodCartoons[i]);
        $('#childhood').append(a);
    }
});
takemetochildhood();
//API Time//
$(document).on('click', '.expression', function() {

    var funTimes = $(this).html(); 
    console.log(funTimes);
    
    var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + funTimes + "&api_key=tkzXCorjAY5J50mNRwPpKDe2JQgZbMSY";
        // console.log(queryURL);
        $.ajax({url: queryURL, method: 'GET'})
        .done(function(response) {
            // grabs the data
            var results = response.data;
            console.log(results);
    