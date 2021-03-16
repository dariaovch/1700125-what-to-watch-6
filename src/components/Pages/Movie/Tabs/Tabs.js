import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

function Tabs({children}) {

  const [activeTab, setActiveTab] = React.useState(children[0].props.label);

  const handleTabClick = (evt, newActiveTab) => {
    evt.preventDefault();
    setActiveTab(newActiveTab);
  };

  return (
    <div className="movie-card__desc">
      <nav className="movie-nav movie-card__nav">
        <ul className="movie-nav__list">
          {children.map((tab) => {
            const label = tab.props.label;
            return (
              <li key={label} className={cn(`movie-nav__item`, {'movie-nav__item--active': label === activeTab})}>
                <a href="#" className="movie-nav__link" onClick={(evt) => handleTabClick(evt, label)}>{label}</a>
              </li>
            );
          })}
        </ul>
      </nav>

      {children.map((item) => (
        item.props.label === activeTab && <div key={item.props.label}>
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
