$(document).ready(function(){
    var board = function(){
        var $table = $('<table></table>')
        for (var i = 0; i < 3; i++){
            $table.append($('<tr><td></td><td></td><td></td></tr>'))
        };
        $('div').append($table)
        $('td').on('click', function(event){
            console.log(this);
            $(this).css('background-color', 'green');
        });
    };
    board();
});