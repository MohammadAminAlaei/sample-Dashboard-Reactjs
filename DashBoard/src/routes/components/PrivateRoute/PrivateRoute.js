import {Component} from 'react';
import {Navigate} from 'react-router-dom';
import {PATHS} from 'configs/routes.config';
import {PROP_TYPES} from './PrivateRoute.config';

const TargetPage = ({Component}) => {

    const isLoggedIn = localStorage.getItem('IS_LOGGED_IN');

    if (isLoggedIn === 'false') {
        return <Navigate replace to={PATHS.SIGN_IN}/>
    }

    return (
        <Component/>
    )
}

class PrivateRoute extends Component {
    render() {
        const {component} = this.props;

        return (
            <TargetPage Component={component}/>
        );
    }
}

PrivateRoute.propTypes = PROP_TYPES;

export {PrivateRoute};
