/*
An illustration of the iterative construction of a Menger sponge
A method of constructing a Menger Sponge can be visualized as follows:

Start from a cube (first part of image).
Scale down the cube so that side length is 1/3 of its original, and make 20 copies of it.
Place the copies so that they measure the same size as the original cube but without its central parts (next part of image)
Repeat the process from step 2 for the new smaller cubes from the previous step.
In each iteration (e.g. repeating the last three steps), the effect will be that parts of the cube will be removed, they'll never be added. Menger sponge will always consist of parts will never be removed, regardless of how many iterations you do.
*/

const calc_ms = (n) => {
    return Math.pow(20,n)
}

console.log(calc_ms(2))