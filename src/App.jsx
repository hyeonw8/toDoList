import './App.css';
import Layout from './components/Layout';
import TodoContainer from './components/components2/TodoContainer2';

function App() {
  return (
    <Layout>
      <TodoContainer />
      {/* TodoContainer가 childern */}
    </Layout>
  );
}

export default App;
