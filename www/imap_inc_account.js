//include imap library and sets account credentials
var Imap = require('imap'),
    inspect = require('util').inspect;

var imap = new Imap({
  user: 'alfest@gmail.com',
  password: 'mygmailpassword',
  host: 'imap.gmail.com',
  port: 993,
  tls: true
});

exports.imap=imap;


