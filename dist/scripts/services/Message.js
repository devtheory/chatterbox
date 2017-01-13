(function () {
    function Message($firebaseArray) {
        var ref = firebase.database().ref().child("messages");
        var messages = $firebaseArray(ref);

        var createMessage = function(roomId, message){
          messages.$add({
            username: 'marky ma',
            content: message,
            sentAt: 'Today',
            roomId: roomId
          })
        }

        var getMessagesFor = function(room){
          var msgs;
          ref.orderByChild("roomId").equalTo(room.$id).on("value", function (data) {
                    msgs = data.val();
                });
                return msgs;
        }
        return {
            createMessage: createMessage,
            getMessagesFor: getMessagesFor
        };
    }

    angular
        .module('chatterbox')
        .factory('Message', ['$firebaseArray', Message]);
})();
