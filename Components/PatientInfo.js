import React from "react";
import { View, Text } from "react-native";
import styles from "../styles/styles";

const PatientInfo = ({
  title = "",
  Name = "",
  Email = "",
  Phone = "",
  Address = "",
  DOB = "",
  Status = { name: "" },
}) => (
  <View style={styles.container}>
    <Text style={styles.textTitle}>{title}</Text>
    <View style={styles.containerBox}>
      <View>
        <View>
          <Text style={styles.textLeft}>Name</Text>
        </View>
        <View>
          <Text style={styles.textLeft}>Email</Text>
        </View>
        <View>
          <Text style={styles.textLeft}>Phone</Text>
        </View>
        <View>
          <Text style={styles.textLeft}>Address</Text>
        </View>
        <View>
          <Text style={styles.textLeft}>DOB</Text>
        </View>
        <View>
          <Text style={styles.textLeft}>Status</Text>
        </View>
      </View>

      <View>
        <View>
          <Text style={styles.textRight}>{Name}</Text>
        </View>
        <View>
          <Text style={styles.textRight}>{Email}</Text>
        </View>
        <View>
          <Text style={styles.textRight}>{Phone}</Text>
        </View>
        <View>
          <Text style={styles.textRight}>{Address}</Text>
        </View>
        <View>
          <Text style={styles.textRight}>{DOB}</Text>
        </View>
        <View>
          <Text style={styles.textRight}>{Status.name}</Text>
        </View>
      </View>
    </View>
  </View>
);

export default PatientInfo;
