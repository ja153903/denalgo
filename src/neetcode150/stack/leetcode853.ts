function carFleet(target: number, position: number[], speed: number[]): number {
  const data: Array<{ position: number, speed: number }> = [];

  for (let i = 0; i < position.length; i++) {
    data.push({ position: position[i], speed: speed[i] });
  }
  
  data.sort((a, b) => a.position - b.position);
  
  const stack: Array<number> = [];
  
  for (let i = 0; i < data.length; i++) {
    const timeToTarget = (target - data[i].position) / data[i].speed;
    
    // This is how we can make sure that the stack is monotonically decreasing
    // why do we want this stack to be monotonically decreasing?
    // This is because we want to see the leading car that blocks other cars.
    // if a car blocks another car, then they turn into a fleet since they'll bump into each other
    // so we have to find the next element to block previous elements.
    // everything else should be popped which is what makes this a monotonically decreasing stack
    while (stack.length && timeToTarget >= stack[stack.length - 1]) {
      stack.pop();
    }
    
    stack.push(timeToTarget);
  }
  
  return stack.length;
}

export default carFleet;
