//a부터 b까지 합을 구하는 함수
function sumAll(a, b) {
    let output = 0;
    for (let i = a; i <= b; i++) {
        output += i;
    }
    return output;
}

console.log(`6부터 20까지의 합은 ${sumAll(6, 20)}입니다`);
console.log(`6부터 20까지의 합은 ${sumAll(6, 76)}입니다`);