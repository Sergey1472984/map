function map(arr, func){
    let results = []
    for (el of arr){
        results.push(func(el))
    }
    return results
}

const words = ['qwe', 'qwert', 'qwertyu']
console.log(map(words, (string) => string.length))