import React, { Component } from "react";

class Settings extends Component {
  onSaveHandle = () => {
    const { onSave } = this.props;
    onSave({
      level: this.formRef["level"].value,
      theme: this.formRef["theme"].value
    });
  };

  render() {
    return (
      <div>
        <form ref={ref => (this.formRef = ref)}>
          <h3>Choose a level</h3>
          Easy <input type="radio" name="level" value="easy" defaultChecked />
          Medium <input type="radio" name="level" value="medium" />
          Nightmare <input type="radio" name="level" value="nightmare" />
          <h3>Choose a theme</h3>
          <select name="theme" defaultValue="Manga">
            <option>Manga</option>
            <option>Space</option>
            <option>Nature</option>
          </select>
        </form>
        <button type="button" onClick={this.onSaveHandle}>
          Save
        </button>
      </div>
    );
  }
}
