function reverse(str) {
	let ans=''
	let length=str.length
	for(let i=length-1;i>=0;i--){
		ans+=str[i]
	}
	console.log(ans)
}

reverse('hello');
