function createAssemblyLine() {

    function hasClima(obj) {
        obj.temp = 21,
        obj.tempSettings = 21,
        obj.adjustTemp = function () {
            if (obj.temp < obj.tempSettings) {
                obj.temp++;
            } else if (obj.temp > obj.tempSettings) {
                obj.temp--;
            }
        }
    }

    function hasAudio(obj) {
        obj.currentTrack = {name: '', artist: ''};
        obj.nowPlaying = function () {
            if (obj.currentTrack != null) {
                console.log(`Now playing '${obj.currentTrack.name}' by ${obj.currentTrack.artist}`);
            }  
        }
    }

   function hasParktronic(obj) {
    obj.checkDistance = function (dist) {
        let text = '';
        if (dist < 0.1) {
            text = "Beep! Beep! Beep!";
        } else if (dist < 0.25) {
            text = "Beep! Beep!";
        } else if (dist < 0.5) {
            text = "Beep!";
        } 
        
        console.log(text);
    }
   }

   return {
    hasClima,
    hasAudio,
    hasParktronic
   }

}

const assemblyLine = createAssemblyLine();

const myCar = {
    make: 'Toyota',
    model: 'Avensis'
};

assemblyLine.hasClima(myCar);
console.log(myCar.temp);
myCar.tempSettings = 18;
myCar.adjustTemp();
console.log(myCar.temp);

console.log('___________________');

assemblyLine.hasAudio(myCar);
myCar.currentTrack = {
    name: 'Never Gonna Give You Up',
    artist: 'Rick Astley'
};
myCar.nowPlaying();

console.log('___________________');

assemblyLine.hasParktronic(myCar);
myCar.checkDistance(0.4);
myCar.checkDistance(0.2);

console.log('___________________');

console.log(myCar);