let 출석부 = ['흥민', '영희', '철수', '재석', '영희'];

function 있나요(name) {
    let trueFalse = 출석부.includes(name + '');
    if (trueFalse) {
        console.log('있어요!');
    } else {
        console.log('없네요ㅠㅠ');
    }
    return;
}

있나요('영희')

// 아래와 같이 짜면 return 있을땐 있어요가 1번 출력, return 없으면 2번 출력됨

// let 출석부 = ['흥민', '영희', '철수', '재석', '영희'];

// function isName(name) {
//     for (i = 0; i <= 출석부.length; i++) {
//         if (name == 출석부[i]) {
//         console.log('있어요!');
//         return;
//         }
//     }
// }

// isName('영희');