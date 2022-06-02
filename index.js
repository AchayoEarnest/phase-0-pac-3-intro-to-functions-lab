function shout(string) {
    return string.toUpperCase();
  }

function whisper(string) {
    return string.toLowerCase();
}

function logShout(string) {
    console.log (string.toUpperCase());
}

function logWhisper(string) {
    console.log (string.toLowerCase());
}

function sayHiToHeadphonedRoommate(string){
    var one = "I can't hear you!";
    var two = "YES INDEED!";
    var three = "I would love to!";


    if(string === string.toLowerCase(string)){
        return one;
    }else if(string === string.toUpperCase(string)){
        return two;
    }else if(string === "Let's have dinner together!") {
        return three;
    }
}