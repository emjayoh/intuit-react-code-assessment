import React from 'react';
import PropTypes from 'prop-types';
import { Link } from '@chakra-ui/react';
import styled from 'styled-components';

const ProfileTable = styled.table`
  margin: 0 auto;
  & td {
    padding: 3px 5px;
  }
`;

const ProfileTab = ({ profileData }) => {
  return profileData.map((profileEntry) => (
    <ProfileTable key={profileEntry.id}>
      {/* <thead>
        <tr></tr>
      </thead> */}
      <tbody>
        <tr>
          <td align="right">
            <strong>name: </strong>
          </td>
          <td>{profileEntry.name}</td>
        </tr>
        <tr>
          <td align="right">
            <strong>username: </strong>
          </td>
          <td>{profileEntry.username}</td>
        </tr>
        <tr>
          <td align="right">
            <strong>email: </strong>
          </td>
          <td>
            <Link color="teal.500" href={`mailto: ${profileEntry.email}`}>
              {profileEntry.email}
            </Link>
          </td>
        </tr>
        <tr>
          <td align="right">
            <strong>address: </strong>
          </td>
          <td>{`${profileEntry.address.street} ${profileEntry.address.suite}`}</td>
        </tr>
        <tr>
          <td align="right">
            <strong>city: </strong>
          </td>
          <td>{profileEntry.address.city}</td>
        </tr>
        <tr>
          <td align="right">
            <strong>phone: </strong>
          </td>
          <td>{profileEntry.phone}</td>
        </tr>
        <tr>
          <td align="right">
            <strong>website: </strong>
          </td>
          <td>
            <Link color="teal.500" href={profileEntry.website} target="_blank">
              {profileEntry.website}
            </Link>
          </td>
        </tr>
      </tbody>
    </ProfileTable>

    // <ul key={profileEntry.id}>
    //   <li>
    //     <p>
    //       <label>name: </label>
    //       <span>{profileEntry.name}</span>
    //     </p>
    //   </li>
    //   <li>
    //     <p>
    //       <label>username: </label>
    //       <span>{profileEntry.username}</span>
    //     </p>
    //   </li>
    //   <li>
    //     <p>
    //       <label>email: </label>
    //       <span>{profileEntry.email}</span>
    //     </p>
    //   </li>
    //   <li>
    //     <p>
    //       <label>address: </label>
    //       <span>{`${profileEntry.address.street} ${profileEntry.address.suite}`}</span>
    //     </p>
    //   </li>
    //   <li>
    //     <p>
    //       <label>city: </label>
    //       <span>{profileEntry.address.city}</span>
    //     </p>
    //   </li>
    //   <li>
    //     <p>
    //       <label>phone: </label>
    //       <span>{profileEntry.phone}</span>
    //     </p>
    //   </li>
    //   <li>
    //     <p>
    //       <label>website: </label>
    //       <span>{profileEntry.website}</span>
    //     </p>
    //   </li>
    // </ul>
  ));
};

ProfileTab.propTypes = {
  profileData: PropTypes.array.isRequired,
};

export default ProfileTab;
