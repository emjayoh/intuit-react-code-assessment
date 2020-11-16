import React from 'react';
import PropTypes from 'prop-types';
import { Link } from '@chakra-ui/react';
import { LinkIcon } from '@chakra-ui/icons';
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
              <LinkIcon />
              &nbsp;{profileEntry.email}
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
              <LinkIcon />
              &nbsp;{profileEntry.website}
            </Link>
          </td>
        </tr>
      </tbody>
    </ProfileTable>
  ));
};

ProfileTab.propTypes = {
  profileData: PropTypes.array.isRequired,
};

export default ProfileTab;
