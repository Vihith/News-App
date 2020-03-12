import React, { Component } from 'react'
import { Dimensions, Modal, Share, View } from 'react-native'
import { Container, Header, Content, Body, Left, Icon, Right, Title, Button } from 'native-base'
import { WebView } from 'react-native-webview';

const WebViewHeight = Dimensions.get('window').height 

export default class className extends Component {
    constructor(props){
        super(props)
        this.handleClose = this.handleClose.bind(this)
        this.handleShare = this.handleShare.bind(this)
    }

    handleClose(){
        return this.props.onClose()
    }

    handleShare(){
        console.log("share", this.props)
        const { url, title } = this.props.articleData
        message = `${title}\n\nRead More @${url}\n\nShared via News App`
        return Share.share(
            {title, message, url : message},
            {dialogTitle : `Share ${title}`}
        )
    }


    render(){
        const { showModal, articleData } = this.props
        const { url } = articleData
        if( url != undefined){
        return(
        <View>
            <Modal 
                animationType='slide'
                transparent
                visible={showModal}
                onRequestClose={this.handleClose}
            >
                <Container style={{ margin : 15, backgroundColor : "white"}}>
                    <Header style={{ backgroundColor : "#009387"}}>
                        <Left>
                            <Button onPress={this.handleShare} transparent>
                            <Icon 
                                    name="share" 
                                    type="Ionicons" 
                                    style={{ color : "white", fontSize : 35}} 
                                />
                            </Button>
                        </Left>
                        <Body>
                            <Title children={articleData.title} style={{color : "black"}}/>
                        </Body>
                        <Right>
                        <Button onPress={this.handleClose} transparent>
                                <Icon 
                                    name="close" 
                                    // type="Ionicons" 
                                    style={{ color : "white", fontSize : 35}} 
                                />
                            </Button>
                        </Right>
                    </Header>
                    {/* <View style={{flex : 1}}> */}
                    <Content contentContainerStyle={{ flex : 1 }}>
                        
                        <WebView source={{uri : url}}  onError={this.handleClose} startInLoadingState scalesPageToFit />
                        
                    </Content>
                    {/* </View> */}
                </Container>
            </Modal>
        </View>
        )
    }else{
        return null
    }
    }
}