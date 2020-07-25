// import fs from "fs";
// import path from "path";

import absencesJson from "./json_files/absences.json";
import membersJson from "./json_files/members.json";

// const ABSENCES_PATH = path.join(__dirname, 'json_files', 'absences.json');
// const MEMBERS_PATH = path.join(__dirname, 'json_files', 'members.json');

// const readJsonFile = (path) => new Promise((resolve) => fs.readFile(path, 'utf8', (_, data) => resolve(data)))
// .then((data) => JSON.parse(data))
// .then((data) => data.payload);

export const members = async () => membersJson;
export const absences = async () => absencesJson;
