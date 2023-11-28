

setInterval(() => {
    document.getElementById("date").innerHTML = moment().format(`dddd, hh:mm:ss<br />MMM D, YYYY`)
}, 1000)

search = () => {
    // document.getElementById("bttn").addEventListener("click", (event) => {
    //     event.preventDefault


    let input = document.getElementById("input").value
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?&appid=ccc0978648ea6aeae8aa28032c27ac3e&units=metric&q=${input}`;



    if (input.trim() === "") {
        Swal.fire({
            title: `Please enter a city name`,
            showClass: {
                popup: `
            animate__animated
            animate__fadeInUp
            animate__faster
            `,
            },
            hideClass: {
                popup: `
                    animate__animated
                    animate__fadeOutDown
                    animate__faster
                    `,
            },
        });
    }
    else {
        let getData = new Promise((resolve, reject) => {
            fetch(apiUrl)
                .then((res) => res.json())
                .then((data) => resolve(data))
                .catch((err) => reject(err));
        });
        getData
            .then((data) => {
                let img = document.getElementById("img");
                document.getElementById("city").innerHTML = data.name
                document.getElementById("degree").innerHTML = Math.round(data.main.temp) + "°C";
                document.getElementById("humidity").innerHTML = data.main.humidity;
                // console.log(data)
                document.getElementById("feels").innerHTML = data.main.feels_like;
                document.getElementById("wind").innerHTML = data.wind.speed;
                document.getElementById("visibility").innerHTML = data.visibility / 1000 + "km";
                console.log("object --->", data);

                const weatherCondition = data.weather[0].main;

                if (weatherCondition === "Clouds") {
                    img.src = "Images/clouds.png";
                    img.style.marginBottom = "60px"
                }
                else if (weatherCondition === "Mist") {
                    img.src = "Images/mist.svg";
                }
                else if (weatherCondition === "Smoke") {
                    img.src = "Images/smoke.svg";
                }
                else if (weatherCondition === "Cloudy") {
                    img.src = "Images/cloudy.svg";
                }
                else if (weatherCondition === "Drizzle") {
                    img.src = "Images/drizzle.svg";
                }
                else if (weatherCondition === "Dust") {
                    img.src = "Images/dust.svg";
                }
                else if (weatherCondition === "Fog") {
                    img.src = "Images/fog.svg";
                }
                else if (weatherCondition === "Haze") {
                    img.src = "Images/haze.svg";
                }
                else if (weatherCondition === "Rain") {
                    img.src = "Images/rainy-1.svg";
                }
                else if (weatherCondition === "Snow") {
                    img.src = "Images/snow.svg";
                }
                else if (weatherCondition === "Thunder Storm") {
                    img.src = "Images/thunderstorms.svg";
                }
                else if (weatherCondition === "Clear") {
                    img.src = "Images/clear-day.svg";
                }
                else {
                    img.src = "Images/tarnado.svg";
                }
            })
            .catch((err) => {
                console.log(err);
                if (err) {
                    Swal.fire({
                        title: `Please enter a valid city name`,
                        showClass: {
                            popup: `
                        animate__animated
                        animate__fadeInUp
                        animate__faster
                      `,
                        },
                        hideClass: {
                            popup: `
                        animate__animated
                        animate__fadeOutDown
                        animate__faster
                      `,
                        },
                    });
                }
            });
    }
    document.getElementById("input").value = ""
}


let currentLocation = navigator.geolocation.getCurrentPosition((location) => {
    let latitude = location.coords.latitude;
    let longitude = location.coords.longitude;
    let api = `https://api.openweathermap.org/data/2.5/weather?&appid=ccc0978648ea6aeae8aa28032c27ac3e&units=metric&lat=${latitude}&lon=${longitude}`;
    fetch(api)
        .then((res) => res.json())
        .then((data) => {
            // let { main, wind, visibility, name } = data;
            let img = document.getElementById("img");
            document.getElementById("city").innerHTML = data.name
            document.getElementById("degree").innerHTML = Math.round(data.main.temp) + "°C";
            document.getElementById("humidity").innerHTML = data.main.humidity;
            // console.log(data)
            document.getElementById("feels").innerHTML = data.main.feels_like;
            document.getElementById("wind").innerHTML = data.wind.speed;
            document.getElementById("visibility").innerHTML = data.visibility / 1000 + "km";
            console.log("object --->", data);

            const weatherCondition = data.weather[0].main;

            if (weatherCondition === "Clouds") {
                img.src = "Images/clouds.png";
                img.style.marginBottom = "60px"
            }
            else if (weatherCondition === "Mist") {
                img.src = "Images/mist.svg";
            }
            else if (weatherCondition === "Smoke") {
                img.src = "Images/smoke.svg";
            }
            else if (weatherCondition === "Cloudy") {
                img.src = "Images/cloudy.svg";
            }
            else if (weatherCondition === "Drizzle") {
                img.src = "Images/drizzle.svg";
            }
            else if (weatherCondition === "Dust") {
                img.src = "Images/dust.svg";
            }
            else if (weatherCondition === "Fog") {
                img.src = "Images/fog.svg";
            }
            else if (weatherCondition === "Haze") {
                img.src = "Images/haze.svg";
            }
            else if (weatherCondition === "Rain") {
                img.src = "Images/rainy-1.svg";
            }
            else if (weatherCondition === "Snow") {
                img.src = "Images/snow.svg";
            }
            else if (weatherCondition === "Thunder Storm") {
                img.src = "Images/thunderstorms.svg";
            }
            else if (weatherCondition === "Clear") {
                img.src = "Images/clear-day .svg";
            }
            else {
                img.src = "Images/tarnado.svg";
            }
        })
        .catch((err) => console.log(err))
})