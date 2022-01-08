import { Router } from "express";

import db from '../db/planets.json';

const routes = Router();

routes.get('/', async(req, res) => {
  return res.json({
    "/planets": "Lista todos os planetas",
    "/planet:id": "Busca um planeta pelo seu id"
  });
});

routes.get('/planets', async(req, res) => {
  return res.json(db.planets);
});
