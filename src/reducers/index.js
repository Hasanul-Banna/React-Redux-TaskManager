const initialState = [
    {
        id: 1,
        name:"name1",
        des:"lorem lorem",
        status:"pending"
    },
    {
        id: 2,
        name:"name2",
        des:"lorem lorem lorem",
        status:"on going"
    }
]

const tasks = (state={ tasks : initialState }, action) => {
    return state;
}

export default tasks;