(function () {
    function MainCtrl(Room, $uibModal) {
        this.rooms = Room.all;
        // this.addRoom = function(roomName){
        //   Room.addRoom(roomName);
        // }
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

            modalInstance.result.then(function (data) {
              //ok
            }, function () {
              //dismiss
            });
        };
    }

    angular
        .module('chatterbox')
        .controller('MainCtrl', ['Room', '$uibModal', MainCtrl]);
})();
