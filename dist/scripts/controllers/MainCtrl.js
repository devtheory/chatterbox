(function () {
    function MainCtrl(Room) {
        this.rooms = Room.all;
        this.addRoom = function(roomName){
          Room.addRoom(roomName);
        }
    }

    angular
        .module('chatterbox')
        .controller('MainCtrl', ['Room', MainCtrl]);
})();
