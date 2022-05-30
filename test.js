// 별 트리 만들기
// 출력값

//    *
//   ***
//  *****
// *******
//*********

const level = prompt('트리 층수를 입력하세요.');
for (let i = 1; i <= level; i++) {
    console.log(" ".repeat(level - i) + "*".repeat(i * 2 -1));
}