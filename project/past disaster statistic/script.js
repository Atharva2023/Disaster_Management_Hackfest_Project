// Fetch data for earthquakes (India)
async function fetchIndiaEarthquakeData() {
    try {
        const response = await fetch('https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson&starttime=2020-01-01&minlatitude=6.75&maxlatitude=37.1&minlongitude=68.116&maxlongitude=97.4&limit=10');
        const data = await response.json();
        return data.features.map(event => ({
            type: 'Earthquake',
            year: new Date(event.properties.time).getFullYear(),
            deaths: Math.floor(Math.random() * 5000), // Random death count
            affected: Math.floor(Math.random() * 100000), // Random affected people count
            damage: Math.floor(Math.random() * 5000), // Random damage in millions
            magnitude: event.properties.mag, // Earthquake magnitude
            location: event.properties.place // Earthquake location
        }));
    } catch (error) {
        console.error("Error fetching earthquake data:", error);
    }
}

// Simulated Data for Floods in India
async function fetchIndiaFloodData() {
    return [
        {
            type: 'Flood',
            year: 2021,
            deaths: 250,
            affected: 200000,
            damage: 1500, // Damage in millions
            location: 'Assam, India'
        },
        {
            type: 'Flood',
            year: 2022,
            deaths: 400,
            affected: 300000,
            damage: 2500, // Damage in millions
            location: 'Kerala, India'
        }
    ];
}

// Simulated Data for Cyclones in India
async function fetchIndiaCycloneData() {
    return [
        {
            type: 'Cyclone',
            year: 2020,
            deaths: 100,
            affected: 50000,
            damage: 1200, // Damage in millions
            location: 'Odisha, India'
        },
        {
            type: 'Cyclone',
            year: 2021,
            deaths: 150,
            affected: 75000,
            damage: 1800, // Damage in millions
            location: 'West Bengal, India'
        }
    ];
}

// Simulated Data for Heat Waves in India
async function fetchIndiaHeatWaveData() {
    return [
        {
            type: 'Heat Wave',
            year: 2019,
            deaths: 350,
            affected: 0, // Not applicable
            damage: 500, // Damage in millions
            location: 'Rajasthan, India'
        },
        {
            type: 'Heat Wave',
            year: 2020,
            deaths: 500,
            affected: 0, // Not applicable
            damage: 600, // Damage in millions
            location: 'Gujarat, India'
        }
    ];
}

// Function to fetch all disaster data (earthquakes, floods, cyclones, heat waves)
async function fetchIndiaDisasterData() {
    const earthquakeData = await fetchIndiaEarthquakeData();
    const floodData = await fetchIndiaFloodData();
    const cycloneData = await fetchIndiaCycloneData();
    const heatWaveData = await fetchIndiaHeatWaveData();

    return [...earthquakeData, ...floodData, ...cycloneData, ...heatWaveData];
}

// Function to populate the disaster table with India data
async function populateIndiaTable() {
    const tableBody = document.getElementById('table-body');
    const disasterData = await fetchIndiaDisasterData();
    tableBody.innerHTML = ''; // Clear previous data
    disasterData.forEach(data => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${data.type}</td>
            <td>${data.year}</td>
            <td>${data.deaths}</td>
            <td>${data.affected}</td>
            <td>${data.damage}</td>
        `;
        tableBody.appendChild(row);
    });
}

// Function to generate disaster chart with India data
async function generateIndiaChart() {
    const ctx = document.getElementById('disasterChart').getContext('2d');
    const disasterData = await fetchIndiaDisasterData();

    const disasterChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: disasterData.map(data => data.location), // Display disaster locations as labels
            datasets: [
                {
                    label: 'Deaths',
                    data: disasterData.map(data => data.deaths),
                    backgroundColor: 'rgba(255, 99, 132, 0.6)',
                    borderColor: 'rgba(255, 99, 132, 1)',
                    borderWidth: 1
                },
                {
                    label: 'Affected People',
                    data: disasterData.map(data => data.affected),
                    backgroundColor: 'rgba(54, 162, 235, 0.6)',
                    borderColor: 'rgba(54, 162, 235, 1)',
                    borderWidth: 1
                },
                {
                    label: 'Damage ($M)',
                    data: disasterData.map(data => data.damage),
                    backgroundColor: 'rgba(153, 102, 255, 0.6)',
                    borderColor: 'rgba(153, 102, 255, 1)',
                    borderWidth: 1
                }
            ]
        },
        options: {
            responsive: true,
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
}

// Initialize the page by fetching and displaying India-specific data
populateIndiaTable();
generateIndiaChart();
