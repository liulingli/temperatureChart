/**
 * Created by liulingli on 2017/7/5.
 * desc : 体温单 患者住院手术信息
 */
import React, {Component} from "react";
import {getNewDate} from "./tempChart";

export class TableInfo extends Component {
  componentWillMount() {
    this.state = {
      beginDate: this.props.beginDate, //开始时间
      dayOps: this.props.dayOps, //产后/术后天数
      dayList: this.props.dayList //住院天数
    }
  }

  componentWillReceiveProps(nextProps, nextState) {
    /*
     * 开始时间beginDate改变，则重新render
     * */
    if (nextProps.beginDate !== nextState.beginDate) {
      this.setState({
        beginDate: nextProps.beginDate, //开始时间
        dayOps: nextProps.dayOps, //产后/术后天数
        dayList: nextProps.dayList //住院天数
      })
    }
  }

  /*
   * @method getDaysArray 生成显示天数
   * @param {String} beginDate 开始时间
   * */
  getDaysArray = (beginDate) => {
    const showDays = 7;
    //根据当前日期和显示天数生成日期数组
    let daysArray = [];
    for (let i = 0; i < showDays; i++) {
      let newDate = getNewDate(beginDate, i);
      daysArray.push(newDate);
    }
    return daysArray;
  }
  /*
   * @method getTimes 生成每天的时刻 2-6-10-14-18-22
   * */
  getTimes = () => {
    //生成timesArray
    let timesArray = [];
    for (let i = 0; i < 42; i++) {
      let num = 2 + (i % 6) * 4;
      let td = <td key={i}>{num}</td>;
      if (num === 22) {
        td = <td key={i} className="borderR">{num}</td>;
      }
      timesArray.push(td);
    }
    return timesArray;
  }

  render() {
    let {beginDate, dayOps, dayList} = this.state;
    let daysArray = this.getDaysArray(beginDate);
    let timesArray = this.getTimes();
    return (
      <tbody>
      <tr id="dateTR">
        <td>日期</td>
        {daysArray.map((v, i) => {
          return <td key={i} colSpan={6} className="borderR">{v}</td>
        })}
        <td />
      </tr>
      <tr id="hospDaysTr">
        <td>住院天数</td>
        {daysArray.map((v, i) => {
          return <td key={i} colSpan={6} className="borderR">{dayList[i]}</td>
        })}
        <td />
      </tr>
      <tr id="operaDaysTr">
        <td>术后产后天数</td>
        {daysArray.map((v, i) => {
          return <td key={i} colSpan={6} className="borderR">{dayOps[i]}</td>
        })}
        <td />
      </tr>
      <tr id="timeTr">
        <td>时间</td>
        {timesArray.map((v, i) => {
          return v
        })}
        <td/>
      </tr>
      </tbody>
    )
  }
}
