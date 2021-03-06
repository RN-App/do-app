
'use strict';
import React, {
    Component,
    StyleSheet,
    Image,
    ListView,
    Text,
    TouchableWithoutFeedback,
    View
}
from 'react-native';

var Nav = require("./Helpers/nav");
var Icon = require('react-native-vector-icons/Ionicons');

var groupData = [
    {
        title: 'Design new icons',
        done: true
    }, {
       title: 'Work on UI Kit',
        done: false
    }, {
        title: 'Read Article: "Design For Mobile"',
       done:false
    }, {
        title: 'Revise wireframes',
        done: true
    },
    {
        title: 'Catch Up with Mary',
        done: false
    },{
        title: 'Design explorations for new project',
        done: false
    },
    
];
class Overview extends Component {
    constructor() {
        super();
         this.ds = new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 !== r2
        });
        this.state = {
        dataSource: this.ds.cloneWithRows(groupData)
        }
    }
        
    rowView(x) {

         var isDone = function () {
            if(x.done){
             return ({text:{color:'#AEAEAE'},indie:{backgroundColor:'#50D5C4', flex:1, alignItems:'center', justifyContent:'center'}});
            } else{
                return ({text:{color:'#505050'},indie:{backgroundColor:'#F8F8FA', flex:1, alignItems:'center', justifyContent:'center'}});
            
            }
             
         }
         // Theses are the individual slides
    return(
        
    <View style={{height:70, flexDirection:'row', borderBottomWidth:1, borderBottomColor:'#F4F4F4'}}>
        <View style={isDone().indie}>
        <Icon name="ios-checkmark-empty" size={32} color="#F8F8FA"/>
        </View>
       <View style={{flex:4, backgroundColor:'#fff', justifyContent:'center', padding:25}}>
        <Text style={{fontSize:14, textAlign:'left',},isDone().text}>{x.title}</Text>
      
        </View>
       
        </View>
    );
    }
    
    badge(){
    return(
        <View style={{height:200}}>
    <Image source={require('image!badgeList')} style={{flex:1,height:null,width:null, alignItems:'center', justifyContent:'center'}}>
        <Text style={{color:'#fff', backgroundColor:'rgba(0,0,0,0)',fontSize:35,}}>Work</Text>
        <Text style={{color:'#fff',backgroundColor:'rgba(0,0,0,0)'}}>Freelance Projects</Text>
        </Image>
        </View>
    )
    }
    
        // This is the main Render Method
    render(){
    return(
    <View style={styles.container}>
        <Nav title = {val:'Lists'}/>
        {this.badge()}
        <ListView
        automaticallyAdjustContentInsets={false}
        dataSource={this.state.dataSource}
      renderRow={(rowData) => this.rowView(rowData)}
    />
        </View>
    );
    }
    
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    
});
module.exports = Overview;
    