import React from "react";
import { View, Text } from "react-native";
import styles from "../styles/styles";

const ProblemDetails = ({ title = "", Concern = "", Symptoms = "" }) => (
  <View style={styles.container}>
    <Text style={styles.textTitle}>{title}</Text>

    <View style={styles.containerBox}>
      <View>
        <View>
          <Text style={styles.textLeft}>Concern</Text>
        </View>
        <View>
          <Text style={styles.textLeft}>Symptoms</Text>
        </View>
      </View>

      <View>
        <View>
          <Text style={styles.textRight}>{Concern}</Text>
        </View>
        <View>
          <Text style={[styles.textRight, { maxWidth: "90%", flexShrink: 1 }]}>
            {Symptoms}
          </Text>
        </View>
      </View>
    </View>
  </View>
);

export default ProblemDetails;
