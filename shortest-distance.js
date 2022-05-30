// https://codingdojang.com/scode/408?langby=javascript#answer-filter-area
// 1차원의 점들이 주어졌을 때, 그 중 가장 거리가 짧은 것의 쌍을 출력하는 함수를 작성하시오. (단 점들의 배열은 모두 정렬되어있다고 가정한다.)

// 예를들어 S={1, 3, 4, 8, 13, 17, 20} 이 주어졌다면, 결과값은 (3, 4)가 될 것이다.


// 풀이 1
let s  = [1, 3, 4, 8, 13, 17, 20, 21, 22];
let arr = []
for (let i = 1; i < s.length; i++) {
    arr.push(s[i] - s[i-1]);
}

let index = arr.indexOf(Math.min(...arr))
console.log(s[index], s[index+1])


// // 풀이 2
// let s  = [1, 3, 4, 8, 13, 17, 20];

// const zip = (a, b) => a.map((v, i)=>[v, b[i]]);
// let pairs = zip(s.slice(0, s.length - 1), s.slice(1))

// let minDistance = pairs[0][1] - pairs[0][0];
// let result = [];

// // 쓰잘데없는 첫번째 비교 안해도 됨
// // for (let i = 1 ; i < pairs.length; i++) {
// //     if(minDistance > pairs[i][1] - pairs[i][0]) {
// //         minDistance = pairs[i][1] - pairs[i][0]
// //         result = pairs[i];
// //     }
// // }

// for (let arr of pairs) {
//     // console.log(i);
//     if (minDistance > arr[1] - arr[0]) {
//         minDistance = arr[1] - arr[0]
//         result = arr;
//     }
// }

// console.log(result);