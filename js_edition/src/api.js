import absencesJson from "./json_files/absences.json";
import membersJson from "./json_files/members.json";

export const members = async () => membersJson;
export const absences = async () => absencesJson;
