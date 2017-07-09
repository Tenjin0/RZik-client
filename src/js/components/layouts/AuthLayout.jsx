import {  Route } from 'react-router-dom'


const AuthLayout = ({component: Component, ...rest}) => {
  return (
    <Route {...rest} render={matchProps => (
      <div className="authlayout">
        <div className="authlayout-background">
          <img src="/images/cover/bg-home-login-2_02.gif"/ >
        </div>

                <div className="feelthesound-container">
                    <div className="white">
                        <span className="feelthesound">FEEL THE SOUND</span><span className="emotion">EMOTION</span>
                    </div>
                    <div className="blue">
                        <span className="feelthesound">FEEL THE SOUND</span><span className="emotion">EMOTION</span>
                    </div>
                    <div className="red">
                        <span className="feelthesound">FEEL THE SOUND</span><span className="emotion">EMOTION</span>
                    </div>
                </div>
          <Component {...matchProps} />
      </div>
    )} />
  )
};

export default AuthLayout;
