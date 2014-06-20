$(document).ready(function() {

    var view = {
        tableId: 'board',

        getTable: function() {
            return $('#' + this.tableId);
        },

        setSquare: function(index, value) {
            this.getTable().children()[index].text(value);
        },

        addSquare: function() {
            this.getTable().append($('<td>'));
        },

        createTable: function() {
            var $table = $('<table></table>');
            $('#game').append($table);
            $table.attr('id', this.tableId);
        },

        bindClickSquare: function(index, func){
            this.getTable().children()[index].click(func);
        }
    };

    var model = {
        data: [],

        setSquare: function(index, value){
            this.data[index] = value;
            view.setSquare(index, value);
        },

        getSquare: function(index){
            return this.data[index];
        },

        setUpBoard: function(){
            view.createTable()
            for (var i = 0; i < 9; i++){
                this.data.push(undefined);
                view.addSquare();
                var self = this
                view.bindClickSquare(i, function(){
                    self.setSquare
                });
            }
        }
    };


    model.setUpBoard()

    // var markSquare = function(){
    //     var mark;
    //     return function(){
    //         if (mark === 'X'){
    //             mark = 'O';
    //         } else {
    //             mark = 'X';
    //         }
    //         return mark;
    //     };
    // };

    // var board = function(){
    //     var $table = $('<table></table>');
    //     for (var i = 0; i < 3; i++){
    //         $table.append($('<tr><td></td><td></td><td></td></tr>'));
    //     }
    //     $('div').append($table);
    //     var mark = markSquare();
    //     $('td').on('click', function(){
    //         model.clickSquare(this.id)
    //         }
    //     });
    // };
    // board();
});