/*
Story
POTUS thinks he is all alone in the White House on Christmas Eve.

But is he?

The White House has a wall-penetrating radar security system that sees everything.

Kata Task
Process the radar image.

Return true if POTUS really is home alone.

Legend
# walls
X POTUS
o elves
Notes
The house corners are square only
The radar can also see into nearby buildings
Examples
ex1
   o                o        #######
 ###############             #     #
 #             #        o    #     #
 #  X          ###############     #
 #                                 #
 ###################################
All alone --> true

ex2
#################
#     o         #   o
#          ######        o
####       #                
   #       ###################
   #                         #
   #                  X      #
   ###########################
All alone --> false
*/
// MY SOLUTION

const allAlone = (house) => {
  
    let Eagle, inside
    let tempInside = []
    
    for (let i in house){
        if(house[i].indexOf('X') != -1){
            Eagle = [parseInt(i) , house[i].indexOf('X')]
        }
    }
  
    inside = [Eagle]
  
    while (inside.length != tempInside.length){
        tempInside = [...inside]
        inside = sendPing(house, inside)
    }
  
    for(let x in inside){
        if (house[inside[x][0]][inside[x][1]] == 'o'){
            return false
        }
    }
    return true
}

const isEqual = (coords, coord) => {
    for (let i = 0; i < coords.length; i++){
        if (coords[i][0] == coord[0] && coords[i][1] == coord[1]) return true
    }
    return false
}

const sendPing = (house, coords) => {
  
    let newCoords = [...coords]
    let hold = []
    
    for (let i = 0; i < coords.length; i++){
        hold = hold.concat(ping(house, coords[i]))
    }
  
    for (let i = 0; i < hold.length; i++){
        if (!isEqual(newCoords, hold[i])){
            newCoords.push(hold[i])
        }
    }
    return newCoords
}

const ping = (house, coord) => {
    coord = coord.map(x=>parseInt(x))
    const coords = []
    coords.push([coord[0]+1,coord[1]])
    coords.push([coord[0]-1,coord[1]])
    coords.push([coord[0],coord[1]+1])
    coords.push([coord[0],coord[1]-1])
    return coords.filter(x=>house[x[0]][x[1]] != '#')
}