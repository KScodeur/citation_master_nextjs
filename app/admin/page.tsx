import { buttonVariants } from "@/src/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/src/components/ui/card";
import { prisma } from "@/src/lib/prisma";
import Link from "next/link";
import DeleteCitationButton from "./delete-citation-button";

export default async function Page(){
    const citations = await prisma.citation.findMany({
        orderBy:{
            createdAt: "desc"
        }
    })
    return(
        <Card>
            <CardHeader>
                <CardTitle>URL : /admin</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col gap-4">
                {
                    citations.map((citation)=>(
                        <Card className="p-6 gap-4 flex items-start bg-white rounded-lg shadow-md" key={citation.id}>
                            <div className="flex flex-col gap-2 flex-1">
                                <p className="relative pl-10 pr-10 italic text-lg text-gray-800 before:content-['“'] before:absolute before:left-0 before:text-4xl before:text-gray-500 after:content-['”'] after:absolute after:right-0 after:text-4xl after:text-gray-500">                                {citation.text}
                                </p>
                                <p className="mt-4 text-right text-sm font-semibold text-gray-600">-- {citation.author}</p>
                            </div>
                            <DeleteCitationButton id={citation.id}/>
                        </Card>
                    ))
                }
                <Link className={buttonVariants({
                    size: "lg",
                    variant: "outline"
                })} href={"/admin/citations/new"}>Create citation</Link>
            </CardContent>
        </Card>
    )
}