import express from "express"
import cors from "cors"
const app = express()

const PORT = 3001;

app.use(express.json());
app.use(cors());


app.get("/api/todos", (req, res)=> {
    res.send("todos werden hier angezeigt")
})

app.post("/api/todos", (req, res)=> {
    res.send("todo wurde hinzugefügt")
})



app.listen(PORT, ()=> {console.log(`Server ist am laufen auf diesem Port${PORT}`)})