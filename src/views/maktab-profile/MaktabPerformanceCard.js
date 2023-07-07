// ** React Imports
import { useEffect, useState } from 'react'

// ** Third Party Components
import axios from 'axios'
import Chart from 'react-apexcharts'

// ** Reactstrap Imports
import {
  Row,
  Col,
  Card,
  CardBody,
  CardText,
  CardTitle,
  CardHeader,
  DropdownMenu,
  DropdownItem,
  DropdownToggle,
  UncontrolledDropdown
} from 'reactstrap'

const MaktabPerformanceCard = props => {
  // ** State
  //   const [data, setData] = useState(null)

  //   useEffect(() => {
  //     axios.get('/card/card-analytics/support-tracker').then(res =>   setData(res.data))
  //     return () => setData(null)
  //   }, [])


 const data = {
    support_tracker: {
      title: 'Support Tracker',
      last_days: ['Last 28 Days', 'Last Month', 'Last Year'],
      totalTicket: 163,
      newTicket: 29,
      openTicket: 63,
      responseTime: 1
    },
      
  }


  const options = {
      plotOptions: {
        radialBar: {
          size: 150,
          offsetY: 20,
          startAngle: -150,
          endAngle: 150,
          hollow: {
            size: '40%'
          },
          track: {
            background: '#fff',
            strokeWidth: '100%'
          },
          dataLabels: {
            name: {
              offsetY: -5,
              fontFamily: 'Montserrat',
              fontSize: '0.75rem'
            },
            value: {
              offsetY: 2,
              fontFamily: 'Montserrat',
              fontSize: '1.35rem'
            }
          }
        }
      },
      colors: [props.danger],
      fill: {
        type: 'gradient',
        gradient: {
          shade: 'dark',
          type: 'horizontal',
          shadeIntensity: 0.5,
          gradientToColors: [props.primary],
          inverseColors: true,
          opacityFrom: 1,
          opacityTo: 1,
          stops: [0, 100]
        }
      },
      stroke: {
        dashArray: 8
      },
      labels: ['Maktab Pefo']
    },
    series = [100]

  return data !== null ? (
    <Card className='bg-white p-0 m-0'>
      {/* <CardHeader className='pb-0'>
        <CardTitle tag='h4'>{data.support_tracker.title}</CardTitle>
        <UncontrolledDropdown className='chart-dropdown'>
          <DropdownToggle color='' className='bg-transparent btn-sm border-0 p-50'>
            Last 7 days
          </DropdownToggle>
          <DropdownMenu end>
            {data.support_tracker.last_days.map(item => (
              <DropdownItem className='w-100' key={item}>
                {item}
              </DropdownItem>
            ))}
          </DropdownMenu>
        </UncontrolledDropdown>
      </CardHeader> */}
      {/* <CardBody className='p-0 m-0'> */}
        <Row>
          {/* <Col sm='2' className='d-flex flex-column flex-wrap text-center'>
            <h1 className='font-large-2 fw-bolder mt-2 mb-0'>{data.support_tracker.totalTicket}</h1>
            <CardText>Tickets</CardText>
          </Col> */}
          <Col sm='12' className=' p-0 justify-content-center'>
            <Chart  options={options} series={series} type='radialBar' height={250} id='support-tracker-card' />
          </Col>
          <Col>
          <div className='position-absolute text-center font-large-4 fw-bold' style={{top:'52%', left:'33%'}}>
            A
          </div>
          <h1 className=' pt-1 text-center'>Grade</h1>
          </Col>
          
        </Row>
        {/* <div className=''>
          
          <div className='text-center'>
            <CardText className='mb-50'>Open Tickets</CardText>
            <span className='font-large-1 fw-bold'>{data.support_tracker.openTicket}</span>
          </div>
          <div className='text-center'>
            <CardText className='mb-50'>Response Time</CardText>
            <span className='font-large-1 fw-bold'>{data.support_tracker.responseTime}d</span>
          </div>
        </div> */}
      {/* </CardBody> */}
    </Card>
  ) : null
}
export default MaktabPerformanceCard
