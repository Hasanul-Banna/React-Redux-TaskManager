import { CREATE_TASK, EDIT_TASK, REMOVE_TASK } from "../actions/types";

const initialState = [
    // {
    //     id: 1,
    //     name: "name1",
    //     des: "lorem lorem",
    //     status: "Pending"
    // },
    // {
    //     id: 2,
    //     name: "name2",
    //     des: "lorem lorem lorem",
    //     status: "onGoing"
    // },
    // {
    //     id: 3,
    //     name: "name3",
    //     des: "lorem lorem lorem",
    //     status: "onGoing"
    // },
    // {
    //     id: 4,
    //     name: "name4",
    //     des: "lorem lorem lorem",
    //     status: "Done"
    // }
]

const tasks = (state = { tasks: initialState }, action) => {
    // if (action.type === EDIT_TASK) {
    //     const { payload } = action;
    //     return {
    //         tasks: state.tasks.map(x => {
    //             if (x.id === payload.id) {
    //                 return Object.assign({}, x, payload.params)
    //             }
    //             return x;
    //         }),
    //     };
    // }
    const { payload } = action
    switch (action.type) {
        case EDIT_TASK: {
            return {
                tasks: state.tasks.map(x => {
                    if (x.id === payload.id) {
                        return Object.assign({}, x, payload.params)
                    }
                    return x;
                }),
            }
        }
        case CREATE_TASK :{
            return {
                tasks : state.tasks.concat(action.payload)
            }
        }
        case REMOVE_TASK :{
            return {
                tasks : state.tasks.filter( x => x.id !== action.id)
            }
        }
        default: return state;
    }
}
    export default tasks;