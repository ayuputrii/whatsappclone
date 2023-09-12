import React from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import UserHeader from './userHeader';
import {Button, Gap} from '../../commons';
import {colors} from '../../../utils/colors';
import UserMedia from './userMedia';
import {menu, menu1} from '../../../constant.js';
import {
  IconBlock,
  IconCallGreen,
  IconDislike,
  IconMessage,
  // IconSearchBlack,
  // IconTeam,
  IconVideoCallGreen,
} from '../../../assets';

const UserInformation = ({
  navigation,
  onMute,
  onCustom,
  showMedia,
  showDisappearingMessage,
  onChatLock,
  onEncryption,
  goBlock,
  goReport,
  onCall,
  onVC,
  onShare,
  onMessage,
  uri,
  name,
  subName,
  isBusiness,
  phone,
  groupName,
  status,
}) => {
  return (
    <ScrollView horizontal={false} showsVerticalScrollIndicator={false}>
      <UserHeader
        name={name}
        subName={subName}
        isBusiness={isBusiness}
        uri={uri}
        navigation={navigation}
        onCall={onCall}
        onVideoCall={onVC}
        onShare={onShare}
      />
      {!groupName && (
        <React.Fragment>
          <Gap height={10} />
          <View style={styles.cardStatus}>
            <Text style={styles.txtStatus}>{status + '.'}</Text>
          </View>
        </React.Fragment>
      )}
      <Gap height={10} />
      <UserMedia goMoreMedia={() => {}} />
      <Gap height={10} />
      <View style={styles.cardHeader}>
        {menu.map(item => (
          <Button
            onPress={
              item?.id === 1 ? onMute : item?.id === 2 ? onCustom : showMedia
            }
            buttonStyle={styles.cardContent}>
            <View style={styles.flexRow}>
              <Text style={styles.txt}>{item?.title}</Text>
            </View>
            <View style={styles.line} />
          </Button>
        ))}
      </View>
      <Gap height={10} />
      <View style={styles.cardHeader}>
        {menu1.map(item => (
          <Button
            onPress={
              item?.id === 1
                ? showDisappearingMessage
                : item?.id === 2
                ? onChatLock
                : onEncryption
            }
            buttonStyle={styles.cardContent}>
            <View style={styles.flexRow}>
              <Text style={styles.txt}>{item?.title}</Text>
            </View>
            <View style={styles.line} />
          </Button>
        ))}
      </View>
      {isBusiness && (
        <React.Fragment>
          <View style={styles.cardPhone}>
            <Text style={styles.txtTitlePhone}>Nomor Telepon</Text>
            <Gap height={16} />
            <View style={styles.flexRow}>
              <View style={[styles.flexCol, {width: '60%'}]}>
                <Text style={styles.txt}>{'+62 ' + phone}</Text>
                <Text style={styles.txtPhone}>Phone</Text>
              </View>
              <View style={styles.rowCenter}>
                <Button buttonStyle={styles.btn} onPress={onMessage}>
                  <IconMessage width={24} height={24} />
                </Button>
                <Gap width={30} />
                <Button buttonStyle={styles.btn} onPress={onCall} n>
                  <IconCallGreen width={24} height={24} />
                </Button>
                <Gap width={30} />
                <Button buttonStyle={styles.btn} onPress={onVC}>
                  <IconVideoCallGreen width={24} height={24} />
                </Button>
              </View>
            </View>
          </View>
          <Gap height={10} />
        </React.Fragment>
      )}
      {/* {groupName ? (
        <React.Fragment>
          <Gap height={10} />
          <View style={[styles.cardHeader, {minHeight: 200}]}>
            <Gap height={14} />
            <View style={[styles.flexRow, {justifyContent: 'space-between'}]}>
              <Text style={styles.title}>{user?.length} participants</Text>
              <Button onPress={onSearchParticipants}>
                <IconSearchBlack width={20} height={20} />
              </Button>
            </View>
            <Gap height={14} />
            {user && user?.map((item, index) => {
              console.log(item,"useritem")
              const goRoomChat = (item) => {
                navigation.navigate('ChatPage', {
                  userList: item,
                  id: item?.id
                })
              };
              return (
                <CardChat
                  name={item?.name}
                  message={item?.status}
                  onPress={() => goRoomChat(item)}
                  uri={item?.photo}
                />
              )
            })}
          </View>
        </React.Fragment>
      ) : (
        <React.Fragment>
          <Gap height={10} />
          <View style={[styles.cardHeader, {minHeight: 200}]}>
            <Gap height={14} />
            <Text style={styles.title}>1 Group in common</Text>
            <Gap height={14} />
            <Button onPress={createNewUser}>
              <Menu
                icon={<IconTeam width={25} height={25} />}
                title={`Create group with ${name}`}
                styleTitle={{fontWeight: 'normal'}}
              />
            </Button>
            <Button>
              <CardChat
                name={groupName || '~'}
                message={userInfo || '~'}
                onPress={onMessage}
                uri={groupUri}
              />
            </Button>
          </View>
        </React.Fragment>
      )} */}
      <Gap height={10} />
      <View style={styles.cardHelp}>
        <Button buttonStyle={styles.rowCenter} onPress={goBlock}>
          <IconBlock width={25} height={25} />
          <Gap width={24} />
          <Text style={styles.txtSmall}>Block {name}</Text>
        </Button>
        <Button buttonStyle={styles.rowCenter} onPress={goReport}>
          <IconDislike width={25} height={25} />
          <Gap width={24} />
          <Text style={styles.txtSmall}>Report {name}</Text>
        </Button>
      </View>
      <Gap height={24} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  cardHeader: {
    flexDirection: 'column',
    backgroundColor: colors.white,
    height: 160,
    width: '100%',
    elevation: 0.8,
    paddingHorizontal: 14,
  },
  cardStatus: {
    flexDirection: 'column',
    backgroundColor: colors.white,
    height: 60,
    width: '100%',
    elevation: 0.8,
    paddingHorizontal: 14,
    paddingTop: 18,
  },
  cardPhone: {
    flexDirection: 'column',
    backgroundColor: colors.white,
    height: 120,
    width: '100%',
    elevation: 0.8,
    paddingHorizontal: 14,
  },
  cardContent: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    flex: 1,
    paddingTop: 16,
  },
  flexRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  flexCol: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  txt: {
    fontSize: 16,
    color: colors.black,
  },
  title: {
    fontSize: 14,
    color: colors.gray,
    fontWeight: '600',
  },
  line: {
    borderBottomWidth: 0.2,
    width: '100%',
    borderColor: colors.gray,
    opacity: 0.4,
  },
  txtTitlePhone: {
    fontSize: 14,
    color: colors.gray,
    fontWeight: 'bold',
    paddingTop: 16,
  },
  txtStatus: {
    fontSize: 18,
    color: colors.black,
    fontWeight: '400',
    width: '80%',
  },
  txtPhone: {
    fontSize: 16,
    color: colors.gray,
  },
  rowCenter: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  btn: {
    marginRight: 2,
  },
  cardHelp: {
    flexDirection: 'column',
    backgroundColor: colors.white,
    height: 100,
    width: '100%',
    elevation: 0.8,
    paddingHorizontal: 14,
  },
  txtSmall: {
    fontSize: 14,
    color: colors.red,
    fontWeight: '600',
  },
});

export default UserInformation;
