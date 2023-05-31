import { PrismaClient } from "@prisma/client"

export default async function handler(req, res) {

    const prisma = new PrismaClient()

    const ordenes = await prisma.orden.findMany({
        where: {
            estado: false
        },
    })
    res.json(ordenes)



    if (req.method === 'POST') {
        const orden = await prisma.orden.create({
            data: {
                nombre: req.body.nombre,
                total: req.body.total,
                pedido: req.body.pedido,
                fecha: req.body.fecha,
                mesa: req.body.mesa,  
            }
        })
        console.log(req.body)
        res.json(orden)
    }

}