import * as React from 'react';
import {useRef} from 'react';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {useState, Component} from 'react';
import SearchBar from "react-native-dynamic-search-bar";
import {createDrawerNavigator} from '@react-navigation/drawer';
import {Platform, Modal, SafeAreaView, ImageBackground, View, Text, Image, TextInput, Button, ScrollView, Dimensions, StyleSheet, Alert, TouchableOpacity} from 'react-native';
import ImagePicker from 'react-native-image-picker';
import {Rating, AirbnbRating} from 'react-native-ratings';
import RBSheet from 'react-native-raw-bottom-sheet';

function SignUpScreen({navigation}) {
  const [email, setEmail] = useState('');
  const [password, setPass] = useState('');
  const [retypepassword, setRetype] = useState('');
  const [petname, setPetname] = useState('');
  const [petdob, setDob] = useState('');
  const [petbreed, setBreed] = useState('');
  const [pettoy, setToy] = useState('');

  return(
    <ScrollView style={{flex: 1, backgroundColor: '#FAD3B3'}}>
      <View style={{padding: 5}}>
      <Titlewithicon />
      <View style={{justifyContent: 'center',alignItems: 'center',flexDirection: 'row'}}>
        <Text style={{fontSize: 15, color: '#261303',fontWeight: 'bold'}}>Spread Love and Cuteness</Text>
        <Image source={require('./pngicons/icons8-orange-heart-48.png')}/>
    </View>
      <View style={{flex: 1,margin: 10, elevation: 5, backgroundColor: '#fff', padding: 16,}}>
        <CustomBoxInput title = "Email Id"
          val = {email}
          onChangeText={setEmail}
          />
        <CustomBoxInput title = "Password"
          val = {password}
          onChangeText={setPass}
          secure
          />
        <CustomBoxInput title = "Re-type Password"
          val = {retypepassword}
          onChangeText = {setRetype}
          submitcheck={(e)=>
            passcheckmatch(e.nativeEvent.text,password)
          }
          />
        <CustomBoxInput title = "Pet's Name"
          val = {petname}
          onChangeText = {setPetname}
          />
        <CustomBoxInput title = "Breed"
          val = {petbreed}
          onChangeText = {setBreed}
          />
        <CustomBoxInput title = "Fav Toy"
          val = {pettoy}
          onChangeText = {setToy}
          />
      <View style={{padding: 8,backgroundColor: '#fff'}}>
        <Button
          title = "Sign Up"
          raised = {true}
          color = "#F6B179"
          onPress={()=> Alert.alert('Form Submited')}
          />
      </View>
        <View horizontal={true} style={{backgroundColor: '#fff',flexDirection: 'row',justifyContent: 'center', alignItems: 'center',padding: 5}}>
          <Text style={{color: '#4C2505',fontSize: 16}}>Already have account! </Text>
          <TouchableOpacity
            onPress ={() => navigation.navigate('Sign In')}>
            <Text style={{color: '#4C2505',fontSize: 16,fontWeight: 'bold',textDecorationLine: 'underline'}}>Sign In</Text>
          </TouchableOpacity>
        </View>
    </View>
  </View>
    </ScrollView>
  );
}

function SigninScreen({navigation}){
  const [email, setEmail] = useState('');
  const [password, setPass] = useState('');
  const [retypepassword, setRetype] = useState('');
  const [petname, setPetname] = useState('');
  const [petdob, setDob] = useState('');
  const [petbreed, setBreed] = useState('');
  const [pettoy, setToy] = useState('');

  return(
    <ScrollView style={{flex: 1, backgroundColor: '#FAD3B3',padding: 10}}>
      <View style={{padding: 5}}>
      <Titlewithicon />
      <View style={{justifyContent: 'center',alignItems: 'center',flexDirection: 'row'}}>
        <Text style={{fontSize: 15, color: '#261303',fontWeight: 'bold'}}>Spread Love and Cuteness</Text>
        <Image source={require('./pngicons/icons8-orange-heart-48.png')}/>
      </View>
      <View style={{flex: 1, backgroundColor: '#fff', padding: 16,marginTop: 5,elevation: 5,}}>
        <View style={{backgroundColor: '#fff',justifyContent: 'center',alignItems:'center'}}>
          	<Image source={require('./pngicons/icons8-name-tag-50.png')} style={{height: 60,width: 60}} />
        </View>
        <CustomBoxInput title = "Email Id"
          val = {email}
          onChangeText={setEmail}
          />
        <CustomBoxInput title = "Password"
          val = {password}
          onChangeText={setPass}
          secure
          />
      </View>
      <View style={{padding: 8,backgroundColor: '#fff',elevation: 5,marginBottom: 2}}>
        <Button
          title = "Sign In"
          raised = {true}
          color= '#F6B179'
          onPress ={() => navigation.navigate('ActivityDrawer')}/>
      </View>
    </View>
    </ScrollView>
  );
}

