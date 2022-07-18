let str = "AABBDCCCNMMMJLLL"
let num = 1
let string = ''
for (let i = 0; i < str.length; i++) {
  if (str[i].toLowerCase() == str[i+1]) {
    num++
  }else{
    string += `${str[i]}${num == 1 ? '' : num}`
    num = 1
  }   
}
console.log(string);
//----------------------------------------------------------
let str_num = "sd65ew9rt32as10re9thhil64ghfew8"
let resNum = str_num.match(/[0-9]/gi).join('')
let resStr = str_num.match(/[a-z]/gi).join('')
console.log(`Number: ${+resNum}, String: ${resStr}`);
//-----------------------------------------------------------
function son(num) {
    let str = Number(num).toString(2)
    let arr = str.replaceAll(/1/g, ' ').trim().split(" ").map((v) => v.length)
    return str[str.length - 1] == 0 ? 0 : Math.max(...arr)         
}
console.log(son(529));  // 1000010001
// console.log(son(9));    // 1001
// console.log(son(1000)); // 1111101000