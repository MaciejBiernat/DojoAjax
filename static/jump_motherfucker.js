
let buttonTime = document.getElementById("time");


buttonTime.addEventListener('click', function(event){
    getTime()
    }
);




let getTime = function (inputApi='http://api.timezonedb.com/v2.1/get-time-zone?key=YR0ICC9RWIXY&format=json&by=zone&zone=Europe/Warsaw'){
    fetch(inputApi)
        .then((response) => response.json())
        .then((data) => {
            displayTime(data);
        })
};

let displayTime = function (data) {
    console.log(data);
    document.getElementById('current-time').innerHTML = `<p> ${data['formatted']}</p>`;
};


let weatherSelect = document.getElementById('mylist');
    weatherSelect.addEventListener('change', function(event){
        getWeather(inputApi = `https://api.aerisapi.com/observations/${event.target.value}?&format=json&filter=allstations&limit=1&fields=ob.tempC,ob.humidity,ob.weather&client_id=LhCxG0G3JsdwA0BRhTpLs&client_secret=SYJhglzhma5bhdMOBCsY9Okiw3fXjbzHKLHzdTND`)
    });

let getWeather  = function (inputApi){
    fetch(inputApi)
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
            displayTable(data.response.ob);
        })
};

let displayTable = function (data){

    let insert =  `
 <tr> 
    <td>${data['tempC']}</td>
    <td>${data['weather']}</td>
    <td>${data['humidity']}</td>
 <tr>
 `
 document.getElementById('mytablebody').innerHTML = insert
}

//tempC: 7.1
// humidity: 93
// weather: "Cloudy with Light Drizzle"
// 'https://api.aerisapi.com/observations/warsaw,pl?&format=json&filter=allstations&limit=1&fields=ob.tempC,ob.humidity,ob.weather&client_id=LhCxG0G3JsdwA0BRhTpLs&client_secret=SYJhglzhma5bhdMOBCsY9Okiw3fXjbzHKLHzdTND'