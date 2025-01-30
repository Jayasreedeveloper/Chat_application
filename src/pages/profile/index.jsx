import React from 'react'
import { useAppStore } from '@/store';


const Profile = () => {
  const userInfo = useAppStore((state) => state.userInfo);

  return (
    <div>
      Profile
      <div>Email:{userInfo.id}</div>
      </div>
  );
};

export default Profile;