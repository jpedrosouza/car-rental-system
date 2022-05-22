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
 * GET Request handler for /api/admin/car-type/:id
 * @param {NextApiRequest} req
 * @param {NextApiResponse} res
 */

async function getHandler(req, res) {
  const { id } = req.params;
  const carType = await prisma.car_types.findUnique({
    where: { id: Number(id) },
  });

  return res.status(200).json(carType);
}

/**
 * PUT Request handler for /api/admin/car-type/:id
 * @param {NextApiRequest} req
 * @param {NextApiResponse} res
 */

async function putHandler(req, res) {
  const { id } = req.params;
  const data = req.body;
  const carType = await prisma.car_types.update({
    where: { id: Number(id) },
    data,
  });

  return res.status(200).json(carType);
}

/**
 * DELETE Request handler for /api/admin/car-type/:id
 * @param {NextApiRequest} req
 * @param {NextApiResponse} res
 */

async function deleteHandler(req, res) {
  const { id } = req.params;

  await prisma.car_types.delete({ where: { id: Number(id) } });

  return res.status(200).json({ message: "Car Type deleted" });
}
