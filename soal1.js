// 1. make variable array of number
const inputan =[1,2,3,4,5];
let numLenght=inputan.length;
let nilai=0;
let total=[];
let nilaiMax;
let nilaiMin;
//2. operation sum of number with loop
for (let i=0; i<5; i++){
    //let a
    console.log("tampilkan penjumlahan bilangan kecuali",a=(i+1))
    for(let j=0; j < numLenght ; j++){
        if (j==i)
        {
            continue
        }
    nilai += inputan[j]   
    }
    console.log("-->",nilai)   
    total[i]=nilai
    nilaiMin = Math.min(...total)
    nilaiMax = Math.max(...total)
    nilai=0
}
// 3. find max and min number of array
console.log("nilai maximum dari", total, "adalah", nilaiMax)
console.log("nilai minimum dari", total, "adalah", nilaiMin)