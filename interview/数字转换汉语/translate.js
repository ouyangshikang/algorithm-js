/**
 * 写出一个函数trans，将数字转换成汉语的输出，输入为不超过10000亿的数字。
 */

const transNum = ['零', '一', '二', '三', '四', '五', '六', '七', '八', '九'];
const transUnit = ['', '十', '百', '千', '万', '十', '百', '千', '亿', '十', '百', '千', '万亿'];

function translate(num) {
    let result = '';
    let obj = {};
    let count = 0;

    while (num !== 0) {
        obj[count] = num % 10;
        num = ~~(num / 10);
        count++;
    }

    for (let i = count - 1; i >= 0; i--) {
        result += obj[i] ? `${transNum[obj[i]]}${transUnit[i]}` : '零';
    }

    return result.replace(/零+/g, '零').replace(/^一十/, '十');
}

console.log(translate(123416)); // 十二万三千四百五十六
console.log(translate(100010001)); // 一亿零一万零一
