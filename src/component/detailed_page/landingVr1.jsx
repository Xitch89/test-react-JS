import React, { Component }  from "react";
import landing_vr1 from "../../assets/image_detail_page/landing_vr1.jpg";
import DetailedPage from "../camon/detailed_page/detailed_page";

class LandingVr1 extends Component {
    render (){
        return (
    <div>
      <DetailedPage weyImage = {landing_vr1} mainText = "Landing vr.1" sumText = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium fuga explicabo facere doloribus voluptatibus veritatis non dist" />
    </div>
  )
}
}

export default LandingVr1;