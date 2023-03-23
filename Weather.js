import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View,Image } from 'react-native';
import moment from 'moment';
export default function Weather() {
  const date1 = moment();
  const formattedDate1 = date1.format('dddd, D MMMM YYYY');
  const [date,setDate] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setDate(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.time}>{date.toLocaleTimeString()}</Text>
      <View style={styles.time1}><Text>{formattedDate1}</Text></View>
      <View style={styles.box}>
        <Image source={require('./img/cloud.png')} style={styles.logo} />
        <Text style={styles.temp}>23{'\u00b0'}C</Text>
      </View>
      <View style={styles.box1}>
        <View style={styles.humid}>
          <Image source={require('./img/humid.png')} style={styles.humid_img} />
          <Text style={styles.humid_value}>75%</Text>
          <Text style={styles.humid_script}>Humidity</Text>
        </View>
        <View style={styles.humid}>
          <Image source={require('./img/lighting.png')} style={styles.humid_img} />
          <Text style={styles.humid_value}>389 Lux</Text>
          <Text style={styles.humid_script}>Lighting</Text>
        </View>
        <View style={styles.humid}>
          <Image source={require('./img/tempa.png')} style={styles.humid_img} />
          <Text style={styles.humid_value}>23{'\u00b0'}C</Text>
          <Text style={styles.humid_script}>Temperature</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8eafa',
    alignItems: 'center',
  },
  time:{
    fontSize:45,
    fontWeight:'bold',
    marginTop: 50,
    color: '#f65b82',
  },
  time1:{
    marginTop:20,
    borderRadius:30,
    textAlign: 'center',
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    width:250,
    height: 40,
    backgroundColor: '#ffccd2',
    fontWeight:'bold',
    fontSize:10,
  },
  box:{
    backgroundColor: '#FFAC7D',
    alignItems: 'center',
    height: 300,
    width: 300,
    borderRadius:30,
  },
  logo: {
    marginTop:20,
    width: 300,
    height: 150,
    marginBottom: 50,
  },
  temp:{
    fontSize:50,
    color: '#FFFFFF',
  },
  box1:{
    marginTop:80,
    width:300,
    borderRadius:20,
    height:100,
    backgroundColor:'#FFA665',
    flexDirection: 'row', // Đặt phần tử con sẽ hiển thị dưới dạng flex row
    alignItems: 'center', // Canh giữa phần tử con theo trục Y
    marginBottom:10,
  },
  humid:{
    height:50,
    width:100,
    flexDirection: 'column', // Đặt phần tử con sẽ hiển thị dưới dạng flex row
    alignItems: 'center', // Canh giữa phần tử con theo trục Y
    justifyContent: 'center', // Canh giữa phần tử con theo trục x
  },

  humid_img:{
    height:30,
    width:30,
  },
  humid_value:{
    color:'#FFFFFF',
    marginTop:10,
    fontWeight:'bold',
  },
  humid_script:{
    color:'#333333',
    fontWeight:'bold',
    fontSize:11,
    marginTop:5,
  },
});
