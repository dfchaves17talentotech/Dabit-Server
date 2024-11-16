import { Request, Response } from "express"
import { dbConnection } from "../db/mongo_connect";

export const createUser = async (req: Request, res: Response): Promise<Response> => {
    try {
        const data = req.body;
        const collection = await dbConnection('users');
        const document = await collection.insertOne(data);    
        return res.status(200).json(document);
    } catch (error) {
        return res.status(500).json({messge: `Error al insertar el documento ${error}`});
    }
};

export const getUsers = async (req: Request, res: Response): Promise<Response> => {
    try {
        const query = req.body;
        const collection = await dbConnection('users');
        const filteredDocs = await collection.find(query).toArray();    
        return res.status(200).json(filteredDocs);
    } catch (error) {
        return res.status(500).json({messge: `Error al buscar los documentos ${error}`});
    }
};