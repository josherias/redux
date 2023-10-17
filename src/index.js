import {
  bugAdded,
  bugResolved,
  getUnresolvedBugs,
  bugAssignedToUser,
} from "./store/bugs";
import configureStore from "./store/configureStore";
import { projectAdded } from "./store/projects";
import { userAdded } from "./store/users";
const store = configureStore();

store.dispatch(userAdded({ name: "User One" }));
store.dispatch(userAdded({ name: "User Two" }));

store.dispatch(projectAdded({ name: "Project one" }));
store.dispatch(bugAdded({ description: "Bug 1" }));
store.dispatch(bugAdded({ description: "Bug 2" }));
store.dispatch(bugAdded({ description: "Bug 3" }));

store.dispatch(bugAssignedToUser({ bugId: 1, userId: 1 }));

store.dispatch(bugResolved({ id: 1 }));

const unresolvedBugs = getUnresolvedBugs(store.getState());
console.log(unresolvedBugs);

// store.dispatch(actions.bugRemoved({ id: 1 }));
