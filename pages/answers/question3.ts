function TwoSum(numbers: Number[], target: Number): Number[]{
let arry :Number[]=[];

numbers.forEach((number, index)=>{
    for(let i = index; i<numbers.length; i++){
        if(index<i && Number(numbers[index]) + Number(numbers[i])==target){
            arry[0] = index+1;
            arry[1] = i+1;
            return arry;
        }
    }
})

return arry;
}

export default TwoSum;