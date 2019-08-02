import React, { Component } from "react";
import { Spring, Trail, animated, Transition } from "react-spring/renderprops";
import "./SpringCom.css";
class SpringCom extends Component {
  state = {
    itemArr: ["default_1", "default_2", "default_3"],
    toggle: true
  };
  // componentDidMount() {
  //   setInterval(() => {
  //     const { itemArr } = this.state;
  //     itemArr.unshift(itemArr.length + 1);
  //     this.setState({
  //       itemArr: itemArr
  //     });
  //   }, 5000);
  // }
  renderItem = params => {
    const { itemArr } = this.state;
    let ret = [];
    for (let index = 0; index < itemArr.length; index++) {
      const item = itemArr[index];
      if (index === 0) {
        ret.push(
          // <div className="animate-item insert-animate-item">{item}</div>
          <Spring
            key={item}
            from={{ translate: 100, opacity: 0 }}
            to={{ translate: 0, opacity: 1 }}
          >
            {props => {
              console.log(props);
              return (
                <div
                  style={{
                    transform: `translate(-${props.translate}%, 0px)`,
                    opacity: props.opacity,
                    height: 150 * props.opacity
                  }}
                  className="animate-item"
                >
                  {item}
                </div>
              );
            }}
          </Spring>
        );
      } else {
        ret.push(<div className="animate-item">{item}</div>);
      }
    }
    return ret;
  };
  renderTrailItem = () => {
    const { itemArr } = this.state;
    let ret = [];
    for (let index = 0; index < itemArr.length; index++) {
      const item = itemArr[index];
      if (index === 0) {
        ret.push(
          // <div className="animate-item insert-animate-item">{item}</div>
          <Spring
            key={item}
            from={{ translate: 100, opacity: 0 }}
            to={{ translate: 0, opacity: 1 }}
          >
            {props => {
              console.log(props);
              return (
                <animated.div
                  style={{
                    transform: `translate(-${props.translate}%, 0px)`,
                    opacity: props.opacity,
                    height: 150 * props.opacity
                  }}
                  className="animate-item"
                >
                  {item}
                </animated.div>
              );
            }}
          </Spring>
        );
      } else {
        ret.push(<div className="animate-item">{item}</div>);
      }
    }
    return ret;
  };
  toggle = () => this.setState(state => ({ toggle: !state.toggle }));

  render() {
    const { itemArr, toggle } = this.state;
    const value = this.state.value;

    return (
      <div className="springCom-container">
        {/* {this.renderItem()} */}
        {/* {this.renderTrailItem()} */}
        <Transition
          items={itemArr}
          keys={item => item}
          from={{ transform: "translate3d(0,-40px,0)" }}
          enter={{ transform: "translate3d(0,0px,0)" }}
          leave={{ transform: "translate3d(0,-40px,0)" }}
        >
          {item => props => <div style={props} className="animate-item">{item}</div>}
        </Transition>

        {/* <Trail
          native
          reverse={true}
          // initial={null}
          items={itemArr}
          from={{ opacity: 0, x: -100 }}
          to={{ opacity: 1, x: 0 }}>
          {item => ({ x, opacity }) => (
            <animated.div
              className="animate-item"
              onClick={this.toggle}
              style={{
                opacity,
                transform: x.interpolate(x => `translate3d(${x}%,0,0)`),
              }}
            />
          )}
        </Trail> */}
        {/* <Spring
          from={{ translate: 100, opacity: 0 }}
          to={{ translate: 0, opacity: 1 }}
        >
          {props => {
            console.log(props);
            return (
              <div
                style={{
                  transform: `translate(-${props.translate}%, 0px)`,
                  opacity: props.opacity,
                  height: 150 * props.opacity
                }}
                className="animate-item"
              />
            );
          }}
        </Spring>
        <div className="animate-item" />
        <div className="animate-item" />
        <div className="animate-item" /> */}
      </div>
    );
  }
}

export default SpringCom;