export const Trendingwoofs=(props)=>{
  return(
      <View style={trendingcardstyle.card}>
        <IconAvatar  url={props.avatar}/>
        <Title subcard={props.name}/>
      </View>
  );
}

const trendingcardstyle = StyleSheet.create({
  avatar: {
    borderRadius: 60,
  },
  card:{
    backgroundColor: '#FEF4EC',
    borderWidth: 1,
    margin: 8,
    borderColor: '#fff',
    shadowColor: '#FCE9D9',
    padding: 10,
    flex: 1,
    width: 90,
    height: 110,
    elevation: 5,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    position: 'static',
    shadowOffset:{width: 2,height: 0},
    shadowOpacity: 2
  },
  title:{
    color: 'black',
  },
});

const NewPostwoof=(props)=>{
  return(
    <View style={newPoststyle.layout}>
      <Image source={props.image} style={newPoststyle.image}/>
      <View style={{padding: 5,flex: 1}}>
        <TitleNewpost subcard = {props.title}/>
        <Text
          numberOfLines= {2}
          style={newPoststyle.discription}>{props.discription}</Text>
      </View>
    </View>
  );
}

const newPoststyle = StyleSheet.create({
  layout:{
    backgroundColor: '#FEF4EC',
    margin: 2,
    padding: 8,
    flex: 1,
    borderColor: '#fff',
    borderRadius: 12,
    borderWidth: 1,
    shadowColor: '#FCE9D9',
    flexDirection: 'row',
  },
  image:{
    height: 70,
    width:100,
    margin: 6,
    borderRadius: 12,
  },
  title:{
    color: '#261303',
    fontWeight: 'bold',
    fontSize: 16
  },
  discription:{
    color: 'black',
    flex: 2,
  },
});

const Titlewithicon = () =>{
  return(
    <View style={{padding:10,flexDirection: 'row',justifyContent: 'center',backgroundColor: '#FAD3B3',}}>
      <Text style={{fontSize: 35,color: 'black',fontWeight: 'bold'}}>Woofst</Text>
      <Image source={require('./pngicons/icons8-dog-60.png')} style={{width: 45,height:45}}/>
      <Text style={{fontSize: 35,color: 'black',fontWeight: 'bold'}}> gram</Text>
    </View>
  );
}

const SearchBartab = () => {
  return(
    <View style={{backgroundColor: '#FAD3B3'}}>
      <SearchBar
          placeholder="Search here"
          onPress ={() => alert("onPress")}
          onChangeText={(text) => console.log(text)}
          style={{margin: 10,backgroundColor: '#fff',borderWidth: 1,borderRadius: 12,borderColor: '#fff'}}
          />
    </View>
  );
}

function RateUs({ navigation }){
const [modalVisible, setModalVisible] = useState(false);
  return(
    <View>
      <Text>Hello World!!</Text>
    </View>
  );
}
export const IconAvatar=(props)=>{
  return(
    <Image
      style={styles.avatar}
      source={props.url}
      />
  );
}

export const Heading=(props)=>{
  return(
    <Text style={styles.heading}>
      {props.subcard}
    </Text>
  );
}

export const Title=(props)=>{
  return(
    <Text style={styles.title}>    {props.subcard}
    </Text>
  );
}

