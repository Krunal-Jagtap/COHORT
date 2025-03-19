/*
Create a Playlist constructor that initializes with an empty songs array. Add a method
addSong( song) to the prototype that adds a new song to the playlist.

• Implement a constructor function Playlist that initializes an empty songs array.
• Attach a method addSong(song) to its prototype that adds the song to the songs array.
*/

function Playlist() {
  this.songs = [];
}

// Define addSong method on Playlist's prototype
Playlist.prototype.addSong = function (song) {
  this.songs.push(song);
  return this.songs;
};
