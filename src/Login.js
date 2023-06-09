import React from 'react';
import { StyleSheet, View, Text, Image,TouchableOpacity, Dimensions,TextInput} from 'react-native';
import LottieView from 'lottie-react-native'; //animation
import Icon from 'react-native-vector-icons/FontAwesome'; //icons
const {width, height} = Dimensions.get('screen');
export default Login  = function({navigation}){
  return (
    
    <View style={styles.container}>
      <TouchableOpacity onPress ={()=>navigation.navigate('Welcome')}><Icon name="arrow-left" size={20}/></TouchableOpacity>
      <View style={styles.avatarContainer}>
      <LottieView source={require('./../assets/login.json')} autoPlay loop speed={1}  style={styles.logo} />
      </View>
      <Text style={{fontWeight:'bold', color:'#fff',fontSize:30, marginTop:35,}}>Log in </Text>
      <View style={styles.mainbox}>
            <View style={styles.phone}>
            <Icon name="user-o" size={20} color="#b97e7e" style={{marginRight: 10}} />
            <TextInput placeholder="username" style={{flex:1,paddingVertical:0}} />
            </View>

            <View style={styles.phone}>
            <Icon name="lock" size={20} color="#b97e7e" style={{marginRight: 10}} />
            <TextInput placeholder="password" style={{flex:1,paddingVertical:0}} 
              secureTextEntry= {true}
            />
            </View>
            <TouchableOpacity onPress={()=>{}} ><Text style={{color:'#AA7C7C', fontWeight:'600'} }>Forgot password?</Text></TouchableOpacity>
            <TouchableOpacity onPress={()=> navigation.navigate('MyDrawer')} style={{marginTop:20,backgroundColor:'#e77c7c', justifyContent:'center',alignItems:'center',borderRadius:10,padding:10}}>
              <Text style={{color:'#fff', fontWeight:'700', fontSize:16}}>Log in </Text>
            </TouchableOpacity>
            <View style={{flexDirection:'row', marginTop:20, justifyContent:'center', alignItems:'center', marginBottom:20}}>
              <View style={{flex: 1,height: 1, borderBottomWidth: 1, borderBottomColor: 'black',}}></View>
              <Text style={{textAlign: 'center', marginHorizontal: 10,}}> Or </Text>
              <View style={{flex: 1,height: 1, borderBottomWidth: 1, borderBottomColor: 'black',}}></View>
            </View>
            <View style={{flexDirection:'row', justifyContent:'space-between'}}> 
              <TouchableOpacity onPress={()=>{}} style ={{backgroundColor:'#c14949', borderRadius:10, paddingHorizontal:45, paddingVertical:8}}>
                  <Icon name="google" size={20} color="#ffffff"  />
              </TouchableOpacity>
              <TouchableOpacity onPress={()=>{}} style ={{backgroundColor:'#284c83', borderRadius:10, paddingHorizontal:45, paddingVertical:8}}>
                  <Icon name="facebook" size={20} color="#ffffff"  />
              </TouchableOpacity>
            </View>
            <View style={{marginTop:15,flexDirection:'column', justifyContent:'center', alignItems:'center'}}>
            <Text>Don't have an account?</Text>
            <TouchableOpacity onPress={()=>{}}><Text style={{color:'#ff8e4f', fontWeight:'600', marginTop:10}}>Register</Text></TouchableOpacity>
            </View>
           
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#ff8c4d',
  },
  logo:{
    marginTop:20,
    width: 400,
    height: 250,
  },
   mainbox:{
    marginTop:30,
    height: height * 0.5,
    width: width * 0.85,
    backgroundColor:'white',
    marginBottom:30,
    borderRadius:40,
    justifyContent:'center',
    alignContent:'center',
    padding:20,
   },
   phone:{
    flexDirection:'row',
    borderColor:'#deacac',
    borderWidth:1,
    padding:10,
    backgroundColor:'#FFF9F9',
    borderRadius:10,
    marginBottom:25,
   },   
});


