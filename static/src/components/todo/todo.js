/** @odoo-module **/
import { Component, useState, useRef, onMounted } from "@odoo/owl";

export class Item extends Component {
  static props = {
    id: { type: Number },
    description: { type: String },
    done: { type: Boolean },
    toggle_state: { type: Function },
    remove_todo: { type: Function },
  };

  on_click(ev) {
    this.props.toggle_state(this.props.id);
  }

  on_remove() {
    this.props.remove_todo(this.props.id);
  }
}

export class Todo extends Component {
  // Type....
  //
  // static props = {
  //   items: {
  //     type: Array,
  //     element: {
  //       type: Object,
  //       shape: {
  //         id: Number,
  //         description: String,
  //         done: Boolean,
  //       },
  //     },
  //   },
  // };
  ref = useRef("todo-ref");

  setup() {
    this.next_id = 0;
    this.items = useState([]);
    onMounted(() => {
      if (this.ref.el) {
        this.ref.el.focus();
      }
    });
  }

  add_item(ev) {
    if (ev.keyCode === 13 && ev.target.value.trim() != "") {
      this.items.push({
        id: ++this.next_id,
        description: ev.target.value.trim(),
        done: false,
      });
      ev.target.value = "";
    }
  }

  toggle_todo(todo_id) {
    const todo = this.items.find((todo) => todo.id === todo_id);
    if (todo) {
      todo.done = !todo.done;
    }
  }

  delete_todo(todo_id) {
    const todo_index = this.items.findIndex((todo) => todo.id === todo_id);
    if (todo_index >= 0) {
      this.items.splice(todo_index, 1);
    }
  }

  static components = { Item };
}

Item.template = "tutorial_theme.Item";
Todo.template = "tutorial_theme.Todo";
