// ** React Imports
import { useEffect, useState } from 'react'

// ** Third Party Components
// import axios from 'axios'
import classnames from 'classnames'
import Chart from 'react-apexcharts'
import * as Icon from 'react-feather'
import { HelpCircle } from 'react-feather'

// ** Reactstrap Imports
import { Card, CardHeader, CardTitle, CardBody, CardText, Row, Col } from 'reactstrap'

const BoysPerformanceCard = props => {
  // ** State
//   const [data, setData] = useState(null)

const data = {
    completed: '786,617',
    inProgress: '13,561'
  }
//   useEffect(() => {
//     axios.get('/card/card-analytics/goal-overview').then(res => setData(res.data))
//     return () => setData(null)
//   }, [])

const data1 ={ chart_info: [
    {
      icon: 'User',
      name: 'A Grade Boys',
      // iconColor: 'text-primary',
      // usage: 58.6,
      // upDown: 2
    },
    {
      icon: 'User',
      name: 'B Grade Boys',
      // iconColor: 'text-warning',
      // usage: 34.9,
      // upDown: 8
    },
    {
      icon: 'User',
      name: 'C Grade Boys',
      // iconColor: 'text-danger',
      // usage: 6.5,
      // upDown: -5
    }
  ],}

  const options = {
      chart: {
        sparkline: {
          enabled: true
        },
        
        dropShadow: {
          enabled: true,
          blur: 3,
          left: 1,
          top: 1,
          opacity: 0.1
        }
      },
      colors: ['#51e5a8'],
      plotOptions: {
        radialBar: {
          offsetY: 10,
          startAngle: -150,
          endAngle: 150,
          hollow: {
            size: '77%'
          },
          track: {
            background: '#ebe9f1',
            strokeWidth: '50%'
          },
          dataLabels: {
            name: {
              show: false
            },
            value: {
              color: '#5e5873',
              fontFamily: 'Montserrat',
              fontSize: '2.0rem',
              fontWeight: '600'
            }
          }
        }
      },
      fill: {
        type: 'gradient',
        gradient: {
          shade: 'dark',
          type: 'horizontal',
          shadeIntensity: 0.5,
          gradientToColors: [props.success],
          inverseColors: true,
          opacityFrom: 1,
          opacityTo: 1,
          stops: [0, 100]
        }
      },
      stroke: {
        lineCap: 'round'
      },
      grid: {
        padding: {
          bottom: 30
        }
      }
    },
    series = [83]

    const renderChartInfo = () => {
        return data1.chart_info.map((item, index) => {
          const IconTag = Icon[item.icon]
          return (
            <div
              key={index}
              className={classnames('d-flex justify-content-between', {
                'mb-1': index !== data1.chart_info.length - 1
              })}
            >
              <div className='d-flex align-items-center'>
                {/* <IconTag
                  size={17}
                  className={classnames({
                    [item.iconColor]: item.iconColor
                  })}
                /> */}
                <span className='fw-bold  '>{item.name}</span>
                {/* <span>- {item.usage}%</span> */}
              </div>
              {/* <div>
                <span>{item.upDown}%</span>
                {item.upDown > 0 ? (
                  <Icon.ArrowUp size={14} className='ms-25 text-success' />
                ) : (
                  <Icon.ArrowDown size={14} className='ms-25 text-danger' />
                )}
              </div> */}
            </div>
          )
        })
      }

  return data !== null ? (
    <Card className='m-0 p-0 bg-white'>
      {/* <CardHeader>
        <CardTitle tag='h4'>Goal Overview</CardTitle>
        <HelpCircle size={18} className='text-muted cursor-pointer' />
      </CardHeader> */}
      <CardBody className='p-0 m-0 '>
        <Chart options={options} series={series} type='radialBar' height={150} />
        {renderChartInfo()}
      </CardBody>
      {/* <Row className='border-top text-center mx-0'>
        <Col xs='6' className='border-end py-1'>
          <CardText className='text-muted mb-0'>Completed</CardText>
          <h3 className='fw-bolder mb-0'>{data.completed}</h3>
        </Col>
        <Col xs='6' className='py-1'>
          <CardText className='text-muted mb-0'>In Progress</CardText>
          <h3 className='fw-bolder mb-0'>{data.inProgress}</h3>
        </Col>
      </Row> */}
    </Card>
  ) : null
}
export default BoysPerformanceCard
