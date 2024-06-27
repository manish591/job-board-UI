import Sidebar from "@/components/sidebar";
import JobTitle from "@/components/jobtitle";
import JobDescription from "@/components/jobdescription";
import CompanyInfo from "@/components/companyinfo";
import JobRequirements from "@/components/jobrequirements";

export default function Main() {
  return (
    <div className="relative h-full">
      <div className="grid grid-cols-[minmax(0,1fr)_400px] h-full absolute top-0 left-0 right-0 bottom-0 overflow-hidden">
        <div className="h-full overflow-x-hidden overflow-y-scroll">
          <JobTitle />
          <JobRequirements />
          <JobDescription />
          <CompanyInfo />
        </div>
        <Sidebar />
      </div>
    </div>
  )
}