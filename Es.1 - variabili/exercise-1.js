function canPlay() {
let personName; //ho spostato la dichiar. qui
  if (true) {
    personName = 'Paul';
  }

  personName += ' plays football'; // Argh! personName is not defined

  console.log(personName);
}

canPlay();