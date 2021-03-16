import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

function Tabs({children}) {

  const [activeTabLabel, setActiveTabLabel] = React.useState(children[0].props.tabLabel);

  const createTabClickHandler = (activeTab) => {
    return (evt) => {
      evt.preventDefault();

      setActiveTabLabel(activeTab);
    };
  };

  return (
    <div className="movie-card__desc">
      <nav className="movie-nav movie-card__nav">
        <ul className="movie-nav__list">
          {children.map((item) => {
            const tabLabel = item.props.tabLabel;
            return (
              <li key={tabLabel} className={cn(`movie-nav__item`, {'movie-nav__item--active': tabLabel === activeTabLabel})}>
                <a href="#" className="movie-nav__link" onClick={createTabClickHandler(tabLabel)}>{tabLabel}</a>
              </li>
            );
          })}
        </ul>
      </nav>

      {children.map((item) => (
        item.props.tabLabel === activeTabLabel && <div key={item.props.tabLabel}>
          {item.props.children}
        </div>)
      )}
    </div>
  );
}

Tabs.propTypes = {
  children: PropTypes.node,
};

export default Tabs;
