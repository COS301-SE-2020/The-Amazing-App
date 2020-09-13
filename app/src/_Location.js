import * as Location from 'expo-location'

const tenMetersWithDegree = 0.0001
const getLocation = increment =>{
    return{
        timeStamp:10000000,
        coords:{
            speed:0,
            hearding:0,
            accurcy:5,
            altitudeAccuracy:5,
            altitude:5,
            latitude:-25.749216+increment*tenMetersWithDegree,
            latitude:28.2293963+increment*tenMetersWithDegree
        }
    }
}

let counter = 0;
setInterval(()=>{
    Location.EventEmitter.emit('Expo.locationChanged',{
        watchId: Location._getCurrentWatchId,
        location: getLocation(counter)
    });
    counter++;
},1000)