const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

exports.createProduct = async (req, res) => {
  try {
    const { title, price } = req.body;

    const product = await prisma.product.create({
      data: {
        title,
        price,
      },
    });

    res.status(201).json(product);
  } catch (error) {
    res.status(400).json(error);
  }
};

exports.listAllProducts = async (req, res) => {
  try {
    const listProducts = await prisma.product.findMany({});

    res.status(200).json(listProducts);
  } catch (error) {
    res.status(400).json(error);
  }
};

exports.updateProduct = async (req, res) => {
  try {
    const { id } = req.params;
    console.log({ id });
    const updatedProduct = await prisma.product.update({
      where: { id: String(id) },
      data: {
        ...req.body,
      },
    });

    res.status(200).json(updatedProduct);
  } catch (error) {
    res.status(400).json(error);
  }
};

exports.deleteProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedClient = await prisma.product.delete({
      where: { id: String(id) },
    });

    res.status(200).json(deletedClient);
  } catch (error) {
    res.status(400).json(error);
  }
};
