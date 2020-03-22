import React from 'react';

interface Task {
  title: string;
}

interface TasksListProps {
  tasks: Task[];
}

const TasksList: React.FunctionComponent<TasksListProps> = ({ tasks }) => {
  return <ul>
    {tasks.map((task, index) => {
      return <li key={index}>{task.title}</li>;
    })}
  </ul>
};

const tasks = [
  {title: 'Task One'},
  {title: 'Task Two'},
  {title: 'Task Three'}
]

export default () => <div><TasksList tasks={tasks} /></div>;