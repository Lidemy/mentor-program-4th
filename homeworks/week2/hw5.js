function join(arr, concatStr) {
	let ans=""
	let length=arr.length
	for(let i=0;i<length-1;i++){
		ans+=arr[i]+concatStr
	}
	ans+=arr[length-1]
	return ans
}	

function repeat(str, times) {
	let ans=""
	for(let i=0;i<times;i++){
		ans+=str
	}
	return ans
}


console.log(join(["a", "b", "c"], '!'))
console.log(repeat('abc', 3));



