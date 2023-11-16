Project: Password Generator

This project is a JavaScript program designed to generate a random 10-character password. The password consists of 2 symbols, 3 numbers, and 5 random letters, with an equal number of uppercase and lowercase letters.

Features:

Password length: 10 characters
Character types: Uppercase and lowercase letters, numbers, and symbols
Repeating characters: Included
Usage:

Open the index.html file in a web browser.
Click the "Generate" button.
The generated password will be displayed in the text area below the button.
Example:

If you set the password length to 10 characters and the character types to "All", the following password will be generated:
Q@B49x2z
Screenshots:
[!](./img/projectImg.png)
Frequently Asked Questions:

How is password security guaranteed?
The password is strong because it consists of a combination of uppercase and lowercase letters, numbers, and symbols. Additionally, the program does not allow users to customize the password length or character types, which further enhances password security.

How can I customize the program?

The program cannot be customized. The password will always be 10 characters long, with an equal number of uppercase and lowercase letters, numbers, and symbols.

Code Explanation:

The provided JavaScript code defines a function called generatePass() that generates a password based on the specified criteria. The function first initializes three empty arrays: alphabet, numbers, and symbols, which store the alphabet, numbers, and special characters, respectively. Then, it creates two additional arrays: letter and symbol, which will hold the uppercase and lowercase letters, and special characters to be included in the password.

The for loops iterate over the specified number of times (3 for numbers, 2 for symbols, and 5 for letters) and add random elements from the corresponding arrays to the pass array, which holds the final password. The if-else statement within the letter loop ensures that an equal number of uppercase and lowercase letters are included in the password.

Finally, the sortingPass() function sorts the elements of the pass array in a random order and converts them to a string, which is then displayed in the text area.

