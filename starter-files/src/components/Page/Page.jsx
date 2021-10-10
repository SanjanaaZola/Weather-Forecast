import React, { Fragment } from 'react';

import Header from '../Header';
import Form from '../Form';
import Error from '../Error';
import Loader from '../Loader';
import Forecast from '../Forecast';
import useForecast from '../../hooks/useForecast';

import styles from './Page.module.css';
const Page = () => {
    const { Error, Loading, Forecast, submitRequest } = useForecast();
    const onSubmit = value => {
        submitRequest(value);
    };
    return (
        <Fragment>
            <Header />
            <div className={styles.box}>
                {/* form */}
                {!Loading && <Form submitSearch={onSubmit} />}
                {/* error */}
                {Error && <Error message={Error} />}
                {/* loader */}
                {Loading && <Loader />}
            </div>
            {/* forecast */}
            {Forecast && <Forecast />}
        </Fragment>
    );
};

export default Page;
