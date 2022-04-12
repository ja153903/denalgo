function maxSlidingWindow(nums: number[], k: number): number[] {
  const deque: number[] = []; // NOTE: this should contain indices of values in the array
  const result: number[] = [];
  // the idea with this solution is to make sure that we only keep
  // the items that we really need to return
  // this means that we should remove any values that we don't need
  
  // our algorithm here makes sure that at most we have k elements
  // in our deque
  for (let i = 0; i < nums.length; i++) {
    // we can keep a deque which holds the indices of various values that we keep
    // we should filter values that are less than the back of the deque
    // because we'll never use them as maxes
    // once we're on the kth number, we want to make sure that we're adding the max
    // to the result
    
    // remove elements that are not within the range of the sliding window
    while (deque.length && deque[0] < i - k + 1) {
      deque.shift();
    }

    // NOTE: this removes elements that are too small
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