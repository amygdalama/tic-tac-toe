$(document).ready(function(){
    var $table = $('<table></table>')
    for (var i = 0; i < 3; i++){
        $table.append($('<tr><td></td><td></td><td></td></tr>'))
    };
    $('div').append($table)
});