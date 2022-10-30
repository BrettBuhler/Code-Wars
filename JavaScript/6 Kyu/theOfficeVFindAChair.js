/*
*/
// MY SOLUTION

const meeting = (x ,need) => {
    if (need == 0) return 'Game On'
    let rooms = []
    let fromRoom = []
    for (let i in x) {
        let num = x[i][0].length
        let chair = x[i][1]
        let extra = chair - num
        if (extra < 0) extra = 0
        rooms.push(extra)
    }
    for (let i in rooms){
        if (rooms[i] <= need){
            need -= rooms[i]
            fromRoom.push(rooms[i])
            if (need == 0){
                return fromRoom
            }
        } else if (rooms[i] > need){
            fromRoom.push(need)
            return fromRoom
        }
    }
    return 'Not enough!'
}