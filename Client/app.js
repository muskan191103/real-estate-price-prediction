let bhk = document.querySelectorAll('.switch-field input');
let bhkLabel = document.querySelectorAll('.switch-field label');
let pastID = null;

let bath = document.querySelectorAll('.switch-field1 input');
let bathLabel = document.querySelectorAll('.switch-field1 label');
let pastID1 = null;

var bhkvalue;
var bathvalue;

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

        bhkvalue=bhk[i].value;
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

        bathvalue=bath[i].value;
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

let locationvalue;
document.getElementById("locations").addEventListener("change", function() {
    locationvalue = this.value;
    console.log("Location:", locationvalue);
});

function onClickedEstimatePrice(){
    var sqft = document.getElementById('area');
    var bhk = bhkvalue;
    var bath = bathvalue;
    var location = locationvalue;
    var estprice = document.getElementById('uiEstPrice');

    var url = "http://127.0.0.1:5000/predict_home_price";

    if (!sqft || !bhk || !bath || !location) {
        alert("Please fill all the fields.");
        return;
    }

    $.post(url,{
        total_sqft: parseFloat(sqft.value),
        bhk: parseInt(bhk),
        bath: parseInt(bath),
        location: location
    },function(data,status){
        console.log(data.estimated_price);
        estprice.innerHTML = "<h2 class='no-background'>"+ data.estimated_price.toString() + " Lakh</h2>";
        console.log(status);
    });
}