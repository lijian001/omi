webpackJsonp([0],{41:function(n,t){n.exports="## Store \u662f\u4ec0\u4e48\uff1f\n\nStore \u662f Omi \u5185\u7f6e\u7684\u4e2d\u5fc3\u5316\u6570\u636e\u4ed3\u5e93\uff0c\u4ed6\u89e3\u51b3\u548c\u63d0\u4f9b\u4e86\u4e0b\u9762\u95ee\u9898\u548c\u80fd\u529b\uff1a\n\n* \u7ec4\u4ef6\u6811\u6570\u636e\u5171\u4eab\n* \u6570\u636e\u53d8\u66f4\u6309\u9700\u66f4\u65b0\u4f9d\u8d56\u7684\u7ec4\u4ef6\n\n![](https://github.com/Tencent/omi/raw/master/assets/store.jpg)\n\n## \u4e00\u6bb5\u4ee3\u7801\u5b8c\u5168\u4e0a\u624b Store\n\n```js\nimport { render, WeElement, define } from '../../src/omi'\n\ndefine('my-counter', class extends WeElement {\n  static use = [\n    { count: 'count' }\n  ]\n\n  add = () => this.store.add()\n  sub = () => this.store.sub()\n\n  addIfOdd = () => {\n    if (this.use.count % 2 !== 0) {\n      this.store.add()\n    }\n  }\n\n  addAsync = () => {\n    setTimeout(() => this.store.add(), 1000)\n  }\n\n  render() {\n    return (\n      <p>\n        Clicked: {this.use.count} times\n        {' '}\n        <button onClick={this.add}>+</button>\n        {' '}\n        <button onClick={this.sub}>-</button>\n        {' '}\n        <button onClick={this.addIfOdd}>\n          Add if odd\n        </button>\n        {' '}\n        <button onClick={this.addAsync}>\n          Add async\n        </button>\n      </p>\n    )\n  }\n})\n\nrender(<my-counter />, 'body', {\n  data: {\n    count: 0\n  },\n  sub() {\n    this.data.count--\n  },\n  add() {\n    this.data.count++\n  },\n})\n```\n\n* \u901a\u8fc7 `static use` \u58f0\u660e\u4f9d\u8d56\u7684 path\n* `store` \u901a\u8fc7 render \u7684\u7b2c\u4e09\u4e2a\u53c2\u6570\u4ece\u6839\u8282\u70b9\u6ce8\u5165\u5230\u6240\u6709\u7ec4\u4ef6\u3002\n\n\u4e0b\u9762\u4e3e\u4e00\u4e2a\u590d\u6742\u7684 `use` \u4f8b\u5b50\uff1a\n\n```js\nstatic use = [\n  'count', //\u76f4\u63a5\u5b57\u7b26\u4e32\uff0cJSX \u91cc\u53ef\u901a\u8fc7 this.use[0] \u8bbf\u95ee\n  'arr[0]', //\u4e5f\u652f\u6301 path\uff0cJSX \u91cc\u53ef\u901a\u8fc7 this.use[1] \u8bbf\u95ee\n  //\u652f\u6301 json\n  {\n    //alias\uff0cJSX \u91cc\u53ef\u901a\u8fc7 this.use.reverseMotto \u8bbf\u95ee\n    reverseMotto: [\n      'motto', //path\n      target => target.split('').reverse().join('')  //computed\n    ]\n  },\n  { name: 'arr[1]' }, //{ alias: path }\uff0cJSX \u91cc\u53ef\u901a\u8fc7 this.use.name \u8bbf\u95ee\n  {\n    //alias\uff0cJSX \u91cc\u53ef\u901a\u8fc7 this.use.fullName \u8bbf\u95ee\n    fullName: [\n      ['userInfo.firstName', 'userInfo.lastName'], //path array\n      (firstName, lastName) => firstName + lastName //computed\n    ]\n  },\n]\n```\n\n\u4e0b\u9762\u770b\u770b JSX \u4e2d\u4f7f\u7528:\n\n```jsx\n...\n...\nrender() {\n  return (\n    <div>\n      <button onClick={this.sub}>-</button>\n      <span>{this.use[0]}</span>\n      <button onClick={this.add}>+</button>\n      <div>\n        <span>{this.use[1]}</span>\n        <button onClick={this.rename}>rename</button>\n      </div>\n      <div>{this.use.reverseMotto}</div><button onClick={this.changeMotto}>change motto</button>\n      <div>{this.use.name}</div>\n      <div>{this.use[3]}</div>\n      <div>\n        {this.use.fullName}\n        <button onClick={this.changeFirstName}>change first name</button>\n      </div>\n    </div>\n  )\n}\n...\n...\n```\n\n\u5982\u679c\u4e0d\u5e26\u6709 alias \uff0c\u4f60\u4e5f\u53ef\u4ee5\u76f4\u63a5\u901a\u8fc7 `this.store.data.xxx` \u8bbf\u95ee\u3002"}});
//# sourceMappingURL=0.71055f5f.chunk.js.map