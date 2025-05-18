// import {
//   MDBBtn,
//   MDBCheckbox,
//   MDBCol,
//   MDBIcon,
//   MDBRow,
//   MDBTabs,
//   MDBTabsItem,
//   MDBTabsLink,
//   MDBTabsPane,
// } from "mdb-react-ui-kit";
// import React, { useState } from "react";

// export const Sidebar = ({ rightOpen, setRightOpen, data, setData }) => {
//   const [basicActive, setBasicActive] = useState(1);

//   const handleBasicClick = (value) => {
//     if (value === basicActive) {
//       return;
//     }

//     setBasicActive(value);
//   };

//   const handleCheckboxChange = (categoryId, widgetId) => {
//     setData((prevData) =>
//       prevData.map((category) => {
//         if (category.categoryId !== categoryId) return category;
//         return {
//           ...category,
//           widgets: category.widgets.map((widget) => {
//             if (widget.widgetId !== widgetId) return widget;
//             return {
//               ...widget,
//               isShow: !widget.isShow,
//             };
//           }),
//         };
//       })
//     );
//   };

//   return (
//     <div className={`side-nav ${rightOpen ? "open" : "closed"}`}>
//       <MDBRow className="side-bar">
//         <MDBCol className="side-bar-title">
//           <span>Add Widget</span>
//         </MDBCol>
//         <MDBCol className="side-bar-icon">
//           <span>
//             <MDBIcon
//               fas
//               icon="times"
//               onClick={() => setRightOpen(!rightOpen)}
//             />
//           </span>
//         </MDBCol>
//       </MDBRow>
//       <MDBCol>
//         <div className="sub-head">
//           Personalise your dashboard by adding the following widget
//         </div>
//       </MDBCol>
//       <MDBTabs className="mb-3">
//         {data.map((category) => (
//           <div key={category?.categoryId}>
//             <MDBCol className="category-header">
//               <h6>{category?.categoryName}</h6>
//             </MDBCol>
//             {category?.widgets?.map((widget) => (
//               <div key={widget?.widgetId}>
//                 <MDBCol className="widget-checkbox mb-2">
//                   <MDBCheckbox
//                     name="flexCheck"
//                     id={`widget-${widget.widgetId}`}
//                     label={widget?.cardName}
//                     checked={widget?.isShow}
//                     onChange={() =>
//                       handleCheckboxChange(
//                         category?.categoryId,
//                         widget?.widgetId
//                       )
//                     }
//                   />
//                 </MDBCol>
//               </div>
//             ))}
//           </div>
//         ))}
//       </MDBTabs>

//       {/* <MDBCol>
//         <MDBBtn onClick={() => setRightOpen(!rightOpen)}>Close</MDBBtn>
//       </MDBCol> */}
//     </div>
//   );
// };

import React, { useState, useRef, useEffect } from "react";
import {
  MDBBtn,
  MDBCheckbox,
  MDBCol,
  MDBIcon,
  MDBRow,
  MDBTabs,
} from "mdb-react-ui-kit";

export const Sidebar = ({ rightOpen, setRightOpen, data, setData }) => {
  const [basicActive, setBasicActive] = useState(1);
  const sidebarRef = useRef();

  const handleBasicClick = (value) => {
    if (value === basicActive) return;
    setBasicActive(value);
  };

  const handleCheckboxChange = (categoryId, widgetId) => {
    setData((prevData) =>
      prevData.map((category) => {
        if (category.categoryId !== categoryId) return category;
        return {
          ...category,
          widgets: category.widgets.map((widget) => {
            if (widget.widgetId !== widgetId) return widget;
            return {
              ...widget,
              isShow: !widget.isShow,
            };
          }),
        };
      })
    );
  };

  // Close sidebar when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        setRightOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [setRightOpen]);

  return (
    <div
      ref={sidebarRef}
      className={`side-nav ${rightOpen ? "open" : "closed"}`}
    >
      <MDBRow className="side-bar">
        <MDBCol className="side-bar-title">
          <span>Add Widget</span>
        </MDBCol>
        <MDBCol className="side-bar-icon">
          <span>
            <MDBIcon
              fas
              icon="times"
              onClick={() => setRightOpen(!rightOpen)}
            />
          </span>
        </MDBCol>
      </MDBRow>

      <MDBCol>
        <div className="sub-head">
          Personalise your dashboard by adding the following widget
        </div>
      </MDBCol>

      <MDBTabs className="mb-3">
        {data.map((category) => (
          <div key={category?.categoryId}>
            <MDBCol className="category-header">
              <h6>{category?.categoryName}</h6>
            </MDBCol>
            {category?.widgets?.map((widget) => (
              <div key={widget?.widgetId}>
                <MDBCol className="widget-checkbox mb-3">
                  <MDBCheckbox
                    name="flexCheck"
                    id={`widget-${widget.widgetId}`}
                    label={widget?.cardName}
                    checked={widget?.isShow}
                    onChange={() =>
                      handleCheckboxChange(
                        category?.categoryId,
                        widget?.widgetId
                      )
                    }
                  />
                </MDBCol>
              </div>
            ))}
          </div>
        ))}
      </MDBTabs>
      <MDBRow className="side-bar-footer">
        <MDBCol lg="6"></MDBCol>
        <MDBCol className="side-bar-btns">
          <div>
            <MDBBtn
              rounded
              outline
              className="mx-2"
              color="black"
              onClick={() => setRightOpen(!rightOpen)}
            >
              Close
            </MDBBtn>
          </div>
          <div>
            <MDBBtn
              rounded
              color="black"
              onClick={() => setRightOpen(!rightOpen)}
            >
              Confirm
            </MDBBtn>
          </div>
        </MDBCol>
      </MDBRow>
    </div>
  );
};
