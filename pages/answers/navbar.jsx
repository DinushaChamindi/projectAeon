import React, {useState} from 'react';
import {
  Text,
  StyleSheet,
  View,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faNavicon, faClose, faSearch} from '@fortawesome/free-solid-svg-icons';
const NavBar = () => {
  const [showNavBar, setShowNavBar] = useState(false);
  const [showSearch, setShowSearch] = useState(false);

  const navItem = [
    {key: 0, name: 'Showcase'},
    {key: 1, name: 'Docs'},
    {key: 2, name: 'Blog'},
    {key: 3, name: 'Analytics'},
    {key: 4, name: 'Commerce'},
    {key: 5, name: 'Templates'},
    {key: 6, name: 'Enterpirse'},
  ];
  const close = () => {
    setShowNavBar(false);
    setShowSearch(false);
  };
  return (
    <View style={styles.navBar}>
      <View style={styles.navBarHaeder}>
        <TouchableOpacity
          onPress={() => {
            showNavBar ? close() : setShowNavBar(true);
          }}>
          {showNavBar ? (
            <FontAwesomeIcon icon={faClose} />
          ) : (
            <FontAwesomeIcon icon={faNavicon} />
          )}
        </TouchableOpacity>
        {showNavBar && (
          <View
            style={{
              flex: 1,
              flexDirection: 'row-reverse',
              justifyContent: 'space-between',
            }}>
            {showSearch ? (
              <TextInput style={styles.searchInput}></TextInput>
            ) : (
              <TouchableOpacity
                onPress={() => {
                  setShowSearch(true);
                }}>
                <FontAwesomeIcon icon={faSearch} />
              </TouchableOpacity>
            )}
            <Text style={styles.title}>AEON</Text>
          </View>
        )}
      </View>
      {showNavBar && (
        <View style={styles.navBarMenu}>
          {navItem.map((item, key) => {
            return (
              <TouchableOpacity key={key}>
                <Text style={styles.menuItems}>{item.name}</Text>
              </TouchableOpacity>
            );
          })}
        </View>
      )}
    </View>
  );
};

export default NavBar;

const styles = StyleSheet.create({
  navBar: {
    width: '100%',
    position: 'absolute',
    zIndex: 1,
  },
  navBarHaeder: {
    flexDirection: 'row-reverse',
    justifyContent: 'space-between',
    borderBottomColor: '#d8e1eb',
    borderBottomWidth: 1,
    padding: 8,
  },
  searchInput: {
    flex: 1,
    borderColor: '#d8e1eb',
    borderWidth: 1,
    borderRadius: 4,
    padding: 8,
    marginHorizontal: 4,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  navBarMenu: {
    justifyContent: 'space-between',
    height: '100%',
    backgroundColor: 'white',
    padding: 8,
  },
  menuItems: {
    padding: 8,
  },
});
