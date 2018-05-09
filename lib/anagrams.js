function drop(str,num){
    var result = [];
    if(num == 0){
        for(var i=1; i<str.length;i++){
            result = result + str[i];
        }
        return result;
    }
    if(num == 1){
        result = str[0];
        for(var i=2; i<str.length;i++){
            result = result + str[i];
        }
        return result;
    }


    for(var i=0; i<num-1;i++){
        result = result + str[i];
    }
    for(var j=num+1; j<str.length;j++){
        result = result + str[j];
    }
    return result;
}

function anagrams(str){
    var result = [];
    if(!str){
        return result;
    }
    if(str.length == 1){
        return [str];
    }

    if(str.length == 2){
        if(str[0] === str[1]){
            return [str];
        }
        return [str[0]+str[1],str[1]+str[0]];
    }
     
    // if(str === 'abc'){
    //     return ['abc','acb','bac','bca','cab','cba'];
    // }

    // var result = [];
    // result.push('a'+'bc');
    // result.push('a'+'cb');
    // result.push('b'+'ac');
    // result.push('b'+'ca');
    // result.push('c'+'ab');
    // result.push('c'+'ba');
    // return result;

    var result = [];
    for(var i=0;i<str.length;i++){
        var small_str = drop(str,i);
        for(var j=0; j<str.length-1; j++){
            result.push(str[i]+ anagrams(small_str)[j]);
        }
    }
    return result;

    // result.push(str[0]+anagrams(drop(str,0))[0]);
    // result.push(str[0]+anagrams(drop(str,0))[1]);
    // result.push(str[1]+anagrams(drop(str,1))[0]);
    // result.push(str[1]+anagrams(drop(str,1))[1]);
    // result.push(str[2]+anagrams(drop(str,2))[0]);
    // result.push(str[2]+anagrams(drop(str,2))[1]);

    // return result;
}
module.exports = anagrams