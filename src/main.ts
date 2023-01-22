import { Company } from "./Company";
import { CustomMap } from "./CustomMap";
import "./style.css";
import { User } from "./User";

const user = new User();
const company = new Company();
const customMap = new CustomMap("app");
customMap.addUserMarker(user);
customMap.addUserMarker(company);
