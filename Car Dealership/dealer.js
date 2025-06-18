
document.getElementById('car-type').addEventListener('change', function() {
    const selectedType = this.value;
    const vehicles = document.querySelectorAll('.vehicle');

    vehicles.forEach(vehicle => {
        const vehicleType = vehicle.getAttribute('data-type');
        if (selectedType === 'all' || vehicleType === selectedType) {
            vehicle.style.display = 'block';
        } else {
            vehicle.style.display = 'none';
        }
    });
});

document.getElementById('car-make').addEventListener('change', function() {
    const selectedMake = this.value;
    const vehicles = document.querySelectorAll('.vehicle')

    vehicles.forEach(vehicle => {
        const vehicleMake = vehicle.getAttribute('car-make');
        if (selectedMake === 'all' || vehicleMake === selectedMake) {
            vehicle.style.display = 'block';
        } else {
            vehicle.style.display = 'none';
        }
    });
});

document.getElementById('car-year').addEventListener('change', function() {
    const selectedYear = this.Value;
    const vehicles = document.querySelectorAll('.vehicle')

    vehicles.forEach(vehicle => {
        const vehicleMake = vehicle.getAttribute('car-year');
        if (selectedYear ==='all' || vehicleYear === selectedYear) {
            vehicle,style.display = 'block';
        } else {
            vehicle.style.display = 'none';
        };
        });
});


document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;


    alert(`Thank you, ${name}! We will get back to you at ${email}. Your message: "${message}"`);


    document.getElementById('contact-form').reset();
});


function contactDealer(vehicleName) {
    const userName = prompt(`You're interested in the ${vehicleName}. Please enter your name:`);
    const userEmail = prompt('Please enter your email:');

    if (userName && userEmail) {
        alert(`Thank you, ${userName}! We will contact you at ${userEmail} about the ${vehicleName}.`);
    }
}
