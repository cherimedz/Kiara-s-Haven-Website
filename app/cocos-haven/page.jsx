import SubOrgPage from "../components/SubOrgPage";
import { getSubOrg } from "../lib/subOrgs";

export const metadata = { title: "Coco's Haven — Kiara's Haven" };

export default function Page() {
  return <SubOrgPage org={getSubOrg("cocos-haven")} />;
}
