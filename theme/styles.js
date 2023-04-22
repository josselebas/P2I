import { StyleSheet } from "react-native";

// Common styles
const styles = StyleSheet.create({
  //Général
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
    backgroundColor: "#BCC2CA",
  },
  text: { fontSize: 18, paddingBottom: 10 },

  //CollectionScreen
  collectionContainer: {
    width: "100%",
    height: "55%",
    alignItems: "center",
  },
  collectionText: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#2B2E42",
  },
  collectionTab: {
    flexDirection: "row",
    height: "10%",
    width: "97%",
    marginTop: 16,
    justifyContent: "center",
    backgroundColor: "blue",
  },
  activeTab: {
    backgroundColor: "#2B2E42",
    borderColor: "#2B2E42",
    borderWidth: 2,
    width: "50%",
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
  },
  activeTabText: {
    fontSize: 15,
    fontWeight: "bold",
    color: "#BCC2CA",
  },
  inactiveTab: {
    borderWidth: 2,
    borderColor: "#2B2E42",
    backgroundColor: "#BCC2CA",
    width: "50%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  inactiveTabText: {
    fontSize: 15,
    fontWeight: "bold",
    color: "#2B2E42",
  },
  collection: {
    height: "100%",
    width: "97%",
    backgroundColor: "#2B2E42",
    borderWidth: 2,
    borderColor: "#2B2E42",
    flexWrap: "wrap",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingRight: 10,
  },
  paquets: {
    height: "8%",
    width: "70%",
    backgroundColor: "#2B2E42",
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 12,
    marginBottom: 12,
  },
  paquetsText: {
    color: "#EDF2F4",
    fontSize: 16,
    fontWeight: "bold",
  },
  notification: {
    position: "absolute",
    top: 10,
    right: 10,
    backgroundColor: "red",
    borderRadius: 50,
    width: 35,
    height: 35,
    marginTop: -22,
    marginRight: -22,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: "#2B2E42",
    backgroundColor: "#FFFF00",
  },
  notificationText: {
    fontSize: 14,
    color: "#2B2E42",
    fontWeight: "bold",
  },
});

export default styles;

export const teamCard = StyleSheet.create({
  elements: {
    flexDirection: "row",
    position: "absolute",
    top: -13,
    left: 0,
    zIndex: 2,
  },
  container: {
    backgroundColor: "#EDF2F4",
    height: 100,
    width: 165,
    position: "relative",
    borderWidth: 2,
    borderRadius: 8,
    marginTop: 20,
    marginLeft: 10,
  },
  circle: {
    width: 25,
    height: 25,
    borderRadius: 50,
    borderWidth: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#2B2E42",
    marginLeft: 0,
  },
  teamName: {
    fontWeight: "bold",
    fontSize: 13,
    marginTop: 20,
  },
  logoContainer: {
    width: 40,
    height: 40,
    marginTop: 10,
    marginLeft: 0,
  },
  nameContainer: {
    width: 110,
  },
  pilotesContainer: {
    height: "100%",
    flexDirection: "row",
    marginTop: 20,
  },
  piloteContainer: {
    width: "50%",
    alignItems: "center",
  },
  piloteImage: {
    width: 40,
    height: 40,
    marginLeft: 0,
  },
});

export const carrousel = StyleSheet.create({
  item: {
    width: 100,
    height: 100,
    backgroundColor: "blue",
  },
  container: {
    backgroundColor: "#EDF2F4",
    justifyContent: "space-around",
    flexDirection: "row",
    alignItems: "center",
    height: "100%",
    width: "100%",
    marginBottom: 16,
  },
  text: {
    color: "#2B2E42",
    textAlign: "center",
    fontWeight: "bold",
  },
  viewLeft: {
    alignItems: "flex-start",
    justifyContent: "center",
    height: "100%",
  },
  arrowLeft: {
    width: 0,
    height: 0,
    borderLeftWidth: 0,
    borderRightWidth: 20,
    borderTopWidth: 10,
    borderBottomWidth: 10,
    borderLeftColor: "transparent",
    borderRightColor: "black",
    borderTopColor: "transparent",
    borderBottomColor: "transparent",
    marginTop: 50,
  },
  details: {
    textDecorationLine: "underline",
    color: "blue",
    marginTop: 30,
  },
  viewMiddle: {
    height: "100%",
  },
  statutText: {
    fontSize: 13,
    marginTop: 40,
    marginBottom: 10,
  },
  GPText: {
    fontSize: 32,
  },
  dateText: {
    fontSize: 18,
    marginBottom: 20,
  },
  circuit: {
    height: "64%",
    width: "34%",
  },
  arrowRight: {
    width: 0,
    height: 0,
    borderLeftWidth: 20,
    borderRightWidth: 0,
    borderTopWidth: 10,
    borderBottomWidth: 10,
    borderLeftColor: "black",
    borderRightColor: "transparent",
    borderTopColor: "transparent",
    borderBottomColor: "transparent",
  },
});

