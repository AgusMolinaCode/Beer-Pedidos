import { categorias } from './data/categorias'
import { PrismaClient } from '@prisma/client'
import { productos } from './data/productos'

const prisma = new PrismaClient()

const main = async () : Promise<void> => {

    try {
        await prisma.categoria.createMany({
            data: categorias
        })
        await prisma.producto.createMany({
            data: productos
        })
    } catch (error) {
        console.log(error)
    }

}
main()