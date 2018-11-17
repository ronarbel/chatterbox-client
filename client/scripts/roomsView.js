var RoomsView = {

  $button: $('#rooms button'),
  $select: $('#rooms select'),

  initialize: function() {
    RoomsView.render();
  },

  render: function() {
    App.fetch((data) => {
      Rooms = data;
      Rooms.results.forEach((message) => {
        if (message.roomname) {
          RoomsView.renderRoom(message.roomname);
        }
      });
    });
  },
  
  renderRoom: function(roomName) {
    RoomsView.$select.append('<option value="rooms">' + roomName + '</option>');
  }

};
