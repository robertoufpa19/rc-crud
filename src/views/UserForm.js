
import React, {useState, useContext} from "react"
import { Text, View, TextInput, StyleSheet } from 'react-native';
import { Avatar, Button, Icon } from '@rneui/themed';
import UsersContext from '../context/UsersContext'

export default ({route, navigation}) => {

    const [user, setUser] = useState(route.params ? route.params : {})
    const {dispatch} = useContext(UsersContext)
    return(
        <View style={style.form}>

          <Avatar
            rounded
            source={{ uri: user.avatarUrl }}
          />

            <Text>URL Avatar:</Text>
            <TextInput
              style={style.input}
               onChangeText={avatarUrl => setUser({...user, avatarUrl})}
               placeholder="url"
               value={user.avatarUrl}
            />

            <Text>Nome:</Text>
            <TextInput
              style={style.input}
               onChangeText={name => setUser({...user, name})}
               placeholder="Informe o nome"
               value={user.name}
            />

          <Text>Email:</Text>
            <TextInput
               style={style.input}
               onChangeText={email => setUser({...user, email})}
               placeholder="Informe o email"
               value={user.email}
            />

            <Button radius={"sm"} type="solid" marginBottom ={5}
             onPress={() => {
                dispatch({
                  type: user.id ? 'updateUser' : 'createUser',
                  payload: user,
                })
                navigation.goBack()
             }}
            >
             Salvar
            <Icon name="save" color="white"  padding={10}/>
            </Button>

        </View>
    )
}

const style = StyleSheet.create({
     form: {
        padding: 15
     },
     input: {
        height: 40,
        borderColor: '#87CEFA',
        borderWidth: 1,
        padding: 5,
        marginBottom: 10,

     }
})
 