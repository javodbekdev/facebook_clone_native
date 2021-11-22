import React from 'react';
import styled from 'styled-components/native';
import { Ionicons } from '@expo/vector-icons'; 

const Container = styled.View`
    margin-top: 10px;
    width: 100%;
    flex-direction: row;
`
const Card = styled.View`
    width: 100%;
    height: 30px;
    background: #fff;
    flex-direction: row;
    justify-content: space-between;
    padding-left: 10px;
    padding-right: 10px;
`
const Text = styled.Text`
    color: #000;
    font-size: 15px;
    font-weight: bold;
`
const Button = styled.TouchableOpacity`
    width: 30px;
    height: 30px;
    background: #fff;
`

const NewCard = () => {
    return (
        <Container>
            <Card>
                <Text>People You May Know</Text>
                <Button>
                    <Ionicons name="ellipsis-vertical" size={24} color="black" />
                </Button>
            </Card>
        </Container>
    )
}

export default NewCard