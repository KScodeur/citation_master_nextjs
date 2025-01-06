"use server"
import { prisma } from "@/src/lib/prisma";

export async function deleteCitationAction(id:number) {
    await prisma.citation.delete({
        where:{
            id,
        }
    })
    return {
        message: "Delete successfully"
    }
    
}