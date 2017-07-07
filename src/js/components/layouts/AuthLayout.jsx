import {  Route } from 'react-router-dom'


const AuthLayout = ({component: Component, ...rest}) => {
  return (
    <Route {...rest} render={matchProps => (
      <div className="authlayout">
        <div className="authlayout-background">
          <img src="https://images.unsplash.com/photo-1488628075628-e876f502d67a?dpr=1&auto=format&fit=crop&w=1500&h=1000&q=80&cs=tinysrgb&crop=&bg="/ >
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
