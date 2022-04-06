function groupAnagrams(strs: string[]): string[][] {
  const map: Map<string, string[]> = new Map();

  for (const str of strs) {
    const sortedWord = str.split("").sort((a, b) => a.localeCompare(b)).join(
      "",
    );
    if (map.has(sortedWord)) {
      map.get(sortedWord)?.push(str);
    } else {
      map.set(sortedWord, [str]);
    }
  }

  return [...map.values()];
}

export default groupAnagrams;
