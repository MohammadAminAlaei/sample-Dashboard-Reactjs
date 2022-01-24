import React, {Component} from 'react';
import {Helmet} from "react-helmet";
import styles from './home.module.scss';
import {InputSearch} from "../../components";
import icon from 'assets/images/dipella_icon.png';
import laptop from 'assets/images/laptop-svgrepo-com.svg';
import defaultStyle from 'assets/styles/defalut.module.scss';
import {FaTelegramPlane} from 'react-icons/fa'
import {Fa500Px} from 'react-icons/fa';
import {FaAdversal} from 'react-icons/fa';
import {FaAmazonPay} from 'react-icons/fa';
import {FaAndroid} from 'react-icons/fa';
import {Link} from "react-router-dom";


class Home extends Component {

    componentDidMount() {
        localStorage.setItem('IS_LOGGED_IN', 'false')
    }

    render() {
        return (
            <>
                <Helmet>
                    <title> Diprella | Home </title>
                </Helmet>
                <header>
                    <div className={`${styles.header} ${defaultStyle.container}`}>
                        <div className={styles.header__left}>
                            <div className={styles.header__left__icon}>
                                <figure className={styles.header__left__icon__figure}>
                                    <img
                                        src={icon}
                                        alt="icon"/>
                                </figure>
                                <span className={styles.header__left__icon__title}> Diprella </span>
                            </div>
                            <InputSearch name='Search'/>
                        </div>
                        <div className={styles.header__right}>
                            <ul className={styles.header__right__ul}>
                                <li><a href="#"> For Business </a></li>
                                <li><Link to="/sign-in"> Sign in </Link></li>
                                <li><Link to="/sign-in" className={styles.header__right__ul__btn}> Start For
                                    Free </Link></li>
                            </ul>
                        </div>
                    </div>
                    <hr/>
                    <div className={`${defaultStyle.container}`}>
                        <ul className={styles.header__ul}>
                            <li><a href="#"> Development </a></li>
                            <li><a href="#">Design</a></li>
                            <li><a href="#">Business</a></li>
                            <li><a href="#">Personal Development</a></li>
                            <li><a href="#">Marketing</a></li>
                            <li><a href="#">Language</a></li>
                            <li><a href="#">Lifestyle</a></li>
                            <li><a href="#">Arts</a></li>
                        </ul>
                    </div>
                </header>
                <main className={`${styles.main}`}>
                    <div className={`${defaultStyle.container} ${styles.main__div}`}>
                        <div className={styles.main__left}>
                            <h1 className={styles.main__left__title}> The New Way <br/> Online Courses </h1>
                            <p className={styles.main__left__text}> Lorem ipsum dolor sit amet, consectetur adipisicing
                                elit. Ad aspernatur dolore earum iste,
                                natus nihil odio, quasi quos, ratione saepe sed sint suscipit voluptates? Distinctio
                                dolores
                                exercitationem ipsa itaque nemo? </p>
                            <div className={styles.main__left__buttons}>
                                <button className={styles.main__left__buttons__btn1}> Start Learning</button>
                                <button className={styles.main__left__buttons__btn2}> Are you a teacher ?</button>
                            </div>
                        </div>
                        <div className={styles.main__rigth}>
                            <figure className={styles.main__rigth__figure}>
                                <img src={laptop} alt="laptop"/>
                            </figure>
                        </div>
                    </div>
                    <div className={`${styles.main__icons__bg}`}>
                        <div className={`${defaultStyle.container} ${styles.main__icons}`}>
                            <FaTelegramPlane/>
                            <Fa500Px/>
                            <FaAdversal/>
                            <FaAmazonPay/>
                            <FaAndroid/>
                            <FaTelegramPlane/>
                        </div>
                    </div>
                </main>
            </>
        );
    }
}

export {Home};