export const shop = StyleSheet.create({
  modalContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(0,0,0,0.5)",
  },
  popup: {
    width: "80%",
    padding: 20,
    backgroundColor: "#2B2E42",
    borderRadius: 20,
    alignItems: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
    color: "white",
  },
  message: {
    fontSize: 16,
    textAlign: "center",
    marginBottom: 20,
    color: "white",
  },
  button: {
    padding: 10,
    backgroundColor: "green",
    borderRadius: 5,
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
  smallContainer: { height: "80%", width: "100%", alignItems: "center" },
  boutiqueText: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#2B2E42",
  },
  offersContainer: {
    flexDirection: "row",
    backgroundColor: "#2B2E42",
    width: "80%",
    height: "10%",
    borderRadius: 20,
    borderWidth: 2,
    alignItems: "center",
    justifyContent: "space-around",
    marginVertical: 12,
  },
  offerText: { color: "white", fontWeight: "bold" },
  buyButton: {
    height: "50%",
    width: "30%",
    backgroundColor: "green",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
});

export const card = StyleSheet.create({
  view: {
    width: "40%",
  },
  container: {
    backgroundColor: "#2B2E42",
    alignItems: "center",
    height: "100%",
    width: "100%",
    borderRadius: 16,
  },
  text: {
    color: "#2B2E42",
    textAlign: "center",
    fontWeight: "bold",
  },
  plusText: {
    fontSize: 32,
  },
  conditionText: {
    fontSize: 13,
  },
  pointsText: {
    color: "#34B458",
    fontSize: 13,
  },
  multiplicateurText: {
    fontSize: 23,
  },
  pilote: {
    height: "55%",
    width: "80%",
    backgroundColor: "#8D9AAE",
    borderRadius: 18,
    marginVertical: 12,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  condition: {
    backgroundColor: "#8D9AAE",
    borderRadius: 4,
    width: "80%",
    height: "20%",
    justifyContent: "space-around",
    alignItems: "center",
    marginTop: 5,
  },
  ellipse: {
    width: "50%",
    height: "50%",
    borderRadius: 50,
    backgroundColor: "#8DDB9E",
    justifyContent: "space-around",
    flexDirection: "row",
    alignItems: "center",
  },
  cercle: {
    width: 35,
    height: 35,
    borderRadius: 50,
    borderWidth: 2,
    justifyContent: "center",
    alignItems: "center",
  },
  vert: {
    backgroundColor: "#8DDB9E",
    borderColor: "#34B458",
  },
  rouge: {
    backgroundColor: "#E88080",
    borderColor: "#C53F3F",
  },
  gris: {
    backgroundColor: "#8D9AAE",
    borderColor: "#333333",
  },
  containerCircles: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    width: "100%",
    height: "25%",
    marginTop: 0,
  },
  icon: {
    width: "100%",
    height: "100%",
  },
});

export const navbar = StyleSheet.create({
  container: {
    backgroundColor: "#2B2E42",
    justifyContent: "space-around",
    flexDirection: "row",
    alignItems: "center",
    height: "10%",
    width: "100%",
  },
  text: {
    color: "#FEFEFE",
    textAlign: "center",
    fontSize: 18,
    fontWeight: "bold",
  },
});

export const piloteCard = StyleSheet.create({
  elements: {
    flexDirection: "row",
    position: "absolute",
    top: -13,
    left: 0,
    zIndex: 2,
  },
  container: {
    backgroundColor: "#EDF2F4",
    height: 100,
    width: 100,
    position: "relative",
    borderWidth: 2,
    borderRadius: 8,
    marginTop: 20,
    marginLeft: 10,
  },
  drapeau: {
    width: 20,
    height: 15,
    marginTop: 15,
  },
  circle: {
    width: 25,
    height: 25,
    borderRadius: 50,
    borderWidth: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#2B2E42",
    marginLeft: 50,
  },
  number: {
    fontWeight: "bold",
    fontSize: 12,
    color: "#BCC2CA",
    marginTop: 15,
  },
  pilote: {
    width: "100%",
    height: "100%",
    position: "absolute",
    top: 0,
    left: 0,
    zIndex: 1,
  },
});

export const timeLeft = StyleSheet.create({
  container: {
    backgroundColor: "#2B2E42",
    justifyContent: "center",
    alignItems: "center",
    height: "5%",
    width: "90%",
    borderRadius: 18,
    marginBottom: 16,
  },
  text: {
    color: "#8D9AAE",
    textAlign: "center",
    fontSize: 18,
    fontWeight: "bold",
  },
});

export const missionPopup = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContent: {
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 10,
    alignItems: "center",
    height: "25%",
    width: "70%",
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
    textAlign: "center",
  },
  modalDescription: {
    fontSize: 16,
    marginBottom: 20,
    textAlign: "center",
  },
  modalButton: {
    backgroundColor: "#00a8ff",
    padding: 10,
    borderRadius: 5,
  },
  modalButtonText: {
    color: "#fff",
    fontSize: 16,
  },
  ellipse: {
    width: "20%",
    height: "20%",
    borderRadius: 50,
    backgroundColor: "#8DDB9E",
    justifyContent: "space-around",
    flexDirection: "row",
    alignItems: "center",
  },
  text: {
    color: "#2B2E42",
    textAlign: "center",
    fontWeight: "bold",
  },
  pointsText: {
    color: "#34B458",
    fontSize: 13,
  },
});
