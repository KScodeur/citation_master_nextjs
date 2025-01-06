"use client"
import { Button } from "@/src/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/src/components/ui/card";
import { Input } from "@/src/components/ui/input";
import { Label } from "@/src/components/ui/label";
import { FormatDetection } from "next/dist/lib/metadata/types/extra-types";
import { useState } from "react";
import { useFormStatus } from "react-dom";

export default function Page(){
    const createCitation = async (FormData: FormData) =>{
        const result = await fetch('/api/citations', {
            body: JSON.stringify({
                citation: FormData.get("citation"),
                author: FormData.get("author"),
            }),
            method: "POST"
        });
        const json = await result.json();
        console.log(json)
    }
    return(
        <Card className="p-6">
            <CardHeader>
                <CardTitle>Create citation</CardTitle>
            </CardHeader>
            <CardContent>
            <form action={async (FormData) =>{
                await createCitation(FormData);
            }} className="flex flex-col gap-2">
                <Label>
                    Citation
                    <Input name="citation"/>
                </Label>
                <Label>
                    Author
                    <Input name="author"/>
                </Label>
                <SubmitButton/>
            </form>
            </CardContent>
        </Card>
    )
}
const SubmitButton =()=>{
    const {pending} = useFormStatus();
    return(
        <Button disabled ={pending} type="submit">
            {pending? "Loading..." : "Submit"}
        </Button>
    )
}