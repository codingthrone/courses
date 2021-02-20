const [app, express] = require("../index")();

// Basic Routing
app.get("/", (req,res) => {
    res.status(200).send("Hello World!");
})

app.post("/", (req,res) => {
    /* Access sent along data. */
    console.log(req.body)
    /* Access client's cookies */
    console.log(req.cookies);
    res.cookie("newCookie","newCookieValue", {maxAge: 3000});
    const objectOfYourChoice = {sample: true, error: "none"};
    return res.json(objectOfYourChoice);
})
