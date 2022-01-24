import React, {Component} from 'react';
import styles from './input.module.scss';
import {PROP_TYPES} from './InputSearch.config';

class InputSearch extends Component {
    render() {
        const {name} = this.props;
        return (
            <form className={styles.form}>
                <input className={styles.input} type={'search'} placeholder={'search...'} name={name} key={name}/>
                <i className={`fas fa-search ${styles.icon}`}/>
            </form>
        );
    }
}

InputSearch.propTypes = PROP_TYPES;


export {InputSearch};