// // ** React Imports
// import { Fragment, useState } from 'react'

// // ** Third Party Components
// import classnames from 'classnames'

// // ** Reactstrap Imports
// import {
//   Nav,
//   TabPane,
//   NavItem,
//   NavLink,
//   Dropdown,
//   TabContent,
//   DropdownMenu,
//   DropdownItem,
//   DropdownToggle
// } from 'reactstrap'

// const UstadInfo = () => {
//   // ** States
//   const [active, setActive] = useState('1')
//   const [dropdownOpen, setDropdownOpen] = useState(false)

//   const toggleDropdown = () => setDropdownOpen(!dropdownOpen)

//   const toggle = tab => {
//     setActive(tab)
//   }
//   return (
//     <Fragment>
//       <Nav pills>
//         <NavItem>
//           <NavLink
//             active={active === '1'}
//             onClick={() => {
//               toggle('1')
//             }}
//           >
//             Ustadh Info 
//           </NavLink>
//         </NavItem>
//         <NavItem>
//           <NavLink
//             active={active === '2'}
//             onClick={() => {
//               toggle('2')
//             }}
//           >
//             Student List
//           </NavLink>
//         </NavItem>
//         {/* <Dropdown nav isOpen={dropdownOpen} toggle={toggleDropdown}>
//           <DropdownToggle
//             nav
//             caret
//             className={classnames({
//               active: active === '3' || active === '4'
//             })}
//           >
//             Dropdown
//           </DropdownToggle>
//           <DropdownMenu>
//             <DropdownItem
//               className='w-100'
//               active={active === '3'}
//               onClick={() => {
//                 toggle('3')
//               }}
//             >
//               @fat
//             </DropdownItem>
//             <DropdownItem
//               className='w-100'
//               active={active === '4'}
//               onClick={() => {
//                 toggle('4')
//               }}
//             >
//               @mdo
//             </DropdownItem>
//           </DropdownMenu>
//         </Dropdown> */}
//         <NavItem>
//           <NavLink
//             active={active === '3'}
//             onClick={() => {
//               toggle('3')
//             }}
//           >
//             Student Attendence
//           </NavLink>
//         </NavItem>
//         <NavItem>
//           <NavLink
//             active={active === '4'}
//             onClick={() => {
//               toggle('4')
//             }}
//           >
//             Teacher Attendence
//           </NavLink>
//         </NavItem>
//         <NavItem>
//           <NavLink
//             active={active === '5'}
//             onClick={() => {
//               toggle('5')
//             }}
//           >
//             Reports
//           </NavLink>
//         </NavItem>
//       </Nav>
//       <TabContent className='py-50' activeTab={active}>
//         <TabPane tabId='1' className='p-0'>
//           {/* <ul>
//             <li>Name : Hafiz Siraaj Ahmed</li>
//             <li>Gender : Male</li>
//             <li>Age : 35</li>
//             <li>Mother Tounge : Urdu</li>
//             <li>Education : Hadiz</li>
//             <li>Date Of Joining : 29th Jan 2022</li>
//             <li>Mobile Number : 0987654321</li>
//             <li>WhatsApp Number : 0987654321</li>
//           </ul> */}
//           <div className='d-flex col gap-1'>
//                         <div>
//                             <p className='fw-semibold pb-1 mb-0'>Name</p>
//                             <p className='fw-semibold pb-1 mb-0'>Gender</p>
//                             <p className='fw-semibold pb-1 mb-0'>Age Type </p>
//                             <p className='fw-semibold pb-1 mb-0'>Mother Tounge </p>
//                             <p className='fw-semibold pb-1 mb-0'>Education </p><p className='fw-semibold pb-1 mb-0'>Date Of Joining </p><p className='fw-semibold pb-1 mb-0'>Mobile Number  </p><p className='fw-semibold pb-1 mb-0'>WhatsApp Number </p>
//                         </div>
//                         <div>
//                             <p className="mb-0 pb-1"><span className='fw-semibold pe-1'>:</span> Hafiz Siraaj Ahmed</p>
//                             <p className="mb-0 pb-1"><span className='fw-semibold pe-1'>:</span> Male </p>
//                             <p className="mb-0 pb-1"><span className='fw-semibold pe-1'>:</span> 35</p>
//                             <p className="mb-0 pb-1"><span className='fw-semibold pe-1'>:</span> Urdu</p>
//                             <p className="mb-0 pb-1"><span className='fw-semibold pe-1'>:</span> Hafiz</p>
//                             <p className="mb-0 pb-1"><span className='fw-semibold pe-1'>:</span> 29th Jan 2022</p> 
//                             <p className="mb-0 pb-1"><span className='fw-semibold pe-1'>:</span> 0987654321</p>
//                             <p className="mb-0 pb-1"><span className='fw-semibold pe-1'>:</span> 1235876871</p>
//                         </div>
//                     </div>

