export default function JobDescription() {
  return (
    <div className="py-9 pl-[6vw] border-t border-border100">
      <p className="text-textBlack400">About the job</p>
      <div className="text-textBlack900 font-medium mt-3">
        <ol className="list-decimal pl-4">
          <li>Handle the UI/UX research design</li>
          <li>Work on researching on latest web applications designs & trends</li>
          <li>Work on conceptualizing and visualizing</li>
          <li>Work on creating graphics content and other graphic related works</li>
        </ol>
        <div className="mt-2">
          <p>Benefits:</p>
          <ul className="list-disc pl-4">
            <li>Health insurance</li>
            <li>Provident Fund</li>
          </ul>
        </div>
        <div className="mt-2">
          <p>Schedule:</p>
          <ul className="list-disc pl-4">
            <li>Day shift</li>
          </ul>
        </div>
        <div className="mt-2">
          <p>Supplemental pay types:</p>
          <ul className="list-disc pl-4">
            <li>Performance bonus</li>
            <li>Yearly bonus</li>
          </ul>
        </div>
        <div className="mt-2">
          <p>Work Location:</p>
          <ul className="list-disc pl-4">
            <li>In person</li>
          </ul>
        </div>
      </div>
    </div>
  )
}