import React, { Component } from "react";

import { StyleSheet, Text, View } from "react-native";

import SwipeCard from "react-native-deck-swiper";

const EventCard = ({ data }) => {
  const { time } = data;
  return (
    <View style={styles.card}>
      <Text>on {time}</Text>
    </View>
  );
};

export default class ValidateEventCard extends Component {
  constructor(props) {
    super(props);
    this.cards = [
      {
        type: "Gun",
        time: "1:41PM 16 February 2019"
      },
      {
        type: "Gun",
        time: "9:23PM 16 February 2019"
      }
    ];
  }
  renderCard = (card, index) => <EventCard data={card} />;
  render() {
    return (
      <View>
        <SwipeCard
          ref={swiper => {
            this.swiper = swiper;
          }}
          verticalSwipe={false}
          cards={this.cards}
          renderCard={this.renderCard}
          stackSize={3}
          stackSeparation={15}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  card: {
    flex: 1,
    borderRadius: 4,
    borderWidth: 2,
    borderColor: "#E8E8E8",
    justifyContent: "center",
    backgroundColor: "white",
    marginBottom: 50
  }
});
