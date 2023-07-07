import React from 'react';
import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import UserInfoCard from './UserInfoCard1';
// import UserTabs from './Tabs';
import MaktabDetails from './MaktabDetails';
import { Row, Col, Alert } from 'reactstrap';
import MaktabTrackers from './PerformanceCards';
// import MaktabDetailInfo from './MaktabDetailInfo';
// import { getUser } from '../store';
import { useSelector, useDispatch } from 'react-redux';
import Card from '@components/card-snippet'

import MaktabDetailInfo from './MaktabDetailInfo';



function Maktab() {
  // const store = useSelector(state => state.users)
  // const dispatch = useDispatch()

  // useEffect(() => {
  //   dispatch(getUser(parseInt(id)))
  // }, [dispatch])

  // const [active, setActive] = useState('1')

  // const toggleTab = tab => {
  //   if (active !== tab) {
  //     setActive(tab)
  //   }
  // }

  // console.log("############store" + store)
  // console.log("############storeUserName" + store.selectedUser)
  // ** Store Vars
  //  const store = useSelector(state => state.users)
  //  const dispatch = useDispatch()

  // ** Hooks
  //  const { id } = useParams()
  //  console.log("#################### id "+  id)

  // ** Get suer on mount
  //  useEffect(() => {
  //    dispatch(getUser(parseInt(id)))
  //    console.log("$$$$$$$$$$$$$"+getUser(parseInt  (  id)))
  //  }, [dispatch])

  //  const [active, setActive] = useState('1')

  //  const toggleTab = tab => {
  //    if (active !== tab) {
  //      setActive(tab)
  //    }
  //  }
  //  console.log("############store"+ store)
  //    console.log("########################storeSELECTRDUSEr"+store.selectedUser)
  const store = {
    selectedUser: {
      username: 'Abdul Kabeer',
      fullName: 'Abdul Kabeer',
      lastName: 'Kabeer',
      firstName: 'Abdul',
      contact: 123,
    }
  }

  return (
    <div className='app-user-view'>
      <Row>
        <Col xl='4' lg='5' xs={{ order: 1 }} md={{ order: 0, size: 5 }}>
          {/* <UserInfoCard selectedUser={store.selectedUser} /> */}
          <UserInfoCard />
          {/* <PlanCard /> */}
        </Col>
        <Col xl='8' lg='7' xs={{ order: 0 }} md={{ order: 1, size: 7 }}>
          {/* <UserTabs active={active} toggleTab={toggleTab} /> */}
          <MaktabDetails />
        </Col>
      </Row>
      {/* <Row>
        <MaktabTrackers />
      </Row> */}
      <Row>
        <Col xl='12' lg='12'>
          <div className='card'  >
            <div className='card-body'>
            <MaktabDetailInfo />
            </div>
          </div>
        </Col>
      </Row>
    </div>
  )

}

export default Maktab
