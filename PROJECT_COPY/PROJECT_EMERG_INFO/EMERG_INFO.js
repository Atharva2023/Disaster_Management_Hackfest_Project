document.addEventListener('DOMContentLoaded', function() {
    const stateSelector = document.getElementById('stateSelector');
    const stateContacts = document.getElementsByClassName('state-contacts');

    stateSelector.addEventListener('change', function() {
        // Hide all state contact divs
        for (let i = 0; i < stateContacts.length; i++) {
            stateContacts[i].style.display = 'none';
        }

        // Show the selected state's contact div
        const selectedState = this.value;
        if (selectedState) {
            const selectedStateDiv = document.getElementById(selectedState);
            if (selectedStateDiv) {
                selectedStateDiv.style.display = 'block';
            }
        }
    });

    // Function to copy contact number to clipboard
    function copyToClipboard(text) {
        const tempInput = document.createElement('input');
        tempInput.value = text;
        document.body.appendChild(tempInput);
        tempInput.select();
        document.execCommand('copy');
        document.body.removeChild(tempInput);
        alert('Contact number copied to clipboard!');
    }

    // Add click event listeners to all contact numbers
    const contactNumbers = document.getElementsByClassName('contact-number');
    for (let i = 0; i < contactNumbers.length; i++) {
        contactNumbers[i].addEventListener('click', function() {
            copyToClipboard(this.textContent);
        });
    }
});
