function minimumRounds(tasks: number[]): number {
  const counter = new Map<number, number>();
  tasks.forEach((num) => {
    counter.set(num, (counter.get(num) ?? 0) + 1);
  });

  let result = 0;

  for (const value of counter.values()) {
    const numRounds = Math.min(
      numRoundsForValueCenteredOnN(value, 3, 2),
      numRoundsForValueCenteredOnN(value, 2, 3),
    );
    if (numRounds === Number.POSITIVE_INFINITY) {
      return -1;
    }

    result += numRounds;
  }

  return result;
}

function numRoundsForValueCenteredOnN(
  value: number,
  n: number,
  k: number,
): number {
  const length = Math.floor(value / n);
  let result = Number.POSITIVE_INFINITY;

  for (let i = 0; i <= length; i++) {
    const extraRounds = (value - n * i) / k;
    if (Number.isInteger(extraRounds)) {
      result = Math.min(result, i + Math.floor(extraRounds));
    }
  }

  return result;
}

export default minimumRounds;
