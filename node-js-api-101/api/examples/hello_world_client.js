const fetch = require("node-fetch");

/* Since were running this in node js, you need a full url */
/* If we were running this in the browser, you only need the path: "/" */
const route = "http://localhost:3000/";
const options = {
    method: "POST",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify({sampleKey: 42})
}

(async function sendRequest(){
    const response = await fetch(route, options);
    const data = await response.json();
    console.log("Gotten data:");
    console.log(data);
})();