import React, { Component } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import PropTypes from 'prop-types';

const ToDoDetails = ({ todoitem, index, deleteTodoItem }) => {
    return (
        <View style={styles.todoItemWrapper}>
            <Text style={styles.todoItemName}>{todoitem.name}</Text>
            <Text style={styles.todoItemStatus}>{todoitem.status}</Text>
            <View style={styles.deleteButtonWrapper}>
                <Button onPress={() => deleteTodoItem(index)} title='Delete' color="#dc143c" />
            </View>
        </View> 
     )
};

const styles = StyleSheet.create({
    todoItemWrapper: {
        flex: 1,
        flexDirection: 'row',
        marginVertical: 25,
    },
    todoItemName: {
        width: "55%",
        height: 50,
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
 
export default ToDoDetails;