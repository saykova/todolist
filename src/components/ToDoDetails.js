import React, { Component } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import PropTypes from 'prop-types';

const ToDoDetails = ({ todoitem, index, deleteTodoItem }) => {
    return (
        <View>
            <Text>{todoitem.name}</Text>
            <Text>{todoitem.status}</Text>
            <Button onPress={() => deleteTodoItem(index)} style={styles.deleteButton} title='Delete' />
        </View> 
     )
};

const styles = StyleSheet.create({
    deleteButton: {
        
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