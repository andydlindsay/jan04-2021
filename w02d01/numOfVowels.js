const numOfVowels = (str) => {
  if (!str) {
    return null;
  }

  let count = 0;
  const vowels = ['a', 'e', 'i', 'o', 'u'];

  for (const char of str) {
    // if the char is a vowel, increment count
    if (vowels.includes(char)) {
      count++;
    }
  }

  return count;
};

module.exports = numOfVowels;
