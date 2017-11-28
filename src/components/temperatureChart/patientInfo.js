/**
 * Created by liulingli on 2017/7/5.
 * desc : 体温单 患者基本信息
 */
import React, {Component} from "react";

export class PatientInfo extends Component {
    componentWillMount() {
        this.state = {
            hospital: this.props.hospital, //医院
            patientList: this.props.patientList, //患者基本信息
        }
    }

    componentWillReceiveProps(nextProps, nextState) {
        /*
         * 医院或患者基本信息改变，则重新render
         * */
        if (nextProps.hospital !== nextState.hospital || nextProps.patientList !== nextState.patientList) {
            this.setState({
                hospital: nextProps.hospital, //医院
                patientList: nextProps.patientList, //患者基本信息
            })
        }
    }

    render() {
        let {hospital, patientList} = this.state;
        return (
            <table className="patInfo">
                <tbody>
                <tr>
                    <td colSpan="4">
                        <h1>
                            {hospital}
                        </h1>
                    </td>
                </tr>
                <tr>
                    <td colSpan="4"><h3>体温表</h3></td>
                </tr>
                <tr className="percent4">
                    <td><span className="btitle">姓名：</span><span className="bline">{patientList.patientName}</span></td>
                    <td><span className="btitle">性别：</span><span className="bline">{patientList.sex}</span></td>
                    <td><span className="btitle">年龄：</span><span className="bline">{patientList.age}</span></td>
                    <td><span className="btitle">入院日期：</span><span
                        className="bline">{patientList.admissionDateTime}</span></td>
                </tr>
                <tr className="percent4">
                    <td><span className="btitle">科室：</span><span className="bline">{patientList.endemicName}</span></td>
                    <td><span className="btitle">床号：</span><span className="bline">{patientList.bedNo}</span></td>
                    <td><span className="btitle">住院号：</span><span className="bline">{patientList.inpNo}</span></td>
                    <td><span className="btitle">病案号：</span><span className="bline">{patientList.medicalHao}</span></td>
                </tr>
                </tbody>
            </table>
        )
    }
}
