/**
 * You are given an array people where people[i] is the weight of the ith person,
 * and an infinite number of boats where each boat can carry a maximum weight of limit.
 * Each boat carries at most two people at the same time, provided the sum of the weight of those people is at most limit.
 * Return the minimum number of boats to carry every given person.
 */
function numRescueBoats(people: number[], limit: number): number {
  const reverseSortedPeople = people.sort((a, b) => b - a);
  const length = reverseSortedPeople.length;
  let result = 0;
  let i = 0;
  let j = length - 1;

  // treat this like a deque
  // at every point, we try to see if we can sum the first and last values
  // to reach the limit.
  while (i <= j) {
    const front = reverseSortedPeople[i];
    const back = reverseSortedPeople[j];

    if (i === j || front + back <= limit) {
      i++;
      j--;
    } else {
      i++;
    }

    result++;
  }

  return result;
}

export default numRescueBoats;
