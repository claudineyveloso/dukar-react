import React from 'react';

const PassAddonInit = () => {
  return (
	  <div>
	    document.getElementById("password-addon").addEventListener("click",function(){'{'}var e=document.getElementById("password-input");"password"===e.type?e.type="text":e.type="password"{'}'});
	  </div>
  )

};

export default PassAddonInit
