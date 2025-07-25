import React, { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function BasicForm() {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [Password, setPassword] = useState('');
    const [display, setDisplay] = useState(false);

    const resetFormData = () => {
        setDisplay(false);
        setName('');
        setEmail('');
        setPassword('');
    }

    return (
        <View style={style.container}>
            <Text style={{ fontSize: 20 }}>Simple form in react native</Text>
            <View >
                <Text style={{ fontSize: 20, marginTop: 10, marginLeft: 5, marginBottom: 0, }}>Name</Text>
                <TextInput value={name} onChangeText={text => setName(text)} placeholder="Enter your name" style={style.input} />
            </View>
            {/* email  */}
            <View>
                <Text style={{ fontSize: 20, marginTop: 10, marginLeft: 5, marginBottom: 0, }}>Email</Text>
                <TextInput value={email} onChangeText={text => setEmail(text)} placeholder="Enter your Email" style={style.input} />
            </View>
            {/* password  */}
            <View>
                <Text style={{ fontSize: 20, marginTop: 10, marginLeft: 5, marginBottom: 0, }}>Password</Text>
                <TextInput value={Password} secureTextEntry={true} onChangeText={text => setPassword(text)} placeholder="Enter your Password" style={style.input} />
            </View>

            <View style={{ marginBottom: 10 }} >
                <Button title="Print Details" color={'green'} onPress={() => setDisplay(true)} />
            </View>
            <Button title="Clear Details" color={'red'} onPress={resetFormData} />

            <View>
                {
                    display ? <View>
                        <Text style={{ fontSize: 20, marginTop: 10, marginLeft: 5, marginBottom: 0, }}>Name: {name}</Text>
                        <Text style={{ fontSize: 20, marginTop: 10, marginLeft: 5, marginBottom: 0, }}>Email: {email}</Text>
                        <Text style={{ fontSize: 20, marginTop: 10, marginLeft: 5, marginBottom: 0, }}>Password: {Password}</Text>
                    </View> : null
                }
            </View>
        </View>
    )
}

const style = StyleSheet.create({
    input: {
        marginTop: 1,
        marginBottom: 10,
        borderColor: 'black',
        borderWidth: 1,
        padding: 10,
        borderRadius: 5,
    },
    textInput: {
        fontSize: 20,

    },
    container: {
        borderColor: 'black',
        borderWidth: 1,
        margin: 10,
        borderRadius: 5,
        padding: 10

    }
})