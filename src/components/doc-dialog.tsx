import { Book } from "lucide-react";
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
  Mdx: React.ReactNode;
};
export default function DocDialog({ name, discription, Mdx }: DocDialogProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button size={"icon-sm"} className="cursor-pointer rounded-full">
          <Book />
        </Button>
      </DialogTrigger>

      <DialogContent className="max-h-8/12 w-full max-w-7xl">
        <DialogHeader>
          <DialogTitle>{name}</DialogTitle>
          <DialogDescription>{discription}</DialogDescription>
        </DialogHeader>

        {Mdx}
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
