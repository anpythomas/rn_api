document.querySelector('button').addEventListener('click', logJSONData);

async function logJSONData() {
    const response = await fetch("/api/drake");
    const jsonData = await response.json();
    console.log(jsonData);
    }

