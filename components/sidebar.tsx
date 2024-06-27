import { Button } from "@/components/button";
import { Eye, MessageSquare, Pencil, Trash2, User, UserRoundSearch } from "lucide-react";

export default function Sidebar() {
  return (
    <div className="py-9 px-6 h-full border-l-2 border-border100 bg-bgSecondary overflow-x-hidden overflow-y-scroll">
      <div className="grid grid-cols-2 gap-4 items-center">
        <Button variant="secondary" className="flex items-center gap-2.5">
          <Trash2 height={20} width={20} strokeWidth={1} className="text-brand shrink-0" />
          <span>Delete job</span>
        </Button>
        <Button className="flex items-center gap-2.5">
          <Pencil height={18} width={18} className="shrink-0" />
          <span>Edit job</span>
        </Button>
      </div>
      <div className="mt-6 px-3">
        <div className="flex justify-between items-center px-3">
          <div className="text-textBlack700 flex items-center py-6 gap-2.5">
            <User />
            <span >Applicants</span>
          </div>
          <h3 className="text-lg font-bold text-textBlack900">400</h3>
        </div>
        <div className="flex justify-between items-center px-3 border-t">
          <div className="text-textBlack700 flex items-center py-6 gap-2.5">
            <UserRoundSearch />
            <span >Matches</span>
          </div>
          <h3 className="text-lg font-bold text-textBlack900">100</h3>
        </div>
        <div className="flex justify-between items-center px-3 border-t">
          <div className="text-textBlack700 flex items-center py-6 gap-2.5">
            <MessageSquare />
            <span >Messages</span>
          </div>
          <h3 className="text-lg font-bold text-textBlack900">147</h3>
        </div>
        <div className="flex justify-between items-center px-3 border-t">
          <div className="text-textBlack700 flex items-center py-6 gap-2.5">
            <Eye />
            <span >Views</span>
          </div>
          <h3 className="text-lg font-bold text-textBlack900">800</h3>
        </div>
      </div>
    </div>
  )
}