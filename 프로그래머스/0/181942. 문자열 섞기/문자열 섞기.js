function solution(str1, str2) {
    let arr='';
    for(let i=0; i<str1.length; i++){
        arr+=str1[i];
        arr+=str2[i]
    }
    return arr
}