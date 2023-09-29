export function insertionSort(array){
    const animations=[];
    if(array.length<=1){
        return array;
    }
    insertionSortHelper(array,animations);
    return animations;
}
function insertionSortHelper(array,animations){
    for(let i=1;i<array.length;i++){
        let temp=array[i];
        let j=i-1;
        while(j>=0 && array[j]>temp){
            array[j+1]=array[j];
            animations.push([j+1,j,array[j+1],array[j]]);
            animations.push([j+1,j,array[j+1],array[j]]);
            j--;
        }
        array[j+1]=temp;
        animations.push([j+1,j+1,array[j+1],temp]);
        animations.push([j+1,j+1,array[j+1],temp]);
    }
}