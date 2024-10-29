import React, { useState } from 'react';
import { View, Text, TextInput, Button, FlatList, TouchableOpacity, StyleSheet } from 'react-native';

const ToDoList = () => {
    const [task, setTask] = useState('');
    const [tasks, setTasks] = useState([]);

    // Tilføjer ny besøgssted
    const addTask = () => {
        if (task) {
            setTasks([...tasks, { id: Date.now().toString(), title: task }]);
            setTask('');
        }
    };

    // Fjerner besøgssted
    const deleteTask = (id) => {
        setTasks(tasks.filter(item => item.id !== id));
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>To-Do List: Places to Visit</Text>
            
            <TextInput
                style={styles.input}
                placeholder="Enter a place to visit"
                value={task}
                onChangeText={setTask}
            />
            <Button title="Add Place" onPress={addTask} />

            <FlatList
                data={tasks}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <View style={styles.taskContainer}>
                        <Text style={styles.taskText}>{item.title}</Text>
                        <TouchableOpacity onPress={() => deleteTask(item.id)} style={styles.deleteButton}>
                            <Text style={styles.deleteButtonText}>Done</Text>
                        </TouchableOpacity>
                    </View>
                )}
                ListEmptyComponent={<Text style={styles.emptyText}>No places added</Text>}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    input: {
        borderWidth: 1,
        padding: 10,
        marginBottom: 10,
    },
    taskContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#ddd',
    },
    taskText: {
        fontSize: 18,
    },
    deleteButton: {
        backgroundColor: '#FF0000',
        paddingVertical: 5,
        paddingHorizontal: 10,
        borderRadius: 5,
    },
    deleteButtonText: {
        color: '#fff',
        fontSize: 16,
    },
    emptyText: {
        textAlign: 'center',
        fontSize: 16,
        color: 'gray',
        marginTop: 20,
    },
});

export default ToDoList;
