function addTrack(music, field) {
    Events.on(ClientLoadEvent, e => {
        Vars.control.sound[field].add(music)
    });
}

function clearAllTracks(field) {
    Events.on(ClientLoadEvent, e => {
        Vars.control.sound[field] = Seq.with()
    });
}

module.exports = {
    addTrack: addTrack,
    clearAllTracks: clearAllTracks,
}
