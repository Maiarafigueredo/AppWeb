    

$(function() {
    $("#form").submit(function(e){
        e.preventDefault();
    });

    $("#action-select").click(function () {
        $.getJSON('http://localhost:4000/item/', function( data ) {
            console.log(data);
        });
    });

    $("#action-insert").click(function () {
        $.post('http://localhost:4000/item/', function( data ) {
            console.log(data);
        });
    });

    $("#action-update").click(function () {
        $.ajax({
            url: 'http://localhost:4000/item/1',
            type: 'PUT',
            success: function(result) {
               
            }
        });
    });
    
    $("#delete").click(function () {
        $.ajax({
            url: 'http://localhost:4000/item/1',
            type: 'DELETE',
            success: function(result) {
                console.log(data);
            }
        });
    });
});