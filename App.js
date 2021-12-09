import React from "react";
import Toast from 'react-native-toast-message';
import Layout from "./src/components/Layout";
import Routes from "./src/routes";
import { toastConfig } from "./src/utils/ToastConfig";


const App = () => {
  return (
    <Layout>
      <Routes />
      <Toast config={toastConfig} />
    </Layout>
  );
};


export default App;