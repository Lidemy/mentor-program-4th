function capitalize(str) {
	let ans=''
	let firstword = str[0]
		if(firstword>='A' && firstword<='Z'){
			ans = str[0]
		}else if (firstword>='a' && firstword<='z'){
			ans = firstword.toUpperCase()
		}else{
			ans = str[0]
		}
	let length=str.length
	for(let i=1;i<length;i++){
		ans+=str[i]
	}
	return ans	
}

console.log(capitalize(',hello'));


