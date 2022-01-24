import React, {Component} from 'react';
import styles from './dashboard.module.scss';
import logo from 'assets/images/dipella_icon.png';
import {InputSearch} from "../../components";
import {Helmet} from "react-helmet";
import defaultStyle from 'assets/styles/defalut.module.scss';
import {getCourses} from 'api/courses.api';
import {getAllCourses} from 'api/courses.api';
import axios from "axios";

class Dashboard extends Component {

    state = {
        data: '',
        pages: null,
        nameCourse: 'All Courses Page: 1',
        numberAllCourses: 0,
        handleMenu: false
    }

    pages = [1, 2, 3, 4, 5, 6, 7, 8];

    category = ['Clothing', 'Music', 'Jewelery', 'Tools', 'Kids', 'Home', 'Garden', 'Movies', 'Electronics', 'Games', 'Health', 'Books', 'Outdoors', 'Computers', 'Toys', 'Baby', 'Grocery', 'Beauty', 'Shoes', 'Industrial', 'Automotive', 'Sports']

    async componentDidMount() {
        this.setState({
            data: await getCourses(),
            pages: Math.ceil(this.state.data.length / 10),
        })
    }

    handlePage = async (page) => {
        await axios.get(`https://6182355884c2020017d89d14.mockapi.io/api/v1/courses?page=${page}&limit=10`)
            .then(res => this.setState({data: res.data, nameCourse: `All Courses Page : ${page}`}))
    }

    handleCategory = async (category) => {
        await getAllCourses().then(res => res.filter(item => item.category === category)).then(res => this.setState({
            data: res,
            nameCourse: `${category} Courses`,
            handleMenu: false
        }));
    }

    handleMenu = () => {
        this.setState({handleMenu: true})
    }

    handleNoneMenu = () => {
        this.setState({handleMenu: false})
    }

    render() {
        return (
            <>
                <ul className={this.state.handleMenu ? styles.menu : styles.menu_none}>
                    <li onClick={this.handleNoneMenu}> Close</li>
                    {this.category.map(item => (
                        <li key={item}><a onClick={e => this.handleCategory(item)} href="#"> {item} </a></li>
                    ))}
                </ul>

                <Helmet>
                    <title> Diprella | Dashboard </title>
                </Helmet>
                <div className={defaultStyle.container}>
                    <div className={styles.topsite}>
                        <div className={styles.topsite__icon}>
                            <figure className={styles.topsite__icon__figure}>
                                <img src={logo} alt="logo"/>
                            </figure>
                            <span className={styles.topsite__icon__title}> Diprella </span>
                        </div>
                        <InputSearch name='search'/>
                    </div>
                </div>
                <hr/>
                <main className={defaultStyle.container}>
                    <h1 className={styles.main__title}> Unlimited Access to Over 15,000 Courses </h1>
                    <button onClick={this.handleMenu} className={styles.main__menu}> MENU</button>
                    <ul className={styles.main__ul} style={{'gap': '24px'}}>
                        {this.category.map(item => (
                            <li key={item}><a onClick={e => this.handleCategory(item)} href="#"> {item} </a></li>
                        ))}
                    </ul>
                    <h1> {this.state.nameCourse} </h1>
                    <div className={styles.main__cards}>
                        {!!this.state.data.length &&
                        this.state.data.map(item =>
                            <div key={item.title} className={styles.main__cards__card}>
                                <div className={styles.main__cards__card__box}>
                                    <figure className={styles.main__cards__card__box__figure}>
                                        <img src={item.courseImage} alt="image"/>
                                    </figure>
                                    <div className={styles.main__cards__card__box__descriptions}>
                                        <span
                                            className={styles.main__cards__card__box__descriptions__title}> {item.title} </span>
                                        <p className={styles.main__cards__card__box__descriptions__text}> {item.position} </p>
                                        <span
                                            className={styles.main__cards__card__box__descriptions__sub}> {item.createdAt} </span>
                                    </div>
                                </div>
                                <div className={`${styles.main__cards__card__box} ${styles.rigthcard}`}>
                                    <div className={styles.rigthcard__div}>
                                        <figure className={styles.main__cards__card__box__figure}>
                                            <img src={item.companyLogo} alt="image"/>
                                        </figure>
                                        <div className={styles.main__cards__card__box__descriptions}>
                                        <span style={{'color': '#000'}}
                                              className={styles.main__cards__card__box__descriptions__title}> {item.teacher} </span>
                                            <p className={styles.main__cards__card__box__descriptions__text}> {item.company} </p>
                                        </div>
                                    </div>
                                    <div>
                                        <span className={styles.rigthcard__text}> {item.price}$ </span>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>

                    <div style={{'display': 'flex', 'justifyContent': 'center', 'gap': '8px', 'flexWrap': 'wrap'}}>
                        {this.pages.map(page => (
                            <button style={{'cursor': 'pointer'}} key={page}
                                    onClick={e => this.handlePage(page)}> {page}</button>
                        ))}
                    </div>
                </main>
            </>
        );
    }
}

export
{
    Dashboard
}
    ;