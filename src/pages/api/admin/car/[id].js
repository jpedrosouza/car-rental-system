import { NextApiRequest, NextApiResponse } from "next";
import Prisma from "../../../../configs/prisma";

const prisma = Prisma.getInstance();

/**
 *
 * @param {NextApiRequest} req
 * @param {NextApiResponse} res
 */

export default async function handler(req, res) {
  if (req.method == "GET") {
    return await getHandler(req, res);
  } else if (req.method == "PUT") {
    return await putHandler(req, res);
  } else if (req.method == "DELETE") {
    return await deleteHandler(req, res);
  }
}

/**
 * GET Request handler for /api/admin/car/:id
 * @param {NextApiRequest} req
 * @param {NextApiResponse} res
 */

async function getHandler(req, res) {
  const { id } = req.query;
  const car = await prisma.cars.findUnique({ where: { id: Number(id) } });

  return res.status(200).json(car);
}

/**
 * PUT Request handler for /api/admin/car/[id]
 * @param {NextApiRequest} req
 * @param {NextApiResponse} res
 */

async function putHandler(req, res) {
  const { id } = req.query;
  const data = req.body;
  const car = await prisma.cars.update({
    where: { id: Number(id) },
    data: data,
  });

  return res.status(200).json(car);
}

/**
 * DELETE Request handler for /api/admin/car/[id]
 * @param {NextApiRequest} req
 * @param {NextApiResponse} res
 */

async function deleteHandler(req, res) {
  const { id } = req.query;

  await prisma.cars.delete({ where: { id: Number(id) } });

  return res.status(200).json({ message: "Car deleted" });
}
