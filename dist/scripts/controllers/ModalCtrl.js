(function () {
    function ModalCtrl($uibModalInstance, Room) {
        this.ok = function (newName) {
            Room.addRoom(newName);
            $uibModalInstance.close(newName);
        }

        this.cancel = function () {
            $uibModalInstance.dismiss('cancel');
        }

    }

    angular
        .module('chatterbox')
        .controller('ModalCtrl', ['$uibModalInstance', 'Room', ModalCtrl]);
})();
