$(document).ready(function(){

    $.ajax({
        url: '/assignments',
        dataType: "json",
        success: function(response) {
            display(response);
        }
    });

    $('.entries').on('click', '.remove', function(){
       console.log($(this).parent());
    });

    function display(res) {
        var entry;
        var date;
        var button = "<button class='remove'>Remove</button>";
        for (var i = 0; i < res.length; i++){
            entry = res[i];
            //date = entry["date"].format("m/dd/yy");
            $('.entries').append("<li id=" + entry["_id"] +"> <b>Name: </b>" + entry["name"] + " <b>Score: </b>" + entry["score"] + " <b>Date Completed: </b>" + entry["date"] + button + "</li>");
        }
    }
});