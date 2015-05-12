$(document).ready(function(){

    $.ajax({
        url: '/assignments',
        dataType: "json",
        success: function(response) {
            display(response);
        }
    });


    function display(res) {
        var entry;
        for (var i = 0; i < res.length; i++){
            entry = res[i];
            $('.entries').append(entry["name"]);
            $('.entries').append(entry["score"]);
            $('.entries').append(entry["_id"]);
            $('.entries').append(entry["date_completed"]);
        }
    }
});