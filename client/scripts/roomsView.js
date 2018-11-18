var RoomsView = {

  $button: $('#rooms button'),
  $select: $('#rooms select'),

  initialize: function() {
    RoomsView.$button.on('click', Rooms.add)
    RoomsView.render();
  },

  render: function() {
    App.fetch((data) => {
      data.results.forEach((message) => {
        if (message.roomname) {
          RoomsView.renderRoom(message.roomname);
        }
      });
    });
  },
  
  renderRoom: function(roomName) {
    RoomsView.$select.append('<option value="rooms">' + roomName + '</option>');
  },
  
  

};
 