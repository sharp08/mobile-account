import React from 'react';
import { StyledTitle, StyledSection, StyledDashed, StyledColumns, StyledLabel, StyledValue } from './styled'
import './App.css';

function App() {
  return (
    <div className="App">
      <div>logo</div>
      <StyledSection>
        <StyledTitle>收费清单</StyledTitle>
        <StyledDashed />
        <StyledColumns colsWidth={["30%", "auto"]}>
          <StyledLabel>缴费时间：</StyledLabel><StyledValue>2020-02-20 20:02</StyledValue>
          <StyledLabel>任务流水号：</StyledLabel><StyledValue>222</StyledValue>
          <StyledLabel>收费流水号：</StyledLabel><StyledValue>12345678901234567890</StyledValue>
          <StyledLabel>姓名：</StyledLabel><StyledValue>江疏影</StyledValue>
          <StyledLabel>出车地址：</StyledLabel><StyledValue>中华人民共和国四川省成都市巴中县中华人民共和国四川省成</StyledValue>
        </StyledColumns>
      </StyledSection>
      <StyledSection>
        <StyledTitle>账单信息（单位：元）</StyledTitle>
        <StyledDashed />
        <StyledColumns colsWidth={["30%", "auto"]}>
          <StyledLabel>救护车费：</StyledLabel><StyledValue align="right">100.00</StyledValue>
          <StyledLabel>医疗费：</StyledLabel><StyledValue align="right">100.00</StyledValue>
          <StyledLabel>担架费：</StyledLabel><StyledValue align="right">100.00</StyledValue>
        </StyledColumns>
      </StyledSection>
      <StyledSection>
        <StyledDashed />
        <StyledColumns colsWidth={["30%", "auto"]}>
          <StyledLabel>合计：</StyledLabel><StyledValue align="right">100.00</StyledValue>
          <StyledLabel>合计金额：</StyledLabel><StyledValue align="right">100.00</StyledValue>
        </StyledColumns>
      </StyledSection>
      <StyledSection>
        <StyledDashed />
        <StyledColumns colsWidth={["auto"]}>
          <span>备注：由于财政局发票系统要求，电子发票项目会与收费清单项目不同，但总费用一致</span>
        </StyledColumns>
      </StyledSection>
      <StyledSection>
        <StyledDashed />
        <StyledColumns colsWidth={["auto"]}>
          <div>南昌急救中心提示：</div>
          <div>请在三个工作日后登陆江西省财政厅门户网站</div>
        </StyledColumns>
      </StyledSection>
    </div>
  );
}

export default App;
