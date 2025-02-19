import { useState } from 'react';
import MainView from '../sections/MainView';
import WhoAre from '../sections/WhoAre';
import Quote from '../sections/Quote';
import Products from '../sections/Products';
import JoinRed from '../sections/JoinRed';
import Layout from '../components/Layout';

const Home = () => {
  const [, setActiveSection] = useState('main');

  return (
    <Layout setActiveSection={setActiveSection}>
      <MainView />
      <WhoAre />
      <Products setActiveSection={setActiveSection} />
      <Quote />
      <JoinRed />
    </Layout>
  );
};

export default Home;
