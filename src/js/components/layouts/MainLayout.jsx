import {  Route } from 'react-router-dom'
import AppBar from 'material-ui/AppBar';
import {grey900} from 'material-ui/styles/colors';


const MainLayout = ({component: Component, ...rest}) => {
  return (
    <Route {...rest} render={matchProps => (
        <div className="DefaultLayout">
            <AppBar style={{backgroundColor: grey900}} title="RZik" />
            <div className="DefaultLayoutComponent">
              <Component {...matchProps} />
            </div>
            <div className="Footer">Footer Main</div>
        </div>
    )} />
  )
};

export default MainLayout;
