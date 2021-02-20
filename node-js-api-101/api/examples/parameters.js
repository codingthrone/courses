const [app, express] = require("../index")();

app.get("/hello/:name", (req, res) => {
    const {params} = req;
    res.send(`Hello ${params.name}.`);
}) 

app.get("/hello/:name/:optional?", (req,res) => {
  const {params} = req;
  const base = `Hello ${params.name}.`;
  let message = base;
  if(params.optional) {
    message += `\n How are you ${params.optional}?`
  } 
  return res.send(message);
})

