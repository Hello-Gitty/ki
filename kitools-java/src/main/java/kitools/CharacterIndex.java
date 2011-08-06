package kitools;


import java.util.Arrays;
import java.util.Collections;

public class CharacterIndex {

     /**
     * author: yakshaver
     * from: http://stackoverflow.com/questions/2564541/how-to-map-character-to-numeric-position-in-java
     * Time: 14:57.
     */

    protected char[] characters = new char[]{'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', ' ', '.' ,'!','?'};
    public int index(char character) {
        assert characters != null;
        return Arrays.binarySearch(characters, Character.toUpperCase(character)) + 1;
    }


    public int[] convertStringToIntTab(String st){
        List<Integer> result = new Linke


    }




    //methode de conversion de lettre en chiffre et inverse.
    // methode pour parser des chaines de caractère

}
