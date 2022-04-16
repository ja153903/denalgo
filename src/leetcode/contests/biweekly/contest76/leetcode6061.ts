function waysToBuyPensPencils(
  total: number,
  cost1: number,
  cost2: number,
): number {
  let result = 0;

  // we want to iterate on the smaller number of items
  const numPensToBuy = Math.floor(total / cost1);
  const numPencilsToBuy = Math.floor(total / cost2);

  if (numPencilsToBuy < numPensToBuy) {
    [cost1, cost2] = [cost2, cost1];
  }

  for (let i = 0; i <= Math.min(numPencilsToBuy, numPensToBuy); i++) {
    result += Math.floor((total - cost1 * i) / cost2) + 1;
  }

  return result;
}

export default waysToBuyPensPencils;
