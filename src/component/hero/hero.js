import React from "react";
// css
import "./hero.less";
import axios from "axios";
class Hero extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // hero's profile
      heroesList: {},
      // banner-background-image
      bannerBgImg: require("../../herosImg/spiderMan-banner-bg.jpg"),
      // banner-image
      bannerImg: require("../../herosImg/spiderMan-banner.jpg"),
      // icon-image
      iconImg: {
        // spiderMan-icon
        "0": {
          iconImage: require("../../herosImg/spiderMan-icon.jpg")
        },
        // ironMan-icon
        "1": {
          iconImage: require("../../herosImg/ironMan-icon.png")
        },
        // hulk-icon
        "2": {
          iconImage: require("../../herosImg/hulk-icon.png")
        },
        // redSkull-icon
        "3": {
          iconImage: require("../../herosImg/redSkull-icon.png")
        },
        // thanos-icon
        "4": {
          iconImage: require("../../herosImg/thanos-icon.png")
        },
        // magneto-icon
        "5": {
          iconImage: require("../../herosImg/magneto-icon.png")
        },
        // mandaren-icon
        "6": {
          iconImage: require("../../herosImg/mandaren-icon.png")
        },
        // falcon-icon
        "7": {
          iconImage: require("../../herosImg/falcon-icon.png")
        },
        // professor-x-icon
        "8": {
          iconImage: require("../../herosImg/professor-x-icon.png")
        }
      }
    };
  }
  // cycleLife function
  componentDidMount() {
    // Route parameters received----heroId
    let heroNum = this.props.match.params.id;
    // get hero's profile
    axios
      .get("../hero.json")
      .then(res => {
        let data = res.data;
        // use the setState method
        this.setState({
          // Information about the current hero
          heroesList: data[heroNum],
          // the current banner background
          bannerBgImg: require(`../../herosImg/${
            data[heroNum].bannerBgImgSrc
          }.jpg`),
          // the current banner
          bannerImg: require(`../../herosImg/${
            data[heroNum].bannerImgSrc
          }.jpg`),
          // the current banner icon
          iconImg: this.state.iconImg[heroNum].iconImage
        });
        //
      })
      // If there is an error
      .catch(error => {
        // output the error message
        console.log(error);
      });
    // // get hero's profile
    // fetch("../hero.json", {
    //   // use the get method
    //   method: "GET"
    // })
    //   .then(res => {
    //     // use fetch json method
    //     return res.json();
    //   })
    //   .then(data => {
    //     // use the setState method
    //     this.setState({
    //       // Information about the current hero
    //       heroesList: data[heroNum],
    //       // the current banner background
    //       bannerBgImg: require(`../../herosImg/${
    //         data[heroNum].bannerBgImgSrc
    //       }.jpg`),
    //       // the current banner
    //       bannerImg: require(`../../herosImg/${
    //         data[heroNum].bannerImgSrc
    //       }.jpg`),
    //       // the current banner icon
    //       iconImg: this.state.iconImg[heroNum].iconImage
    //     });
    //     //
    //   })
    //   // If there is an error
    //   .catch(error => {
    //     // output the error message
    //     console.log(error);
    //   });
  }
  render() {
    return (
      <div>
        {/* banner */}
        <div
          className="bannerAndIconBg"
          // banner-background
          style={{
            backgroundImage: "url(" + this.state.bannerBgImg + ")"
          }}
        >
          {/* banner */}
          <div className="banner">
            {/* banner-image */}
            <img src={this.state.bannerImg} alt="SPIDER-MAN" />
            <p className="icon">
              {/* icon of hero */}
              <img src={this.state.iconImg} alt="SPIDER-MAN" />
            </p>
          </div>
        </div>
        {/* the profile of hero */}
        <div className="detail-bg">
          <div className="detail">
            {/* hero's  chineseName*/}
            <p className="chineseName">{this.state.heroesList.chineseName}</p>
            {/* hero's  englishName*/}
            <p className="englishName">{this.state.heroesList.englishName}</p>
            {/* the profile of hero */}
            <p className="introduce">{this.state.heroesList.introduce}</p>
            {this.state.heroesList.trueName ? (
              <p>
                {/* the hero's true name */}
                <i>真实姓名&nbsp;&nbsp;:&nbsp;&nbsp;</i>
                <span>{this.state.heroesList.trueName}</span>
              </p>
            ) : (
              ""
            )}
            {this.state.heroesList.height ? (
              <p>
                <i>
                  身&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;高&nbsp;&nbsp;:&nbsp;&nbsp;
                </i>
                {/* hero's height */}
                <span>{this.state.heroesList.height}</span>
              </p>
            ) : (
              ""
            )}
            {this.state.heroesList.weight ? (
              <p>
                <i>
                  重&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;量&nbsp;&nbsp;:&nbsp;&nbsp;
                </i>
                {/* weight */}
                <span>{this.state.heroesList.weight}</span>
              </p>
            ) : (
              ""
            )}
            {this.state.heroesList.technology ? (
              <p>
                <i>
                  技&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;能&nbsp;&nbsp;:&nbsp;&nbsp;
                </i>
                {/* technology */}
                <span> {this.state.heroesList.technology}</span>
              </p>
            ) : (
              ""
            )}
            {this.state.heroesList.power ? (
              <p>
                <i>
                  能&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;力&nbsp;&nbsp;:&nbsp;&nbsp;
                </i>
                {/* power */}
                <span> {this.state.heroesList.power}</span>
              </p>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
    );
  }
}
export default Hero;
