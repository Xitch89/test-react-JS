import React, { Component } from "react";
import Content from "../content/content";
import ExampleLayouts from "../camon/example_layouts/example_layouts";
import FollowSocial from "../follow_social/follow_social";
import MainImage from "../main_image/main_image";
import OurServices from "../our_services/our_services";
import SocRef from "../soc_ref/soc_ref";
import SubscribeBlock from "../subscribe_block/subscribe_block";
import BottomBlock from "../bottom_block/bottom_block";


class Home extends Component {
    render() {
        return(
            <>
                <MainImage />
                <ExampleLayouts grayText="Our Core Layouts" yellowText="Template Pages" />
                <Content />
                <BottomBlock />
                <ExampleLayouts grayText="Our Core Features" yellowText="Our Services" />
                <OurServices />
                <FollowSocial />
                <SubscribeBlock />
                <SocRef />
            </>
        )
    }
}

export default Home;