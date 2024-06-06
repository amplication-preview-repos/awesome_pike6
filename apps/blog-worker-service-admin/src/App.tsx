import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { BlogConsumerList } from "./blogConsumer/BlogConsumerList";
import { BlogConsumerCreate } from "./blogConsumer/BlogConsumerCreate";
import { BlogConsumerEdit } from "./blogConsumer/BlogConsumerEdit";
import { BlogConsumerShow } from "./blogConsumer/BlogConsumerShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"BlogWorkerService"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="BlogConsumer"
          list={BlogConsumerList}
          edit={BlogConsumerEdit}
          create={BlogConsumerCreate}
          show={BlogConsumerShow}
        />
      </Admin>
    </div>
  );
};

export default App;
