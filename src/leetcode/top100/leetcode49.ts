function groupAnagrams(strs: string[]): string[][] {
  const groups = new Map<string, string[]>();

  for (const str of strs) {
    const sorted = str.split("").sort((a, b) => a.localeCompare(b)).join("");
    if (groups.has(sorted)) {
      groups.get(sorted)?.push(str);
    } else {
      groups.set(sorted, [str]);
    }
  }

  return [...groups.values()];
}

export default groupAnagrams;
