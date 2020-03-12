import React, { Component } from 'react';
import { Container, Header, Content, List, ListItem, Thumbnail, Text, Left, Body, Right, Button } from 'native-base';
import { getArticles } from '../../service/news'
import { Alert, ActivityIndicator, View, RefreshControl } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';


import DataItem from '../../components/dataItem'
import Modal from '../../components/modal'


export default class Tab3 extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isLoading: true,
            data: null,
            setModalVisible: false,
            modalArticleData: {},
            refreshing: false,
        }
        this.handleItemDataOnPress = this.handleItemDataOnPress.bind(this)
        this.handleModalClose = this.handleModalClose.bind(this)
    }

    handleItemDataOnPress(articleData) {
        this.setState({
            setModalVisible: true,
            modalArticleData: articleData
        })
    }

    handleModalClose() {
        this.setState({
            setModalVisible: false,
            modalArticleData: {}
        })
    }

    _onRefresh = () => {
        console.log("refreshing")
        this.setState({ refreshing: true, data: null });
        getArticles('technology').then(datas => {
            this.setState({ refreshing: false, data: datas });
        })
            .catch(error => {
                // Alert.alert('Error', 'Something went wrong!',) 
                console.log("error", error)
            })
    }

    componentDidMount() {
        getArticles('technology')
            .then(datas => {
                this.setState({
                    isLoading: false,
                    data: datas
                })
                console.log("blah blah", datas)
            })
            .catch(error => {
                // Alert.alert('Error', 'Something went wrong!',) 
                console.log("error", error)
            })
    }


    render() {
        let view = this.state.isLoading ? (
            <View >
                <ActivityIndicator size="large" color="#009387" animating={this.state.isLoading} />
            </View>
        ) : (
                <List dataArray={this.state.data} renderRow={(item) => {
                    return <DataItem onPress={this.handleItemDataOnPress} data={item} />
                }} />
            )
        console.log('state', this.state.data)
        return (
            <Container>
                <ScrollView refreshControl={
                    <RefreshControl
                        refreshing={this.state.refreshing}
                        onRefresh={this._onRefresh}
                    />
                }>
                    <Content>
                        {view}
                    </Content>
                </ScrollView>
                <Modal
                    showModal={this.state.setModalVisible}
                    articleData={this.state.modalArticleData}
                    onClose={this.handleModalClose}
                />
            </Container>
        );
    }
}