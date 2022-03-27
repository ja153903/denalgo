// The idea here is to figure out a way to go from one word to another
// honestly this seems more straightforward if we look for ways to build
function ladderLength(
  beginWord: string,
  endWord: string,
  wordList: string[],
): number {
  const wordSet = new Set<string>(wordList);

  // Base case: if the end word does not exist within the word list, then
  // we know its not possible to come up with the solution
  if (!wordSet.has(endWord)) {
    return 0;
  }

  // Example: beginWord = "hit", endWord = "cog", wordList = ["hot","dot","dog","lot","log","cog"]
  // In this example we can see that all letters need to be changed
  // Note that all transformations have to exist within the wordList
  // So we should look through out list of words and see what possible 1 character changes there are from our current word
  // hit => hot
  // from hot, we again can look at 1 character changes, dot, lot
  // from dot, we can generate dog
  // from lot, we can generate log
  // from either dog or log, we can generate cog
  // from this we can see that it takes 3 nodes to get to cog
  // In this case, it looks like we can do a BFS so that we can break out easily

  // Store words we've already inserted into queue here
  const visited = new Set<string>();
  const queue = new Array<{ word: string; count: number }>();
  queue.push({ word: beginWord, count: 1 });

  while (queue.length) {
    const front = queue.shift() ?? null;
    if (!front) {
      return 0;
    }

    const { word, count } = front;

    if (word === endWord) {
      return count;
    }

    if (count > 0 && visited.has(word)) {
      continue;
    }

    visited.add(word);

    const similarWords = _getSimilarWords(wordList, visited, word);

    for (const similarWord of similarWords) {
      queue.push({ word: similarWord, count: count + 1 });
    }
  }

  return 0;
}

function _getSimilarWords(
  wordList: string[],
  visited: Set<string>,
  currentWord: string,
): string[] {
  return wordList.filter((word) => {
    let diffCount = 0;

    for (let i = 0; i < word.length; i++) {
      if (diffCount > 1) {
        return false;
      }

      if (word[i] !== currentWord[i]) {
        diffCount += 1;
      }
    }

    return !visited.has(word) && diffCount <= 1;
  });
}

export default ladderLength;
