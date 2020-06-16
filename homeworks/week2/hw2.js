function capitalize(str){
    if(str[0] >= 'a' && str[0] <= 'z'){
        var newstr = str.replace(str[0], str[0].toUpperCase()) 
        return newstr
    } else {
        return str
    }
}
console.log(capitalize('nick'))
console.log(capitalize('Nick'))
console.log(capitalize(',hello'))
