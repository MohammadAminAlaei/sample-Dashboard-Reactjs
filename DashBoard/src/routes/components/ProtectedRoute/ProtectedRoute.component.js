import {Component} from 'react';
import {History} from '../History/History.component';
import {DEFAULT_PROPS, PROP_TYPES} from './ProtectedRoute.config';
import {Navigate} from "react-router-dom";
import {PATHS} from "../../../configs/routes.config";

const TargetPage = ({Component}) => {

    const isLoggedIn = localStorage.getItem('IS_LOGGED_IN');

    if (isLoggedIn === 'true') {
        return <Navigate replace to={PATHS.HOME}/>
    }

    return (
        <History onRender={
            props => {
                return (
                    <Component {...props} />
                )
            }
        }/>
    )
}

class ProtectedRoute extends Component {
    render() {
        const {component} = this.props;

        return (
            <TargetPage Component={component}/>
        );
    }
}

ProtectedRoute.defaultProps = DEFAULT_PROPS;
ProtectedRoute.propTypes = PROP_TYPES;

export {ProtectedRoute};
