import React, { Component } from "react";

export class NotificationPanel extends Component {
  constructor() {
    super();
    this.state = {
      notifications: ["notification1", "notification2"]
    };
  }

  render() {
    const { notifications } = this.state;
    return (
      <section>
        {notifications.map(message => (
          <Notification message={message} />
        ))}
      </section>
    );
  }
}
