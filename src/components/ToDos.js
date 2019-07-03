import React from 'react';
import { View } from 'react-native'; 
import ToDoDetails from './ToDoDetails';

const ToDos = ({ todos, deleteTodoItem, handleTaskNameChanged }) => { 
    return (
        <View>
            { todos.map((todo, index) => {
                return (
                    <ToDoDetails 
                        deleteTodoItem={deleteTodoItem}
                        handleTaskNameChanged={handleTaskNameChanged}
                        key={index}
                        index={index}
                        todoitem={todo}
                        style={[{ flex: 1 }]}>                            
                    </ToDoDetails>
                )
            })
            }
        </View>
    )
};
 
export default ToDos;
