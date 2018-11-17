var MessagesView = {

  $chats: $('#chats'),

  initialize: function() {
    // Messages = App.fetch((data) => { 
    //   Messages = data;
    //   MessagesView.render();
    // })
    // console.log(Messages)
    MessagesView.render();
  },

  render: function() {
    App.fetch((data) => {
      Messages = data;
      Messages.results.forEach((message) => {
        if (message.username) {
          MessagesView.renderMessage(message);
        }
      });
    });
  },
  
  renderMessage: function(message) {
    $('#chats').append(MessageView.render(message));
  }
};