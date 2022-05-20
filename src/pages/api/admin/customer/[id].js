import { NextApiRequest, NextApiResponse } from "next";
import Prisma from "../../../../configs/prisma";

const prisma = Prisma.getInstance();

/**
 * Request handler for /api/admin/customer/[id]
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
 * GET Request handler for /api/admin/customer/[id]
 * @param {NextApiRequest} req
 * @param {NextApiResponse} res
 */

async function getHandler(req, res) {
  const { id } = req.query;
  const customer = await prisma.customers.findUnique({
    where: {
      id: id,
    },
  });

  return res.status(200).json(customer);
}

/**
 * PUT Request handler for /api/admin/customer/[id]
 * @param {NextApiRequest} req
 * @param {NextApiResponse} res
 */

async function putHandler(req, res) {
  const { id } = req.query;
  const data = req.body;
  const customer = await prisma.customers.update({
    where: {
      id: id,
    },
    data: data,
  });

  return res.status(200).json(customer);
}

/**
 * DELETE Request handler for /api/admin/customer/[id]
 * @param {NextApiRequest} req
 * @param {NextApiResponse} res
 */

async function deleteHandler(req, res) {
  const { id } = req.query;

  await prisma.customers.delete({ where: { id: id } });

  return res.status(200).json({ message: "Customer deleted" });
}
