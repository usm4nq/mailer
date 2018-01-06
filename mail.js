console.log("sending mail !");
var send = require('gmail-send')({

      user: 'lizaasomovicc@gmail.com',
      
      pass: 'ilikeliza',
      
      to:   ['aafaqahmed8075@gmail.com','usm4nq@gmail.com'],
      
      subject: 'From Muhammad Noman',
      text:    'Hair.txt',

});

let filepath = './hair.txt';

send({ 
    subject: 'attached '+filepath,         
    files: [ filepath ],
  }, function (err, res) {
    console.log('* [example 1.1] send() callback returned: err:', err, '; res:', res);
  });

console.log("Mail sent!");
