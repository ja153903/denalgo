type TimestampedValue = { value: string; timestamp: number };

class TimeMap {
  private map: Map<string, TimestampedValue[]>;

  constructor() {
    this.map = new Map<string, TimestampedValue[]>();
  }

  set(key: string, value: string, timestamp: number): void {
    if (this.map.has(key)) {
      this.map.get(key)?.push({ value, timestamp });
    } else {
      this.map.set(key, [{ value, timestamp }]);
    }
  }

  get(key: string, timestamp: number): string {
    const values = this.map.get(key) ?? null;
    if (values === null) {
      return "";
    }

    let left = 0;
    let right = values.length;

    while (left < right) {
      const mid = Math.floor(left + (right - left) / 2);

      const { timestamp: currentTimestamp } = values[mid];

      // if the current timestamp is less than or equal to the desired timestamp,
      // then we should inch left forward
      // otherwise we don't move it.
      if (currentTimestamp <= timestamp) {
        left = mid + 1;
      } else {
        // if the current timestamp is greater than the timestamp we want, then we stay at this value
        // because we want to find the values in between
        right = mid;
      }
    }
    return right === 0 ? "" : values[right - 1].value;
  }
}

export default TimeMap;
