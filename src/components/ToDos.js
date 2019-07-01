import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native'; 
import ToDoDetails from './ToDoDetails';

const ToDos = ({ todos, deleteTodoItem }) => { 
    return (
        <View>
            { todos.map((todo, index) => {
                return (
                    <ToDoDetails 
                        deleteTodoItem={deleteTodoItem}
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
