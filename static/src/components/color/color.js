/** @odoo-module **/
import { Component, useState } from "@odoo/owl";

export class Color extends Component {
  setup() {
    this.state = useState({ value: 1 });
  }

  increment() {
    this.state.value = this.state.value + 10;
  }
}

Color.template = "tutorial_theme.Color";
