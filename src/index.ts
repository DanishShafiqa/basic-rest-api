import Express from "express";
import MedicineRouter from "./router/medicineRouter"
import AdminRouter from "./router/adminRouter"
import TransactionRoute from "./router/transactionRouter"

const app = Express()
//allow to read a body request with JSON format

app.use(Express.json())

//prefix fot medicine route
app.use(`/medicine`, MedicineRouter)
app.use(`/admin`, AdminRouter)
app.use(`/transaction`, TransactionRoute)
const PORT = 7607

app.listen(PORT, ()=> {
    console.log(`Server Drugstore run on port ${PORT}`)
})
