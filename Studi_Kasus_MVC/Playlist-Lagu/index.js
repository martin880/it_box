const command = process.argv[2];
const params = process.argv.slice(3);
const PlaylistController = require('./controllers/PlaylistController');

switch(command){
    case 'showPlaylist':
        PlaylistController.show();
        break;
    case 'add':
        PlaylistController.add(params);
        break;
    case 'remove':
        PlaylistController.remove(params);
        break;
    case 'make':
        PlaylistController.make(params);
        break;
    default:
        console.log("Masukkan command yang benar !!!");
        break;
}