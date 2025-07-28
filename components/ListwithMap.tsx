import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default function ListwithMap() {
    const user = [
        { id: 1, name: "A", email: "a@b.com" },
        { id: 2, name: "B", email: "b@b.com" },
        { id: 3, name: "C", email: "c@b.com" },
        { id: 4, name: "D", email: "d@b.com" },
        { id: 5, name: "E", email: "e@b.com" },
        { id: 6, name: "F", email: "f@b.com" },
        { id: 7, name: "G", email: "g@b.com" },
        { id: 8, name: "H", email: "h@b.com" },
        { id: 9, name: "I", email: "i@b.com" },
        { id: 10, name: "J", email: "j@b.com" },
        { id: 11, name: "K", email: "k@b.com" },
        { id: 12, name: "L", email: "l@b.com" },
        { id: 13, name: "M", email: "m@b.com" },
        { id: 14, name: "N", email: "n@b.com" },
        { id: 15, name: "O", email: "o@b.com" },
        { id: 16, name: "P", email: "p@b.com" },
        { id: 17, name: "Q", email: "q@b.com" },
        { id: 18, name: "R", email: "r@b.com" },
        { id: 19, name: "S", email: "s@b.com" },
        { id: 20, name: "T", email: "t@b.com" },
    ]
    return (
        <View>
            {/* <Text>ListwithMap</Text>
            <ScrollView>
            {
                user.map((item) => {
                    return (
                        <>
                            <Text key={item.id}>{item.name}</Text>
                            <Text key={item.id}>{item.email}</Text>
                            <Text key={item.id}>{item.email}</Text>
                        </>
                    )
                })
            }
            </ScrollView>
            */}

            <Text style={{ fontSize: 31 }}>Grid with Dynamic data</Text>
            <View style={{ flex: 1, flexDirection: "row", flexWrap: "wrap" }}>
                <Text style={style.text}>NIrma</Text>
                <Text style={style.text}>NIrma</Text>
                <Text style={style.text}>NIrma</Text>
                <Text style={style.text}>NIrma</Text>
                <Text style={style.text}>NIrma</Text>
                <Text style={style.text}>NIrma</Text>
                <Text style={style.text}>NIrma</Text>
                <Text style={style.text}>NIrma</Text>
                <Text style={style.text}>NIrma</Text>
            </View>

        </View>
    )
}


const style = StyleSheet.create({
    text: {
        fontSize: 31,
        color: "red",
        backgroundColor: "yellow",
        margin: 10,
        padding: 10,
        height: 100,
        width: 100,
        display: "flex",
        justifyContent: "center",
        alignItems: "center"

    }
})