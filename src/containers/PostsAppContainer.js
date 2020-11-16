import React, { useEffect, useState } from 'react';
import {
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Container,
  Flex,
} from '@chakra-ui/react';
import { InfoOutlineIcon, ChatIcon } from '@chakra-ui/icons';

import ProfileTab from '../components/ProfileTab';
import PostsTab from '../components/PostsTab';

const PostsAppContainer = () => {
  const [userId, setUserId] = useState(1);
  const [profileData, setProfileData] = useState([]);
  const [postsData, setPostsData] = useState([]);

  /**
   * Fetch/store userId from session and store in state, returns 1 if not set
   */
  const fetchUserId = () => {
    if (!sessionStorage.hasOwnProperty('userId')) {
      alert(
        'User ID is missing, please set in browser console session and refresh -- or continue with default set to 1'
      );
      console.warn('UserId missing from session, using default 1');
    } else {
      setUserId(sessionStorage.getItem('userId'));
    }
  };

  /**
   * Helper to fetch/store any type of data given setter and API URI
   */
  const fetchAppData = async ({ setDataCallback, setDataApiUri }) => {
    console.log(setDataApiUri);
    const resData = await fetch(
      `https://jsonplaceholder.typicode.com/${setDataApiUri}`
    );
    const data = await resData.json();
    setDataCallback(data);
  };

  /**
   * Basically componetDidMount
   */
  useEffect(() => {
    fetchUserId();
    fetchAppData({
      setDataCallback: setProfileData,
      setDataApiUri: `users?id=${userId}`,
    });
    fetchAppData({
      setDataCallback: setPostsData,
      setDataApiUri: `posts?userId=${userId}`,
    });
  }, [userId]);

  /**
   * Draw things
   */
  return (
    <div className="outerContainer">
      <Container>
        <Tabs isFitted variant="enclosed-colored">
          <TabList>
            <Tab>
              <InfoOutlineIcon />
              &nbsp; Profile
            </Tab>
            <Tab>
              <ChatIcon />
              &nbsp; Posts
            </Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <Flex align="center" justify="center" style={{ height: '100%' }}>
                <ProfileTab profileData={profileData} />
              </Flex>
            </TabPanel>
            <TabPanel>
              <Flex align="center" justify="center" style={{ height: '100%' }}>
                <PostsTab postsData={postsData} />
              </Flex>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Container>
    </div>
  );
};

export default PostsAppContainer;
