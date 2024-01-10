/*

Given a string of a given length, reverse each chraracter in the string

Example
-------
"hello" -> "olleh"
"hey" -> "yeh"
"welcome" -> "emoclew"

Preudocode
----------
Create: function ( string )
If string is empty, return, string cannot be empty
If data entered is != string ie. integer, return, only strings allowed
Looping in reverse order
Store characters in a new variable (since strings are immutable) - concutination
Return reversed string

*/

function reverseString ( str ) {

    if ( str.length == 0 ) {
        return "String cannot be empty";
    }
    if ( typeof str != "string") {
        return "Only strings allowed";
    }

    let reversedStr = "";

    for ( i = str.length -1; i >= 0; i-- ) {
        reversedStr = reversedStr + str [i]
    }

    return reversedStr;
}

let result = reverseString ( "Hello world" );
console.log ( result );

//Space complexity is O(n)
//Time complexity is O(n)