import React from "react";
// css
import "./App.less";

// router
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import HeroList from "./heroList/heroList";
// component
import Hero from "./hero/hero.js";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      num: 0,
      // hero's profile
      heroArr: [
        {
          backgroundImg: require("../herosImg/kp1.jpg"),
          chineseName: "蜘蛛侠",
          englishName: "SPISER-MAN",
          heroId: 0,
          time: "1565064715693",
          collect: true
        },
        {
          backgroundImg: require("../herosImg/kp2.jpg"),
          chineseName: "钢铁侠",
          englishName: "IRON-MAN",
          heroId: 1,
          time: "1565064715694",
          collect: false
        },
        {
          backgroundImg: require("../herosImg/kp3.jpg"),
          chineseName: "绿巨人",
          englishName: "HULK",
          heroId: 2,
          time: "1565064715695",
          collect: true
        },
        {
          backgroundImg: require("../herosImg/kp11.jpg"),
          chineseName: "红骷髅",
          englishName: "RED-SKULL",
          heroId: 3,
          time: "1565064715696",
          collect: false
        },
        {
          backgroundImg: require("../herosImg/kp12.jpg"),
          chineseName: "灭霸",
          englishName: "THANOS",
          heroId: 4,
          time: "1565064715697",
          collect: false
        },
        {
          backgroundImg: require("../herosImg/kp13.jpg"),
          chineseName: "万磁王",
          englishName: "MAGNETO",
          heroId: 5,
          time: "1565064715698",
          collect: false
        },
        {
          backgroundImg: require("../herosImg/kp21.jpg"),
          chineseName: "满大人",
          englishName: "MANDARIN",
          heroId: 6,
          time: "1565064715699",
          collect: false
        },
        {
          backgroundImg: require("../herosImg/kp22.jpg"),
          chineseName: "猎鹰",
          englishName: "FALCON",
          heroId: 7,
          time: "1565064715700",
          collect: false
        },
        {
          backgroundImg: require("../herosImg/kp23.jpg"),
          chineseName: "X-教授",
          englishName: "PROFESSOR-X",
          heroId: 8,
          time: "1565064715701",
          collect: false
        }
      ]
    };
  }

  // handleNum() {
  //   this.setState({
  //     num: 1
  //   });
  // }
  render() {
    return (
      <Router>
        {/* header */}
        <header>
          <nav>
            <Link to="/heroList">
              <img src={require("../herosImg/logo.jpg")} alt="MARVEL" />
            </Link>
            <Link to="/heroList">首页</Link>
            {this.state.heroArr.map(item => {
              return (
                <Link to={`/hero/${item.heroId}`} key={item.heroId}>
                  {item.chineseName}
                </Link>
              );
            })}
          </nav>
        </header>

        {/* section */}
        <div>
          <Route path="/heroList" component={HeroList} />
          <Route path="/hero/:id" component={Hero} />
        </div>

        {/* footer */}
        <footer>
          {/* <button className="colBtns" onClick={this.handleNum.bind(this, 0)}>
            "收藏"
          </button> */}
          <p className="footerDiv">漫威粉丝网站由时光网呈现</p>
          <p>
            Copyright © 2006-2015 Mtime.com Inc. All rights reserved.
            <br />
            北京动艺时光网络科技有限公司京ICP证050715号
            网络视听许可证0108265号北京市公安局朝阳分局备案编号:1101050744
          </p>
        </footer>
      </Router>
    );
  }
}
export default App;
