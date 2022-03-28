function maxSlidingWindow(nums: number[], k: number): number[] {
  // for every k elements we always want to keep track of the largest elements and place them in a result array
  // but we should make sure that this collection process doesn't start until there are at least k elements within
  // the array also every time we go over an element, we should make sure that the element we're working with is not the worst
  // element to keep within this array.
  // So the algorithm should be as follows:
  // 1. Keep a deque to contain the elements from nums
  // 2. Create a result array that we will push the result into
  // 3. Purge items from the deque that cannot be a maximum i.e. if there ever exists a value greater than that value in the front
  //    then we should delete that value
  // 4. Once we purge, we should add the current value, update any maximums if needed (this is really only going to be done) if we
  //    already have a value in our result array; otherwise we don't need to do this yet.
  // 5. Update our result array with a new value if we're in that window
  const deque: number[] = [];
  const result: number[] = [];

  for (let i = 0; i < nums.length; i++) {
    // Remove items that are out of range
    while (deque.length && deque[0] < i - k + 1) {
      deque.shift();
    }

    // remove any values that will never be considered
    while (deque.length && nums[deque[deque.length - 1]] < nums[i]) {
      deque.pop();
    }

    deque.push(i);

    if (i >= k - 1) {
      result.push(nums[deque[0]]);
    }
  }
  return result;
}

export default maxSlidingWindow;
