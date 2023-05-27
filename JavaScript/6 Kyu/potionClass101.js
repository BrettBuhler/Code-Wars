/*
Description
This is your first potion class in Hogwarts and professor gave you a homework to figure out what color potion will turn into if he'll mix it with some other potion. All potions have some color that written down as RGB color from [0, 0, 0] to [255, 255, 255]. To make task more complicated teacher will do few mixing and after will ask you for final color. Besides color you also need to figure out what volume will have potion after final mix.

Task
Based on your programming background you managed to figure that after mixing two potions colors will mix as if mix two RGB colors. For example, if you'll mix potion that have color [255, 255, 0] and volume 10 with one that have color [0, 254, 0] and volume 5, you'll get new potion with color [170, 255, 0] and volume 15. So you decided to create a class Potion that will have two properties: color (a list (a tuple in Python) with 3 integers) and volume (a number), and one method mix that will accept another Potion and return a mixed Potion.

Example
felix_felicis       =  Potion([255, 255, 255],  7)
shrinking_solution  =  Potion([ 51, 102,  51], 12)
new_potion          =  felix_felicis.mix(shrinking_solution)

new_potion.color   ==  [127, 159, 127]
new_potion.volume  ==  19
Note: Use ceiling when calculating the resulting potion's color.
*/

class Potion {
    constructor(rgb, volume){
        this.color = rgb
        this.volume = volume
    }
    mix (potion) {
        let weightA = this.volume / (this.volume + potion.volume)
        let weightB = potion.volume / (this.volume + potion.volume)
        let r = Math.ceil((potion.color[0] * weightB) + (this.color[0] * weightA))
        let g = Math.ceil((potion.color[1] * weightB) + (this.color[1] * weightA))
        let b = Math.ceil((potion.color[2] * weightB) + (this.color[2] * weightA))
        let resVolume = this.volume + potion.volume
        let resPotion = new Potion([r,g,b], resVolume)
        return resPotion
    }
}

var pots = [
    new Potion([153, 210, 199], 32),
    new Potion([135,  34,   0], 17),
    new Potion([18,   19,  20], 25),
    new Potion([174, 211,  13],  4),
    new Potion([255,  23, 148], 19),
    new Potion([51,  102,  51],  6)
  ]
  var a = pots[0].mix(pots[1])

  console.log('a =', a)