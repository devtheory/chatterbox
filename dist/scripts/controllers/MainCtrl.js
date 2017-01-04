(function () {
    function MainCtrl(Room) {
        this.rooms = Room.all;
        this.test = Room.all.length;
    }

    angular
        .module('chatterbox')
        .controller('MainCtrl', ['Room', MainCtrl]);
})();
