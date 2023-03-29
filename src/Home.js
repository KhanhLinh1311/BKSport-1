import React from 'react';
import { StyleSheet, View, Text, Image,TouchableOpacity } from 'react-native';

export default Home = function({navigation}){
  return (
    <View style={styles.container}>
      <View style={styles.avatarContainer}>
        <Image
          source={require('./../img/avatar.png')}
        />
      </View>
      <View style={styles.userInfoContainer}>
        <Text style={styles.userName}>John Doe</Text>
      </View>
      <View style={styles.scheduleContainer}>
        <Text style={styles.scheduleTitle}>This week's schedule</Text>
        <View style={styles.scheduleList}>
          {/* render list of schedules */}
        </View>
      </View>
      <TouchableOpacity onPress={() => navigation.navigate('Login')} style={styles.button1}>
          <Text style={styles.buttonText1}>Log out</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ffeeee',
  },
  avatarContainer: {
    width: 150,
    height: 150,
    borderRadius: 75,
    backgroundColor: '#cce2cb',
    alignItems: 'center',
    justifyContent: 'center',
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  userInfoContainer: {
    marginTop: 20,
  },
  userName: {
    marginTop: 40,
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
  scheduleContainer: {
    marginTop: 40,
  },
  scheduleTitle: {
    fontSize: 20,
    color: '#333',
    marginBottom: 20,
  },
  scheduleList: {
    // style for schedule list
  },
  button1: {
    marginTop:70,
    backgroundColor: '#F47229',
    padding: 10,
    width: 181.28,
    height: 48,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    paddingVertical: 10,
    paddingHorizontal: 49,
    gap: 10,
  },
  buttonText1: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});


