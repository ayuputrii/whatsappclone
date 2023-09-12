import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {colors} from '../../../utils/colors';
import {
  IconArrowLeftGray,
  IconCallGreen,
  IconDotsGray,
  IconInfo,
  IconShare,
  IconVideoCallGreen,
  PhotoProfile,
} from '../../../assets';
import {Button, Gap, Photo} from '../../commons';

const UserHeader = ({
  navigation,
  uri,
  name,
  subName,
  isBusiness,
  onCall,
  onVideoCall,
  onShare,
}) => {
  return (
    <View style={[styles.container, {height: !isBusiness ? 300 : 380}]}>
      <View style={styles.headerContainer}>
        <Button onPress={() => navigation.goBack()}>
          <IconArrowLeftGray width={32} height={32} />
        </Button>
        <Photo uri={uri} imgStyle={styles.img} />
        <Button>
          <IconDotsGray width={24} height={24} />
        </Button>
      </View>
      <View style={styles.header}>
        <View style={styles.headerName}>
          <Text style={styles.contactName}>{name}</Text>
          <Text style={styles.name}>~{subName}</Text>
        </View>
        {isBusiness && <Text style={styles.bussiness}>Other Business</Text>}
        <View style={styles.headerCall}>
          <Button buttonStyle={styles.btnHeader} onPress={onCall}>
            <IconCallGreen color={colors.tealGreen} width={25} height={25} />
            <Gap height={16} />
            <Text style={styles.txtCall}>Call</Text>
          </Button>
          <Gap width={34} />
          <Button style={styles.btnHeader} onPress={onVideoCall}>
            <IconVideoCallGreen
              color={colors.tealGreen}
              width={25}
              height={25}
            />
            <Gap height={16} />
            <Text style={styles.txtCall}>Video</Text>
          </Button>
          <Gap width={24} />
          <Button style={styles.btnHeader} onPress={onShare}>
            <IconShare color={colors.tealGreen} width={25} height={25} />
            <Gap height={16} />
            <Text style={styles.txtCall}>Share</Text>
          </Button>
        </View>
      </View>
      {isBusiness && (
        <React.Fragment>
          <View style={styles.line} />
          <Button buttonStyle={styles.lastHeader}>
            <Text style={styles.txtLastHeader}>
              This is a business account.
            </Text>
            <IconInfo color={colors.tealGreen} width={25} height={25} />
          </Button>
        </React.Fragment>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    height: 325,
    width: '100%',
    paddingTop: 20,
    paddingHorizontal: 14,
    elevation: 0.8,
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
  },
  header: {
    flexDirection: 'column',
    marginTop: 6,
    alignItems: 'center',
  },
  img: {
    width: 100,
    height: 100,
  },
  headerName: {
    alignItems: 'center',
    marginBottom: 14,
  },
  contactName: {
    fontSize: 24,
    fontWeight: 'bold',
    color: colors.black,
    textAlign: 'center',
  },
  name: {
    fontSize: 18,
    color: colors.gray,
    fontWeight: '400',
  },
  bussiness: {
    fontSize: 14,
    color: colors.gray,
    fontWeight: '400',
    marginBottom: 36,
  },
  headerCall: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnHeader: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  txtCall: {
    color: colors.tealGreen,
    fontWeight: '600',
    textAlign: 'center',
  },
  line: {
    borderWidth: 0.2,
    width: '100%',
    borderColor: colors.gray,
    opacity: 0.2,
    zIndex: 100,
    marginVertical: 14,
  },
  lastHeader: {
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'space-between',
  },
  txtLastHeader: {
    fontSize: 16,
    color: colors.gray,
    fontWeight: '400',
    width: '80%',
  },
});

export default UserHeader;