export const TitleNewpost=(props)=>{
  return(
    <Text style={newPoststyle.title}>
    {props.subcard}
    </Text>
  );
}
function PostScreen(){
  return(
  <View>
    <ScrollView style={{padding: 2,backgroundColor: '#FAD3B3'}}>
      <Heading style={styles.heading} subcard = "Trending Woofs"/>
      <ScrollView horizontal={true} style={{backgroundColor: '#FAD3B3'}}>
        {
          Appdata.woofsdog.map(woofs => (
            <Trendingwoofs
              key = {woofs.id}
              name = {woofs.name}
              avatar = {woofs.avatar}
              />
          ))
        }
      </ScrollView>
      <SearchBartab />
      <Heading style={styles.heading} subcard="New Woofs" />
      <ScrollView style={{backgroundColor: '#FAD3B3'}}>
        {
          Appdata.trendingposts.map(posts => (
            <NewPostwoof
              key={posts.id}
              title = {posts.title}
              discription = {posts.description}
              image = {posts.image}
              />
          ))
        }
      </ScrollView>
    </ScrollView>
    <TouchableOpacity
      activeOpacity={0.7}
      onPress={()=>Alert.alert("Floating button")}
      style={styles.floating}>
      <Image
        source={require('./pngicons/icons8-add-48.png')}
        style={styles.floatingbutton}/>
    </TouchableOpacity>
  </View>
  );
}

const Popupcomp = () => {
  return(
    <TouchableOpacity
    onPress ={() => this.navigation.navigate('RateUs')}
    >
    <Image source={require('./pngicons/icons8-rating-48.png')}
     style={{width: 25,height: 25,margin: 5}}/>
    </TouchableOpacity>
  );
}

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

function ActivityDrawer(){
  return(
    <Drawer.Navigator
      screenOptions={{
        drawerStyle:{
          backgroundColor: '#fff',
          overlayColor: 'transparent',
        }
      }}
    >
      <Drawer.Screen
        name = "Woofstagram"
        component={PostScreen}
        options={{
          headerStyle: {
            backgroundColor: '#FAD3B3'
          },
          headerTitleStyle:{
            fontSize: 25,
            fontWeight: 'bold',
            color: '#261303'
          },
          headerTintStyle:{
            fontWeight: 'bold',
          },
          headerRight: () => <Popupcomp/>
        }}
        />
      <Drawer.Screen
        name="Sign In"
        component={SigninScreen}
        options={{
          headerStyle: {
            backgroundColor: '#FAD3B3'
          },
          headerShown: false,
        }}
        />
    </Drawer.Navigator>
  );
}

function App(){
  return(
    <SafeAreaView  style={{flex: 1,backgroundColor: '#fff'}}>
    <NavigationContainer>
        <Stack.Navigator initialRouteName = "Home Page">
        <Stack.Screen
        name = "Home Page"
        component = {SignUpScreen}
        options={{
          title: 'Home Page',
          headerShown: false,
          headerTitleStyle: {
            fontWeight: 'bold',
            color: '#fff',
          },
          headerStyle: {
            backgroundColor: 'black'
          },
        }}
        />
        <Stack.Screen
         name = "Sign In"
         component = {SigninScreen}
         options={{
           title: 'Sign In',
           justifyContent: 'center',
           headerTintColor: 'black',
           headerShown: false,
           headerTitleStyle: {
             fontWeight: 'bold',
             color: 'black',
             fontSize: 20,
           },
           headerStyle: {
             backgroundColor: '#FAD3B3',
           },
         }}
         />
       <Stack.Screen
         name="ActivityDrawer"
         component = {ActivityDrawer}
         options ={{
           headerShown: false,
         }}
         />
    </Stack.Navigator>
    </NavigationContainer>
  </SafeAreaView>
  );
}

export default App;

function passcheckmatch(password, retypepassword){
  if(password!== retypepassword){
    alert('Password do not match, Check again or type again.');
  }
}

