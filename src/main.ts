import { CustomMap } from "./CustomMap";
import "./style.css";
import { User } from "./User";

const user = new User();
const customMap = new CustomMap("app");
customMap.addUserMarker(user);
