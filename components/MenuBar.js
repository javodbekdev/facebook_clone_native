import React from 'react';
import styled from 'styled-components/native';
import { AntDesign, Feather, Ionicons, MaterialIcons,   } from '@expo/vector-icons'; 
import Avatars from './Avatars';
import Settinges from './Settinges';

const Container = styled.View`
    width: 100%;
    height: 60px;
    align-items: center;
    flex-direction: row;
`
const Row = styled.View`
    flex-direction: row;
`
const Button = styled.TouchableOpacity`
    height: 60px;
    background: #fff;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    padding: 14px;
`
const Text = styled.Text`
    color: #000;
    font-size: 10px;
`
const Static = styled.View`
    width: 100%;
    height: 0.5px;
    background: #000;
`
const MenuBar = () => {
    return (
        <>
        <Container>
            <Row>
                <Button>
                    <AntDesign name="home" size={28} color="black" />
                    <Text>News Feed</Text>
                </Button>
                <Button>
                    <Feather name="users" size={28} color="black" />
                    <Text>Friends</Text>
                </Button>
                <Button>
                    <Ionicons name="people-circle-outline" size={28} color="black" />
                    <Text>Groups</Text>
                </Button>
                <Button>
                    <MaterialIcons name="ondemand-video" size={28} color="black" />
                    <Text>Watch</Text>
                </Button>
                <Button>
                    <Ionicons name="md-notifications-outline" size={28} color="black" />
                    <Text>Notifications</Text>
                </Button>
                <Button>
                    <Feather name="menu" size={28} color="black" />
                    <Text>Menu</Text>
                </Button>
            </Row>
        </Container>
        <Static />
        <Avatars />
        <Static />
        <Settinges />
        </>

    )
}

export default MenuBar