var MessagesView = {

  $chats: $('#chats'),

  initialize: function() {
    //similar to formView event listener
    MessagesView.render();
  },

  render: function() {
    // how to display messages in 'messages.js'
    //jquery to modify html > index
    App.fetch((data) => {
      data.results.forEach((message) => {
        $('#chats').append(MessageView.render(message));
      });
    });
  },
  
  renderMessage: function(message) {
    $('#chats').append('<p></p>');
  }

};