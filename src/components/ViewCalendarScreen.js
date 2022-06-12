import { StyleSheet, Text, View } from 'react-native'
import React, {useState} from 'react'
import { Agenda } from 'react-native-calendars';
import { TouchableOpacity } from 'react-native-web';
import {Card, Avatar} from 'react-native-paper';

const timeToString=(time) =>{
  const date = new Date(time);
  return date.toISOString().split('T')[0];
}

const ViewCalendarScreen = () => {
   const [items, setItems] = useState({});

   const loadItems = (day) => {
    setTimeout(() => {
      for (let i = -15; i < 85; i++) {
        const time = day.timestamp + i * 24 * 60 * 60 * 1000;
        const strTime = timeToString(time);

        if (!items[strTime]) {
          items[strTime] = [];
          
          const numItems = Math.floor(Math.random() * 3 + 1);
          for (let j = 0; j < numItems; j++) {
            items[strTime].push({
              name: 'Leave ' + strTime + ' #' + j,
              height: Math.max(50, Math.floor(Math.random() * 150)),
              day: strTime
            });
          }
        }
      }
      const newItems= {};
      Object.keys(items).forEach((key) => {
        newItems[key] = items[key];
      });
      setItems(newItems)
    }, 1000);
  };
  const renderItem = (item) => {
    return (
      <TouchableOpacity style={{marginRight: 10, marginTop: 17}}>
        <Card>
          <Card.Content>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}>
              <Text>{item.name}</Text>
              <Avatar.Text label="NS" />
            </View>
          </Card.Content>
        </Card>
      </TouchableOpacity>
    );
  };

  return (
    <View style={{flex: 1}}>
      <Agenda
        items={items}
        loadItemsForMonth={loadItems}
        selected={'2022-06-15'}
        renderItem={renderItem}
      />
    </View>
  );
};

export default ViewCalendarScreen

const styles = StyleSheet.create({
  item: {
    backgroundColor: 'white',
    flex: 1,
    borderRadius: 5,
    padding: 10,
    marginRight: 10,
    marginTop: 17
  },
  ItemContainer:{
    flexDirection: 'row',
    justifyContent:'space-between',
    alignItems:'center'
  },
  Container:{
    marginTop:17,
    marginRight:10
  }
  
})