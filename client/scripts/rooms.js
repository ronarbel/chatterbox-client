var Rooms = {

  add: function() {
    roomText = $('#addRoom').val();
    RoomsView.renderRoom(roomText);
    console.log("add room!")
    
  }

};