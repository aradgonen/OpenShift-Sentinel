import React from 'react';
import {
  Page,
  Masthead,
  MastheadToggle,
  MastheadMain,
  MastheadBrand,
  MastheadContent,
  PageSidebar,
  PageSection,
  PageSectionVariants,
  PageToggleButton,
  Toolbar,
  ToolbarContent,
  ToolbarItem
} from '@patternfly/react-core';
import BarsIcon from '@patternfly/react-icons/dist/esm/icons/bars-icon';
import logo from '../../openshift_sentinel_logo.png';

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isNavOpen: false
    };
    this.onNavToggle = () => {
      this.setState({
        isNavOpen: !this.state.isNavOpen
      });
    };
  }

  render() {
    const { isNavOpen } = this.state;

    const headerToolbar = (
      <Toolbar id="toolbar">
        <ToolbarContent>
        </ToolbarContent>
      </Toolbar>
    );

    const Header = (
      <Masthead>
        <MastheadToggle>
          <PageToggleButton
            variant="plain"
            aria-label="Global navigation"
            isNavOpen={isNavOpen}
            onNavToggle={this.onNavToggle}
          >
            <BarsIcon />
          </PageToggleButton>
        </MastheadToggle>
        <MastheadMain>
          <MastheadBrand href="https://patternfly.org" onClick={() => console.log('clicked logo')} target="_blank">
          <img src={logo} width={350}></img>
          </MastheadBrand>
        </MastheadMain>
        <MastheadContent>{headerToolbar}</MastheadContent>
      </Masthead>
    );
    const Sidebar = <PageSidebar nav="I am a Side Bar!" isNavOpen={isNavOpen} />;

    return (
      <Page header={Header} sidebar={Sidebar}>
                <PageSection variant={PageSectionVariants.light}>Hello</PageSection>
      </Page>
    );
  }
}
export default NavBar;