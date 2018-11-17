var FormView = {

  $form: $('form'),

  initialize: function() {
    FormView.$form.on('submit', FormView.handleSubmit);
  },

  handleSubmit: function(event) {
    //look up automoatically passed in event object upon initialize
    //look up event preventDefault
    // Stop the browser from submitting the form
    event.preventDefault();
    
    console.log('click!');
    Parse.create(messages);
  },

  setStatus: function(active) {
    var status = active ? 'true' : null;
    FormView.$form.find('input[type=submit]').attr('disabled', status);
  }

};