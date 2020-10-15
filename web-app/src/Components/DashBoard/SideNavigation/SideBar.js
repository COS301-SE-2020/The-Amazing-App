import React from "react";
import { slide as Menu } from 'react-burger-menu';

class SideBar extends React.Component {
  openGame = (event) => {
    event.preventDefault();
    window.location.href = "/gamepage";
  };

  qrCode = (event) => {
    event.preventDefault();
    window.open("https://www.the-qrcode-generator.com/");
  };

  render() {
    const colStyle = {
      display: "column",
      justifyContent: "center",
      alignItems: "center",
    };

    const stylesSeparator = StyleSheet.create({
      separator: {
          borderTop: '1px solid #DFE0EB',
          marginTop: 16,
          marginBottom: 16,
          opacity: 0.06
      }
  });
  
  const styles = {
      bmBurgerButton: {
          position: 'absolute',
          width: 26,
          height: 20,
          left: 24,
          top: 20
      },
      bmBurgerBars: {
          background: '#373a47'
      },
      bmBurgerBarsHover: {
          background: '#a90000'
      },
      bmCrossButton: {
          display: 'none'
      },
      bmCross: {
          background: '#bdc3c7'
      },
      bmMenuWrap: {
          position: 'fixed',
          height: '100%',
          width: 255
      },
      bmMenu: {
          background: '#373a47'
      },
      bmItem: {
          outline: 'none',
          ':focus': {
              outline: 'none'
          }
      },
      bmMorphShape: {
          fill: '#373a47'
      },
      bmOverlay: {
          background: 'rgba(0, 0, 0, 0.3)'
      }
  };

  const isMobile = window.innerWidth <= 1080;

    return (
      <Menu
            isOpen={!isMobile || isOpen}
            noOverlay={!isMobile}
            disableCloseOnEsc
            styles={styles}
            onStateChange={state => setIsOpen(state.isOpen)}
        >
            <div style={{ paddingTop: 30, paddingBottom: 30 }}>
                <LogoComponent />
            </div>
            <MenuItemComponent
                title="Dashboard"
                //icon={IconSubscription}
                //onClick={() => onMenuItemClicked('/dashboard')}
                active={isActive('/dashboard')}
            />

            <MenuItemComponent
                title="Add Sheet"
                icon={IconPlus}
                //onClick={() => onMenuItemClicked('/newsheet')}
                //active={isActive('/newsheet')}
            />
            <div className={css(stylesSeparator.separator)}></div>
            <MenuItemComponent
                title="Settings"
                //icon={IconSettings}
                //onClick={() => onMenuItemClicked('/settings')}
                //active={isActive('/settings')}
            />
            <MenuItemComponent
                title="Logout"
                icon={IconLogout}
                onClick={() => doLogout()}
            />
        </Menu>
    );
  }
}

export default SideBar;