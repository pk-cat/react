import React from "react";
// less
import "./heroList.less";
// route
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
// methods
import { changeTime } from "../common.js";
class HeroList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      num: 0,
      // hero's profile
      heroArr: [
        {
          backgroundImg: require("../../herosImg/kp1.jpg"),
          chineseName: "蜘蛛侠",
          englishName: "SPISER-MAN",
          heroId: 0,
          time: "1565064715693",
          collect: true
        },
        {
          backgroundImg: require("../../herosImg/kp2.jpg"),
          chineseName: "钢铁侠",
          englishName: "IRON-MAN",
          heroId: 1,
          time: "1565064715694",
          collect: false
        },
        {
          backgroundImg: require("../../herosImg/kp3.jpg"),
          chineseName: "绿巨人",
          englishName: "HULK",
          heroId: 2,
          time: "1565064715695",
          collect: true
        },
        {
          backgroundImg: require("../../herosImg/kp11.jpg"),
          chineseName: "红骷髅",
          englishName: "RED-SKULL",
          heroId: 3,
          time: "1565064715696",
          collect: false
        },
        {
          backgroundImg: require("../../herosImg/kp12.jpg"),
          chineseName: "灭霸",
          englishName: "THANOS",
          heroId: 4,
          time: "1565064715697",
          collect: false
        },
        {
          backgroundImg: require("../../herosImg/kp13.jpg"),
          chineseName: "万磁王",
          englishName: "MAGNETO",
          heroId: 5,
          time: "1565064715698",
          collect: false
        },
        {
          backgroundImg: require("../../herosImg/kp21.jpg"),
          chineseName: "满大人",
          englishName: "MANDARIN",
          heroId: 6,
          time: "1565064715699",
          collect: false
        },
        {
          backgroundImg: require("../../herosImg/kp22.jpg"),
          chineseName: "猎鹰",
          englishName: "FALCON",
          heroId: 7,
          time: "1565064715700",
          collect: false
        },
        {
          backgroundImg: require("../../herosImg/kp23.jpg"),
          chineseName: "X-教授",
          englishName: "PROFESSOR-X",
          heroId: 8,
          time: "1565064715701",
          collect: false
        }
      ]
    };
  }
  // collect the hero
  handleCollect(id) {
    // Assigning a value to a variable
    let object = this.state.heroArr;
    // Traversing the array
    for (const item of object) {
      // Modifying variables
      item.collect = item.heroId === id ? !item.collect : item.collect;
    }
    // use the setState method
    this.setState({ heroArr: object });
  }
  render() {
    return (
      <div className="charactor-bg">
        <div className="charactor-out">
          {this.state.heroArr.map(item => {
            return (
              <div
                key={item.heroId}
                className="charactor"
                style={{
                  background: `url(${item.backgroundImg}) no-repeat center`
                }}
              >
                <div />
                <ul>
                  <li className="chineseName">
                    <span>{item.chineseName}</span>
                  </li>
                  <li className="englishName">
                    <span>{item.englishName}</span>
                  </li>
                  <li>
                    <Link to={`/hero/${item.heroId}`} className="toArchives">
                      <span>档案</span>
                    </Link>
                  </li>
                </ul>
                <p className="operation">
                  <span className="time">{changeTime(item.time)}</span>
                  <button
                    className="colBtn"
                    onClick={this.handleCollect.bind(this, item.heroId)}
                  >
                    {item.collect ? "取消收藏" : "收藏"}
                  </button>
                </p>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}
export default HeroList;
