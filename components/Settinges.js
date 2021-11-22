import React from 'react';
import styled from 'styled-components/native';
import { Ionicons, MaterialIcons, Entypo  } from '@expo/vector-icons'; 

const Container = styled.View`
    width: 100%;
    height: 40px;
    flex-direction: row;
    align-items: center;
`
const Menu = styled.View`
    width: 33.3%;
    height: 40px;
    flex-direction: row;
    align-items: center;
    justify-content: center;
`
const MenuText = styled.Text`
    color: #000;
    font-size: 13px;
    padding-left: 5px;
`
const Servev = styled.View`
    width: 0.5px;
    height: 18px;
    background: #000;
`
const Block = styled.View`
    width: 100%;
    height: 10px;
    background: #9BB4B5; 
`
const Settinges = () => {
    return (
        <>
        <Container>
            <Menu>
                <Ionicons name="md-videocam" size={24} color="red" />
                <MenuText>Live</MenuText>
            </Menu>
            <Servev />
            <Menu>
                <MaterialIcons name="photo-library" size={24} color="green" />
                <MenuText>Photo</MenuText>
            </Menu>
            <Servev />
            <Menu>
                <Entypo name="location-pin" size={24} color="#CC396B" />
                <MenuText>Live</MenuText>
            </Menu>
        </Container>
        <Block />
        </>
    )
}

export default Settinges