import { createContext } from "react";

const UserContext = createContext({
  user: { name: "Chaitali", email: "Chaitali@live.ca" },
});
UserContext.displayName = "UserContext";

export default UserContext;
