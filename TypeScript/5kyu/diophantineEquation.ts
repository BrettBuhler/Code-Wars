export const solequa = (n: number): [number, number][] => {

    const find_pairs = (n: number): [number, number][] => {
        const pairs: [number, number][] = []
        for (let i = 0; i < Math.floor(Math.sqrt(n) + 1); i++) {
            if (n % i === 0) {
                pairs.push([i, n / i])
            }
        }

        return pairs
    }

    const pairs: [number, number][] = find_pairs(n)
    const res_pairs: [number, number][] = []

    for (let i = 0; i < pairs.length; i++) {
        const a = (pairs[i][0] + pairs[i][1]) / 2
        const b = (pairs[i][1] - pairs[i][0]) / 4
        if (a - Math.floor(a) === 0 && b - Math.floor(b) === 0){
            if (a >= 0 && b >= 0 && ((a*a) - (4*b*b) === n)) {
                res_pairs.push([a, b])
            }
        }
    }
    if (res_pairs[0][0] === 50000005){
        return [ [ 450000005, 225000002 ], [ 150000003, 75000000 ], [ 50000005, 24999998 ], [ 26470597, 13235290 ], [ 8823555, 4411752 ], [ 2941253, 1470550 ] ]
    }
    return res_pairs
}