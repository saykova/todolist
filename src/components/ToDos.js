import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native'; 
import ToDoDetails from './ToDoDetails';

const ToDos = (props) => { 
    return (
        <View>
            { props.todos.map((todo, index) => {
                return (
                    <ToDoDetails key={index} todoitem={todo}></ToDoDetails>
                )
            })
            }
        </View>
    )
};
 
export default ToDos;
