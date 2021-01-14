let songs = [{name: "gas gas vu", file: "gas_gas_vu"},
 {name: "shrekophone", file: "shrekophone"},
 {name: "Synth418", file: "synth418"},
 {name: "Thomase the party lelgine", file: "thomase_the_party_lelgine"},
 {name: "vulg", file: "vulg"},
 {name: "Gdeft/bleach", file: "gdeftbleachbach"}
].reduce((obj, song) => {
  obj[song.name] = loadMusic(song.file);
  return obj;
}, {});

songs.death = {
  play() {
    Core.app.exit();
  },
};

global.addMusic(songs);
