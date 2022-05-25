import buildClient from '../api/build-client';
import { Header } from '../components/header';
import 'bootstrap/dist/css/bootstrap.css';

const AppComponent = ({ Component, pageProps, currentUser }) => {
  return (
    <>
      <Header currentUser={currentUser} />
      <main className="container">
        <Component currentUser={currentUser} { ...pageProps } />
      </main>
    </>
  );
}

AppComponent.getInitialProps = async appContext => {
  const client = buildClient(appContext.ctx);
  const { data } = await client.get('/api/users/currentuser')

  let pageProps = {};
  if (appContext.Component.getInitialProps) {
    pageProps = await appContext.Component.getInitialProps(appContext.ctx, client, data.currentUser);
  }

  console.log('data ', data);

  return { pageProps, ...data };
};

export default AppComponent;