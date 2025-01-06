import { Button, buttonVariants } from "@/src/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/src/components/ui/card";
import { Input } from "@/src/components/ui/input";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Title</CardTitle>
      </CardHeader>
      <CardContent>
        <Link className={buttonVariants({
          size: "lg"
        })} href={"/admin/citations/id"}>Citation</Link>
      </CardContent>
    </Card>
  );
}
