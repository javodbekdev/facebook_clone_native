import React from 'react';
import { ScrollView } from 'react-native';
import styled from 'styled-components/native';
import { AntDesign } from '@expo/vector-icons';

const Container = styled.View`
    width: 100%;
    height: 192px;
    flex-direction: row;
    align-items: center;
`
const Card = styled.View`
    width: 106px;
    height: 170px;
    position: relative;
    margin-right: 8px;
`
const CardStory = styled.Image`
    width: 100%;
    height: 170px;
    border-radius: 12px;

`
const CardUser = styled.View`
    position: absolute;
    top: 8px;
    left: 8px;
    background: #F0E4BE;
    border-radius: 20px;
    width: 39px;
    height: 39px;
    align-items: center;
    justify-content: center;
`
const CardFooter = styled.View`
    width: 100%;
    position: absolute;
    bottom: 12px;
    left: 9px;
`
const Text = styled.Text`
    font-size: 12px;
    font-weight: bold;
    color: #fff;
    text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.4);
`
const Image = styled.Image`
    width: 39px;
    height: 39px;
    border-radius: 20px;
    border: 2px solid red;
`
const Block = styled.View`
    width: 100%;
    height: 10px;
    background: #9BB4B5; 
`
const User = () => {
    return (
        <>
        <Container>
                    <ScrollView 
                    horizontal 
                    showsHorizontalScrollIndicator={false}
                    style={{paddingLeft: 11}} 
                    >
                        <Card>
                            <CardStory source={require('../assets/avatar.jpg')} />
                            <CardUser>
                                <AntDesign name="plus" size={24} color="black" />
                            </CardUser>
                            <CardFooter>
                                <Text>Add to story</Text>
                            </CardFooter>
                        </Card>

                        <Card>
                            <CardStory source={{uri: 'https://i0.wp.com/www.hindishayaricollections.com/wp-content/uploads/2020/03/beautifull-girls-images-download-21.jpg?resize=560%2C700&ssl=1'}} />
                            <CardUser>
                                <Image source={{uri: 'https://i.pinimg.com/originals/6d/ea/46/6dea46a6b54ff8dfbdc56e5b22064379.jpg'}} />
                            </CardUser>
                            <CardFooter>
                                <Text>Designer</Text>
                            </CardFooter>
                        </Card>

                        <Card>
                            <CardStory source={{uri: 'https://i.pinimg.com/originals/01/03/87/0103874ca3d410a44709a1a9f1944030.jpg'}} />
                            <CardUser>
                                <Image source={{uri: 'https://i.pinimg.com/236x/f7/88/34/f788346863bfbb289b7ef6a5300f7d07.jpg'}} />
                            </CardUser>
                            <CardFooter>
                                <Text>Photograph</Text>
                            </CardFooter>
                        </Card>
                        <Card>
                            <CardStory source={require('../assets/javoxir.jpg')} />
                            <CardUser>
                                <Image source={{uri: 'https://images.unsplash.com/photo-1559386484-97dfc0e15539?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Ym95c3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80'}} />
                            </CardUser>
                            <CardFooter>
                                <Text>Javoxir</Text>
                            </CardFooter>
                        </Card>
                        <Card>
                            <CardStory source={{uri: 'https://images.unsplash.com/photo-1614090965443-3df21c6906ec?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGJlYXV0aWZ1bCUyMGdpcmxzfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80'}} />
                            <CardUser>
                                <Image source={{uri: 'https://thumbs.dreamstime.com/b/fashion-pretty-cool-girl-wearing-shirt-red-cap-outdoors-60962739.jpg'}} />
                            </CardUser>
                            <CardFooter>
                                <Text>Sarah</Text>
                            </CardFooter>
                        </Card>
                    </ScrollView>
        </Container>
        <Block />
        </>
    )
}

export default User