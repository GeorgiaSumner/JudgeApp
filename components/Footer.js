import React from "react";
import { Text, View, Image } from "react-native";
import styles from "../styles.js";

const Footer = ({ cards, booster }) => {
  if (cards.length > 0 || booster !== "All") {
    return (
      <View style={styles.footer}>
        <View style={styles.footerCredits}></View>
      </View>
    );
  }
  return (
    <View style={styles.homePage}>
      <Image
        source={require("../images/KanoCover.webp")}
        style={styles.coverImage}
      />
      <View style={styles.disclaimerContainer}>
        <Text style={styles.copyright}>Tome Of Rulings © Georgia Sumner</Text>
        <Text style={styles.disclaimer}>
          Flesh and Blood™ and all associated images are copyright © Legend
          Story Studios.
        </Text>
      </View>
    </View>
  );
};

export default Footer;
