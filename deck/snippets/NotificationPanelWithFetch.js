import React, { Component } from "react";
import Notification from "./Notification";
import fetchNotifications from "./service/fetchNotifications";

export default class NotificationPanel extends Component {
  constructor() {
    super();
    this.state = {
      notifications: []
    };
  }

  componentDidMount() {
    fetchNotifications().then(notifications => {
      this.setState({ notifications });
    });
  }

  render() {
    const { notifications } = this.state;
    return (
      <section>
        {notifications.map((message, index) => (
          <Notification key={`notification_${index}`} message={message} />
        ))}
      </section>
    );
  }
}
