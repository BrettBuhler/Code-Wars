/*
This kata is about multiplying a given number by eight if it is an even number and by nine otherwise.
*/

public class Multiplier 
{
    public static int Multiply (int x)
    {
        if (x % 2 == 0)
        {
            return x * 8;
        }
        else
        {
            return x * 9;
        }
    }
}