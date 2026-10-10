import type { Request, Response } from "express";
import { prisma } from "../database/client"; // ajuste ao caminho do seu projeto

export async function create(req: Request, res: Response) {
  try {
    const car = await prisma.car.create({ data: req.body });
    res.status(201).json(car);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Erro ao criar carro" });
  }
}