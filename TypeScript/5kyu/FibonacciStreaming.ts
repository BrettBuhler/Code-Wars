export function fibonacciSequence(): Iterator<number> {
    let num = 0
    let last = 0
    return {
        next(): IteratorResult<number> {
            if (num === 0) {
                num++
                return {value: num, done: false}
            } else {
                let placeHolder = last
                last = num
                num = num + placeHolder
                return {value: num, done: false}
            }
        }
    }
}
const newFib = fibonacciSequence()
for (let i = 0; i < 10; i++) {
    console.log(newFib)
    newFib.next()
}