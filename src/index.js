import * as actions from "./store/bugs";
import configureStore from "./store/configureStore";
import { projectAdded } from "./store/projects";

const store = configureStore();

store.dispatch(projectAdded({ name: "Project one" }));
store.dispatch(actions.bugAdded({ description: "Bug 1" }));
store.dispatch(actions.bugAdded({ description: "Bug 2" }));
store.dispatch(actions.bugAdded({ description: "Bug 3" }));

store.dispatch(actions.bugResolved({ id: 1 }));

// store.dispatch(actions.bugRemoved({ id: 1 }));
