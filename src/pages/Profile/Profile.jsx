import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

const Profile = ({ history, isLoggedIn }) => {
  console.log(isLoggedIn);

  const defaultImgUrl =
    'https://media4.s-nbcnews.com/j/newscms/2016_36/1685951/ss-160826-twip-05_8cf6d4cb83758449fd400c7c3d71aa1f.fit-760w.jpg';

  if (!isLoggedIn) {
    return <Redirect to='/login' />;
  }

  return (
    <article className='text-center'>
      <h2> Profile</h2>
      <img src={defaultImgUrl} alt='' />
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

const mapStateToProps = state => ({
  isLoggedIn: state.auth.isLoggedIn
});

export default connect(mapStateToProps)(Profile);
