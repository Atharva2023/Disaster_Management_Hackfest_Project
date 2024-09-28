// Function to update rescue camp details
function updateRescueCampDetails() {
    const camps = [
        { name: "Camp A", location: "West Bengal", capacity: 500, currentOccupancy: 350, contact: "123-456-7890" },
        { name: "Camp B", location: "Odisha", capacity: 300, currentOccupancy: 200, contact: "098-765-4321" },
        // Add more mock data as needed
    ];
    const tableBody = document.querySelector('#rescue-camps tbody');
    tableBody.innerHTML = '';
    camps.forEach(camp => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${camp.name}</td>
            <td>${camp.location}</td>
            <td>${camp.capacity}</td>
            <td>${camp.currentOccupancy}</td>
            <td>${camp.contact}</td>
        `;
        tableBody.appendChild(row);
    });
}

// Function to update casualty reports
function updateCasualtyReports() {
    const reports = [
        { date: "2023-05-01", state: "West Bengal", district: "North 24 Parganas", injuries: 50, fatalities: 5 },
        { date: "2023-05-02", state: "Odisha", district: "Balasore", injuries: 30, fatalities: 2 },
        // Add more mock data as needed
    ];
    const tableBody = document.querySelector('#casualty-reports tbody');
    tableBody.innerHTML = '';
    reports.forEach(report => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${report.date}</td>
            <td>${report.state}</td>
            <td>${report.district}</td>
            <td>${report.injuries}</td>
            <td>${report.fatalities}</td>
        `;
        tableBody.appendChild(row);
    });
}

// Function to update photo gallery
function updatePhotoGallery() {
    const photos = [
        { url: "4aa8cb33bdcfb72738c59e1b578786e4172027924552325_original.jpg.avif", description: "Cyclone damage" },
        { url: "cyclone_amphan-west-bengal.jpg", description: "Flooding in West Bengal" },
        { url: "WhatsApp Image 2024-07-30 at 08.51.55.jpeg.avif", description: "Rescue operations" },
        // Add more mock data as needed
    ];
    const gallery = document.querySelector('.photo-gallery');
    gallery.innerHTML = '';
    photos.forEach(photo => {
        const img = document.createElement('img');
        img.src = photo.url;
        img.alt = photo.description;
        gallery.appendChild(img);
    });
}

// Function to update missing person services
function updateMissingPersons() {
    const missingPersons = JSON.parse(localStorage.getItem('missingPersons')) || [];
    const tableBody = document.querySelector('#missing-persons tbody');
    tableBody.innerHTML = ''; // Clear existing rows
    missingPersons.forEach(person => {
        addMissingPersonRow(person);
    });
}

// Function to add a missing person row to the table using DOM methods
function addMissingPersonRow(person) {
    const tableBody = document.querySelector('#missing-persons tbody');
    const row = document.createElement('tr');

    // Create and append table cells
    const nameCell = document.createElement('td');
    nameCell.textContent = person.name;
    row.appendChild(nameCell);

    const ageCell = document.createElement('td');
    ageCell.textContent = person.age;
    row.appendChild(ageCell);

    const lastSeenCell = document.createElement('td');
    lastSeenCell.textContent = person.lastSeen;
    row.appendChild(lastSeenCell);

    const contactInfoCell = document.createElement('td');
    contactInfoCell.textContent = person.contactInfo;
    row.appendChild(contactInfoCell);

    const actionCell = document.createElement('td');
    const removeButton = document.createElement('button');
    removeButton.textContent = 'Remove';
    removeButton.onclick = () => deleteMissingPerson(person.id);
    actionCell.appendChild(removeButton);
    row.appendChild(actionCell);

    row.setAttribute('data-id', person.id);

    tableBody.appendChild(row);
}

// Function to delete a missing person row
function deleteMissingPerson(personId) {
    let missingPersons = JSON.parse(localStorage.getItem('missingPersons')) || [];
    missingPersons = missingPersons.filter(person => person.id !== personId);
    localStorage.setItem('missingPersons', JSON.stringify(missingPersons));
    updateMissingPersons();
}

// Function to add a new missing person
function addNewMissingPerson() {
    const name = document.getElementById('newName').value.trim();
    const age = document.getElementById('newAge').value.trim();
    const lastSeen = document.getElementById('newLastSeen').value.trim();
    const contactInfo = document.getElementById('newContactInfo').value.trim();

    if (!name || !age || !lastSeen || !contactInfo) {
        alert('Please fill in all fields.');
        return;
    }

    const newPerson = {
        id: Date.now().toString(), // Use timestamp as a simple unique id
        name,
        age,
        lastSeen,
        contactInfo
    };

    let missingPersons = JSON.parse(localStorage.getItem('missingPersons')) || [];
    missingPersons.push(newPerson);
    localStorage.setItem('missingPersons', JSON.stringify(missingPersons));

    addMissingPersonRow(newPerson);

    // Scroll to the newly added row
    const tableBody = document.querySelector('#missing-persons tbody');
    const newRow = tableBody.lastElementChild;
    newRow.scrollIntoView({ behavior: 'smooth', block: 'center' });

    // Highlight the new row briefly
    newRow.classList.add('highlight');
    setTimeout(() => {
        newRow.classList.remove('highlight');
    }, 2000);

    // Clear input fields
    document.getElementById('newName').value = '';
    document.getElementById('newAge').value = '';
    document.getElementById('newLastSeen').value = '';
    document.getElementById('newContactInfo').value = '';
}

// Function to update all data
function updateAllData() {
    updateRescueCampDetails();
    updateCasualtyReports();
    updatePhotoGallery();
    updateMissingPersons();
}

// Update data every 5 minutes
setInterval(updateAllData, 5 * 60 * 1000);

// Initial data load
document.addEventListener('DOMContentLoaded', () => {
    updateAllData();

    // Attach event listener to the Add button
    const addButton = document.querySelector('button[onclick="addNewMissingPerson()"]');
    if (addButton) {
        addButton.addEventListener('click', addNewMissingPerson);
    }
});
