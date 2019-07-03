import React, { Component } from 'react';
import { StyleSheet, Text, TextInput, View, Button, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';

export default class ToDoDetails extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isEditing: false,
            taskNewName: ''
        }
    }

    clickTaskName = () => {
        this.setState({isEditing: true, taskNewName: this.props.todoitem.name});
    }
    
    updateTaskName = (taskNewName) => {
        this.setState({taskNewName: taskNewName});
    }

    saveChanges = () => {
        this.setState({isEditing: false});
        this.props.handleTaskNameChanged(this.props.index, this.state.taskNewName)
    }

    render() {

         if(this.state.isEditing) {

             return(
                <View style={styles.todoItemWrapper}>
                    <TextInput 
                        style={styles.todoItemName}
                        value={this.state.taskNewName}
                        onSubmitEditing={this.saveChanges}
                        onChangeText={this.updateTaskName}
                    /> 
                    
                    <Text style={styles.todoItemStatus}>{this.props.todoitem.status}</Text>
                    <View style={styles.deleteButtonWrapper}>
                        <Button 
                            onPress={this.saveChanges}
                            title='Save'
                            color="#3cb371" />
                    </View>
                </View>
            );

        } else {

            return(
                <View style={styles.todoItemWrapper}>
                    <TouchableOpacity style={styles.todoItemName} onPress={this.clickTaskName}>
                        <Text >{this.props.todoitem.name}</Text>
                    </TouchableOpacity>
                
                    <Text style={styles.todoItemStatus}>{this.props.todoitem.status}</Text>
                    <View style={styles.deleteButtonWrapper}>
                        <Button onPress={() => this.props.deleteTodoItem(this.props.index)} title='Delete' color="#dc143c" />
                    </View>
                </View>
            );
        }
    }
}

const styles = StyleSheet.create({
    todoItemWrapper: {
        flex: 1,
        flexDirection: 'row',
        marginVertical: 25,
    },
    todoItemName: {
        width: "55%",
        height: 50,
        textAlignVertical: 'top'
    },
    todoItemStatus: {
        width: "25%",
        height: 50,
    },
    deleteButtonWrapper: {
        width: "20%",
        height: 20,
    }
});

ToDoDetails.propTypes = {
    todoitem: PropTypes.shape({
        name: PropTypes.string.isRequired,
        status: PropTypes.string.isRequired
    }).isRequired,
    deleteTodoItem: PropTypes.func.isRequired,
    index: PropTypes.number.isRequired
};