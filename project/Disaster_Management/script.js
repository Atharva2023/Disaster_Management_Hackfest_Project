// Sample disaster data with coordinates for earthquake epicenters, tsunamis, and volcanic eruptions
const disasters = [
    {
        name: "Cyclone in Odisha",
        description: "Cyclone Fani made landfall with winds reaching 200 km/h.",
        coordinates: [20.9517, 85.0985],
    },
    {
        name: "Earthquake in Gujarat",
        description: "A 7.7 magnitude earthquake struck Bhuj in 2001.",
        coordinates: [23.241999, 69.666931],
    },
    {
        name: "Flooding in Kerala",
        description: "Severe flooding in Kerala caused widespread damage in 2018.",
        coordinates: [10.8505, 76.2711],
    },
    {
        name: "Tsunami in Tamil Nadu",
        description: "The 2004 Indian Ocean Tsunami affected Tamil Nadu's coastal areas.",
        coordinates: [13.0827, 80.2707],
    },
    {
        name: "Landslide in Himachal Pradesh",
        description: "A massive landslide occurred in Kinnaur due to heavy rainfall.",
        coordinates: [31.6948, 78.4752],
    },
    {
        name: "Earthquake Epicenter - Haiti",
        description: "A 7.0 magnitude earthquake struck near Port-au-Prince in 2010.",
        coordinates: [18.4575, -72.5330],
    },
    {
        name: "Tsunami - Japan (2011)",
        description: "A massive tsunami struck Japan after a 9.0 magnitude earthquake.",
        coordinates: [38.2976, 142.3680],
    },
    {
        name: "Volcano Eruption - Mount St. Helens",
        description: "The 1980 eruption of Mount St. Helens was one of the most significant in U.S. history.",
        coordinates: [46.1912, -122.1944],
    },
    {
        name: "Earthquake Epicenter - Chile",
        description: "An 8.8 magnitude earthquake struck central Chile in 2010.",
        coordinates: [-35.3633, -72.7528],
    },
    {
        name: "Tsunami - Indian Ocean (2004)",
        description: "A devastating tsunami caused by an undersea earthquake in the Indian Ocean.",
        coordinates: [3.1317, 95.7031],
    },
    {
        name: "Volcano Eruption - Kilauea",
        description: "Kilauea has been erupting continuously since 1983, with recent activity in 2018.",
        coordinates: [19.4069, -155.2830],
    },
];

// Initialize the map
const map = L.map('map').setView([20.5937, 78.9629], 5); // Center map on India
// Add OpenStreetMap tiles
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
}).addTo(map);

// Function to create disaster cards
function createDisasterCards() {
    const disasterCardsContainer = document.getElementById('disaster-cards');
    disasters.forEach(disaster => {
        const card = document.createElement('div');
        card.className = 'card';
        card.innerHTML = `<h3>${disaster.name}</h3><p>${disaster.description}</p>`;
        card.onclick = () => showDisasterOnMap(disaster);
        disasterCardsContainer.appendChild(card);
    });
}

// Function to show disaster on map
function showDisasterOnMap(disaster) {
    map.setView(disaster.coordinates, 6);
    L.marker(disaster.coordinates).addTo(map)
        .bindPopup(`<strong>${disaster.name}</strong><br>${disaster.description}`)
        .openPopup();
}

// Initialize the disaster cards on page load
createDisasterCards();
