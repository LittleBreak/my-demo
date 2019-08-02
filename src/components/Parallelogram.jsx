import React, { Component } from 'react';
// import './Parallelogram.css';

// 平行四边形
class Parallelogram extends Component {
  render() {
    return (
      <div className="item-container">
        <div className="item">
          <div className="inner-item">北京</div>
        </div>
        <div className="item">广东</div>
        <div className="item">山东</div>
        <div className="item">上海</div>
        <div className="item">浙江</div>        
      </div>
    );
  }
}

export default Parallelogram;