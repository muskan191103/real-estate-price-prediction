let bhk = document.querySelectorAll('.switch-field input');
let bhkLabel = document.querySelectorAll('.switch-field label');
let pastID = null;

let bath = document.querySelectorAll('.switch-field1 input');
let bathLabel = document.querySelectorAll('.switch-field1 label');
let pastID1 = null;

for (let i = 0; i < bhkLabel.length; i++) {
    bhkLabel[i].addEventListener('click', () => {
        bhk.forEach(input => {
            input.style.backgroundColor = '#e4e4e4';
        });
        bhkLabel.forEach(input => {
            input.style.backgroundColor = '#e4e4e4';
        });
        // pastID = bhk[i];
        bhk[i].style.backgroundColor = ' rgb(83, 83, 85)';
        bhkLabel[i].style.backgroundColor = ' rgb(83, 83, 85)';
        console.log("BHK:",bhk[i].value);
    });
    bathLabel[i].addEventListener('click', () => {
        bath.forEach(input => {
            input.style.backgroundColor = '#e4e4e4';
        });
        bathLabel.forEach(input => {
            input.style.backgroundColor = '#e4e4e4';
        });
        // pastID = bhk[i];
        bath[i].style.backgroundColor = ' rgb(83, 83, 85)';
        bathLabel[i].style.backgroundColor = ' rgb(83, 83, 85)';
        console.log("bATH:",bath[i].value);
    });
    
}

let locationID = document.getElementById("locations")

fetch ("http://127.0.0.1:5000/get_location_names").then(data => data.json()).then(data =>{
    const location = data.location
    console.log(location)
    return location
}).then(locations =>{
    for(let i = 0; i < locations.length; i++){
    let addOption = document.createElement('option')
    let lang = document.createTextNode(locations[i])
    addOption.appendChild(lang)
    locationID.appendChild(addOption)
}})

let selectedValue;
document.getElementById("locations").addEventListener("change", function() {
    selectedValue = this.value;
    console.log("Location:", selectedValue);
});
