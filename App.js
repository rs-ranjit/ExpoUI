import React from "react";
import { View, StatusBar, Image, Text, SafeAreaView } from "react-native";
import styles from "./styles/styles";
import BookingDetails from "./Components/BookingDetails";
import PatientInfo from "./Components/PatientInfo";
import ProblemDetails from "./Components/ProblemDetails";
import ActionButtons from "./Components/ActionButtons";

const App = () => {
  return (
    <SafeAreaView style={styles.main}>
      <StatusBar barStyle="dark-content" backgroundColor="white" />
      <View style={styles.topContainer}>
        <Image
          source={require("./Assets/arrow.png")}
          style={styles.image}
          resizeMode="contain"
        />
        <Text style={styles.topText}>Schedule Details</Text>
      </View>

      <BookingDetails
        title="Booking Details"
        ID="PD-0351512224"
        Date="Mon, 26 Jul 2024"
        Time="09:00 AM"
        Duration="30 Minutes"
        Status={{
          name: "Upcoming",
          styles: {
            backgroundColor: "lavender",
            color: "purple",
            width: 80,
            paddingLeft: "none",
            marginLeft: 20,
            borderRadius: 5,
          },
        }}
      />

      <PatientInfo
        title="Patient Information"
        Name="Ansal Gurung"
        Email="ansalgurung124@gmail.com"
        Phone="+977 980 4567891"
        Address="Kathmandu, Nepal"
        DOB="1995-08-25"
        Status={{ name: "Male" }}
      />

      <ProblemDetails
        title="Problem Details"
        Concern="Back Pain"
        Symptoms="Pain in middle area stomach. Already consumed painkillers for past two days and there is no progress."
      />

      <ActionButtons />
    </SafeAreaView>
  );
};

export default App;
