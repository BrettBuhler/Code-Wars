const fakeBin = (x:string):string => {
    return x.length > 0 ? parseInt(x[0]) < 5 ? "0" + fakeBin(x.substring(1,x.length + 1)) : "1" + fakeBin(x.substring(1,x.length + 1)) : ""
}