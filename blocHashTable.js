function canCreateNote(note, newspaper){
  var kvArray = [];
  let hashMapNote = new Map(kvArray);
  let hashMapNewspaper = new Map(kvArray);
  let noteArr = note.split(' ');
  let newspaperArr = newspaper.split(' ');
  noteArr.forEach( word => {
    if(!hashMapNote.has(word)) {
      hashMapNote.set(word, 1);
    } else {
      hashMapNote.set(word, hashMapNote.get(word) + 1);
    }
  });
  newspaperArr.forEach( word => {
    if(!hashMapNewspaper.has(word)) {
      hashMapNewspaper.set(word, 1);
    } else {
      hashMapNewspaper.set(word, hashMapNewspaper.get(word) + 1);
    }
  });
  let untrue = 0;
  for (const [key, value] of hashMapNote) {
    if (!hashMapNewspaper.has(key) || (hashMapNewspaper.has(key) && hashMapNewspaper.get(key) < value)){
      untrue++
    } else {
      console.log('');
    }
  }
  if (untrue === 0) {
    return true;
  }
    return false;    
}
let note = "are you a man man man";
let newspaper = "hey man you are a man are you not";
canCreateNote(note, newspaper);

