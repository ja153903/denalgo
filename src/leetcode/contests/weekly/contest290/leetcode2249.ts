function countLatticePoints(circles: number[][]): number {
  // [x, y, r] is what we get in the array
  // how many lattice points can we compute given the radius
  const latticePoints = new Set<string>();

  circles.forEach(([x, y, r]) => {
    // go vertically
    for (let i = x - r; i <= x + r; i++) {
      for (let j = y - r; j <= y + r; j++) {
        // Given a point, if the distance is less than the radius, then we have a lattice point.
        const distance = Math.pow(x - i, 2) + Math.pow(y - j, 2);
        if (distance <= r * r) {
          latticePoints.add(`${i},${j}`);
        }
      }
    }
  });

  return latticePoints.size;
}

export default countLatticePoints;
