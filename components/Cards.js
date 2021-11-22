import React from 'react';
import { ScrollView } from 'react-native';
import styled from 'styled-components/native';
import { Feather } from '@expo/vector-icons'; 

const Container = styled.View`
    width: 100%;
    height: 400px;
    background: #fff;
    align-items: center;
    flex-direction: row;
`
const Screens = styled.View`
    width: 250px;
    height: 350px;
    border-radius: 5px;
    background: #fff;
    border: 0.3px solid #181818;
    margin-right: 20px;
`
const Image = styled.Image`
    width: 100%;
    height: 190px;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
`
const UserText = styled.Text`
    font-size: 16px;
    font-weight: 700;
    color: #000;
    padding: 10px;
`
const ButtonGroup = styled.View`
    width: 100%;
    height: 105px;
    background: #fff;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-radius: 15px;
`
const Button = styled.TouchableOpacity`
    width: 210px;
    height: 40px;
    background: #0356FF;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    border-radius: 6px;
`
const Button1 = styled.TouchableOpacity`
    width: 210px;
    height: 40px;
    background: #6E7F80;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    border-radius: 6px;
    margin-top: 8px;
`

const BtnText = styled.Text`
    font-size: 14px;
    color: white;
    padding-left: 10px;
`
const Cards = () => {
    return (
        <Container>
            <ScrollView 
                horizontal 
                showsHorizontalScrollIndicator={false}
                style={{paddingLeft: 11, paddingTop: 11}} 
            >
                {/* user 1 */}
                <Screens>
                    <Image source={require('../assets/avatar.jpg')} />
                    <UserText>Javodbek Azizvich</UserText>
                    <ButtonGroup>
                        <Button>
                            <Feather name="user-plus" size={24} color="white" />
                            <BtnText>Add friends</BtnText>
                        </Button>
                        <Button1>
                            <BtnText>Remove</BtnText>
                        </Button1>
                    </ButtonGroup>
                </Screens>
                {/* user 2 */}
                <Screens>
                    <Image source={require('../assets/javoxir.jpg')} />
                    <UserText>Javoxir Ergashev</UserText>
                    <ButtonGroup>
                        <Button>
                            <Feather name="user-plus" size={24} color="white" />
                            <BtnText>Add friends</BtnText>
                        </Button>
                        <Button1>
                            <BtnText>Remove</BtnText>
                        </Button1>
                    </ButtonGroup>
                </Screens>
                {/* user 3 */}
                <Screens>
                    <Image source={require('../assets/rasim.jpg')} />
                    <UserText>Zavqiddin Karimov</UserText>
                    <ButtonGroup>
                        <Button>
                            <Feather name="user-plus" size={24} color="white" />
                            <BtnText>Add friends</BtnText>
                        </Button>
                        <Button1>
                            <BtnText>Remove</BtnText>
                        </Button1>
                    </ButtonGroup>
                </Screens>
                {/* user 4 */}
                <Screens>
                    <Image source={{uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwBkOtn9sfknoNzcokjqflXuPbHSaY7Dfg0w&usqp=CAU'}} />
                    <UserText>Shoxrux rep</UserText>
                    <ButtonGroup>
                        <Button>
                            <Feather name="user-plus" size={24} color="white" />
                            <BtnText>Add friends</BtnText>
                        </Button>
                        <Button1>
                            <BtnText>Remove</BtnText>
                        </Button1>
                    </ButtonGroup>
                </Screens>
            </ScrollView>
        </Container>
    )
}

export default Cards