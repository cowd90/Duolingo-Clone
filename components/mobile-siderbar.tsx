import { 
  Sheet,
  SheetContent,
  SheetTrigger
 } from "@/components/ui/sheet";

 import Sidebar from "@/components/sidebar"
import { Menu } from "lucide-react";

 export const MobileSiderbar = () =>  {
  return (
    <Sheet>
      <SheetTrigger>
        <Menu className="text-white" />
      </SheetTrigger>
      <SheetContent>
        <Sidebar/>
      </SheetContent>
    </Sheet>
  )
 }