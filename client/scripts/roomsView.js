var RoomsView = {

  $button: $('#rooms button'),
  $select: $('#rooms select'),

  initialize: function() {
    //RoomsView.render();
  },

  render: function() {
    RoomsView.renderRoom()
  },
  
  renderRoom: function(roomName) {
    RoomsView.$select.append('<option value="rooms">' + roomName + '</option>');
  }

};
