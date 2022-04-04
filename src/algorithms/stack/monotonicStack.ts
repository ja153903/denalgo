// Monotonic Stacks
// The idea with a monotonic stack is that the values are kept
// either monotonically increase or decreasing
//
// What type of problems does it solve?
// Monotonic stacks only deal with one type of problem: Next Greater Element
// Next Greater element is the smallest element ai greater than the current element bi

export function monotonicallyIncreasingStack(nums: number[]): number[] {
  const result: number[] = new Array<number>(nums.length).fill(0);
  const stack: number[] = [];

  // We iterate backwards
  for (let i = nums.length - 1; i >= 0; i--) {
    // if the top of the stack is less than or equal to the current element,
    // then we remove it since it cannot be a next greater element
    while (stack.length && stack[stack.length - 1] <= nums[i]) {
      stack.pop();
    }

    // assign the next greater element or -1
    result[i] = !stack.length ? -1 : stack[stack.length - 1];
    // push the value to the top of the stack
    stack.push(nums[i]);
  }

  return result;
}
