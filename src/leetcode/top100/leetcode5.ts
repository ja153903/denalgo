function longestPalindrome(s: string): string {
  let maxPalindrome = "";
  let maxPalindromeLength = 0;

  for (let i = 0; i < s.length; i++) {
    const { palindrome: oddPalindrome, length: oddLength } = extendPalindrome(
      s,
      i,
      i,
    );
    const { palindrome: evenPalindrome, length: evenLength } = extendPalindrome(
      s,
      i,
      i + 1,
    );

    if (maxPalindromeLength < oddLength) {
      maxPalindrome = oddPalindrome;
      maxPalindromeLength = oddLength;
    }

    if (maxPalindromeLength < evenLength) {
      maxPalindrome = evenPalindrome;
      maxPalindromeLength = evenLength;
    }
  }

  return maxPalindrome;
}

function extendPalindrome(
  s: string,
  i: number,
  j: number,
): { palindrome: string; length: number } {
  let palindrome = "";
  let length = 0;

  let left = i;
  let right = j;

  while (left >= 0 && right < s.length) {
    if (s[left] !== s[right]) {
      break;
    }

    palindrome = s.substring(left, right + 1);
    length = right - left + 1;

    left -= 1;
    right += 1;
  }

  return {
    palindrome,
    length,
  };
}

export default longestPalindrome;
