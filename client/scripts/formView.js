var FormView = {

  $form: $('form'),

  initialize: function() {
    FormView.$form.on('submit', FormView.handleSubmit);
    
    //FormView.$form.on()
  },

  handleSubmit: function(event) {
    //look up automoatically passed in event object upon initialize
    //look up event preventDefault
    // Stop the browser from submitting the form
    event.preventDefault();
    
    userMessage = {
      username: 'Washington Walden > Quian',
      text: $('#message').val()
    }
    
    
    Parse.create(userMessage);
    
    console.log('click!');
  },

  setStatus: function(active) {
    var status = active ? 'true' : null;
    FormView.$form.find('input[type=submit]').attr('disabled', status);
  }

};