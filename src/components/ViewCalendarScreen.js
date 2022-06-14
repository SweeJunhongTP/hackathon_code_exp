import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { Agenda } from 'react-native-calendars';
import { TouchableOpacity } from 'react-native-web';
import { Card, Avatar } from 'react-native-paper';

const timeToString = (time) => {
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
      const newItems = {};
      Object.keys(items).forEach((key) => {
        newItems[key] = items[key];
      });
      setItems(newItems)
    }, 1000);
  };
  const renderItem = (item) => {
    return (
      <TouchableOpacity style={{ marginRight: 10, marginTop: 17 }}>
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
    <View style={{ flex: 1 }}>
      <Agenda
        // items={items}
        items={{
          '2022-06-05': [
            { name: 'Book in at 1900HRS' }
          ],
          '2022-06-06': [
            { name: 'CQB Day 1' }
          ],
          '2022-06-07': [
            { name: 'CQB Day 2' }
          ],
          '2022-06-08': [{
            name: '0530: Reveille'
          },
          { name: '0545: Fall in, light exercises and running' },
          { name: '0600: Breakfast (March to the cookhouse' },
          { name: '0630: Area Cleaning, Admin Time' },
          { name: '0715: First Parade' },
          { name: '0730: Initial Inspection' },
          { name: '0800: 6km Route March' },
          { name: '0930: Military Lessons' },
          { name: '1130: Mid-Day Parade' },
          { name: '1145: Pull-up regime, Lunch' },
          { name: '1300: Weapon Maintenance, Drills Rehearsal' },
          { name: '1730: Last Parade' },
          { name: '1745: Dinner, Admin Time' },
          { name: '2215: Roll Call' },
          { name: '2230: Lights Out' }
          ],
          '2022-06-09': [
            { name: 'Leave Approved: Medical Appointment' }
          ],
          '2022-06-10': [
            { name: 'Bookout at 1800HRS' }
          ],
          '2022-06-12': [
            { name: 'Book in at 1900HRS' }
          ],
          '2022-06-13': [
            { name: 'Outfield Day 1' }
          ],
          '2022-06-14': [
            { name: 'Outfield Day 2' }
          ],
          '2022-06-15': [
            { name: 'Outfield Day 3' }
          ],
          '2022-06-16': [
            { name: '0530: Reveille' },
            { name: '0545: Fall in, light exercises and running' },
            { name: '0600: Breakfast (March to the cookhouse' },
            { name: '0630: Area Cleaning, Admin Time' },
            { name: '0715: First Parade' },
            { name: '0730: Initial Inspection' },
            { name: '0800: 6km Route March' },
            { name: '0930: Military Lessons' },
            { name: '1130: Mid-Day Parade' },
            { name: '1145: Pull-up regime, Lunch' },
            { name: '1300: Weapon Maintenance, Drills Rehearsal' },
            { name: '1730: Last Parade' },
            { name: '1745: Dinner, Admin Time' },
            { name: '2215: Roll Call' },
            { name: '2230: Lights Out' }
          ],
          '2022-06-17': [
            { name: 'ATP 3' },
            { name: 'Dinner pushed to 1830HRS' }
          ],
          '2022-06-18': [
            { name: 'Bookout at 1200HRS' }
          ],
        }}
        loadItemsForMonth={loadItems}
        selected={'2022-06-16'}
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
    marginTop: 17,
    fontSize: 20
  },
  ItemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  Container: {
    marginTop: 17,
    marginRight: 10
  }

})