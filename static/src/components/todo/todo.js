/** @odoo-module **/
import { Component } from "@odoo/owl";

export class Item extends Component {
  static props = ["id", "description", "done"];
}

export class Todo extends Component {
  static props = {
    items: {
      type: Array,
      element: {
        type: Object,
        shape: {
          id: Number,
          description: String,
          done: Boolean,
        },
      },
    },
  };

  static components = { Item };
}

Item.template = "tutorial_theme.Item";
Todo.template = "tutorial_theme.Todo";
