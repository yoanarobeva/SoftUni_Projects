function songs(arr) {
    class Song {
        constructor(typeList, name, time) {
            this.typeList = typeList;
            this.name = name;
            this.time = time;
        }
    }

    let numberOfSongs = Number(arr.shift());
    let typeListAll = arr.pop();

    let songs = [];

    for (let song of arr) {
        let [currentTypeList, currentName, currentTime] = song.split("_");
        let nameSong = new Song(currentTypeList, currentName, currentTime);
        songs.push(nameSong);
    }
 
    if (typeListAll === 'all') {
        songs.forEach((i) => console.log(i.name));
    } else {
        let filtered = songs.filter((i) => i.typeList === typeListAll);
        filtered.forEach((i) => console.log(i.name));

    }
}

songs([2,
    'like_Replay_3:15',
    'ban_Photoshop_3:48',
    'all']
     );