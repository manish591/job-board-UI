import Navbar from "@/components/navbar";
import Tabs from "@/components/tabs";
import Main from "@/components/main";

export default function Dashboard() {
  return (
    <div className="absolute top-0 left-0 right-0 bottom-0 overflow-hidden">
      <div className="flex flex-col absolute top-0 left-0 right-0 bottom-0 overflow-hidden">
        <div>
          <Navbar/>
          <Tabs />
        </div>
        <Main />
      </div>
    </div>
  )
}