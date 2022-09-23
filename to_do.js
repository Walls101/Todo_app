// const lists = {
//     1: {name: 'Shopping list'},
//     2: {name: 'Honey do list'},
//     3: {name: 'Workout steps'}
// }

// const currentList = {
//     name: "Shopping list",
//     todos:[
//         {
//             text: 'bananas',
//             completed: false
//         },
//         {
//             text: '1 lbs ground turkey',
//             completed: false
//         },
//         {
//             text: 'chicken thighs',
//             completed: false
//         }
//     ]
// }

const lists = {
    1: {
        name: "Shopping list",
        todos: [
            {
                text: 'bananas', 
                completed: false
            },
            {
                text: '1 lbs ground turkey',
                completed: false
            },
            {
                text: 'chicken thighs',
                completed: false
            }
        ]
    },
    2: {
        name: "Honey do list",
        todos: [
            {
                text: 'help clean',
                completed: false
            },
            {
                text: 'take out trash',
                completed: false
            }
        ]
    },
    3: {
        name: "Workout steps",
        todos: [
            {
                text: 'stretch',
                completed: false
            },
            {
                text: 'jog',
                completed: false
            },
            {
                text: 'weight lifting',
                completed: false
            }
        ]
    }//took out the comma. May need later in the future.
}
const currentList = list[0];