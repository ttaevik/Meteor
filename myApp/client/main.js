
import './main.html';
import '/imports/messages.js';

if (Meteor.isClient) {
  Template.messages.helpers({
    messages: function() {
    return Messages.find({}, { sort: { time: -1}});
  }
  });

  Template.input.events = {
    'keydown input#message' : function (event) {
    if (event.which == 13) { 
      var name = document.getElementById('username').value;
      if(name==""){     
        var name = 'Anonüümne';
      }
      var message = document.getElementById('message');
      var myDate=new Date(Date.now());
      let date=myDate.getFullYear() + '-' +('0' + (myDate.getMonth()+1)).slice(-2)+ '-' +  ('0' + myDate.getDate()).slice(-2) + ' '+myDate.getHours()+ ':'+('0' + (myDate.getMinutes())).slice(-2)+ ':'+myDate.getSeconds()
        if (message.value != '') {
          Messages.insert({
            name: name,
            message: message.value,
            time: date,
          });

          document.getElementById('message').value = '';
          message.value = '';
        
        }
      }
    }
  }
}