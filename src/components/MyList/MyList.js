import React from 'react';
import controllersImage from 'src/images/controllersImage.svg';
import Header from 'src/components/Header/Header.js';
import {movies} from 'src/db.js';
import Card from 'src/components/Card/Card.js';
import Footer from 'src/components/Footer/Footer.js';

function MyList() {
  return (
    <>
      <div className="visually-hidden">
        {/* <!-- inject:svg --> */}
        <img src={controllersImage} />
        {/* <!-- endinject --> */}
      </div>

      <div className="user-page">
        <Header theme="user" hasAvatar={true} />

        <section className="catalog">
          <h2 className="catalog__title visually-hidden">Catalog</h2>

          <div className="catalog__movies-list">
            {movies.slice(0, 10).map((item) => <Card item={item} key={item.id} />)}
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}

export default MyList;
