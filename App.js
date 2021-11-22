import React from 'react';
import { StatusBar, ScrollView } from 'react-native';
import styled from 'styled-components/native';
import AppBar from './components/AppBar';
import MenuBar from './components/MenuBar';
import User from './components/User';
import NewCard from './components/NewCard';
import Cards from './components/Cards';
import Footer from './components/Footer';

const Container = styled.SafeAreaView`
    flex: 1;
`
const App = () => {
    return(
        <>
            <StatusBar backgroundColor="#fff" barStyle="dark-content" />
            <Container>
                <ScrollView>
                    <AppBar />
                    <MenuBar />
                    <User />
                    <NewCard />
                    <Cards />
                    <Footer />
                </ScrollView>
            </Container>
        </>
    ) 
}
export default App