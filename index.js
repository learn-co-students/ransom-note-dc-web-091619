function buildHistogram(magazine) {
  let functionResult = {}
  magazine.forEach(letter => {
    return functionResult[letter] ? functionResult[letter] += 1 : functionResult[letter] = 1
  })
  return functionResult
}

function canBuildNote(magazine, note) {
  let mHistogram = buildHistogram(magazine)
  let splittedNote = note.replace(/\s/g, '').split("")
  
  for(letter of splittedNote) {
    if (mHistogram[letter]) {
      if (mHistogram[letter] >= 1) {
        mHistogram[letter] -= 1
      } else {
        return false
      }
    } else { return false }
  }
  return true
}

let magazine = ["h", "e", "r", "e", "a", "r", "e", "s", "o", "m",
"e", "n", "i", "c", "e", "c", "l", "o", "t", "h", "e", "s", "t"]
let note = "handitover"

canBuildNote(magazine, note)