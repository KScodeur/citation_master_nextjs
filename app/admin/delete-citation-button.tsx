"use client"
import { Button } from "@/src/components/ui/button";
import { useState } from "react";
import { deleteCitationAction } from "./citations/new/citations.action";

export default function DeleteCitationButton(props: {id : number}){
    const [isConfirm, setIsConfirm] = useState(false);
    const onDelete = ()=>{
        deleteCitationAction(props.id)
    }
    return <Button
        onClick={()=>{
            if(isConfirm){
                onDelete();
            }else{
                setIsConfirm(true)
            }
        }}
        variant={isConfirm? "destructive" : "outline"}>X</Button>
}