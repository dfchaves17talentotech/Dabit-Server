import express from "express";
import { continentRoutes } from "./routes/continents_routes";
import { projectRoutes } from "./routes/projects_routes";
import { contactRoutes } from "./routes/contacts_routes";
import { userRoutes } from "./routes/users_routes";
import cors from "cors";


const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api', continentRoutes);
app.use('/api', projectRoutes);
app.use('/api', contactRoutes);
app.use('/api', userRoutes);
app.get('/', (req, res) => {
    res.send('hello world')
})

app.listen(port, () => {
    console.log(`Estoy corriendo en el puerto ${port}`);
});