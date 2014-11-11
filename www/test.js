var http = require('http'),
    port=80;


var level = require('level')

// 1) Create our database, supply location and options.
//    This will create or open the underlying LevelDB store.
var db = level('/home/vagrant/db/level/mydb');

var user=require('imap_inc_account.js'):


//checking the last
var Imap = require('imap'),
    inspect = require('util').inspect,
    last_downlowded_message;    


var imap = new Imap({
  user: user.login,
  password: user.password,
  host: 'imap.gmail.com',
  port: 993,
  tls: true
});

//finishing program with uncaught exception
process.on('uncaughtException', function(err){
    
    console.log('got an error: %s', err.message);
    //db.close();
    process.exit(1);
});

//wraping up things on exit



process.on('exit', function(code) {

if(!db.isClosed())
    db.close();


});

/*

getting last downloaded message or setting it to be 1


*/


db.get('last_downlowded_message', function (err, value) {
  if (err) {
    if (err.notFound) {
      // handle a 'NotFoundError' here
       last_downlowded_message=1; 
       return
    }
    // I/O or other error, pass it up the callback chain
     throw new Error('error reading data from db '+ Date());
  //
  }
   last_downlowded_message=value;
});






last_downlowded_message=last_downlowded_message+1;
// console.log(Object.getPrototypeOf(imap));
//console.log(imap.hasOwnProperty('parseHeader'));
//var imap=require('./imap_inc_account.js').imap;
//var Imap=require('./imap_inc_account.js').Imap;    
/*    
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello World\n');

}).listen(port);

*/

function openInbox(cb) {
  imap.openBox('INBOX', true, cb);
}

imap.once('ready', function() {
openInbox(function(err, box) {
  if (err) throw err;
  var f = imap.seq.fetch(last_downlowded_message+':'+box.messages.total , { bodies: ['HEADER.FIELDS (FROM)','HEADER.FIELDS (SUBJECT)','TEXT'] });
  f.on('message', function(msg, seqno) {
    console.log('Message #%d', seqno);
    var prefix = '(#' + seqno + ') ';
    msg.on('body', function(stream, info) {
      if (info.which === 'TEXT')
        console.log(prefix + 'Body [%s] found, %d total bytes', inspect(info.which), info.size);
      var buffer = '', count = 0,attributes='', email='';

      stream.on('data', function(chunk) {
        count += chunk.length;
        buffer += chunk.toString('utf8');
        if (info.which === 'TEXT')
          console.log(prefix + 'Body [%s] (%d/%d)', inspect(info.which), count, info.size);
      });

      stream.once('end', function() {
        if (info.which !== 'TEXT')
          console.log(prefix + 'Parsed header: %s', buffer);
        else
          console.log(prefix + 'Body [%s] Finished', inspect(info.which)/*buffer*/);
      });
    });

    msg.once('attributes', function(attrs) {
       attributes=inspect(attrs, false, 8);
       console.log(prefix + 'Attributes: %s', attributes);
    });



    msg.once('end', function() {
      console.log(prefix + 'Finished');
    });


  });


  f.once('error', function(err) {
    console.log('Fetch error: ' + err);
  });



  f.once('end', function() {
    console.log('Done fetching all messages!');
    imap.end();
  });
});


});

imap.once('error', function(err) {
  console.log(err);
});

imap.once('end', function() {
  console.log('Connection ended');
});

imap.connect();

