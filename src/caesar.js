// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  // you can add any code you want within this function scope

  function caesar(input, shift, encode = true) {
    if (shift === 0 || shift < -25 || shift > 25) return false;
    let shiftMod;
    encode ? shiftMod = shift : shiftMod = 0 - shift;
    const message = input.toLowerCase();
    let charArray = [];
    for ( let i = 0; i < message.length; i++ ) {
      const currChar = message.charCodeAt(i);
      if (currChar > 122 || currChar < 97) {
        charArray.push(currChar);
      } else {
        let shiftWrap = currChar + shiftMod;
        if (shiftWrap > 122) {
          charArray.push(shiftWrap - 26);
        } else if (shiftWrap < 97) {
          charArray.push(shiftWrap + 26);
        } else {
          charArray.push(shiftWrap);
        }
      }
    }
    return String.fromCharCode(...charArray);
  }

  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };
