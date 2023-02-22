/** @odoo-module **/

import { Color } from "./components/color/color";
import { Todo } from "./components/todo/todo";
import { Component, useState } from "@odoo/owl";

const _items = [
  { id: 1, description: "Hello world", done: true },
  { id: 2, description: "Component", done: false },
  { id: 3, description: "Todo", done: false },
  { id: 4, description: "Odoo", done: true },
  { id: 5, description: "Fields and Views", done: false },
  { id: 6, description: "Kanban", done: false },
  { id: 7, description: "RPC", done: false },
  { id: 8, description: "Testing", done: false },
];

export class Main extends Component {
  setup() {
    this.state = useState({ items: _items });
  }

  static template = "tutorial_theme.main";
  static components = { Color, Todo };
}
