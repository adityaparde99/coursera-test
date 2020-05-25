(function (window) {
    var names = ["Aditya", "Tanmay", "Vansh", "Kunal", "Paul", "Vin", "Sal", "Carry", "Ashwttahama", "Sudarshan"];
  
    for (var i in names) {
      var firstLetter = names[i].charAt(0).toLowerCase();
      if (firstLetter === 'j') {
        byeSpeaker.speak(names[i]);
      } else {
        helloSpeaker.speak(names[i]);
      }
    }
  })(window);
  