function fabonacci(num){
    if(num == 1  || num == 2){
        return 1;
    }
    return fabonacci(num-1) + fabonacci(num-2);
}
function non_recursive_fabonacci(num){
    var result = 1;
    var prev_value = 1;
    var next_value;

    while(num > 2){
        num = num - 1;
        next_value = prev_value;
        prev_value = result;
        result = prev_value + next_value;        
    }
    return result;
}
exports.fabonacci = fabonacci;
exports.non_fabonacci = non_recursive_fabonacci;