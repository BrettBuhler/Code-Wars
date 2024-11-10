const numberToEnglish = (n: number): string => {
    const numberToEnglishNumber = n
    const oneDigit = (n: string, fullNumber: number): string => {
        if (n === "0" && numberToEnglishNumber > 0) return ""
        console.log('n', n)
        switch (n) {
            case "0": return "zero"
            case "1": return "one"
            case "2": return "two"
            case "3": return "three"
            case "4": return "four"
            case "5": return "five"
            case "6": return "six"
            case "7": return "seven"
            case "8": return "eight"
            case "9": return "nine"
            default: return ""
        }
    }
    const twoDigits = (n: string, fullNumber: number): string => {
        const tenThroughNineteen = (n: string): string => {
            switch(n){
                case "0": return "ten"
                case "1": return "eleven"
                case "2": return "twelve"
                case "3": return "thirteen"
                case "4": return "fourteen"
                case "5": return "fifteen"
                case "6": return "sixteen"
                case "7": return "seventeen"
                case "8": return "eighteen"
                case "9": return "nineteen"
                default: return ""
            }
        }
        const twentyAndOver = (n: string):string => {
            switch(n){
                case "2": return "twenty"
                case "3": return "thirty"
                case "4": return "forty"
                case "5": return "fifty"
                case "6": return "sixty"
                case "7": return "seventy"
                case "8": return "eighty"
                case "9": return "ninety"
                default: return ""
            }
        }
        const leadingNumber = n.substring(0,1)
        const trailingNumber = n.substring(1,2)
        switch(leadingNumber) {
            case "0": return oneDigit(trailingNumber, fullNumber)
            case "1": return tenThroughNineteen(trailingNumber)
            default: return twentyAndOver(leadingNumber) + " " + oneDigit(trailingNumber, fullNumber)
        }
    }
    const threeDigits = (n: string): string => {
        const leadingNumber = n.substring(0,1)
        const trailingNumber = n.substring(1,3)
        const hundreds = oneDigit(leadingNumber, 100)
        return hundreds + (hundreds.length > 0 ? " hundred" : "") + " " + twoDigits(trailingNumber, parseInt(trailingNumber)) 
    }
    const fourDigits = (n: string): string => {
        const leadingNumber = n.substring(0,1)
        const trailingNumber = n.substring(1,4)
        const thousands = oneDigit(leadingNumber, 1000)
        return thousands + (thousands.length > 0 ? " thousand": "") + " " + threeDigits(trailingNumber)
    }
    const fiveDigits = (n: string): string => {
        const leadingNumber = n.substring(0,2)
        const trailingNumber = n.substring(2,5)
        const thousands = twoDigits(leadingNumber, parseInt(n))
        return thousands + (thousands.length > 0 ? " thousand": "") + " " + threeDigits(trailingNumber)
    }
    const removeSpaces = (returnString: string): string => {
        return returnString.replace(/\s+/g, " ").trim()
    }
    if (n < 10) {
        return removeSpaces(oneDigit(n.toString(),n))
    } else if (n < 100) {
        return removeSpaces(twoDigits(n.toString(),n))
    } else if (n < 1000) {
        return  removeSpaces(threeDigits(n.toString()))
    } else {
        if (n < 10000) {
            return removeSpaces(fourDigits(n.toString()))
        } else {
            return removeSpaces(fiveDigits(n.toString()))
        }
    }
}

function myFunction() {
    console.log("This is a test function");
    console.log(numberToEnglish(100))
}

myFunction();