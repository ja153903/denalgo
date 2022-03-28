class UnionFind {
  parent: number[];
  rank: number[];
  size: number;

  constructor(size: number) {
    this.size = size;
    this.parent = this._initializeParent();
    this.rank = this._initializeRank();
  }

  find(u: number): number {
    if (u !== this.parent[u]) {
      this.parent[u] = this.find(this.parent[u]);
    }

    return this.parent[u];
  }

  union(u: number, v: number) {
    const pu = this.find(u);
    const pv = this.find(v);

    if (pu !== pv) {
      if (this.rank[pu] < this.rank[pv]) {
        this.parent[pu] = pv;
        this.rank[pv] += 1;
      } else {
        this.parent[pv] = pu;
        this.rank[pu] += 1;
      }
    }
  }

  _initializeParent(): number[] {
    const result = [];
    for (let i = 0; i < this.size; i++) {
      result.push(i);
    }

    return result;
  }

  _initializeRank(): number[] {
    const result = [];

    for (let i = 0; i < this.size; i++) {
      result.push(0);
    }

    return result;
  }
}

export default UnionFind;
