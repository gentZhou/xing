import React from "react";
import PropTypes from "prop-types";

import style from "./index.module.css";
class Hello extends React.Component {
  static propTypes = {
    person: PropTypes.object.isRequired,
  };

  render() {
    // console.log(this);

    const { person } = this.props;
    // console.log(this.props.person);
    return (
      <div>
        <p>宇宙第一干爹</p>
        <ul>
          {Object.keys(person).map((item, index) => (
            <li key={index}>
              {item} : {person[item]}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

// function Hello(){
//   return(
//     <h1 className={style.color}>
//       闪耀动人
//     </h1>
//   )
// }
export default Hello;
