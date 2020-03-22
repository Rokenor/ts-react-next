import React from 'react';

interface Task {
  title: string;
}

interface TasksListProps {
  initialTasks: Task[];
}

interface TasksListState {
  tasks: Task[];
}

class TasksList extends React.Component<TasksListProps, TasksListState> {
  constructor(props: TasksListProps) {
    super(props);
    this.state = {
      tasks: props.initialTasks
    };
    this.onAddNewTasksClick = this.onAddNewTasksClick.bind(this);
  }

  onAddNewTasksClick() {
    this.setState({
      tasks: [
        ...this.state.tasks,
        { title: 'New Task' }
      ]
    })
  };

  render() {
    const { tasks } = this.state;

    return <ul>
      {tasks.map((task, index) => {
        return <li key={index}>{task.title}</li>;
      })}
      <button onClick={this.onAddNewTasksClick}>Add new task</button>
    </ul>
  }
}

const tasks = [
  {title: 'Task One'},
  {title: 'Task Two'},
  {title: 'Task Three'}
]

export default () => <div><TasksList initialTasks={tasks} /></div>;