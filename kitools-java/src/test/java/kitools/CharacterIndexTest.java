package kitools;
import org.junit.Before;
import org.junit.Test;

import static junit.framework.Assert.assertEquals;

/**
 * author: yakshaver
 * from: http://stackoverflow.com/questions/2564541/how-to-map-character-to-numeric-position-in-java
 * Time: 14:57.
 */
public class CharacterIndexTest {
    private CharacterIndex characterIndex;
    @Before
    public void createIndex() {
        characterIndex = new CharacterIndex();
    }
    @Test
    public void testIndexOfLetterA() {
        assertEquals(0, characterIndex.index('A'));
        assertEquals(0, characterIndex.index('a'));
    }
    @Test
    public void testNotALetter() {
        assertEquals(-1, characterIndex.index('1'));
    }

}
