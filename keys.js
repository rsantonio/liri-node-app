console.log('this is loaded');

var Spotify = require("node-spotify-api");

var twitterKeys = {
  consumer_key: 'CDerI7YqK3IgGG0LFZ956nfYv',
  consumer_secret: 'R48Pejt3OkPQl54cntvcic0LSTGM72FTFazRug9PNoXUVy3my4',
  access_token_key: '915369470423556096-xg8MlaYwjoZMFUwpRxhacGXOFDXEXdY',
  access_token_secret: 'KYwCMluA5pWsU77wZAOBf6RQ35l3OlFgyhhGSGIjBMGyr'
};

var spotify = new Spotify ({
	id: 'ee82dbe2ad27446eb71eb6cdd59c81b2',
	secret: 'e71a8e511d704d4181b36a531dbd599d'
});

module.exports = {
	twitterKeys: twitterKeys,
	spotify: spotify

}







