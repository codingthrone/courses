const [app, express] = require("../index")();

app.get("/query", (req,res) => {
    const {query} = req;
    return res.json(query);
})
http://localhost:3000 /query?search=somebody+that+I+used+to+know