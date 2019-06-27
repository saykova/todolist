import React, { Component } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import PropTypes from 'prop-types';

const ToDoDetails = ({todoitem}) => {
    return (
        <View>
            <Text>{todoitem.name}</Text>
            <Text>{todoitem.status}</Text>
        </View> 
     )
};

ToDoDetails.propTypes = {
    todoitem: PropTypes.shape({
        name: PropTypes.string.isRequired,
        status: PropTypes.string.isRequired
    }).isRequired
};
 
export default ToDoDetails;