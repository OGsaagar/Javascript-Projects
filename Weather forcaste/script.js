let apiKey = 'fa347889adca44ccbb7121402242904';
let inputCity = document.querySelector('.inputWeather');
let btn = document.querySelector('.btn');
let temp=document.querySelector('.temp');
let time=document.querySelector('.localtime');
let name=document.querySelector('.name');
let region=document.querySelector('.region');
let country=document.querySelector('.country');



let data = async (apiKey, inputCity) => {
    let fetchData = await fetch(`http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${inputCity}&aqi=yes`);
    return await fetchData.json();
}

btn.addEventListener('click', async(event) => {
    // console.log(inputCity.placeholder="");
    let result = await data(apiKey, inputCity.value);
    let lastUpdated=result.current.temp_c;
    temp.textContent=`Temperature: ${lastUpdated}°C`;
    console.log(lastUpdated);
    let lastUpdateds=result.location.localtime;
    time.textContent=`Time: ${lastUpdateds}`;
    console.log(lastUpdateds);
name.textContent=`Name: ${result.location.name}`;
    console.log(result.location.name);
region.textContent=`Region: ${result.location.region}`;
    console.log(result.location.region);
    country.textContent=`Country: ${result.location.country}`;
    console.log(result.location.country);

})

// data('fa347889adca44ccbb7121402242904',inputCity);
/*
localtime name region country 

temp_c
*/