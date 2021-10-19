import React from "react";
import { StyleSheet, Text, View, Image, Button } from "react-native";

const CardHeader = ({dataInfo}) => {
  return (
    <View style={styles.container}>
      <View
        style={[
          styles.textName,
          {
            
          },
        ]}
      >
        <Text>NAME</Text>
      </View>

      <View>
        <View>
          <Image
            style={{ width: 150, padding: 110, height: 150, borderRadius: 100 }}
            source={{
              uri: dataInfo.image,
            }}
          />

            <View style={{display:"flex",alignItems:"center",padding:20,width:"100%"}}>
                   <Text style={styles.title}>{dataInfo.name}</Text>
          <Text style={styles.div}></Text>
            </View>
       
        </View>
      </View>
  
    </View>
  );
};

export default CardHeader;

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
  },
  textName: {
    display: "flex",
    justifyContent: "center",
    marginTop:232,
  },
  title:{
      fontWeight:"bold",
      fontSize:20,
      textAlign:"left",
      marginTop:10
  },
 
});
