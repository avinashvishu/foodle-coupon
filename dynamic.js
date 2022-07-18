const cityUrl = "https://zomatoajulypi.herokuapp.com/location";
const restUrl = "https://zomatoajulypi.herokuapp.com/restaurant?stateId=";

function getCity() {
    fetch(cityUrl, { method: 'GET' })
        .then((res) => res.json())
        .then((data) => {
            data.map((item) => {
                let element = document.createElement('option')
                let text = document.createTextNode(item.state)
                element.appendChild(text)
                element.value = item.state_id
                document.getElementById('city').appendChild(element)
            })
        })
}

const getRest = async() => {
    let cityId = document.getElementById('city').value;
    let rest = document.getElementById('rest-select');
    while (rest.length > 0) {
        rest.remove(0)
    }
    let response = await fetch(`${restUrl}${cityId}`, { method: 'GET' })
    let data = await response.json()
    data.map((item) => {
        let element = document.createElement('option')
        let text = document.createTextNode(item.restaurant_name)
        element.appendChild(text)
        rest.appendChild(element)
        console.log(element)
    })
}