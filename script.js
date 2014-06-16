$(document).ready(function(){

    var markSquare = (function(){
            console.log(this);
            var i = 0;
            return function(){
                i+=1;
                if (i % 2 === 0){
                    return 'X';
                } else {
                    return 'O';
                }
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
            console.log(mark)
            $(this).text(mark)
        })
    };
    board();
});