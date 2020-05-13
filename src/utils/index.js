/**
 * @description: 时间差
 * @param {Number} startDateStamp   //  时间戳
 * @param {Number} endDateStamp   //  时间戳
 * @param {Boolean} zeroPadding   //  补零
 * @return: 
 *      补零     {days: "10", hours: "01", minutes: "00", seconds: "01", diff: 867601000}
 *      不补零   {days: 10, hours: 1, minutes: 0, seconds: 1, diff: 867601000}
 */
const DIFF_TIME = (startDateStamp, endDateStamp, zeroPadding = true) => {
  const diff = endDateStamp - startDateStamp; //  获取毫秒时间差
  let r;

  //计算出相差天数
  let days = Math.floor(diff / (24 * 3600 * 1000));

  //计算出小时数
  const leave1 = diff % (24 * 3600 * 1000);
  let hours = Math.floor(leave1 / (3600 * 1000));

  //计算相差分钟数
  const leave2 = leave1 % (3600 * 1000);
  let minutes = Math.floor(leave2 / (60 * 1000));

  //计算相差秒数
  const leave3 = leave2 % (60 * 1000);
  let seconds = Math.round(leave3 / 1000);

  if (zeroPadding) {
    days = `${days}`
    if (hours < 10) hours = `0${hours}`
    if (minutes < 10) minutes = `0${minutes}`
    if (seconds < 10) seconds = `0${seconds}`
    r = { days, hours, minutes, seconds, diff }
  } else {
    r = { days, hours, minutes, seconds, diff }
  }
  return r
}

/**
 * @description: 阿拉伯金额转换为中文大写金额
 * @param {Number} money 
 * @return: String
 */
const CONVERT_2_YUAN = money => {
  //汉字的数字
  let cnNums = ['零', '壹', '贰', '叁', '肆', '伍', '陆', '柒', '捌', '玖'];
  //基本单位
  let cnIntRadice = ['', '拾', '佰', '仟'];
  //对应整数部分扩展单位
  let cnIntUnits = ['', '万', '亿', '兆'];
  //对应小数部分单位
  let cnDecUnits = ['角', '分', '毫', '厘'];
  //整数金额时后面跟的字符
  let cnInteger = '整';
  //整型完以后的单位
  let cnIntLast = '元';
  //最大处理的数字
  let maxNum = 999999999999999.9999;
  //金额整数部分
  let integerNum;
  //金额小数部分
  let decimalNum;
  //输出的中文金额字符串
  let chineseStr = '';
  //分离金额后用的数组，预定义
  let parts;
  if (money === '') { return ''; }
  money = parseFloat(money);
  if (money >= maxNum) {
    //超出最大处理数字
    return '';
  }
  if (money === 0) {
    chineseStr = cnNums[0] + cnIntLast + cnInteger;
    return chineseStr;
  }
  //转换为字符串
  money = money.toString();
  if (money.indexOf('.') === -1) {
    integerNum = money;
    decimalNum = '';
  } else {
    parts = money.split('.');
    integerNum = parts[0];
    decimalNum = parts[1].substr(0, 4);
  }
  //获取整型部分转换
  if (parseInt(integerNum, 10) > 0) {
    let zeroCount = 0;
    let IntLen = integerNum.length;
    for (let i = 0; i < IntLen; i++) {
      let n = integerNum.substr(i, 1);
      let p = IntLen - i - 1;
      let q = p / 4;
      let m = p % 4;
      if (n === '0') {
        zeroCount++;
      } else {
        if (zeroCount > 0) {
          chineseStr += cnNums[0];
        }
        //归零
        zeroCount = 0;
        chineseStr += cnNums[parseInt(n)] + cnIntRadice[m];
      }
      if (m === 0 && zeroCount < 4) {
        chineseStr += cnIntUnits[q];
      }
    }
    chineseStr += cnIntLast;
  }
  //小数部分
  if (decimalNum !== '') {
    let decLen = decimalNum.length;
    for (let i = 0; i < decLen; i++) {
      let n = decimalNum.substr(i, 1);
      if (n !== '0') {
        chineseStr += cnNums[Number(n)] + cnDecUnits[i];
      }
    }
  }
  if (chineseStr === '') {
    chineseStr += cnNums[0] + cnIntLast + cnInteger;
  } else if (decimalNum === '') {
    chineseStr += cnInteger;
  }
  return chineseStr;
}

export {
  CONVERT_2_YUAN, // 阿拉伯金额转换为中文大写金额
  DIFF_TIME // 时间差
}