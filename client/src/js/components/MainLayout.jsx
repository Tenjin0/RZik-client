import {  Route } from 'react-router-dom'


const MainLayout = ({component: Component, ...rest}) => {
  return (
    <Route {...rest} render={matchProps => (
      <div className="DefaultLayout">
        <div className="Header">Header Main</div>
          <Component {...matchProps} />
        <div className="Footer">Footer Main</div>
      </div>
    )} />
  )
};

export default MainLayout;
