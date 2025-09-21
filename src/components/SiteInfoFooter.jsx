import React from 'react';


function SiteInfoFooter() {
  const links = [
    { 
      heading: "Infomation", 
      items: ["About Us", "Infomation", "Privacy Policy", "Terms & Conditions"]
    },
    { 
      heading: "Service", 
      items: ["About Us", "Infomation", "Privacy Policy", "Terms & Conditions"]
    },
    { 
      heading: "My Account", 
      items: ["About Us", "Infomation", "Privacy Policy", "Terms & Conditions"]
    },
    { 
      heading: "Our Offers", 
      items: ["About Us", "Infomation", "Privacy Policy", "Terms & Conditions"]
    }
  ];

  return (
    <div className="bg-sky-100 w-full py-5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1  sm:grid-cols-2 md:grid-cols-4 gap-10 sm:gap-24 text-center md:text-left">
          {links.map(col => (
            <div key={col.heading}>
              <h3 className="text-lg font-semibold mb-3 text-gray-800">{col.heading}</h3>
              <ul className="space-y-2 text-gray-700">
                {col.items.map(item => (
                  <li key={item} className="text-base cursor-pointer hover:underline">{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <hr className="mt-4 border-white  " />
      </div>
    </div>
  );
}

export default SiteInfoFooter;
