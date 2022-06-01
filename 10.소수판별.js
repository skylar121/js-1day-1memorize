// # 소수 판별

// 소수판별 (소수: 1과 자기 자신으로만 나눠지는 수)
// 소수이면 Yes, 아니면 No로 출력하세요.

// 1과 자기 자신이 아닌 다른 수로 나누어진다면 소수가 아님
function checkPrime(n) {
    for (let i = 2; i < n; i++) {
        if (n % i === 0) {
            console.log("NO");
            return false;
        }
    }
    if (n === 1) {
    console.log("NO");
    return false;
    }
    console.log("YES");
}

checkPrime(n);