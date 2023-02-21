import React, { Component }  from "react";
import landing_vr2 from "../../assets/image_detail_page/landing_vr2.jpg";
import DetailedPage from "../camon/detailed_page/detailed_page";

class LandingVr2 extends Component {
    render (){
        return (
    <div>
      <DetailedPage weyImage = {landing_vr2} mainText = "Landing vr.2" sumText = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium fuga explicabo facere doloribus voluptatibus veritatis non dist" />
    </div>
  )
}
}

export default LandingVr2;