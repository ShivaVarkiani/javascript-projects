const input = document.getElementById("input");

function reverseString(str) {
    return str.split("").reverse().join("");
}

function check() {
    const value = input.value;
    const reverse = reverseString(value);

    if (value === reverse) {
        alert("The word is a palindrome");
    } else {
        alert("The word is not a palindrome");
    }
}
