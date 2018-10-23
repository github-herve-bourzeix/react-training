import React, { Component } from "react";
import Notification from "./Notification";

export default class NotificationPanel extends Component {
  constructor() {
    super();
    this.state = {
      notifications: ["notification1", "notification2"]
    };
  }

  handleDismissAll = () => {
    this.setState({
      notifications: []
    });
  };

  render() {
    const { notifications } = this.state;
    return (
      <section>
        {notifications.map((message, index) => (
          <Notification key={`notification_${index}`} message={message} />
        ))}
        <button onClick={this.handleDismissAll}>Dismiss all</button>
      </section>
    );
  }
}
