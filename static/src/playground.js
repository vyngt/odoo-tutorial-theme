/** @odoo-module **/

import { Color } from "./components/color/color";
import { Component } from "@odoo/owl";

export class Playground extends Component {
  static template = "tutorial_theme.playground";
  static components = { Color };
}
