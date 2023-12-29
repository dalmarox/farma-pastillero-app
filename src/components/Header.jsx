import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { colors } from '../global/colors'
import { AntDesign } from '@expo/vector-icons';

const Header = ({ title, navigation }) => {
    return (
        <View style={styles.headerContainer}>
            {
                navigation.canGoBack()
                    ?
                    <TouchableOpacity onPress={navigation.goBack}>
                        <AntDesign name="caretleft" size={20} color="white" />
                    </TouchableOpacity>
                    :
                    <View></View>
            }

            <Text style={styles.headerTitle}>{title}</Text>

        </View>
    )
}

export default Header

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    height: 100,
    backgroundColor: colors.primary,
    alignItems: 'flex-end',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingBottom: 10,
  },
  headerTitle: {
    color: "#fff",
    fontSize: 20,
    fontFamily: 'Roboto-Bold',
  },

})