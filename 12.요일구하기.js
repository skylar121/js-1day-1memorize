// 요일 확인 함수

// getDay() : 일~토 (0~6)로 표현하기 때문에 "SUN"부터 배열에 넣기
// getMonth()도 0부터 시작
const day = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

function checkDay(년, 월, 일) {
    const theDay = new Date(`${년}-${월}-${일}`);
    console.log(day[theDay.getDay()]);
}

checkDay(년, 월, 일);