//         </TabPane>
//         <TabPane tabId='2'>
//           <p>
//             Pudding candy canes sugar plum cookie chocolate cake powder croissant. Carrot cake tiramisu danish candy
//             cake muffin croissant tart dessert. Tiramisu caramels candy canes chocolate cake sweet roll liquorice icing
//             cupcake.Bear claw chocolate chocolate cake jelly-o pudding lemon drops sweet roll sweet candy. Chocolate
//             sweet chocolate bar candy chocolate bar chupa chups gummi bears lemon drops.
//           </p>
//         </TabPane>
//         <TabPane tabId='3'>
//           <p>
//             Cake croissant lemon drops gummi bears carrot cake biscuit cupcake croissant. Macaroon lemon drops muffin
//             jelly sugar plum chocolate cupcake danish icing. Soufflé tootsie roll lemon drops sweet roll cake icing
//             cookie halvah cupcake.Chupa chups pie jelly pie tootsie roll dragée cookie caramels sugar plum. Jelly oat
//             cake wafer pie cupcake chupa chups jelly-o gingerbread.
//           </p>
//         </TabPane>
//         <TabPane tabId='4'>
//           <p>
//             Chocolate croissant cupcake croissant jelly donut. Cheesecake toffee apple pie chocolate bar biscuit tart
//             croissant. Lemon drops danish cookie. Oat cake macaroon icing tart lollipop cookie sweet bear claw. Toffee
//             jelly-o pastry cake dessert chocolate bar jelly beans fruitcake. Dragée sweet fruitcake dragée biscuit
//             halvah wafer gingerbread dessert. Gummies fruitcake brownie gummies tart pudding.
//           </p>
//         </TabPane>
//         <TabPane tabId='5'>
//           <p>
//             Carrot cake dragée chocolate. Lemon drops ice cream wafer gummies dragée. Chocolate bar liquorice cheesecake
//             cookie chupa chups marshmallow oat cake biscuit. Dessert toffee fruitcake ice cream powder tootsie roll
//             cake.Chocolate bonbon chocolate chocolate cake halvah tootsie roll marshmallow. Brownie chocolate toffee
//             toffee jelly beans bonbon sesame snaps sugar plum candy canes.
//           </p>
//         </TabPane>
//       </TabContent>
//     </Fragment>
//   )
// }
// export default UstadInfo


import React, { useState } from 'react'
import { TabContent, TabPane, Nav, NavItem, NavLink } from 'reactstrap'

