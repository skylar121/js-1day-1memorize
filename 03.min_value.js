function min(array) {
    let output = array[0];
    console.log(`처음 실행 때의 output = ${output}`);
    for (const item of array) {
      console.log(`현재 비교 대상 ${output}과 ${item} 중에 작은 것은?`);
      //현재 output부터 더 작은 item이 있다면
      if (output > item) {
        //output의 값을 item으로 변경
        output = item;
      }
    }
    console.log(output);
    return output;
  }
  
const testArray = [34, 5, 11, 85, 92];
console.log(`${testArray}중에서 최솟값은 = ${min(testArray)}`);