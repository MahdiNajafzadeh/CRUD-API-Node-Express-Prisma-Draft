const router = require('express').Router();
const { PrismaClient } = require("@prisma/client")
const prisma = new PrismaClient()

router.get('/:id', async (req, res, next) => {
  try {
    const customer = await prisma.customer.findMany({
      where: {
        id: Number(req.params.id)
      }
    })
    res.json(customer);
  } catch (error) {
    next(error)
  }
});

router.post('/', async (req, res, next) => {
  try {
    const customer = await prisma.customer.create({
      data: req.body
    })
    res.json(customer)
  } catch (error) {
    next(error)
  }
});

router.put('/:id', async (req, res, next) => {
  try {
    const customer = await prisma.customer.update({
      where: {
        id: Number(req.params.id)
      },
      data: req.body
    })
    res.json(customer)
  } catch (error) {
    next(error)
  }
});

router.delete('/:id', async (req, res, next) => {
  try {
    const customer = await prisma.customer.delete({
      where: {
        id: Number(req.params.id)
      }
    })
    res.json(customer)
  } catch (error) {
    next(error)
  }
});

module.exports = router;
