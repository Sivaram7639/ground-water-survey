import React from "react";

import WhatsAppWidget from "react-whatsapp-chat-widget";
import "react-whatsapp-chat-widget/index.css";

const Whatsapp = () => {
	return (
		<WhatsAppWidget
			phoneNo="919789591793"
			position="right"
			widgetWidth="300px"
			widgetWidthMobile="260px"
			autoOpen={true}
			autoOpenTimer={1000}
			messageBox={true}
			messageBoxTxt=""
			iconSize="50"
			iconColor="white"
			iconBgColor="#25d366"
			headerIcon=""
			headerIconColor="pink"
			headerTxtColor="white"
			headerBgColor="#075e54"
			headerTitle="MPR"
			headerCaption="Typing..."
			bodyBgColor="#ece5dd"
			chatPersonName="MPR"
			chatMessage={<>Welcome To MPR<br></br>
      How Can I Help You</>}
      footerBgcolor="#ece5dd"
      btnTxtColor="black"
      btnBgColor="#075e54"
      btnTxt="Start Chat"/>
  );
  };

  export default Whatsapp ;