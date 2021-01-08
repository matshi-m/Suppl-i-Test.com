import java.util.*;
import java.io.*;

public class Question3{
    // A function to determine if 1st string ends with a 2nd string
    public boolean endsWithSecond(String first,String second){
        if(first.endsWith(second)) // very clever to just use the Java API for this. welldone !
            return true;
        else 
            return false;
    }
    public static void main(String[] args)
    {
        Question3 q3=new Question3(); // thank you for added the test cases to validate that all is in working condition.
        // test cases for the string function written above
        System.out.println(q3.endsWithSecond("abx","ihd"));
        System.out.println(q3.endsWithSecond("nbv","v"));
        System.out.println(q3.endsWithSecond("construction","on"));
    }
}
