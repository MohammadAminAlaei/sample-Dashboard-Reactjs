import React from 'react';
import LoginForm from './page/Signup - Signin/LoginForm'
import {Home} from "./page/Home/Home.page";
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import {Dashboard} from "./page/Dashboard/Dashboard.page";
import {ProtectedRoute} from "./routes/components/index";
import {NotFoundPage} from "./page/NotFound/NotFound.page";
import {PATHS} from 'configs/routes.config';
import {PrivateRoute} from "./routes/components";

class App extends React.Component {
    render() {
        console.log(localStorage.getItem('IS_LOGGED_IN'))
        return (
            <>
                <BrowserRouter>
                    <Routes>
                        <Route path={PATHS.HOME} element={<Home/>}/>
                        <Route path={PATHS.DASHBOARD} element={<PrivateRoute component={() => <Dashboard/>}/>}/>
                        <Route path={PATHS.SIGN_IN}
                               element={<ProtectedRoute component={(props) => <LoginForm {...props} />}/>}/>
                        <Route path='*' element={<NotFoundPage/>}/>
                    </Routes>
                </BrowserRouter>
            </>
        );
    }
}

export {App};

