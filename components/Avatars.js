import React from 'react';
import { Avatar } from 'react-native-elements';
import styled from 'styled-components/native';

const Container = styled.View`
    width: 100%;
    height: 60px;
`
const Box = styled.View`
    flex-direction: row;
    align-items: center;
    padding-left: 10px;
    padding-top: 5px;
`
const TextInput = styled.TextInput`
    width: 250px;
    height: 40px;
    border: 1px solid black;
    border-radius: 50px;
    padding-left: 20px;
    margin-left: 10px;
    color: #000;
    font-size: 15px;
`

const Avatars = () => {
    return (
        <Container>
            <Box>
                <Avatar
                    size="medium"
                    rounded
                    source={require('../assets/avatar.jpg')}
                    onPress={() => alert('Hello friend')}
                />
                <TextInput placeholder="What's on your mind?" />
            </Box>
        </Container>
    )
}

export default Avatars