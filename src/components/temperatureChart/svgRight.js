/**
 * Created by liulingli on 2017/6/22.
 * desc : 体温单 svgLeft 刻度
 */
import React, {Component} from "react";
import {drawSvgScale, showPointTuglie} from "./tempChart";

export class SvgRight extends Component {
  render() {
    return (
      <svg id="svgRight">
        {drawSvgScale({
          markName: "mb",
          svgId: "svgRight",
          x: "0",
          beginKD: 40,
          endKD: 180,
          width: 10,
          disKD: 20,
          trRowBegin: 5,
          trRowEnd: 40,
          stepSide: false,
          valueShow: true,
          isShowdemarcate: false,
          martchs: "140-40,15-40",
        }).scaleArray.map((v, i) => {
          return v
        })}
        {showPointTuglie().map((v, i) => {
          return v;
        })}
      </svg>
    )
  }
}