import { buttonVariants } from "@/src/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/src/components/ui/card";
import Link from "next/link";

export default async function Page(props:{
    params: Promise<{id: string}>;
}) {
    const params = await props.params;
    console.log(params)
        return(
        <Card>
        <CardHeader>
          <CardTitle>1</CardTitle>
        </CardHeader>
        
      </Card> 
    )
    
}