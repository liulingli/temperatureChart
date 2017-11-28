/**
 * Created by liulingli on 2017/7/5.
 * desc : 体温单 colgroup 控制体温单单元格宽度
 */
import React, {Component} from "react";

export class Colgroup extends Component {
  createColgroup = () => {
    let colArray = [];
    for (let i = 0; i < 44; i++) {
      let width = 15;
      if (i === 0) {
        width = 100;
      } else if (i === 43) {
        width = 60;
      }
      let col = <col key={i} width={width + "px"}/>;
      colArray.push(col);
    }
    return colArray;
  }

  render() {
    return (
      <colgroup>
        {
          this.createColgroup().map((v, i) => {
            return v;
          })
        }
      </colgroup>
    )
  }
}