
// Get the commandline arguments
let commandInput = process.argv; 


// get the numbers since the first two arguments are not required we slice them
let numbers = commandInput.slice(2, commandInput.length); 

// Converts a number to its phonetic equivalent
function convertNumberToWord(num)
{

    let result = "";        // Holds the result
    let isNegative = false; // A variable to determine whter the number is non-negative or negative

    // Handles negative numbers
    if(num < 0)
    {
        isNegative = true;
        num *= -1;
    }
    else
    {
        // Handles the case when the number is -0
        num = Math.abs(num);
    }

    // Array to hold the phonetic euivalents of all the digits
    let phoneticEquals = ["Zero", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine"];

    if(num == 0)
    {
        result = phoneticEquals[num];
    }

    // Gets each digit and updates the result string
    while(num > 0)
    {
        let digit  = num%10;
        result = phoneticEquals[digit] + result;
        num = Math.floor(num/10);
    }

    // If the number is negative we add Minus at the beginning of the result
    if(isNegative == true)
    {
        result = "Minus" + result;
    }
    return result;
}

// Converts all the numbers in an array into a string
function convertArrayToWords(numbers)
{
    let result = "";
    // Loop through the numbers
    for(let index = 0; index < numbers.length; index++)
    {
        // Convert each number to phonetic equivalent
        result += convertNumberToWord(numbers[index]);

        // If we have not reached the last element we add a comma
        if(index != numbers.length - 1)
        {
            result += ",";
        }
    }

    return result;
}


// Print the result to stdout
process.stdout.write(convertArrayToWords(numbers) + "\n");

