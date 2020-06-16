function reverse(str){
    var newstr = "";
    for(var i = str.length -1; i >= 0; i--){
        newstr += str[i]
    }
    console.log(newstr)
}
reverse('yoyoyo')
reverse('1abc2')
reverse('1,2,3,2,1')
