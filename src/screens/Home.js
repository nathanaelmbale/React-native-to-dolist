import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity, FlatList } from 'react-native';

import Header from '../Components/Header';
import Footer from '../Components/Footer';

export default function Home({ navigation, GlobalState }) {
    const { toDoList, setToDoList, task, setTask, setChosenTask } = GlobalState;

    useEffect(() => {
        setToDoList(prevState => [...prevState, { id: 2, task: 'go to bed' }])
    }, [])

    const renderItem = ({ item }) => {
        return (
            <TouchableOpacity
                style={styles.task}
                onPress={() => handleChooseTask(item)}
            >
                <Text>{item.task}</Text>
            </TouchableOpacity>
        ) 
    }

    const handleSaveTask = () => {
        const index = toDoList.length + 1;

        setToDoList(prevState => [...prevState, { id: index, task: task }]);

        setTask('');
    }

    const handleChooseTask = (item) => {
        setChosenTask(item);
        navigation.navigate('ChosenTask');
    }

    return (
        <View style={styles.screen}>
            <Header />
            <View style={styles.body}>
                <TextInput 
                    style={styles.input}
                    onChangeText={setTask}
                    value={task}
                    placeholder="To do task..."
                />
                <TouchableOpacity 
                    style={styles.button}
                    onPress={() => handleSaveTask()}
                >
                    <Text style={styles.buttonText} >Submit</Text>
                </TouchableOpacity>
                <FlatList 
                    data={toDoList}
                    renderItem={renderItem}
                    keyExtractor={item => item.id}
                />
            </View>
            <Footer navigation={navigation} />
        </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
    },
    body: {
        flex: 8,
        width: '100%',
        backgroundColor: '#14141410'
    },
    task: {
        backgroundColor: 'white',
        padding: 10,
        margin: 10,
        borderRadius: 12,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,
        elevation: 4,
    },
    input: {
        backgroundColor: 'white',
        padding: 15,
        paddingTop: 10,
        paddingBottom: 10,
        margin: 10,
        marginTop: 30,
        borderRadius: 12,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,
        elevation: 4,
    },
    button: {
        alignItems: 'center',
        backgroundColor: '#141414',
        padding: 15,
        paddingTop: 10,
        paddingBottom: 10,
        margin: 10,
        marginBottom: 30,
        borderRadius: 12,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,
        elevation: 4,
    },
    buttonText: {
        color: 'white',
        fontWeight: '900'
    }
})