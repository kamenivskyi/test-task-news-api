import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import { setAuthStatusFalse } from '../../redux/auth/authActions';

import { getItemFromStorage } from '../../utils/localStorage';

const Profile = ({ isLoggedIn, setAuthStatusFalse }) => {
  const handleStorageChanges = () => {
    if (getItemFromStorage('isAuthorized') === false) {
      setAuthStatusFalse();
    }
  };

  useEffect(() => {
    window.addEventListener('storage', handleStorageChanges);

    return () => window.removeEventListener('storage', handleStorageChanges);
  }, [getItemFromStorage('isAuthorized')]);

  if (!getItemFromStorage('isAuthorized') || !isLoggedIn) {
    return <Redirect to='/login' />;
  }

  const defaultImgUrl =
    'https://media4.s-nbcnews.com/j/newscms/2016_36/1685951/ss-160826-twip-05_8cf6d4cb83758449fd400c7c3d71aa1f.fit-760w.jpg';

  return (
    <article className='text-center'>
      <h2> Profile</h2>
      <img src={defaultImgUrl} alt='' style={{ maxWidth: '100%' }} />
      <p className='py-2'>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Excepturi
        repellat doloremque alias nostrum officia et rem vel repellendus
        architecto voluptate beatae dolorem aliquid ea ducimus, ipsum
        dignissimos cumque fugiat labore nemo perspiciatis culpa. Aliquam eius
        quasi, provident vero officiis dolorem quia consequatur minima,
        temporibus laudantium accusantium in, corrupti culpa molestias.
      </p>
    </article>
  );
};

const mapStateToProps = ({ auth: { isLoggedIn } }) => ({
  isLoggedIn
});

Profile.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired,
  setAuthStatusFalse: PropTypes.func.isRequired
};

export default connect(mapStateToProps, { setAuthStatusFalse })(Profile);
