/** @odoo-module **/

import { Color } from "./components/color/color";
import { Component } from "@odoo/owl";

export class Main extends Component {
  static template = "tutorial_theme.main";
  static components = { Color };
}
