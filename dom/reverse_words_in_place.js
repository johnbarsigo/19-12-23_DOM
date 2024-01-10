/*

Given a sentence, reverse each word in place

Examples
--------

"How are you" -> "woH era uoy"
"Come here" -> "emoC ereH"


split string using .split( " " )
run reverse function for each word
cuncutinate results

TM Advise---------------------------------------------------------------------------------------------------------------
Reverse every word until a space is encountered.



*/

function reverse_words ( sentence ) {

    if ( sentence.length == 0 ) {
        return "String cannot be empty";
    }
    if ( typeof sentence != "string" ) {
        return "Only strings allowed";
    }
    let arr = sentence.split ( " " );
    console.log ( arr );
    let reversed_sentence = "";
    let reversed_string = "";
    // let newString = "";

    for ( i = 0; i < sentence.length; i++ ) {

        for ( j = arr[i].length -1; j >= 0; j--  ) {

            reversed_string = reversed_string + arr[i[j]];
            return reversed_string;

        }
        console.log ( reversed_string );
        
        reversed_sentence = reversed_sentence + reversed_string;
    }

    return reversed_sentence;
}

//Trial 2---------------------------------------------------------------------------------------------------------------

// function reverse_words ( sentence ) {

//     if ( sentence.length == 0 ) {
//         return "String cannot be empty";
//     }
//     if ( typeof sentence != "string" ) {
//         return "Only strings allowed";
//     }
//     let arr = sentence.split ( " " );
    
//     stringArr = arr.toString;
//     console.log ( stringArr );
//     let reversed_sentence = "";
//     let reversed_string = "";

//     for ( i = 0; i < sentence.length; i++ ) {

//         reversed_string = reversed_string(stringArr.substr(1)) + stringArr.charAt(0);

//         console.log ( reversed_string );
        
//         reversed_sentence = reversed_sentence + reversed_string;
//     }

//     return reversed_sentence;
// }

// let newSentence = reverse_words ( "Come here" );

// function reverseString(str) {
//     return str.split( " " ).reverse()
// }

// let newStr = reverseString ( "Come here" );
// console.log ( newStr );

//Trial 3---------------------------------------------------------------------------------------------------------------

// function reverseString ( str ) {

//     if ( str.length == 0 ) {
//         return "String cannot be empty";
//     }
//     if ( typeof str != "string") {
//         return "Only strings allowed";
//     }

//     let str1 = str.split( " " )
//     let reversedStr = "";
//     let toReverse = "";

//     for ( i = str.length -1; i >= 0; i-- ) {
//         let toReverse = str1.toString();
//         reversedStr = reversedStr + toReverse.reverse( "" );
//         console.log ( reversedStr );

//         return reversedStr;
//     }

// }

// let newString = reverseString ( "Come here" );
// console.log ( newString );