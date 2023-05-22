document.querySelector('button').addEventListener('click', logJSONData);

async function logJSONData() {
    const response = await fetch("https://rn-api-o93f.onrender.com/api/drake");
    const jsonData = await response.json();
    console.log(jsonData);
    }

