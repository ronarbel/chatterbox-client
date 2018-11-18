var MessagesView = {

  $chats: $('#chats'),

  initialize: function() {
    MessagesView.render();
  },

  render: function() {
    App.fetch((data) => {
      Messages = data;
      Messages.results.forEach((message) => {
        if (message.username && message.text) {
          if (Friends.friends.has(message.username)) {
            MessageView.renderFriend(message);
          } else {
            MessagesView.renderMessage(message);
          }
          $('.username').off('click').on('click', (event) => {
            Friends.friends.add(event.currentTarget.innerText);
            for (let friend of Friends.friends){
              $(`.chat:contains('${friend}')`).addClass('friend')
            }
          })
        }
      });
    });
  },
  
  renderMessage: function(message) {
    $('#chats').append(MessageView.render(message));
  },
  
  renderFriend: function(message) {
    $('#chats').append(MessageView.renderFriend(message));
  }
};

