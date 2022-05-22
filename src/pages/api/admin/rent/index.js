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
 * GET Request handler for /api/admin/rent
 * @param {NextApiRequest} req
 * @param {NextApiResponse} res
 */

async function getHandler(req, res) {
  const rents = await prisma.rents.findMany({
    orderBy: { created_at: "desc" },
  });

  return res.status(200).json(rents);
}

/**
 * POST Request handler for /api/admin/rent
 * @param {NextApiRequest} req
 * @param {NextApiResponse} res
 */

async function postHandler(req, res) {
  const data = req.body;
  const rent = await prisma.rents.create({
    data,
  });

  return res.status(200).json(rent);
}
