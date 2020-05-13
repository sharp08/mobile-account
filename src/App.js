import React, { useState, useEffect } from 'react';
import { ToastContainer } from 'react-toastify';

import { GET_DETAIL } from '@apis'
import * as Utils from '@utils'

import { StyledTitle, StyledSection, StyledDashed, StyledColumns, StyledLabel, StyledValue } from './styled'

import './App.css';

function App() {

  const [data, setData] = useState({})

  useEffect(() => {
    const params = {
      orgId: 360100001,
      jobNum: 99121,
      payDate: "2020-05-12"
    }
    GET_DETAIL(params).then(res => {
      console.log(res)
    })
  }, [])

  return (
    <div className="App">
      <div>logo</div>
      <StyledSection>
        <StyledTitle>收费清单</StyledTitle>
        <StyledDashed />
        <StyledColumns colsWidth={["35%", "auto"]}>
          <StyledLabel>缴费时间：</StyledLabel><StyledValue>{data.payDateTime}</StyledValue>
          <StyledLabel>任务流水号：</StyledLabel><StyledValue>{data.taskCode}</StyledValue>
          <StyledLabel>收费流水号：</StyledLabel><StyledValue>{data.billNo}</StyledValue>
          <StyledLabel>姓名：</StyledLabel><StyledValue>{data.patientName}</StyledValue>
          <StyledLabel>出车地址：</StyledLabel><StyledValue>{data.meettingAddr}</StyledValue>
        </StyledColumns>
      </StyledSection>
      <StyledSection>
        <StyledTitle>账单信息（单位：元）</StyledTitle>
        <StyledDashed />
        <StyledColumns colsWidth={["35%", "auto"]}>
          <StyledLabel>救护车费：</StyledLabel><StyledValue align="right">{data.jhcFee}</StyledValue>
          <StyledLabel>医疗费：</StyledLabel><StyledValue align="right">{data.ylFee}</StyledValue>
          <StyledLabel>担架费：</StyledLabel><StyledValue align="right">{data.djFee}</StyledValue>
        </StyledColumns>
      </StyledSection>
      <StyledSection>
        <StyledDashed />
        <StyledColumns colsWidth={["35%", "auto"]}>
          <StyledLabel>合计：</StyledLabel><StyledValue align="right">{data.totalFee}</StyledValue>
          <StyledLabel>合计金额：</StyledLabel><StyledValue align="right">{Utils.CONVERT_2_YUAN(1234.5678)}</StyledValue>
        </StyledColumns>
      </StyledSection>
      <StyledSection>
        <StyledDashed />
        <StyledColumns colsWidth={["auto"]}>
          <span>备注：{data.remark}</span>
        </StyledColumns>
      </StyledSection>
      <StyledSection>
        <StyledDashed />
        <StyledColumns colsWidth={["auto"]}>
          <div>南昌急救中心提示：</div>
          <div>请在三个工作日后登陆江西省财政厅门户网站（<a href="http://www.jxf.gov.cn">http://www.jxf.gov.cn</a>）内“江西省非税收入收缴管理系统”查验、下载、打印票据。</div>
        </StyledColumns>
      </StyledSection>
      <ToastContainer
        position="top-center"
        style={{ width: "80vw", top: "20px" }}
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        // rtl={false}
        // pauseOnFocusLoss
        // draggable
        pauseOnHover
      />
    </div>
  );
}

export default App;
