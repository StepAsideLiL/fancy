import { Book } from "lucide-react";
import { MDXRemote } from "next-mdx-remote/rsc";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

type DocDialogProps = {
  name: string;
  discription: string;
  content: string;
};
export default function DocDialog({
  name,
  discription,
  content,
}: DocDialogProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button size={"icon-sm"} className="cursor-pointer rounded-full">
          <Book />
        </Button>
      </DialogTrigger>

      <DialogContent className="block min-h-8/12 w-full min-w-5xl">
        <DialogHeader className="pb-2">
          <DialogTitle>{name}</DialogTitle>
          <DialogDescription>{discription}</DialogDescription>
        </DialogHeader>

        <MDXRemote source={content} />
        {/* <DialogFooter>
            <DialogClose asChild>
              <Button variant="outline">Cancel</Button>
            </DialogClose>
            <Button type="submit">Save changes</Button>
          </DialogFooter> */}
      </DialogContent>
    </Dialog>
  );
}
