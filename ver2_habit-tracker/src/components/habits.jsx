import React, { Component } from "react";
import Habit from "./habit";
import HabitAddForm from "./habitAddForm";
import Navbar from "./navbar";

class Habits extends Component {
  state = {
    habits: [
      { id: 1, name: "Coding", count: 0 },
      { id: 2, name: "Dancing", count: 0 },
      { id: 3, name: "Gaming", count: 0 },
    ],
  };
  handleIncrement = (habit) => {
    const habits = [...this.state.habits];
    const index = habits.indexOf(habit);
    habits[index].count++;
    this.setState({ habits });
  };
  handleDecrement = (habit) => {
    const habits = [...this.state.habits];
    const index = habits.indexOf(habit);
    const count = habits[index].count - 1;
    habits[index].count = count < 0 ? 0 : count;
    this.setState({ habits });
  };
  handleDelete = (habit) => {
    const habits = this.state.habits.filter((item) => item.id !== habit.id);
    this.setState({ habits });
  };
  handleReset = () => {
    const habits = this.state.habits.map((habit) => {
      if (habit.count === 0) {
        return habit;
      }
      habit.count = 0;
      return habit;
    });
    this.setState({ habits });
  };
  handleAdd = (name) => {
    const habit = { id: Date.now(), name, count: 0 };
    const habits = [...this.state.habits, habit];
    this.setState({ habits });
  };
  render() {
    return (
      <div className="habits">
        <Navbar
          totalCount={this.state.habits.filter((item) => item.count > 0).length}
        />
        <HabitAddForm onAdd={this.handleAdd} />
        <ul>
          {this.state.habits.map((habit) => (
            <Habit
              key={habit.id}
              habit={habit}
              onIncrease={this.handleIncrement}
              onDecrease={this.handleDecrement}
              onDelete={this.handleDelete}
            />
          ))}
        </ul>
        <button className="habit-reset" onClick={this.handleReset}>
          RESET
        </button>
      </div>
    );
  }
}

export default Habits;
