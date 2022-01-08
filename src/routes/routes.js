import { Router } from "express";

import db from '../db/planets.json';

const routes = Router();

routes.get('/', (req, res) => {
  return res.json({
    "/planets": "Lista todos os planetas",
    "/planet:id": "Busca um planeta pelo seu id"
  });
});

routes.get('/planets', (req, res) => {
  return res.json(db.planets);
});

routes.get('/planet/:id', (req, res) => {
  const { id } = req.params;
  const planetId = db.planets.findIndex( planet => planet.id === id );
  const planet = db.planets[planetId];
  return res.json(planet);
});

export default routes;
