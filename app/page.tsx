import { Button } from "@/components/ui/button";
import { UserButton } from "@clerk/nextjs";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <h1>Welcome!!</h1>
      <Button>Subscribe</Button>
      <UserButton/>
    </div>
    
  );
}
