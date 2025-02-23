import React from "react";
import { TouchableOpacity, Text, View } from "react-native";
import styles from "../styles/styles"; //

const ActionButtons = () => {
  return (
    <View style={styles.lastContainer}>
      <TouchableOpacity style={styles.button}>
        <Text style={{ color: "orange" }}>Reject</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <Text style={{ color: "purple" }}>Reschedule</Text>
      </TouchableOpacity>
      <TouchableOpacity style={[styles.button, { backgroundColor: "purple" }]}>
        <Text style={{ color: "white" }}>Check In</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ActionButtons;
