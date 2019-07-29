/**
 * ArgParser is used to parse argument list when use nodejs
 * the argment list mentioned here is what we passed to the script but not node
 * for example, we have:
 * node --max-old-space-size=4096 MyScript.js a=1 b=2 c=3
 * then the argumnet list will be ['a=1', 'b=2', 'c=3']
 */
class ArgParser {
  constructor() {
    this.list = [];
    this.tokenize = this.tokenize.bind(this);
    this.setFormatter = this.setFormatter.bind(this);
    this.extract = this.extract.bind(this);
    this.showArgs = this.showArgs.bind(this);
    this.exec = this.exec.bind(this);
    this.extractList = this.extractList.bind(this);

    this.expectProps = {};

    this.tokenize();
  }

  tokenize() {
    if (process.argv.length > 2) {
      this.list = process.argv.slice(2).map(s => s.trim()).filter(s => s);
    }
  }

  setFormatter(propName, {
    short, full,
    hasValue = false,
    defaultValue = null,
    delim = [],
    combinable = false,
  }) {
    if (!propName || typeof propName !== 'string') {
      throw new Error('invalid propName while setting formatter! Expect a non-empty string');
    }
    if (!!this.expectProps[propName]) {

    }
  }

  extract(propName, {
    silentFail = true,
  }) {
    try {

    } catch (e) {
      if (silentFail) {
        return null;
      }
      throw e;
    }
  }

  showArgs() {
    console.log(this.list);
  }

  extractList() {

  }

  exec() {

  }
}

const parser = new ArgParser();

module.exports = parser;
