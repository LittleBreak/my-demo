// import React, { Component } from "react";
import "./transform.css";

import React, { useState } from "react";
import { useSpring, animated as a } from "react-spring";

function Card() {
  const [flipped, set] = useState(false);
  const { transform, opacity } = useSpring({
    opacity: flipped ? 0 : 0,
    transform: `perspective(700px) rotateX(${flipped ? 180 : 0}deg)`,
    config: { mass: 5, tension: 500, friction: 80 }
  });
  console.log(opacity);
  console.log(transform);
  return (
    <div onClick={() => set(state => !state)}>
      <a.div
        class="c back sheying"
        style={{ opacity: opacity.interpolate(o => 1 - o), transform }}
      />
      {/* <a.div
        class="c front hai"
        style={{
          opacity,
          transform: transform.interpolate(t => `${t} rotateX(180deg)`)
        }}
      /> */}
    </div>
  );
}

// class Transform extends Component {
//   render() {
//     return (
//       <div className="box">
//         <div className="container">test</div>
//       </div>
//     );
//   }
// }

export default Card;
