import SubOrgPage from "../components/SubOrgPage";
import { getSubOrg } from "../lib/subOrgs";

export const metadata = { title: "Simba's Haven — Kiara's Haven" };

export default function Page() {
  return <SubOrgPage org={getSubOrg("simbas-haven")} />;
}
