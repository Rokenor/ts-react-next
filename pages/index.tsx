import { Provider } from "react-redux";
import { createStore } from "redux";
import { reducer } from "../reducer";
import { Weather } from '../components/Weather';
import { WithWeatherProps } from "../components/Weather";
// import { ConnectedTasksList } from "../components/TasksList";


const store = createStore(reducer);

export default () => (
  <Provider store={store}>
     <WithWeatherProps>{(props) => {
       return <Weather {...props} theme="yellow" />
    }}</WithWeatherProps>
  </Provider>
);