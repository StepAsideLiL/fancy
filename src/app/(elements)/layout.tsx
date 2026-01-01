import { Home } from "lucide-react";
import Link from "next/link";
import { MDXRemote } from "next-mdx-remote/rsc";
import DocDialog from "@/components/doc-dialog";
import { Button } from "@/components/ui/button";
import { parseMdx } from "@/lib/mdx";

export default async function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { data, content } = await parseMdx();

  return (
    <>
      {children}

      <div className="fixed bottom-15 left-5">
        <div className="flex flex-col justify-center gap-2">
          <Button
            size={"icon-sm"}
            className="cursor-pointer rounded-full"
            asChild
          >
            <Link href={"/"}>
              <Home />
            </Link>
          </Button>

          <DocDialog
            name={data.name}
            discription={data.description}
            Mdx={<MDXRemote source={content} />}
          />
        </div>
      </div>
    </>
  );
}
