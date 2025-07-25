import React, { useState } from "react";
import { ActivityIndicator, Button, Text, View } from 'react-native';


export default function Counter() {
    const [count, setCount] = useState(0);
    const [loading, setLoading] = useState(false);

    const handleIncrement = () => {
        if (count >= 10) {
            return alert("count cannot be more than 10")
        }
        setCount(count + 1);
    }

    const handleDecrement = () => {
        if (count <= 0) {
            return alert("count cannot be less than 0")
        }

        setCount(count - 1);
    }

    const handleSubmit = () => {
        alert("submit alert");
        setLoading(true);
        setTimeout(() => {
            setLoading(false);

        }, 1000)
    }

    return (
        <View>
            <Text >Counter is {count}</Text>
            {
                loading ? <ActivityIndicator /> : <Button title="Submit" onPress={handleSubmit} />
            }
            <Button title="increment" onPress={handleIncrement}  />
            <Button title="decrement" onPress={handleDecrement} />

        </View>
    )
}