/**
 * Created by liulingli on 2017/7/4.
 * desc : 体温单
 */
import React, {Component} from "react";
import qs from "qs";
import {TemperatureChart} from "./temperatureChart";

export class Temperature extends Component {
    componentWillMount() {
        this.state = {
            data: this.props.data || {hspName: "西南医院"},
            beginDate: "2017-06-28",
            patientList: {
                name: "胡定明", //姓名
                sex: "男", //性别
                age: "65", //年龄
                admissionDateTime: "2017-06-28", //入院时间
                endemicName: "心内科", //科室
                bedNo: "123", //床号
                inpNo: "Z23456", //住院号
                medicalHao: "Z23456" //病案号
            },
            dayOps: ['1', '2', '3', '4', '5', '6', '7'], //产后/术后天数
            breathingList: ['60', '70', '65', '66', '56', '60', '70', '60', '70', '65', '66', '56', '60', '70', '60', '70', '65', '66', '56', '60', '70', '60', '70', '65', '66', '56', '60', '70', '60', '70', '65', '66', '56', '60', '70', '60', '70', '65', '66', '56', '60', '70'], //手术天数
            dayList: ['1', '2', '3', '4', '5', '6', '7'], //住院天数
            dayMap: {
                "{name:'总入量',units:'ml'}": ["", "", "", "", "", "44", ""],
                "{name:'体重',units:'g'}": ["", "", "", "", "", "47.5", ""]
            }, //每日录入信息
            pointTime: {
                "tt": [{"dataTime": "2017-06-29 02:00:00", "value": "9"}, {
                    "dataTime": "2017-06-29 06:00:00",
                    "value": "8"
                }, {"dataTime": "2017-06-29 10:00:00", "value": "7"}],
                "xl": [{
                    "dataTime": "2017-06-29 02:00:00",
                    "date": "2017-06-29",
                    "hour": 2,
                    "mbValue": "",
                    "phValue": "",
                    "type": "",
                    "value": "88",
                    "xlValue": ""
                }, {
                    "dataTime": "2017-06-29 06:00:00",
                    "date": "2017-06-29",
                    "hour": 6,
                    "mbValue": "",
                    "phValue": "",
                    "type": "",
                    "value": "90",
                    "xlValue": ""
                }, {
                    "dataTime": "2017-06-29 14:00:00",
                    "date": "2017-06-29",
                    "hour": 14,
                    "mbValue": "",
                    "phValue": "",
                    "type": "",
                    "value": "88",
                    "xlValue": ""
                }, {
                    "dataTime": "2017-06-29 18:00:00",
                    "date": "2017-06-29",
                    "hour": 18,
                    "mbValue": "",
                    "phValue": "",
                    "type": "",
                    "value": "98",
                    "xlValue": ""
                }, {
                    "dataTime": "2017-06-29 22:00:00",
                    "date": "2017-06-29",
                    "hour": 22,
                    "mbValue": "",
                    "phValue": "",
                    "type": "",
                    "value": "90",
                    "xlValue": ""
                }],
                "mb": [{
                    "dataTime": "2017-06-29 02:00:00",
                    "date": "2017-06-29",
                    "hour": 2,
                    "mbValue": "",
                    "phValue": "",
                    "type": "",
                    "value": "98",
                    "xlValue": ""
                }, {
                    "dataTime": "2017-06-29 06:00:00",
                    "date": "2017-06-29",
                    "hour": 6,
                    "mbValue": "",
                    "phValue": "",
                    "type": "",
                    "value": "80",
                    "xlValue": ""
                }, {
                    "dataTime": "2017-06-29 14:00:00",
                    "date": "2017-06-29",
                    "hour": 14,
                    "mbValue": "",
                    "phValue": "",
                    "type": "",
                    "value": "100",
                    "xlValue": ""
                }, {
                    "dataTime": "2017-06-29 18:00:00",
                    "date": "2017-06-29",
                    "hour": 18,
                    "mbValue": "",
                    "phValue": "",
                    "type": "",
                    "value": "98",
                    "xlValue": ""
                }, {
                    "dataTime": "2017-06-29 22:00:00",
                    "date": "2017-06-29",
                    "hour": 22,
                    "mbValue": "",
                    "phValue": "",
                    "type": "",
                    "value": "100",
                    "xlValue": ""
                }],
                "eventDatas": [{
                    "dataTime": "2017-06-29 14:00:00",
                    "date": "2017-06-30",
                    "hour": 2,
                    "mbValue": "",
                    "phValue": "",
                    "type": "",
                    "value": "呼吸心跳停止",
                    "xlValue": ""
                }, {
                    "dataTime": "2017-06-29 14:00:00",
                    "date": "2017-06-30",
                    "hour": 2,
                    "mbValue": "",
                    "phValue": "",
                    "type": "",
                    "value": "请假",
                    "xlValue": ""
                }, {
                    "dataTime": "2017-06-30 02:00:00",
                    "date": "2017-06-30",
                    "hour": 2,
                    "mbValue": "",
                    "phValue": "",
                    "type": "",
                    "value": "不升",
                    "xlValue": ""
                }, {
                    "dataTime": "2017-06-29 02:00:00",
                    "date": "2017-06-29",
                    "hour": 2,
                    "mbValue": "",
                    "phValue": "",
                    "type": "",
                    "value": "入院",
                    "xlValue": ""
                }, {
                    "dataTime": "2017-06-29 14:00:00",
                    "date": "2017-06-29",
                    "hour": 14,
                    "mbValue": "",
                    "phValue": "",
                    "type": "",
                    "value": "开呼吸机",
                    "xlValue": ""
                }, {
                    "dataTime": "2017-06-29 22:00:00",
                    "date": "2017-06-29",
                    "hour": 22,
                    "mbValue": "",
                    "phValue": "",
                    "type": "",
                    "value": "关呼吸机",
                    "xlValue": ""
                }],
                "wd": [{
                    "dataTime": "2017-06-29 02:00:00",
                    "date": "2017-06-29",
                    "hour": 2,
                    "mbValue": "",
                    "phValue": "36.5",
                    "type": "gw",
                    "value": "37.2",
                    "xlValue": ""
                }, {
                    "dataTime": "2017-06-29 06:00:00",
                    "date": "2017-06-29",
                    "hour": 6,
                    "mbValue": "",
                    "phValue": "",
                    "type": "yw",
                    "value": "37",
                    "xlValue": ""
                }, {
                    "dataTime": "2017-06-29 14:00:00",
                    "date": "2017-06-29",
                    "hour": 14,
                    "mbValue": "",
                    "phValue": "",
                    "type": "gw",
                    "value": "37.5",
                    "xlValue": ""
                }, {
                    "dataTime": "2017-06-29 18:00:00",
                    "date": "2017-06-29",
                    "hour": 18,
                    "mbValue": "",
                    "phValue": "",
                    "type": "kw",
                    "value": "37.4",
                    "xlValue": ""
                }, {
                    "dataTime": "2017-06-29 22:00:00",
                    "date": "2017-06-29",
                    "hour": 22,
                    "mbValue": "",
                    "phValue": "",
                    "type": "kw",
                    "value": "36.8",
                    "xlValue": ""
                }],
                "hzfx": [{
                    "dataTime": "2017-06-29 14:00:00",
                    "date": "2017-06-29",
                    "hour": 14,
                    "mbValue": "",
                    "phValue": "",
                    "type": "",
                    "value": "66",
                    "xlValue": ""
                }, {
                    "dataTime": "2017-06-29 18:00:00",
                    "date": "2017-06-29",
                    "hour": 18,
                    "mbValue": "",
                    "phValue": "",
                    "type": "",
                    "value": "66",
                    "xlValue": ""
                }],
                "respiratorDatas": [{
                    "dataTime": "2017-06-29 14:00:00",
                    "date": "2017-06-29",
                    "hour": 14,
                    "mbValue": "",
                    "phValue": "",
                    "type": "",
                    "value": "66",
                    "xlValue": ""
                }, {
                    "dataTime": "2017-06-29 18:00:00",
                    "date": "2017-06-29",
                    "hour": 18,
                    "mbValue": "",
                    "phValue": "",
                    "type": "",
                    "value": "66",
                    "xlValue": ""
                }]
            },// 时间段录入信息
            loading: false
    }
}

componentDidMount()
{
    let {beginDate, data} = this.state;
    this.fetchData(data, beginDate);
}

componentWillReceiveProps(nextProps, nextState)
{
    if (nextProps.data !== nextState.data) {
        this.setState({
            data: nextProps.data,
            beginDate: nextProps.data.clinicDate,
        })
    }
    let {beginDate, data} = this.state;
    this.fetchData(data, beginDate);
}

/* 请求患者体温单数据 */
fetchData = (data, beginDate) => {
    return;
    let param = {
        patientId: data.patientId,
        visitId: data.clinicNo,
        hspCode: data.hspCode,
        timeType: 4,
        time: beginDate
    };
    //console.log(param)
    fetch("/caseHistory/patientTemperature/getHspPatientTemperature", {
        method: "POST",
        body: qs.stringify(param)
    }).then(response => {
        if (response.success) {
            let data = eval("(" + response.data + ")");
            let patientList = data.data.patientsInfo;
            let dataList = data.data.dataList;
            let dayMap = data.data.dayMap;
            //console.log("beginDay:"+dataList.beginDay)
            this.setState({
                patientList: patientList || {},
                beginDate: dataList.beginDay,
                dayOps: dataList.dayOps || [],
                dayList: dataList.dayList || [],
                breathingList: dataList.breathingList || [],
                dayMap: dataList.dayMap || {},
                pointTime: dataList.pointTime || {},
                loading: false
            })
        } else {
            this.setState({
                loading: false
            });
            throw new Error(response.message);
        }
    });
}
/**
 * 改变开始时间
 */
changeBeginDay = (newDate) => {
    if (newDate !== this.state.beginDate) {
        let {data} = this.state;
        this.fetchData(data, newDate);
    }
}

render()
{
    let {loading, data, beginDate, patientList, dayOps, breathingList, dayList, dayMap, pointTime} = this.state;
    return (
        <TemperatureChart
            beginDate={beginDate}
            hospital={data.hspName}
            patientList={patientList}
            dayOps={dayOps}
            breathingList={breathingList}
            dayList={dayList}
            dayMap={dayMap}
            pointTime={pointTime}
            changeBeginDay={this.changeBeginDay}
            loading={loading}
        />
    )
}
}