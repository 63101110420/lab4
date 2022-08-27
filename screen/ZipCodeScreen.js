import React from "react";
import { FlatList, Touchable } from "react-native";
import { View,Text, TouchableHighlight } from "react-native-web";

const  availableZipItems = [
    { place: 'Hatyai', code: '90110' },
    { place: 'Trang', code: '92000' },
    { place: 'Chiangmai', code: '50000' },
    { place: 'Khonkaen', code: '40000' },
    { place: 'Chonburi', code: '20000' },
]
const ZipItems = ({place, code}) => (
    <TouchableHighlight onPress={() => {
        navigation.navigate('Weather',{zipCode: code})
    }}>
      <View style= {styles.zipItem}>
         <Text>{place}</Text>
         <Text>{code}</Text>
        </View>
    </TouchableHighlight>
)   

export default function ZipCodeScreen(){
    const navigation = useNavigation()
    return (
        <FlatList
            data = {availableZipItems}
            keyExtractor = {item => item.code}
            renderItem =  {({item}) => <ZipItems{...item}/>}
        />

    )
}
const styles = StyleSheet.create({
    zipItem: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingBottom: 40,
        paddingTop: 30
    },
    zipPlace: {
        flex: 1,
        fontSize: 20,
        color: "white",
        textAlign: "center",
        textShadowOffset: { width: 2, height: 2 },
        textShadowRadius: 10,
        textShadowColor: "black",
    },
    zipCode: {
        flex: 1,
        fontSize: 20,
        color: "white",
        textShadowOffset: { width: 2, height: 2 },
        textShadowRadius: 10,
        textShadowColor: "black",
        textAlign: "center"
    },
    bg: {
        width: "100%",
        height: "100%",
    },
})