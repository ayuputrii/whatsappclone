import React from 'react';
import {UserInformation} from '../../components';
import {View} from 'react-native';
import {styles} from './style';

const UserInformationPage = ({navigation, route}) => {
  const displayName =
    route?.params?.data?.displayName || route?.params?.users?.displayName;
  const photo = route?.params?.data?.image || route?.params?.users?.image;
  const phone =
    route?.params?.data?.phoneNumber || route?.params?.users?.phoneNumber;
  const status = route?.params?.data?.status || route?.params?.users?.status;

  const onMute = () => {};
  const onCustom = () => {};
  const showMedia = () => {};

  const showDisappearingMessage = () => {};
  const onChatLock = () => {};
  const onEncryption = () => {};

  const onMessage = () => {};
  const onCall = () => {};
  const onVC = () => {};

  const goBlock = () => {};
  const goReport = () => {};

  return (
    <View style={styles.container}>
      <UserInformation
        navigation={navigation}
        onMute={onMute}
        onCustom={onCustom}
        showMedia={showMedia}
        showDisappearingMessage={showDisappearingMessage}
        onChatLock={onChatLock}
        onEncryption={onEncryption}
        onMessage={onMessage}
        onCall={onCall}
        onVC={onVC}
        goBlock={goBlock}
        goReport={goReport}
        uri={photo}
        name={displayName}
        subName={phone}
        status={status}
      />
    </View>
  );
};

export default UserInformationPage;
