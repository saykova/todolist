import React, { Component } from 'react';
import { AsyncStorage, StyleSheet, Text, View, Button, TextInput } from 'react-native';
import ToDos from "./ToDos";

export default class Homescreen extends Component {
    state = {
        todos: [],
        newTaskName: '',
        taskNewName: ''
    }

    componentDidMount = async () => {
        await this.retrieveTodos();
    }

    retrieveTodos = async () => {
        try {
            const getTodos = await AsyncStorage.getItem('todos');
            
            if (getTodos !== null) {
                this.setState({ todos: JSON.parse(getTodos) });
            }
            
        } catch (error) {
            console.log(error);
        }
    }

    addToDo = async () => {

        if(this.state.newTaskName != '') {
            let toDo = {
                name: this.state.newTaskName,
                status: 'To do'
            }

            const newTodos = this.state.todos;
            newTodos.push(toDo);
            this.setState({ todos: newTodos, newTaskName: '' });

            // save data to the local storage
            try {
                await AsyncStorage.setItem('todos', JSON.stringify(newTodos));
            } catch (error) {
                console.log(error);                
            }
        }
        
    }

    deleteTodoItem = async (indexItem) => {

        const newTodos = this.state.todos;
        newTodos.splice(indexItem, 1);
        this.setState({ todos: newTodos });

        // update data
        try {
            await AsyncStorage.setItem('todos', JSON.stringify(newTodos));
        } catch (error) {
            console.log(error);                
        }

    }

    handleNewTaskNameChanged = (newTaskName) => {
        this.setState({newTaskName});
    }

    handleTaskNameChanged = (index, newTaskName) => {
        let newTodos = this.state.todos;
        newTodos[index].name = newTaskName;
        this.setState({todos: newTodos});
    }

    render() {

        return (

            <View style={styles.container}>                
                { this.state.todos ? 
                    <View style={styles.todosContainer}>
                        <ToDos todos={this.state.todos} deleteTodoItem={this.deleteTodoItem} handleTaskNameChanged={this.handleTaskNameChanged} />
                    </View> : null
                }

                <View style={styles.textInputContainer}>
                    <TextInput 
                        style={styles.textInput}
                        placeholder="New task"
                        value={this.state.newTaskName}
                        onChangeText={this.handleNewTaskNameChanged}
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