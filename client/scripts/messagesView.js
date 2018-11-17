var MessagesView = {

  $chats: $('#chats'),

  initialize: function() {
    MessagesView.render();
  },

  render: function() {
    App.fetch((data) => {
      Messages = data;
      Messages.results.forEach((message) => {
        if (message.username || message.text) {
          MessagesView.renderMessage(message);
        }
      });
    });
  },
  
  renderMessage: function(message) {
    $('#chats').append(MessageView.render(message));
  }
};