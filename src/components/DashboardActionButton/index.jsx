import Link from "next/link";

const DashboardActionButton = ({ dashboardButtonTitle, dashboardButtonLink }) => {
  return (  
    <div>
      <Link href={dashboardButtonLink} className="rounded-lg p-2 bg-color-accent text-color-dark font-bold">{dashboardButtonTitle}</Link>
    </div>
  );
}
 
export default DashboardActionButton;