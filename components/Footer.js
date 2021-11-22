import React from 'react';
import styled from 'styled-components/native';
import { Avatar } from "react-native-elements";
import { FontAwesome, EvilIcons, Ionicons  } from '@expo/vector-icons'; 

const Container = styled.View`
    width: 100%;
    height: 420px;
    background: #fff;
`
const User = styled.View`
    width: 100%;
    height: 60px;
    background: #fff;
    margin-top: 5px;
    flex-direction: row;
    align-items: center;
    padding-left: 15px;
    border-top-width: 0.3px;
    border-top-color: #000; 
`
const Text = styled.Text`
    font-size: 16px;
    font-weight: 700;
    color: #000;
    padding-left: 10px; 
`
const Button = styled.TouchableOpacity`
    
`
const Card = styled.View`
    width: 100%;
    height: 353px;
    flex-direction: column;
    background: #fff;
`
const Image = styled.Image`
    width: 100%;
    height: 300px;
`
const Like = styled.View`
    width: 100%;
    height: 50px;
    background: #fff;
    flex-direction: row;
    align-items: center;
    border-bottom-width: 0.3px;
    border-bottom-color: #fff; 
`
const Box = styled.View`
    width: 33.3%;
    height: 50px;
    flex-direction: row;
    align-items: center;
    justify-content: center;
`
const BoxText = styled.Text`
    font-size: 12px;
    font-weight: 500;
    color:#000;
    padding-left: 10px;
`
const Footer = () => {
    return (
        <>
        <Container>
            <User>
                <Avatar
                    size="medium"
                    rounded
                    onPress={() => alert('Hello. My name is Xamdam My job is artist')}
                    source={{ uri: 'https://n1.quvonch.com/uploads/posts/artis/xamdam-sobirov.jpg' }}
                />
                <Text>Xamdam Sobirov</Text>
                <Button>
                    <FontAwesome style={{marginLeft: 70}} name="ellipsis-h" size={24} color="black" />
                </Button>
            </User>
            <Card>
                <Image source={{uri: 'https://muznavo.net/_ld/16/01342485.jpg'}} />
                <Like>
                    <Box>
                        <EvilIcons name="like" size={28} color="black" />
                        <BoxText>Like</BoxText>
                    </Box>
                    <Box>
                        <Ionicons name="chatbox-outline" size={24} color="black" />
                        <BoxText>Comments</BoxText>
                    </Box>
                    <Box>
                        <FontAwesome name="share" size={24} color="black" />
                        <BoxText>Share</BoxText>
                    </Box>
                </Like>
            </Card>
        </Container>
        </>
    )
}

export default Footer