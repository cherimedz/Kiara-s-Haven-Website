import SubOrgPage from "../components/SubOrgPage";
import { getSubOrg } from "../lib/subOrgs";

export const metadata = { title: "Sebastian's Haven — Kiara's Haven" };

export default function Page() {
  return <SubOrgPage org={getSubOrg("sebastians-haven")} />;
}
