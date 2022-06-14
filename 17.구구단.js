// 구구단
function gogodan(num) {
    for(let i = 0; i < 9; i++) {
        console.log(`${num} * ${i+1} = ${num*(i+1)}`)
    }
}

function gogodanAll() {
    for(let i = 2; i <= 9; i++) {
        for(let j = 1; j<= 9; j++) {
            console.log(`${i} * ${j} = ${i*j}`);
        }
    }
}