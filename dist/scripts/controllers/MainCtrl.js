(function () {
    function MainCtrl(Room, Message, $uibModal) {
        this.rooms = Room.all;
        this.room = null;
        this.message = null;
        this.messages;

        this.setRoom = function(room){
          this.room = room;
          this.messages = Message.getMessagesFor(room);
        }

        this.createMessage = function(message){
          Message.createMessage(this.room.$id, message);
          this.message = null;
        }

        this.open = function () {
            var modalInstance = $uibModal.open({
                animation: true,
                ariaLabelledBy: 'modal-title',
                ariaDescribedBy: 'modal-body',
                templateUrl: '/templates/modal.html',
                controller: 'ModalCtrl',
                controllerAs: '$ctrl',
                appendTo: undefined,
                size: 'sm'
            });
        };
    }

    angular
        .module('chatterbox')
        .controller('MainCtrl', ['Room', 'Message', '$uibModal', MainCtrl]);
})();
