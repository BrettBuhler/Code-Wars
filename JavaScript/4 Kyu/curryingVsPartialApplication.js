function curryPartial(fn){
    if (fn){
        return fn
    }
   return function curry(...args){
    if (args.length > fn.length){
        return fn.apply(this,args)
    } else {
        return function(...args2){
            return curry.apply(this, args.concat(args2))
        }
    }
   }
}
const add = (a,b,c) => {
    return a+b+c
}
console.log(curryPartial(add(1,2,))(2))