import React, { Component } from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';
import ToDos from "./ToDos";

export default class Homescreen extends Component {
    state = {
        todos: [
            {
                id: 1,
                name: 'Wash the dishes',
                status: 'To do'
            },
            {
                id: 2,
                name: 'Learn ReactNative',
                status: 'In process'
            }
        ],
        newTaskName: ''
    }

    addToDo = () => {

        if(this.state.newTaskName != '') {
            let toDo = {
                name: this.state.newTaskName,
                status: 'To do'
            }

            const newTodos = this.state.todos;
            newTodos.push(toDo);
            this.setState({ todos: newTodos });
            this.setState({ newTaskName: '' });
        }
    }

    deleteTodoItem = (indexItem) => {
        const newTodos = this.state.todos;
        newTodos.splice(indexItem, 1);
        this.setState({ todos: newTodos });
    }

    handleTaskNameChanged = (newTaskName) => {
        this.setState({newTaskName});
    }

    render() {

        return (
            <View style={styles.container}>
                
                <View style={styles.todosContainer}>
                    <ToDos todos={this.state.todos} deleteTodoItem={this.deleteTodoItem} />
                </View>

                <View style={styles.textInputContainer}>
                    <TextInput 
                        style={styles.textInput}
                        placeholder="New task"
                        value={this.state.newTaskName}
                        onChangeText={this.handleTaskNameChanged}
                    />
                </View>

                <Button onPress={this.addToDo} title='Add to do' />

            </View>
        );
    }
    
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // justifyContent: 'center',
        // paddingHorizontal: 20,
        paddingLeft: 10,
        paddingRight: 10,
        paddingTop: 60,
        flexWrap: 'wrap',
    },
    todosContainer: {

    },
    textInputContainer: {
        paddingTop: 30,
        paddingBottom: 30,
    },
    textInput: {
        borderTopWidth: 1,
        borderBottomWidth: 1,
        paddingTop: 10,
        paddingBottom: 10,
        height: 50,
        fontSize: 25,
    },
});