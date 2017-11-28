/**
 * Created by liulingli on 2017/6/22.
 * desc : 体温单 svgLeft 刻度
 */
import React, {Component} from "react";
import {drawSvgScale} from "./tempChart";

export class SvgLeft extends Component {
  render() {
    return (
      <svg id="svgLeft">
        {drawSvgScale({
          markName: "tk",
          x: "1",
          stepSide: true,
          valueShow: true,
          beginKD: 1,
          endKD: 10,
          width: 10,
          disKD: 1,
          trRowBegin: 45,
          trRowEnd: 54,
          isShowdemarcate: false,
        }).scaleArray.map((v, i) => {
          return v
        })}
        {drawSvgScale({
          markName: "wdhs1",
          x: "0.5",
          beginKD: 94,
          endKD: 109,
          width: 10,
          disKD: 1,
          trRowBegin: 1,
          trRowEnd: 43,
          stepSide: true,
          valueShow: true,
          isShowdemarcate: true,
          martchs: "104-95,15-40",
        }).scaleArray.map((v, i) => {
          return v
        })}
        {drawSvgScale({
          markName: "wdhs2",
          x: "0.5",
          beginKD: 93,
          endKD: 109,
          width: 6,
          disKD: 0.2,
          trRowBegin: 1,
          trRowEnd: 43,
          stepSide: true,
          isShowdemarcate: false,
          valueShow: false,
          isShowLittle: true,
          martchs: "104-95,15-40",
        }).scaleArray.map((v, i) => {
          return v
        })}
        {drawSvgScale({
          markName: "wd",
          svgId: "svgLeft",
          x: "0.5",
          beginKD: 35,
          endKD: 42,
          width: 10,
          disKD: 1,
          trRowBegin: 5,
          trRowEnd: 40,
          stepSide: false,
          valueShow: true,
          isShowdemarcate: false,
          martchs: "40-35,15-40",
        }).scaleArray.map((v, i) => {
          return v
        })}
      </svg>
    )
  }
}