var el;

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


    $('.entries').on('click', '.update', function(){
        $('.revise').removeClass('hidden');
        el = $(this).parent();
        $('.name').val(el.find('.userName').attr('id'));
        $('.score').val(el.find('.userScore').attr('id'));
        $('.date').val(el.find('.userDate').attr('id'));
    });


    $('.submit').click(function(){
        var dataObject = { 'name': $('.name').val(), 'score': $('.score').val(), 'date_completed': $('.date_completed').val() };
        var id = el.attr('id');
        $.ajax({
            url: '/assignments/' + id,
            type: 'PUT',
            data: JSON.stringify(dataObject),
            contentType: 'application/json',
            success: function(result) {
                console.log(result);
                getData();
            }
        });
    });

    function display(res) {
        var entry;
        var date;
        var name;
        var score;
        var update = "<button class='update'>Update Entry</button>";
        var button = "<button class='remove'>Remove</button>";
        for (var i = 0; i < res.length; i++){
            entry = res[i];
            date = $.trim(entry["date_completed"].substring(0, 10));
            date = "<p class='userDate' id=" + date + "><b>Date Completed: </b>" + date + "</p>";
            name = "<p class='userName' id=" + entry["name"] + "><b>Name: </b>" + entry["name"] + "</p>";
            score = "<p class='userScore' id=" + entry["score"] + "><b>Score: </b>" + entry["score"] + "</p>";
            $('.entries').append("<li id=" + entry["_id"] +">" + name + score + date + button + update +"</li>");
        }
    }
});