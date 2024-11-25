const countTrue = (bool_array) => {
    return bool_array.filter(el => el).length
}

const assertEquals = (a, b) => {
    console.log(`a == b`, a == b)
}

assertEquals(countTrue([true, false, false, true, false]), 2)
assertEquals(countTrue([false, false, false, false]), 0)
assertEquals(countTrue([]), 0)
assertEquals(countTrue([false, false, true, true, false, false, false, true, true, true, true, false, true, true, false]), 8)
assertEquals(countTrue([true, false, true, true, false, false, false, false, false]), 3)
assertEquals(countTrue([false, true, true, false, true, true, false, true, false, true, false, true, false, true, false]), 8)
assertEquals(countTrue([true, false, true, true, true, false, true, true, false, false]), 6)
assertEquals(countTrue([false, false, false, false, true, false, true, false, true, false, false]), 3)
assertEquals(countTrue([true, false, false, false, true, false, false, true, false, false, false]), 3)
assertEquals(countTrue([true, true, false, true, false, false, false, false, true, false]), 4)
assertEquals(countTrue([true, false, true, true, false, true, true, true, true, false, true, false, true, false]), 9)
assertEquals(countTrue([true, false, true, true, true, true, false, true, true, false, true, false, false, false, false]), 8)
assertEquals(countTrue([true, true, false, false, false, false, true, false, true, true, false, true]), 6)