const submitBtn = document.getElementById("submitBtn");
const cityName = document.getElementById("cityName");
const city_name = document.getElementById("city_name");
const temp_real_val = document.getElementById("temp_real_val");
const temp_status = document.getElementById("temp_status");
const data_hide = document.querySelector(".middle_layer");
const getInfo = async (event) => {
    event.preventDefault();
    let cityVal = cityName.value;
    if (cityVal === "") {
        city_name.innerHTML = `Pls enter city name first`;
        data_hide.classList.add('data_hide');
    }
    else {
        try {
            let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityVal}&units=metric&appid=8ceab65909969e3af6879cec8cb17cac`;
            const response = await fetch(url);
            const data = await response.json();
            const arrData = [data];
            city_name.innerText = `${arrData[0].name}, ${arrData[0].sys.country} `;
            temp_real_val.innerText = arrData[0].main.temp;
            const tempMood = arrData[0].weather[0].main;

            if (tempMood == "clear") {
                temp_status.innerHTML = '<i class="fas fa-sun" style="color: yellow;"></i>';

            }
            else if (tempMood == "Clouds") {
                temp_status.innerHTML = '<i class="fas fa-cloud" style="color: white;"></i>';
            }
            else if (tempMood == "Rainy") {
                temp_status.innerHTML = '<i class="fas fa-rain" style="color: blue;"></i>';

            }
            else {
                temp_status.innerHTML = '<i class="fas fa-sun" style="color: yellow;"></i>';

            }
            data_hide.classList.remove('data_hide');
        }
        catch {
            city_name.innerHTML = `Pls enter city name properly`;
            data_hide.classList.add('data_hide');
        }
    }
}

submitBtn.addEventListener("click", getInfo);