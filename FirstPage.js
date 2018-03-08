import React, { Component } from 'react';
import { Text, StyleSheet, Image, View, 
    FlatList, ListView } from 'react-native';

export default class FirstPage extends Component {
 render() {
     const pic = {
         uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
     };
     const ds = new ListView.DataSource({ 
        rowHasChanged: (r1, r2) => r1 !== r2 });
    this.state = { dataSource: ds.cloneWithRows(['Devin', 'Jackson', 'James', 'Joel', 'John', 'Jillian', 
    'Jimmy', 'Julia', 'Julid', 'Julie', 'Devin', 'Jackson', 'James', 'Joel', 'Juliv']) };
     return (
         <View style={styles.container}>
         <Text style={styles.welcome}> Welcome... List View </Text>
         <Image source={pic} style={{ width: 200, height: 110 }} />
         <ListView
         dataSource={this.state.dataSource} 
         renderRow={(rowData) => <Text style={styles.item}>  
            { rowData } </Text>}   
         style={styles.listView}
         />
       </View>
     );
 }
}

const styles = StyleSheet.create({
container: {
    flex: 1,
    paddingTop: 0,
   },
   item: {
     padding: 10,
     fontSize: 18,
     height: 44
   },
   listView: {
        flex: 1
   },
   welcome: {
    fontSize: 20,
    margin: 15,
    textAlign: 'center',
    },
});

