/**
 * Koko loves to eat bananas. There are n piles of bananas, the ith pile has piles[i] bananas.
 * The guards have gone and will come back in h hours.
 * Koko can decide her bananas-per-hour eating speed of k
 * Each hour, she chooses some pile of bananas and eats k bananas from that pile
 * If the pile has less than k bananas, she eats all of them instead and will not eat any more bananas during this hour.
 * Koko likes to eat slowly but still wants to finish eating all the bananas before the guards return.
 * Return the minimum integer k such that she can eat all the bananas within h hours.
 *
 * For this problem, what we want to do is figure out what the appropriate k should be
 * Note that k should be between 1 and the maximum pile
 *
 * We can then do a binary search and at each step determine whether we can finish the bananas within h hours
 *
 * Time Complexity:
 *  - Binary search => O(log maxPileHeight)
 *  - _canFinish() => O(n) where n is the number of items in the piles array
 * In total: O(n * lg maxPileHeight)
 *
 * Space Complexity: O(1)
 */
function minEatingSpeed(piles: number[], h: number): number {
  const maxPileHeight = Math.max(...piles);

  let left = 1;
  let right = maxPileHeight;

  while (left <= right) {
    const mid = Math.floor(left + (right - left) / 2);
    const canFinish = _canFinish(piles, h, mid);

    if (canFinish) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }

  return left;
}

function _canFinish(piles: number[], h: number, k: number): boolean {
  let pileCount = 0;

  for (const pile of piles) {
    pileCount += Math.floor(pile / k);
    if (pile % k > 0) {
      pileCount++;
    }
  }

  return pileCount <= h;
}

export default minEatingSpeed;
