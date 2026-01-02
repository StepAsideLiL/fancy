import { Home } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { elements } from "@/_generated/elements";
import DocDialog from "@/components/doc-dialog";
import { Button } from "@/components/ui/button";

export default async function Page(props: PageProps<"/e/[category]/[slug]">) {
  const params = await props.params;
  const element = elements.find(
    (e) => e.category === params.category && e.slug === params.slug,
  );

  if (!element) {
    notFound();
  }

  const Element = element.element;

  return (
    <>
      <Element />

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
            name={element.name}
            discription={element.description}
            content={element.content}
          />
        </div>
      </div>
    </>
  );
}
