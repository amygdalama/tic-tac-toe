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

    // var checkWinner = function(){
    //     for (var i = 0; i < 3; i++){
    //         var $row = $('tbody').children()[i]
    //         for (var j = 0; j < 3; j++){
    //             var $square = $row.children()[j]
    //             $square
    //         }
    //     };
    // };

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
                $(this).text(mark());
                // checkWinner();
            }
        });
    };
    board();
});