const TabsFilled = () => {
  const [active, setActive] = useState('1')

  const toggle = tab => {
    if (active !== tab) {
      setActive(tab)
    }
  }
  return (
    <React.Fragment>
      <Nav tabs fill className='border-bottom'>
        <NavItem>
          <NavLink
            active={active === '1'}
            onClick={() => {
              toggle('1')
            }}
          >
            Ustadh Info
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            active={active === '2'}
            onClick={() => {
              toggle('2')
            }}
          >
            Profile
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            active={active === '3'}
            onClick={() => {
              toggle('3')
            }}
          >
            Student List
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            active={active === '4'}
            onClick={() => {
              toggle('4')
            }}
          >
            Student Attendence
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            active={active === '4'}
            onClick={() => {
              toggle('4')
            }}
          >
            Teacher Attendence
          </NavLink>
        </NavItem> 
        <NavItem>
          <NavLink
            active={active === '4'}
            onClick={() => {
              toggle('4')
            }}
          >
           Reports
          </NavLink>
        </NavItem>
      </Nav>
      <TabContent className='py-50' activeTab={active}>

        <TabPane tabId='1' className='p-0'> <div className='d-flex col gap-1'>                        <div>  <p className='fw-semibold pb-1 mb-0'>Name</p> <p className='fw-semibold pb-1 mb-0'>Gender</p>  <p className='fw-semibold pb-1 mb-0'>Age Type </p>
          <p className='fw-semibold pb-1 mb-0'>Mother Tounge </p>
          <p className='fw-semibold pb-1 mb-0'>Education </p><p className='fw-semibold pb-1 mb-0'>Date Of Joining </p><p className='fw-semibold pb-1 mb-0'>Mobile Number  </p><p className='fw-semibold pb-1 mb-0'>WhatsApp Number </p>
        </div>
          <div>
            <p className="mb-0 pb-1"><span className='fw-semibold pe-1'>:</span> Hafiz Siraaj Ahmed</p>
            <p className="mb-0 pb-1"><span className='fw-semibold pe-1'>:</span> Male </p>
            <p className="mb-0 pb-1"><span className='fw-semibold pe-1'>:</span> 35</p>
            <p className="mb-0 pb-1"><span className='fw-semibold pe-1'>:</span> Urdu</p>
            <p className="mb-0 pb-1"><span className='fw-semibold pe-1'>:</span> Hafiz</p>
            <p className="mb-0 pb-1"><span className='fw-semibold pe-1'>:</span> 29th Jan 2022</p>
            <p className="mb-0 pb-1"><span className='fw-semibold pe-1'>:</span> 0987654321</p>
            <p className="mb-0 pb-1"><span className='fw-semibold pe-1'>:</span> 1235876871</p>
          </div>
        </div>

        </TabPane>


        <TabPane tabId='2'>
          <p>
            Bear claw jelly beans wafer pastry jelly beans candy macaroon biscuit topping. Sesame snaps lemon drops
            donut gingerbread dessert cotton candy wafer croissant jelly beans. Sweet roll halvah gingerbread bonbon
            apple pie gummies chocolate bar pastry gummi bears.
          </p>
          <p>
            Croissant danish chocolate bar pie muffin. Gummi bears marshmallow chocolate bar bear claw. Fruitcake halvah
            chupa chups dragée carrot cake cookie. Carrot cake oat cake cake chocolate bar cheesecake. Wafer gingerbread
            sweet roll candy chocolate bar gingerbread.
          </p>
        </TabPane>
        <TabPane tabId='3'>
          <p>
            Croissant jelly tootsie roll candy canes. Donut sugar plum jujubes sweet roll chocolate cake wafer. Tart
            caramels jujubes. Dragée tart oat cake. Fruitcake cheesecake danish. Danish topping candy jujubes. Candy
            canes candy canes lemon drops caramels tiramisu chocolate bar pie.
          </p>
          <p>
            Gummi bears tootsie roll cake wafer. Gummies powder apple pie bear claw. Caramels bear claw fruitcake
            topping lemon drops. Carrot cake macaroon ice cream liquorice donut soufflé. Gummi bears carrot cake toffee
            bonbon gingerbread lemon drops chocolate cake.
          </p>
        </TabPane>
        <TabPane tabId='4'>
          <p>
            Candy canes halvah biscuit muffin dessert biscuit marzipan. Gummi bears marzipan bonbon chupa chups biscuit
            lollipop topping. Muffin sweet apple pie sweet roll jujubes chocolate. Topping cake chupa chups chocolate
            bar tiramisu tart sweet roll chocolate cake.
          </p>
          <p>
            Jelly beans caramels muffin wafer sesame snaps chupa chups chocolate cake pastry halvah. Sugar plum cotton
            candy macaroon tootsie roll topping. Liquorice topping chocolate cake tart tootsie roll danish bear claw.
            Donut candy canes marshmallow. Wafer cookie apple pie.
          </p>
        </TabPane>
      </TabContent>
    </React.Fragment>
  )
}
export default TabsFilled