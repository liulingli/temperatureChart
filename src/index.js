import React from 'react';
import ReactDOM from 'react-dom';
import './styles/app.less';
import { AppContainer } from 'react-hot-loader';
import {Temperature} from "./components/temperatureChart/temperature";

ReactDOM.render(
  <AppContainer>
     <Temperature
        data={{}}
     />
  </AppContainer>,
  document.getElementById('main')
)