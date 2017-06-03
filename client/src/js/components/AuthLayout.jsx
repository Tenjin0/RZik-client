import {  Route } from 'react-router-dom'


const AuthLayout = ({component: Component, ...rest}) => {
  return (
    <Route {...rest} render={matchProps => (
      <div className="AuthLayout">
        <div className="Header">Header Auth</div>
          <Component {...matchProps} />
        <div className="Footer">Footer Auth</div>
      </div>
    )} />
  )
};

export default AuthLayout;
