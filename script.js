function rot13(str) {
  // Define a helper function to decode a single character
  function decodeChar(char) {
    const charCode = char.charCodeAt(0);

    if (char >= 'A' && char <= 'Z') {
      // Decode uppercase letters
      return String.fromCharCode(((charCode - 'A'.charCodeAt(0) + 13) % 26) + 'A'.charCodeAt(0));
    } else if (char >= 'a' && char <= 'z') {
      // Decode lowercase letters
      return String.fromCharCode(((charCode - 'a'.charCodeAt(0) + 13) % 26) + 'a'.charCodeAt(0));
    } else {
      // Pass non-alphabetic characters unchanged
      return char;
    }
  }

  // Use the decodeChar function to decode the entire string
  const decodedStr = str.split('').map(decodeChar).join('');
  return decodedStr;
}

// Example usage:
const encodedString = 'SERR PBQR PNZC';
const decodedString = rot13(encodedString);
console.log(decodedString); // Output: 'FREE CODE CAMP'

