/*
DESCRIPTION:
Implement a function that accepts 3 integer values a, b, c. The function should return true if a triangle can be built with the sides of given length and false in any other case.

(In this case, all triangles must have surface greater than 0 to be accepted).
*/
/* MY SOLUTION */
function isTriangle(a,b,c)
{
    var length = [a,b,c].sort((a,b) => {return a -b;});
    if (length[0] + length[1] > length[2]) {
      return true;
    } else {
      return false;
    }
}