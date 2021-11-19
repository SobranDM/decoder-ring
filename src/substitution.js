// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  function checkDuplicates(alphabet) {
    // Split alphabet into array
    const alphArray = alphabet.split("");
    // For each letter in the key...
    if ( alphArray.forEach((letter) => {
      // ... check if that letter occurs more than once in the array...
        if ( alphArray.filter((currLetter) => letter === currLetter).length > 1 ) false;
      }) === false ) {
        // ... and return false if it does...
        return false
        // ... or true otherwise.
      } else { return true}
  }

  function substitution(input, alphabet, encode = true) {
    if (!alphabet || alphabet.length != 26 || !checkDuplicates(alphabet) ) {
      return false;
    } else {
      
    }
    
  }

  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };
