import React from 'react'
import MaktabPerformanceCard from "./MaktabPerformanceCard";
import TeacherPerformanceCard from "./TeacherPerformanceCard";
import BoysPerformanceCard from "./BoysPerformanceCard";
import { useContext } from "react";
import { Row, Col } from "reactstrap";

// ** Styles
import "@styles/react/libs/charts/apex-charts.scss";

// ** Custom Hooks
import { useSkin } from "@hooks/useSkin";

// ** Context
import { ThemeColors } from "@src/utility/context/ThemeColors";

// ** Third Party Components
import "chart.js/auto";

import "@styles/react/libs/flatpickr/flatpickr.scss";

export default function FirstCard() {
  const context = useContext(ThemeColors);
  return (
    <div className='p-0'>
      <div className="card">
        <div className="card-body pt-0 pb-0 ps-2 pe-2">
          <div>
            <Row className="match-height justify-content-center gap-2">
              <Col
                // lg="3"
                // sm="6"
                className="border position-relative rounded-4 bg-white" style={{ width: '240px' }}
              >
                <MaktabPerformanceCard
                  primary={context.colors.primary.main}
                  danger={context.colors.danger.main}
                />
              </Col>

              <Col
                // lg="3"
                // sm="6"
                className="border position-relative rounded-4 bg-white" style={{ width: '240px' }}
              >
                <TeacherPerformanceCard
                  primary={context.colors.primary.main}
                  warning={context.colors.warning.main}
                  danger={context.colors.danger.main}
                />
              </Col>

              <Col
                // lg="3"
                // sm="6"
                className="border  position-relative rounded-4 bg-white" style={{ width: '240px' }}
              >
                <BoysPerformanceCard
                  primary={context.colors.primary.main}
                  // danger={context.colors.danger.main}
                />
              </Col>

              <Col
                // lg="3"
                // sm="6"
                className="border position-relative rounded-4 bg-white" style={{ width: '240px' }}
              >
                <BoysPerformanceCard
                  primary={context.colors.primary.main}
                  // danger={context.colors.danger.main}
                />
              </Col>
            </Row>
          </div>
        </div>
      </div>
    </div>
  )
}
