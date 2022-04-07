function isPalindrome(s: string): boolean {
  // filter non-alphanumeric characters
  const filteredChars = s.split("").filter((ch) => ch.match(/^[a-z0-9]+$/i))
    .map((ch) => ch.toLowerCase());
  for (let i = 0, j = filteredChars.length - 1; i < j; i++, j--) {
    if (filteredChars[i] !== filteredChars[j]) {
      return false;
    }
  }

  return true;
}

export default isPalindrome;
