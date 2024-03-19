import Link from "next/link";
import { Button } from "./ui/button";

export default function Footer() {
  return (
    <footer className="mt-10 p4">
      <div className="w-full">
        <div className="lg:flex gap-4 justify-between  items-baseline">
          <div className="flex-1">
            <h4 className="font-bold text-4xl">Vinicius Sodré</h4>
            <p className="text-sm">Desenvolvedor Front-end</p>
          </div>
          <div className="flex flex-col items-start mt-4 lg:flex-row">
            <Button asChild variant={"link"} className="text-white text-xs">
                <Link href="/login">Sobre</Link>
            </Button>
            <Button asChild variant={"link"} className="text-white text-xs">
                <Link href="/login">Contato</Link>
            </Button>
            <Button asChild variant={"link"} className="text-white text-xs">
                <Link href="/login">Blog</Link>
            </Button>
            

          </div>
        </div>
        <p className=" text-center italic text-xs mt-8">
          Feito com amor para compartilhar um pouco do que aprendi!
        </p>
      </div>
    </footer>
  );
}
