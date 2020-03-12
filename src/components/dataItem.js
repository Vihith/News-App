import React, { Component } from 'react';
import { Container, Header, Content, List, ListItem, Thumbnail, Text, Left, Body, Right, Button, View } from 'native-base';
import moment from 'moment'


export default class DataItem extends Component {
    constructor(props) {
        super(props)
        this.data = props.data
        this.handlePress = this.handlePress.bind(this)
    }

    handlePress(){
        const { url, title } = this.data
        this.props.onPress({ url, title })
    }

    render() {
        return (
            <ListItem thumbnail>
                <Left>
                    <Thumbnail square source={{ uri: this.data.urlToImage != null ? this.data.urlToImage : 'https://seeba.se/wp-content/themes/consultix/images/no-image-found-360x260.png' }} />
                </Left>
                <Body>
                    <Text numberOfLines={2}>{this.data.title}</Text>
                    <Text note numberOfLines={2}>{this.data.description}</Text>
                    <View style={{flex : 1 , flexDirection : 'row', marginTop : 8, marginLeft : 0}}>
                        <Text note numberOfLines={1}>{this.data.source.name} </Text>
                        <Text note numberOfLines={1} style={{marginHorizontal : 10}}>{this.data.publishedAt ? moment(this.data.publishedAt).fromNow() : moment.now()}</Text>
                    </View>
                </Body>
                <Right>
                    <Button transparent onPress={this.handlePress} >
                        <Text>View</Text>
                    </Button>
                </Right>
            </ListItem>
        )
    }
}
