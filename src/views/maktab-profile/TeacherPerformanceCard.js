// ** React Imports
import { useEffect, useState } from 'react'

// ** Third Party Components
// import axios from 'axios'
import classnames from 'classnames'
import Chart from 'react-apexcharts'
import * as Icon from 'react-feather'

// ** Reactstrap Imports
import {
  Card,
  CardBody,
  CardTitle,
  CardHeader,
  DropdownMenu,
  DropdownItem,
  DropdownToggle,
  UncontrolledDropdown
} from 'reactstrap'

const TeacherPerformanceCard = props => {
  // ** State
//   const [data, setData] = useState(null)

  const data= {
    last_days: ['Last 28 Days', 'Last Month', 'Last Year'],
    chart_info: [
      {
        icon: 'User',
        name: 'A Grade Teacher',
        // iconColor: 'text-primary',
        // usage: 58.6,
        // upDown: 2
      },
      {
        icon: 'User',
        name: 'B Grade Teacher',
        // iconColor: 'text-warning',
        // usage: 34.9,
        // upDown: 8
      },
      {
        icon: 'User',
        name: 'C Grade Teacher',
        // iconColor: 'text-danger',
        // usage: 6.5,
        // upDown: -5
      }
    ]}

//   useEffect(() => {
//     axios.get('/card/card-analytics/sessions-device').then(res => setData(res.data))
//   }, [])

  const options = {
      chart: {
        toolbar: {
          show: false
        }
      },
      labels: ['A Grade Teacher', 'B Grade Teacher', 'C Grade Teacher'],
      dataLabels: {
        enabled: false
      },
      legend: { show: false },
      comparedResult: [2, -3, 8],
      stroke: { width: 0 },
      colors: [props.primary, props.warning, props.danger]
    },
    series = [58.6, 34.9, 6.5]

  const renderChartInfo = () => {
    return data.chart_info.map((item, index) => {
      const IconTag = Icon[item.icon]
      return (
        <div
          key={index}
          className={classnames('d-flex justify-content-between', {
            'mb-1': index !== data.chart_info.length - 1
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
    <Card>
      {/* <CardHeader className='align-items-end'>
        <CardTitle tag='h4'>Session By Device</CardTitle>
        <UncontrolledDropdown className='chart-dropdown'>
          <DropdownToggle color='' className='bg-transparent btn-sm border-0 p-50'>
            Last 7 days
          </DropdownToggle>
          <DropdownMenu end>
            {data.last_days.map(item => (
              <DropdownItem className='w-100' key={item}>
                {item}
              </DropdownItem>
            ))}
          </DropdownMenu>
        </UncontrolledDropdown>
      </CardHeader> */}
      <CardBody className='p-0 m-0 bg-white'>
        <Chart className='my-1 p-0' options={options} series={series} type='donut' height={150} />
        {renderChartInfo()}
      </CardBody>
    </Card>
  ) : null
}
export default TeacherPerformanceCard
