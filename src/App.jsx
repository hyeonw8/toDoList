import './App.css';
import Layout from './components/Layout';
import TodoContainer from './components/TodoContainer';

function App() {
  return (
      <Layout>
        <TodoContainer /> 
        {/* TodoContainer가 childern */}
      </Layout>
  );
}

export default App;
