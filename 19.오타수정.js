const word = prompt('문장을 입력하세요');

function replaceAll(str, searchStr, replaceStr) {
    return str.split(searchStr).join(replaceStr);
}

console.log(replaceAll(word,"q","e"));

// str.split(separator, limit) : 배열 반환
// separator : 원본 문자열을 끊어야 할 부분 (끊어서 없애버림)
// limit : 끊어진 문자열의 최대 개수를 나타내는 정수

// join(separator) : 문자열 반환
// 배열 사이사이 (맨 처음과 끝 제외하고)에 separator를 넣어서 합침