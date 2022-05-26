function 삼육구(number) {
    let nums = number.toString().split('');
    let clap = [];
    if (nums === '3' || nums === '6' || nums ==='9') {
        clap.push('짝');
    }
    return clap;
}