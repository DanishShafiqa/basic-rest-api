import Express from "express";
import MedicineRouter from "./router/medicineRouter"

const app = Express()
//allow to read a body request with JSON format

app.use(Express.json())

//prefix fot medicine route
app.use(`/medicine`, MedicineRouter)
const PORT = 7607

app.listen(PORT, ()=> {
    console.log(`Server Drugstore run on port ${PORT}`)
})
