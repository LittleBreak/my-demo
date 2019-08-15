import React, { Component } from "react";
import _ from "lodash";

const sortArr = [
  "豁免期后未恢复报价(未报价)",
  "触发豁免报价(报告)",
  "触发豁免报价(中文报告)",
  "自营做市股票(持股)"
  // "阿拉伯",
  // "旦旦",
  // "操心啊",
  // "操心阿",
  // "操心包",
  // "操中",
  // "保重",
  // "丝丝",
  // "333",
  // "444中文",
  // "aaaa",
  // "bbbb",
  // "bbba",
  // "bbc"
];
class ZNSort extends Component {
  test = params => {
    let clone = _.cloneDeep(sortArr);
    console.log(
      clone.sort((a, b) => {
        return -a.localeCompare(b, 'zh');
      })
    );
  };
  render() {
    return (
      <div>
        <button onClick={this.test}>sort</button>
      </div>
    );
  }
}

export default ZNSort;
