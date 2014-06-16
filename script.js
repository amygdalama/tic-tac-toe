$(document).ready(function(){

    var markSquare = (function(){
        var mark
        return function(){
            if (mark === 'X'){
                mark = 'O'
            } else {
                mark = 'X'
            }
            return mark;
        }
    });

    var board = function(){
        var $table = $('<table></table>')
        for (var i = 0; i < 3; i++){
            $table.append($('<tr><td></td><td></td><td></td></tr>'))
        };
        $('div').append($table)
        var mark = markSquare()
        $('td').on('click', function(){
            if ($(this).text()){
                alert('invalid square')
            }
            else {
                $(this).text(mark())
            }
        });
    };
    board();
});