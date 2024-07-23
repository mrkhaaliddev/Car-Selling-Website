import React from "react";

const GoogleMap = () => {
  return (
    <div className="max-w-full min-w-full mb-20">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11148.985531020742!2d45.33183170174825!3d2.0619650300162258!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3d58425955ce6b53%3A0xbb20eaaa52cc59d9!2sMogadishu!5e0!3m2!1sen!2sso!4v1684600265279!5m2!1sen!2sso"
        width="100%"
        height="450"
        className="border-0 outline-none rounded-xl"
        // style="border:0;"
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default GoogleMap;
