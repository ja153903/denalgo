// This atm greedily chooses the notes
// if we cannot satisfy this with the notes that we have
// then we rollback the withdrawal
class ATM {
  private notes: number[];
  private noteValues: number[];

  constructor() {
    // 20 -> 50 -> 100 -> 200 -> 500
    this.notes = new Array<number>(5).fill(0);
    this.noteValues = [20, 50, 100, 200, 500];
  }

  deposit(banknotesCount: number[]): void {
    banknotesCount.forEach((count, index) => {
      this.notes[index] += count;
    });
  }

  withdraw(amount: number): number[] {
    // when we want to withdraw an amount we return an array
    // of size 5 with the values we want to remove
    let shouldRollback = false;
    const result = new Array<number>(5).fill(0);

    for (let i = 4; i >= 0; i--) {
      if (amount === 0) {
        break;
      }

      const desiredCount = Math.floor(amount / this.noteValues[i]);
      const toRemove = Math.min(desiredCount, this.notes[i]);

      if (toRemove > 0) {
        amount -= toRemove * this.noteValues[i];
        this.notes[i] -= toRemove;
        result[i] += toRemove;
      }
    }

    if (amount > 0) {
      shouldRollback = true;
      this.deposit(result);
    }

    return shouldRollback ? [-1] : result;
  }
}

export default ATM;
