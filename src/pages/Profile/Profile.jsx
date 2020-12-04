import React from "react";

import { defaultProfileImgUrl } from "utils/config";

const Profile = () => (
  <article className="text-center">
    <h2> Profile</h2>
    <img src={defaultProfileImgUrl} alt="" style={{ maxWidth: "100%" }} />
    <p className="py-2">
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Excepturi
      repellat doloremque alias nostrum officia et rem vel repellendus
      architecto voluptate beatae dolorem aliquid ea ducimus, ipsum dignissimos
      cumque fugiat labore nemo perspiciatis culpa. Aliquam eius quasi,
      provident vero officiis dolorem quia consequatur minima, temporibus
      laudantium accusantium in, corrupti culpa molestias.
    </p>
  </article>
);

export default Profile;
