const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

exports.createClient = async (req, res) => {
  try {
    const { name, cellphone } = req.body;

    const client = await prisma.client.create({
      data: {
        name,
        cellphone,
      },
    });

    res.status(202).json(client);
  } catch (error) {
    res.status(400).json(error);
  }
};

exports.listAllClients = async (req, res) => {
  try {
    const listClients = await prisma.client.findMany({
      include: {
        products: true,
      },
    });

    res.status(200).json(listClients);
  } catch (error) {
    res.status(400).json(error);
  }
};

exports.updateClient = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedClient = await prisma.client.update({
      where: { id: String(id) },
      data: {
        ...req.body,
      },
    });

    res.status(200).json(updatedClient);
  } catch (error) {
    res.status(400).json(error);
  }
};

exports.deleteClient = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedClient = await prisma.client.delete({
      where: { id: String(id) },
    });

    res.status(200).json(deletedClient);
  } catch (error) {
    res.status(400).json(error);
  }
};