import {EDIT_TASK} from "./types";
import {CREATE_TASK} from "./types";
import {REMOVE_TASK} from "./types";
import uuid from "react-uuid";

export const editTask = (id, params = {}) => {
    return {
        type: EDIT_TASK,
        payload: {
            id,
            params
        }
    }
}

export const createTask = ({name,description}) => {
    return {
        type: CREATE_TASK,
        payload :{
            id: uuid(),
            name,
            description,
            status: "Pending"
        }
    }
}

export const removeTASK = (id) => {
    return {
        type: REMOVE_TASK,
        id,
    }
}