import React, { useEffect, useState } from "react";
import {
  MDBBtn,
  MDBCard,
  MDBCardHeader,
  MDBCardTitle,
  MDBCol,
  MDBIcon,
  MDBRow,
} from "mdb-react-ui-kit";
import ApexChart from "./DoughnutChart";
import { Sidebar } from "./Sidebar";

export const Dashboard = () => {
  const [rightOpen, setRightOpen] = useState(false);

  const jsondata = [
    {
      categoryId: 1,
      shortName: "CSPM",
      isCategory: true,
      categoryName: "CSPM Executive Dashboard",
      widgets: [
        {
          widgetId: 1,
          isShow: true,
          isWidget: true,
          cardName: "Cloud Accounts",
          chartValues: [50, 50],
        },
        {
          widgetId: 2,
          isShow: true,
          isWidget: true,
          cardName: "Cloud Accounts Risk Assessment",
          chartValues: [20, 30, 50],
        },
      ],
    },
    {
      categoryId: 2,
      shortName: "CWPP",
      isCategory: true,
      categoryName: "CWPP Dashboard",
      widgets: [
        {
          widgetId: 3,
          isShow: true,
          isWidget: true,
          cardName: "Top 5 Namespace Specific Alerts",
          chartValues: [50, 20, 30],
        },

        {
          widgetId: 4,
          isShow: true,
          isWidget: true,
          cardName: "Workload Alerts",
          chartValues: [20, 30, 10, 20, 20],
        },
      ],
    },
  ];

  const [data, setData] = useState(jsondata);

  useEffect(() => {
    console.log(data, "data");
  }, data);
  return (
    <>
      <div>
        <MDBRow className="mt-1">
          <MDBCol lg={8} className="dashboard-heading">
            <h5>CNAPP Dashboard</h5>
          </MDBCol>
          <MDBCol lg={4} className="widgets">
            <MDBBtn
              outline
              className="mx-2"
              color="secondary"
              onClick={() => setRightOpen(!rightOpen)}
            >
              Add Widget
              <MDBIcon fas icon="plus" style={{ marginLeft: "10px" }} />
            </MDBBtn>
            <span className="reload-btn">🔄</span>
            <span className="options-btn">⁝</span>
            <span className="time-passed">
              <MDBBtn color="" outline>
                {/* <MDBIcon className="me-2" fab icon="twitter" />  */}
                <MDBIcon className="me-2" fas icon="clock" />
                Last 2 days
                <MDBIcon className="ms-2" fas icon="angle-down" />
              </MDBBtn>
            </span>
          </MDBCol>
        </MDBRow>

        {data &&
          data?.map((item) => {
            return (
              <div key={item?.categoryId}>
                <MDBCol>
                  <MDBRow className="mt-1">
                    <MDBCol lg={8} className="dashboard-heading">
                      <h6>{item?.categoryName}</h6>
                    </MDBCol>
                  </MDBRow>
                  <MDBRow>
                    {item?.widgets &&
                      item?.widgets?.map((widget) => {
                        return (
                          <>
                            {console.log(widget?.isShow, "widget?.isShow")}
                            {widget?.isShow ? (
                              <MDBCol
                                lg="4"
                                className="mb-4"
                                key={widget?.widgetId}
                              >
                                <MDBCard>
                                  <MDBCol className="card-name">
                                    {widget?.cardName}
                                  </MDBCol>
                                  <div className="main-div-apex">
                                    <ApexChart array={widget?.chartValues} />
                                  </div>
                                </MDBCard>
                              </MDBCol>
                            ) : (
                              <></>
                            )}
                          </>
                        );
                      })}
                    <MDBCol lg="4">
                      <MDBCard className="card-last-child">
                        <div className="main-div-apex">
                          <MDBBtn
                            outline
                            className="mx-2"
                            color="secondary"
                            onClick={() => setRightOpen(!rightOpen)}
                          >
                            <MDBIcon
                              fas
                              icon="plus"
                              style={{ marginRight: "10px" }}
                            />
                            Add Widget
                          </MDBBtn>
                        </div>
                      </MDBCard>
                    </MDBCol>
                  </MDBRow>
                </MDBCol>
              </div>
            );
          })}
      </div>
      <Sidebar
        rightOpen={rightOpen}
        setRightOpen={setRightOpen}
        data={data}
        setData={setData}
      />
    </>
  );
};
