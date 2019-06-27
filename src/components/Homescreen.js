import React, { Component } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import ToDos from "./ToDos";

export default class Homescreen extends Component {
    state = {
        todos: [
            {
                name: 'Wash the dishes',
                status: 'To do'
            },
            {
                name: 'Learn ReactNative',
                status: 'In process'
            }
        ]
    }

    addToDo = () => {
        let toDo = {
            name: 'Prepare for the interview',
            status: 'To do'
        }
        
        const newTodos = this.state.todos;
        newTodos.push(toDo);
        this.setState({ todos: newTodos });
    }

    render() {

        return (
            <View>
                
                <ToDos todos={this.state.todos}/>
                <Button onPress={this.addToDo} title='Add to do' />

            </View>
        );
    }
    
}