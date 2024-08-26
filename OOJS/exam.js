document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('reverseForm');
    const resultDisplay = document.getElementById('result');

    form.addEventListener('submit', function(event) {
        event.preventDefault();
        
        const input = document.getElementById('inputText').value;
        const reversed = reverseString(input);
       
        
       // resultDisplay.textContent = `Reversed string: ${reversed}`;
    });

    if(reversed==input)
        document("it is palindrome")
    else            document("it is not  palindrome")

    function reverseString(str) {
        return str.split('').reverse().join('');
    }
})
