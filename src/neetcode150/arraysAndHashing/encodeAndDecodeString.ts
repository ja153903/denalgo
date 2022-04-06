class Encoder {
  encode(strs: string[]): string {
    return strs.map(str => `${str.length}/${str}`).join("");
  }

  decode(s: string): string[] {
    const result: string[] = [];
    
    let i = 0;

    while (i < s.length) {
      const slash = s.indexOf("/", i);
      const size: number = parseInt(s.substring(i, slash));
      const subresult: string[] = [];
      
      for (let j = slash + 1; j < slash + 1 + size; j++) {
        subresult.push(s[j]);
      }
      
      result.push(subresult.join(""));
      
      i = slash + 1 + size;
    }

    return result;
  }
}

export default Encoder;