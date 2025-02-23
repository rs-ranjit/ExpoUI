import React from "react";
import { View, Text } from "react-native";
import styles from "../styles/styles"; //

const BookingDetails = ({
  title = "",
  ID = "",
  Date = "",
  Time = "",
  Duration = "",
  Status = { name: "", styles: {} },
}) => (
  <View style={styles.container}>
    <Text style={styles.textTitle}>{title}</Text>
    <View style={styles.containerBox}>
      <View>
        <View>
          <Text style={styles.textLeft}>ID</Text>
        </View>
        <View>
          <Text style={styles.textLeft}>Date</Text>
        </View>
        <View>
          <Text style={styles.textLeft}>Time</Text>
        </View>
        <View>
          <Text style={styles.textLeft}>Duration</Text>
        </View>
        <View>
          <Text style={styles.textLeft}>Status</Text>
        </View>
      </View>
      <View>
        <View>
          <Text style={styles.textRight}>{ID}</Text>
        </View>
        <View>
          <Text style={styles.textRight}>{Date}</Text>
        </View>
        <View>
          <Text style={styles.textRight}>{Time}</Text>
        </View>
        <View>
          <Text style={styles.textRight}>{Duration}</Text>
        </View>
        <View>
          <Text style={[styles.textRight, Status.styles]}>{Status.name}</Text>
        </View>
      </View>
    </View>
  </View>
);

export default BookingDetails;
