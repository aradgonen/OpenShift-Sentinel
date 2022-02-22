import React from 'react';
import {
  Card,
  CardBody,
  Gallery,
  GalleryItem,
  Nav,
  NavItem,
  NavList,
  Page,
  PageSection,
  PageSectionVariants,
  PageSidebar,
  SkipToContent,
  TextContent,
  Text
} from '@patternfly/react-core';

import DashboardHeader from './dashboardHeader';
import MultiColorChart from '../components/charts/MultiColorChart';
import MulticolororderedWithRightAlignedLegend from '../components/charts/MulticolororderedWithRightAlignedLegend';
import BasicWithRightAlignedLegend from '../components/BasicWithRightAlignedLegend';
import SegmentedPrimaryMeasure from '../components/charts/SegmentedPrimaryMeasure';
class PageLayoutDefaultNav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeItem: 0
    };

    this.onNavSelect = result => {
      this.setState({
        activeItem: result.itemId
      });
    };
  }

  render() {
    const { activeItem } = this.state;

    const PageNav = (
      <Nav onSelect={this.onNavSelect} aria-label="Nav">
        <NavList>
          <NavItem itemId={0} isActive={activeItem === 0} to="/system/panel">
            System Panel
          </NavItem>
          <NavItem itemId={1} isActive={activeItem === 1} to="/policy">
            Policy
          </NavItem>
          <NavItem itemId={2} isActive={activeItem === 2} to="/authentication">
            Authentication
          </NavItem>
          <NavItem itemId={3} isActive={activeItem === 3} to="/network/services">
            Network Services
          </NavItem>
          <NavItem itemId={4} isActive={activeItem === 4} to="/server">
            Server
          </NavItem>
        </NavList>
      </Nav>
    );

    const Sidebar = <PageSidebar nav={PageNav} />;
    const pageId = 'main-content-page-layout-default-nav';

    return (
      <React.Fragment>
        <Page
          header={<DashboardHeader />}
          sidebar={Sidebar}
          isManagedSidebar
          mainContainerId={pageId}
        >
          <PageSection>
            {/* <Gallery hasGutter>
              {Array.apply(0, Array(500)).map((x, i) => (
                <GalleryItem key={i}>
                  <Card>
                    <CardBody>This is a card</CardBody>
                  </Card>
                </GalleryItem>
              ))}
            </Gallery> */}
            <Card>
              <MultiColorChart/>
            </Card>
            <Card>
              <MulticolororderedWithRightAlignedLegend/>
            </Card>
            <Card>
              <BasicWithRightAlignedLegend/>
            </Card>
            <Card>
              <SegmentedPrimaryMeasure/>
            </Card>
          </PageSection>
        </Page>
      </React.Fragment>
    );
  }
}
export default PageLayoutDefaultNav;