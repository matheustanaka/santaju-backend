const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

exports.createOrder = async (req, res) => {
  try {
    const { id_client, id_product } = req.body;

    // if (!clientId || !products) {
    //   res
    //     .status(400)
    //     .json({ error: "clientId and products fields are required" });
    //   return;
    // }

    // // check if clientId exists in the db
    // const client = await prisma.client.findOne({ where: { id: clientId } });
    // if (!client) {
    //   res.status(400).json({ error: "Invalid clientId" });
    //   return;
    // }

    // // check if all productsId exists in the db
    // const productsExist = await prisma.product.findMany({
    //   where: { id: { in: products } },
    // });
    // if (productsExist.length !== products.length) {
    //   res.status(400).json({ error: "Invalid product Id" });
    //   return;
    // }

    console.log("before order creation");

    const order = await prisma.order.create({
      data: {
        id_product,
        id_client,
      },
    });

    console.log("after order creation");

    res.status(201).json(order);
  } catch (error) {
    res.status(400).json(error);
  }
};

exports.listAllOrders = async (req, res) => {
  try {
    const listOrders = await prisma.order.findMany({
      include: {
        client: {
          select: {
            name: true,
            phone: true,
          },
        },
        product: {
          select: {
            title: true,
            price: true,
          },
        },
      },
    });

    res.status(200).json(listOrders);
  } catch (error) {
    res.status(400).json(error);
  }
};

exports.listOneOrder = async (req, res) => {
  try {
    const { id } = req.params;
    const listOrder = await prisma.order.findUnique({
      where: { id: String(id) },
      include: {
        product: {
          select: {
            title: true,
            price: true,
          },
        },
      },
    });

    res.status(200).json(listOrder);
  } catch (error) {
    res.status(400).json(error);
  }
};

exports.updateOrder = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedOrder = await prisma.order.update({
      where: { id: String(id) },
      data: {
        ...req.body,
      },
    });

    res.status(200).json(updatedOrder);
  } catch (error) {
    res.status(400).json(error);
  }
};

exports.deleteOrder = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedOrder = await prisma.order.delete({
      where: { id: String(id) },
    });

    console.log("Deletado", deletedOrder);

    res.status(200).json(deletedOrder);
  } catch (error) {
    res.status(400).json(error);
  }
};
