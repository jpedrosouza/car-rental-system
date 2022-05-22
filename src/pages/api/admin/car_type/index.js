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
  } else if (req.method == "POST") {
    return await postHandler(req, res);
  }
}

/**
 * GET Request handler for /api/admin/car-type
 * @param {NextApiRequest} req
 * @param {NextApiResponse} res
 */

async function getHandler(req, res) {
  const carTypes = await prisma.car_types.findMany();

  return res.status(200).json(carTypes);
}

/**
 * POST Request handler for /api/admin/car-type
 * @param {NextApiRequest} req
 * @param {NextApiResponse} res
 */

async function postHandler(req, res) {
  const data = req.body;
  const carType = await prisma.car_types.create({
    data: data,
  });

  return res.status(200).json(carType);
}
