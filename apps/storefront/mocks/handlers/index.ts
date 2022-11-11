import users from "./users";
import friends from "./friends";

export const handlers = [...Object.values(users), ...Object.values(friends)];
