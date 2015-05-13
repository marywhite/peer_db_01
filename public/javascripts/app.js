$(document).ready(function(){

    function getData() {
        $.ajax({
            url: '/assignments',
            dataType: "json",
            success: function (res) {
                $('.entries').empty();
                display(res);
            }
        });
    }

    getData();

    $('.entries').on('click', '.remove', function(){
       console.log($(this).parent());
        var id = $(this).parent().attr('id');
        console.log(id);
        $.ajax({
            url: '/assignments/' + id,
            type: 'DELETE',
            success: function (res) {
                console.log(res);
                getData();
            },
            error:function(xhr){
                console.log(xhr);
            }
        });
    });

    function display(res) {
        var entry;
        var date;
        var update = "<button class='remove'>Remove</button>";
        var button = "<button class='remove'>Remove</button>";
        for (var i = 0; i < res.length; i++){
            entry = res[i];
            date = $.trim(entry["date_completed"].substring(0, 10));
            $('.entries').append("<li id=" + entry["_id"] +"> <b>Name: </b>" + entry["name"] + " <b>Score: </b>" + entry["score"] + " <b>Date Completed: </b>" + date + button + "</li>");
        }
    }
});