export const CustomBoxInput=(props)=>{
  return(
    <View style={{padding: 8}}>
      <Text style={{fontWeight: 'bold', fontSize: 16,color: '#261303'}}>{props.title}</Text>
      <TextInput
         value = {props.val}
         onChangeText = {props.onChangeText}
         secureTextEntry = {props.secure}
         onEndEditing = {props.submitcheck}
         style={{backgroundColor: '#fff',
           borderRadius: 8,
           borderWidth: 1.5,
           color: '#261303',
           padding: 5,
           borderColor: '#FCE9D9',
           shadowColor: '#F8C8A0',
         }}/>
    </View>
  );
}
const styles = StyleSheet.create({
  avatar:{
    borderRadius:64/2,
    height: 64,
    width: 64,
  },
  heading:{
    fontSize: 20,
    fontWeight: 'bold',
    color: '#261303',
    margin: 8,
    fontFamily: 'Tangerine'
  },
  title: {
    fontWeight: 'bold',
    color: '#261303',
    fontSize: 14
  },

  floating: {
    position: 'absolute',
    width: 50,
    height: 50,
    alignItems: 'center',
    right: 10,
    bottom: 10
  },
  floatingbutton: {
    resizeMode: 'contain',
    width: 50,
    height: 50,
  }
});

// "Fake Api" data for our app to be put in here
const Appdata = {
  woofsdog: [
    {
      id: 'one',
      name: 'Tommy',
      avatar: require('./datafolder/p1.jpeg'),
      caretaker: 'shishui Uchiha',
      source: 'internal memory'
    },
    {
      id: 'two',
      name: 'kimkam',
      avatar: require('./datafolder/p2.jpeg'),
      caretaker: 'shishui Uchiha',
      source: 'internal memory'
    },
    {
      id: 'tnree',
      name: 'limlam',
      avatar: require('./datafolder/p3.jpeg'),
      caretaker: 'shishui Uchiha',
      source: 'internal memory'
    },
    {
      id: 'four',
      name: 'mimmam',
      avatar: require('./datafolder/p4.jpeg'),
      caretaker: 'shishui Uchiha',
      source: 'internal memory'
    },
    {
      id: 'five',
      name: 'nimnam',
      avatar: require('./datafolder/p5.jpeg'),
      caretaker: 'shishui Uchiha',
      source: 'internal memory'
    },
    {
      id: 'six',
      name: 'oimoam',
      avatar: require('./datafolder/p1.jpeg'),
      caretaker: 'shishui Uchiha',
      source: 'internal memory'
    },
    {
      id: 'seven',
      name: 'pimpam',
      avatar: require('./datafolder/p2.jpeg'),
      caretaker: 'shishui Uchiha',
      source: 'internal memory'
    },
    {
      id: 'eight',
      name: 'qimqam',
      avatar: require('./datafolder/p3.jpeg'),
      caretaker: 'shishui Uchiha',
      source: 'internal memory'
    },
    {
      id: 'nine',
      name: 'rimram',
      avatar: require('./datafolder/p4.jpeg'),
      caretaker: 'shishui Uchiha',
      source: 'internal memory'
    },
  ],
  trendingposts:[
    {
      id: 'one',
      image: require('./datafolder/p1.jpeg'),
      title: 'Tom1',
      description: 'shower love',
      caretaker: 'shishui Uchiha',
      source: 'internal memory'
    },
    {
      id: 'two',
      image: require('./datafolder/p2.jpeg'),
      title: 'rocky2',
      description: 'shower love jfhfv hgfh hgffv yfhjf hfhf hfyfj yaman kanu ndkjfsd fdkjgfds fkjdjgs fkjdflg fdkjgsldf sfdk',
      caretaker: 'shishui Uchiha',
      source: 'internal memory'
    },
    {
      id: 'three',
      image: require('./datafolder/p3.jpeg'),
      title: 'rocky3',
      description: 'shower love',
      caretaker: 'shishui Uchiha',
      source: 'internal memory'
    },
    {
      id: 'four',
      image: require('./datafolder/p4.jpeg'),
      title: 'rocky4',
      description: 'shower love',
      caretaker: 'shishui Uchiha',
      source: 'internal memory'
    },
    {
      id: 'five',
      image: require('./datafolder/p5.jpeg'),
      title: 'rocky5',
      description: 'shower love',
      caretaker: 'shishui Uchiha',
      source: 'internal memory'
    }
  ]
};
