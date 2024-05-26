const arr = [3,7,2,4,9,10,1,6,12,15]
arr.sort((a,v)=>a-v)
let i = 0
let tempArray = []
let temp2 = []
for(i;i<arr.length;i++){
    let difference = arr[i+1] - arr[i]

    if (difference > 2) {
      for(let x = 1;x<difference;x++){
           temp2.push(arr[i]+x)
      }
    }else {
      tempArray.push(arr[i]+1)
    }
   
}
tempArray.pop()
const finalArray = arr.concat(tempArray,temp2)
finalArray.sort((a,b) => a-b)
const uniqueArray = [...new Set(finalArray)]
const latestArray = uniqueArray.filter(unique => !arr.includes(unique))
console.log('Sorted array', latestArray, '\n')

