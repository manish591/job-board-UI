import Image from "next/image";

export default function CompanyInfo() {
  return (
    <div className="py-9 pl-[6vw] border-t border-border100">
      <div className="flex items-center gap-3">
        <Image src="/atlassian2.png" alt="company" width={40} height={40} />
        <p className="text-lg text-textBlack700">Atlassian</p>
      </div>
      <div className="mt-6 grid grid-cols-2 gap-4 w-[80%]">
        <div>
          <p className="text-textBlack400 text-sm">Company size</p>
          <h3 className="text-textBlack900 mt-2">1k-2k Employees</h3>
        </div>
        <div>
          <p className="text-textBlack400 text-sm">Type</p>
          <h3 className="text-textBlack900 mt-2">Private</h3>
        </div>
        <div>
          <p className="text-textBlack400 text-sm">Sector</p>
          <h3 className="text-textBlack900 mt-2">Information Technology, Infrastructure</h3>
        </div>
        <div>
          <p className="text-textBlack400 text-sm">Funding</p>
          <h3 className="text-textBlack900 mt-2">Bootstraped</h3>
        </div>
        <div>
          <p className="text-textBlack400 text-sm">Founded In</p>
          <h3 className="text-textBlack900 mt-2">2019</h3>
        </div>
        <div>
          <p className="text-textBlack400 text-sm">Founded By</p>
          <h3 className="text-textBlack900 mt-2">Scott Farqhar, Mike Cannon-Brrokes</h3>
        </div>
      </div>
    </div>
  )
}