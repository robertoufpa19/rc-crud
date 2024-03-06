
import React , {useContext} from "react"
import {View, FlatList , Alert} from 'react-native';

import { ListItem, Avatar, Button, Icon } from '@rneui/themed';
import props from './UserForm';
import UsersContext from '../context/UsersContext'

export default props => {

   const {state, dispatch} = useContext(UsersContext) 

    function confirmeUserDeletion(user){
      Alert.alert('Excluir Usuário', 'Deseja excluir o usuário '+ user.name +" ?", [
       {
        text:'Sim',
        onPress(){
           dispatch({
              type: 'deleteUser',
              payload: user,
           })
        }
       },
       {
        text:'Não'
       }


      ])
    }

     function getActions(user){
       return(
         <>
          <Button
           onPress={() => props.navigation.navigate('UserForm', user)}
           type="clear"
           icon={<Icon name="edit" size={25} color="orange"/>}>
          </Button>
            
          
         </>
       )
     }

     function getUserItem({item: user}){
        return(
          
        <ListItem 
        bottomDivider
        //rightElement={getActions(user)}
        onPress={() => props.navigation.navigate('UserForm',user)}>
          <Avatar
            rounded
            source={{ uri: user.avatarUrl }}
          />
          <ListItem.Content>
            <ListItem.Title>{user.name}</ListItem.Title>
            <ListItem.Subtitle>{user.email}</ListItem.Subtitle>
          </ListItem.Content>

          <Button
           onPress={() => props.navigation.navigate('UserForm', user)}
           type="clear"
           icon={<Icon name="edit" size={25} color="#87CEFA"/>}>
          </Button>

          <Button
           onPress={() => confirmeUserDeletion(user)}
           type="clear"
           icon={<Icon name="delete" size={25} color="#87CEFA"/>}>
          </Button>
          
        </ListItem> 
        )
     }
        

    return(
        <View>
            <FlatList
              keyExtractor={user => user.id.toString()}
              data={state.users}
              renderItem={getUserItem}
            />
        </View>
    )
}
