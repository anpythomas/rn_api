document.querySelector('button').addEventListener('click', logJSONData);

async function logJSONData() {
    const name = document.querySelector('input').value
    try {
        const response = await fetch(`https://rn-api-o93f.onrender.com/api/${name}`);
        const jsonData = await response.json();
        console.log(jsonData);
        document.querySelector('h2').innerText = jsonData.birthName
    } catch (err) {
        console.log(err)
    }

    }

