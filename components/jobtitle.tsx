import { CircleDollarSign, MapPin } from "lucide-react";

export default function JobTitle() {
  return (
    <div className="py-9 pl-[6vw]">
      <div className="flex items-center gap-4">
        <h1 className="text-3xl text-textBlack900 font-bold">Senior Product Designer</h1>
        <span className="font-bold bg-border200 w-[4px] h-[4px] rounded-full"/>
        <p className="text-textBlack500 text-sm">posted 2 days ago</p>
        <div className="border border-textGreen300 bg-[#ECFDF3] py-1.5 px-2.5 flex items-center gap-2 rounded-full">
          <span className="font-bold bg-textGreen200 w-[6px] shrink-0 h-[6px] rounded-full"/>
          <p className="text-xs text-textGreen100 font-medium">Open</p>
        </div>
      </div>
      <div className="mt-6">
        <div className="flex items-center gap-4">
          <div className="flex items-center text-textBlack800 gap-2">
            <MapPin strokeWidth={1.5} />
            <p className="text-lg font-medium">Delaware, USA</p>
          </div>
          <span className="font-bold bg-border200 w-[4px] h-[4px] rounded-full"/>
          <div className="flex items-center text-textBlack800 gap-2">
            <CircleDollarSign strokeWidth={1.5} />
            <p className="text-lg font-medium">$300k-$400k</p>
          </div>
        </div>
      </div>
    </div>
  )
}