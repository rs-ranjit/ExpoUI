import { StyleSheet } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

const styles = StyleSheet.create({
  main: {
    backgroundColor: "#f5f5f5",
    flex: 1,
  },
  topContainer: {
    backgroundColor: "white",
    height: hp("7"),
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: wp("3"),
  },
  image: {
    width: wp("10"),
    height: hp("2"),
  },
  topText: {
    fontWeight: "bold",
    fontSize: wp("4"),
    paddingLeft: 100,
  },
  container: {
    backgroundColor: "white",
    margin: wp("3"),
    padding: wp("3"),
  },
  containerBox: {
    flexDirection: "row",
  },
  textRight: {
    paddingLeft: wp("11"),
    fontSize: wp("3.4"),
    paddingBottom: wp("1.6"),
  },
  textLeft: {
    paddingLeft: wp("3"),
    paddingBottom: wp("1.6"),
    color: "grey",
    fontSize: wp("3.4"),
  },
  textTitle: {
    fontWeight: "bold",
    fontSize: wp("3.4"),
    marginBottom: wp("5"),
    paddingLeft: wp("3"),
  },
  button: {
    borderWidth: 1,
    width: wp("27"),
    justifyContent: "center",
    height: hp("6"),
    alignItems: "center",
    backgroundColor: "white",
    borderRadius: 5,
    borderColor: "#f5f5f5",
    elevation: 1,
    marginTop: hp("2"),
  },
  lastContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
});

export default styles;
