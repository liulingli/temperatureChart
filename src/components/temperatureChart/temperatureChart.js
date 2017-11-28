/**
 * Created by liulingli on 2017/6/22.
 * desc : 体温单
 */
import React, {Component} from "react";
import moment from "moment";
import {Button, DatePicker, message, Spin} from "antd";
import {getNewDate} from "./tempChart";
import {GridTable} from "./gridTable";
import {Colgroup} from "./colgroup";
import {PatientInfo} from "./patientInfo";
import {TableInfo} from "./tableInfo";
import {SvgCenter} from "./svgCenter";

const ButtonGroup = Button.Group;

export class TemperatureChart extends Component {
    componentWillMount() {
        this.state = {
            beginDate: this.props.beginDate, //开始时间
            hospital: this.props.hospital, //医院
            patientList: this.props.patientList, //患者信息
            dayOps: this.props.dayOps, //术后/产后天数
            breathingList: this.props.breathingList, //呼吸次数
            dayList: this.props.dayList, //住院天数
            dayMap: this.props.dayMap, //每日录入信息
            pointTime: this.props.pointTime, // 时间段录入信息
            loading: this.props.loading,
        }
    }

    componentWillReceiveProps(nextProps, nextState) {
        /*
         * 时间改变则重新render
         */
        if (nextProps.patientList !== nextState.patientList) {
            this.setState({
                beginDate: nextProps.beginDate,
                hospital: nextProps.hospital,
                patientList: nextProps.patientList,
                dayOps: nextProps.dayOps,
                breathingList: nextProps.breathingList,
                dayList: nextProps.dayList,
                dayMap: nextProps.dayMap,
                pointTime: nextProps.pointTime,
                loading: nextProps.loading
            })
        }
    }

    /**
     * 按钮切换开始时间
     * @param curDate 当前时间
     * @param disDays 传入Number类型时为与当前时间相差天数，字符串为其他类型"first"为第一周，"last"最后一周
     */
    changeBeginDay = (curDate, disDays) => {
        let admissionDateTime = this.state.patientList.admissionDateTime; //入院时间
        let dischargeDateTime = this.state.patientList.dischargeDateTime || moment(new Date()).format("YYYY-MM-DD");//出院时间，如果还未出院，则默认为当前时间
        let admissionDay = new Date(moment(admissionDateTime).format("YYYY-MM-DD"));
        let dischargeDay = new Date(moment(dischargeDateTime).format("YYYY-MM-DD"));
        let newDate;
        if (typeof disDays === "string") {
            if (disDays === "first") { //第一周,开始时间为入院时间
                newDate = admissionDateTime;
            } else if (disDays === "last") { //最后一周，开始时间为出院时间-7天，如果还未出院，则为传入当前时间
                newDate = getNewDate(dischargeDateTime, 0);
            }
        } else {
            newDate = getNewDate(curDate, disDays);
        }
        let beginDate = new Date(moment(newDate).format("YYYY-MM-DD"));
        if (beginDate < admissionDay) {
            message.info("开始时间不能小于入院时间");
            return;
        } else if (beginDate > dischargeDay) {
            message.info("开始时间不能小于出院时间");
            return;
        }
        this.props.changeBeginDay(newDate);
    }
    /**
     * 时间控件切换开始开始
     * @param date
     * @param dateString
     */
    onDateChange = (date, dateString) => {
        if (dateString !== "") {
            console.log("onDateChange")
            this.props.changeBeginDay(dateString);
        }
    }
    /**
     * 确定选择范围 入院时间 - 出院时间
     * @param currentDate
     */
    disabledDate = (currentDate) => {
        let curDate = new Date(moment(currentDate).format("YYYY-MM-DD"));
        let admissionDateTime = this.state.patientList.admissionDateTime; //入院时间
        let dischargeDateTime = this.state.patientList.dischargeDateTime || moment(new Date()).format("YYYY-MM-DD");//出院时间，如果还未出院，则默认为当前时间
        let admissionDay = new Date(moment(admissionDateTime).format("YYYY-MM-DD"));
        let dischargeDay = new Date(moment(dischargeDateTime).format("YYYY-MM-DD"));
        return curDate < admissionDay || curDate > dischargeDay;
    }

    render() {
        let {beginDate, patientList, hospital, dayOps, dayList, pointTime, breathingList, dayMap, loading} = this.state;
        console.log("render:" + beginDate)
        return (
            <div className="temperature-chart" style={{width: '791px'}}>
                <Spin spinning={loading}>
                    {/* <div className="footBtn">
            <DatePicker
              size="small"
              value={moment(beginDate)}
              format="YYYY-MM-DD"
              onChange={this.onDateChange}
              disabledDate={this.disabledDate}
            />
            <ButtonGroup>
              <Button type="primary" size="small"
                      onClick={this.changeBeginDay.bind(this, beginDate, 'first')}>第一周</Button>
              <Button type="primary" size="small" onClick={this.changeBeginDay.bind(this, beginDate, -7)}>上一周</Button>
              <Button type="primary" size="small" onClick={this.changeBeginDay.bind(this, beginDate, 7)}>下一周</Button>
              <Button type="primary" size="small"
                      onClick={this.changeBeginDay.bind(this, beginDate, 'last')}>最后一周</Button>
            </ButtonGroup>
          </div>*/}
                    <div className="tempCartSvg">
                        <div className="fixed_div">
                            <PatientInfo hospital={hospital} patientList={patientList}/>
                        </div>
                        <div className="flow_div">
                            <table className="showInfo">
                                <Colgroup/>
                                <TableInfo beginDate={beginDate} dayOps={dayOps} dayList={dayList}/>
                            </table>
                            <div className="svgCenter">
                                <SvgCenter data={pointTime} curDate={beginDate}/>
                            </div>
                            <table className="tableSvg">
                                <Colgroup/>
                                <GridTable breathingList={breathingList} dayMap={dayMap}/>
                            </table>
                        </div>
                    </div>
                </Spin>
            </div>
        )
    }
}
