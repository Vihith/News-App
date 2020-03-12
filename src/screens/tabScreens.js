import React, { Component } from 'react';
import { Container, Header, Content, Tab, Tabs, Left, Body, Right, Title } from 'native-base';
import Tab1 from './tabs/tab1'
import Tab2 from './tabs/tab2'
import Tab3 from './tabs/tab3'



export default class TabsExample extends Component {
  render() {
    return (
      <Container>
        <Header style={{backgroundColor : "#009387"}} hasTabs >
          {/* <Left /> */}
          <Body>
            <Title style={{alignSelf : "center"}}>News App</Title>
          </Body>
          {/* <Right /> */}
        </Header>
        <Tabs>
          <Tab tabStyle={{backgroundColor : "#009387"}} activeTabStyle={{backgroundColor : "#009387"}} textStyle={{color : 'white'}} heading="General">
            <Tab1 />
          </Tab>
          <Tab tabStyle={{backgroundColor : "#009387"}} activeTabStyle={{backgroundColor : "#009387"}} textStyle={{color : 'white'}} heading="Business">
            <Tab2 />
          </Tab>
          <Tab tabStyle={{backgroundColor : "#009387"}} activeTabStyle={{backgroundColor : "#009387"}} textStyle={{color : 'white'}} heading="Technology">
            <Tab3 />
          </Tab>
        </Tabs>
      </Container>
    );
  }
}