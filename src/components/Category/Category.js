import React from 'react';
import { STATUS } from "../../utils/status";
import "./Category.scss";
import {Link} from "react-router-dom";
import Error from '../Error/Error';
import Loader from '../Loader/Loader';
import Data  from '../../utils/data'
const arr = Data
const Category = ({categories, status}) => {
    if(status === STATUS.ERROR) return (<Error />);
    if(status === STATUS.LOADING) return (<Loader />);

    return (
    <section className = "categories py-5 bg-ghost-white" id = "categories">
        <div className = "container">
            <div className = "categories-content">
                <div className='section-title'>
                    <h3 className = "text-uppercase fw-7 text-regal-blue ls-1">Bo'limlar</h3>
                </div>
                <div className = "category-items grid">
                    {
                        arr.slice(17, 22).map(category => (
                            <Link to = {`category/${category.id}`} key = {category.id}>
                                <div className = "category-item" >
                                    <div className='category-item-img'>
                                        <img src = {category.images} alt = "" />
                                    </div>
                                    <div className = "category-item-name text-center">
                                        <h6 className='fs-20'>{category.title}</h6>
                                    </div>
                                </div>
                            </Link>
                        ))
                    }
                    
                </div>
            </div>
        </div>
    </section>
  )
}

export default Category