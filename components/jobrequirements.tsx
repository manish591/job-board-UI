import Image from "next/image";

export default function JobRequirements() {
  return (
    <div className="py-9 pl-[6vw] border-t border-border100">
      <div className="flex items-start gap-24">
        <div>
          <p className="text-sm text-textBlack400">Skills Required</p>
          <div className="mt-2">
            <div className="grid grid-cols-1 gap-2">
              <div className="w-max flex items-center gap-2 border border-border100 rounded-[6px] py-1 px-1.5">
                <Image src="/figma.svg" alt="skill" width={18} height={18} />
                <p className="text-textBlack600 text-sm">Figma</p>
              </div>
              <div className="w-max flex items-center gap-2 border border-border100 rounded-[6px] py-1 px-1.5">
                <Image src="/illustrator.svg" alt="skill" width={18} height={18} />
                <p className="text-textBlack600 text-sm">Adobe Illustrator</p>
              </div>
              <div className="w-max flex items-center gap-2 border border-border100 rounded-[6px] py-1 px-1.5">
                <Image src="/xd.svg" alt="skill" width={18} height={18} />
                <p className="text-textBlack600 text-sm">Adobe XD</p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <p className="text-sm text-textBlack400">Preferred Language</p>
          <h3 className="font-bold text-textBlack900 mt-2">English</h3>
        </div>
        <div>
          <p className="text-sm text-textBlack400">Type</p>
          <h3 className="font-bold text-textBlack900 mt-2">Full time</h3>
        </div>
        <div>
          <p className="text-sm text-textBlack400">Experience</p>
          <h3 className="font-bold text-textBlack900 mt-2">3+ Years of Experience</h3>
        </div>
      </div>
    </div>
  )
}