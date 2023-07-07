// // ** React Imports
// import { useState } from 'react';
import MaktabJamaathInfo from './MaktabJamaathInfo';
import jamathIcon from './icons/icons8-news.svg';

// // ** Reactstrap Imports
// import { TabContent, TabPane, Nav, NavItem, NavLink } from 'reactstrap'

// const MaktabDetailInfo = () => {
//     // ** State
//     const [active, setActive] = useState('1')

//     const toggle = tab => {
//         if (active !== tab) {
//             setActive(tab)
//         }
//     }



//     return (
//         <div className='card-body'>
//             <div className='nav-vertical'>
//                 <Nav tabs className='nav-left'>
//                     <NavItem>
//                         <NavLink
//                             active={active === '1'}
//                             onClick={() => {
//                                 toggle('1')
//                             }}
//                         >
//                             <img
//                                 src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAACEElEQVR4nO2Yv0tcQRDH12iTaC/EVKkkeG9GrxEsJEUqzZu5g2stcn9ACu21TJsqJJBCC7mdM42FyBEMKFgoSEiR+C+IljmSCHKy5+m9XHzknu9+7Mp+Yaq3u28+Oz92WaW8vLy8vLw6IEHeEeSaW0Z7t4HUXDQVB6IckXgQyyQ+IpZJXIhIOQgnBfmbAH2tKTXgHMiyWn6gkZYE6Y/xRQMfxo21FmR94uWoBtq6OSOA19aCF8NOgQiEOQ101gA4LSPTf+fYBCLThYcC9Pb63xr4s8DcWFtzuwFSCnITGvnI5PRGJv+0LUemOCvIx3UA5N+CtBhX2D0BEQwXBPlnc1fprATh87jxxllBft0saPphulTy/3JnQEwhauDVaHE2i9U4ScXWOZ8yuSd/3bKB3m1m5x8lhegYyEY2P17v81fO/DI7XF+jUBgU5DeR2+n7L7OzQ+ZbOeB80oLuKogO+JUGrjYgvpv6+HctKkZSZ0uQPkaiUFmfDB+rlJK7gtQ7DNKHaCrJs8JI3PgS5Gc00kkE4FwDrZhDLy1EKhDTkRotsmqiotqQ6WACdGA62l0KujsRAdo3dXFbKvVDYtOBmEbiQSyT+IhYJvERUUke8eiilMlNWRsRSfYKuHNfQLbvAQj1PrUEqJJwpy002nP2FV5azLk7Vqs8iPUREcdNmYrvtxNpTSPv9jszvLy8VG90Ca8qtw7l58p4AAAAAElFTkSuQmCC"
//                                 width={40} className='pe-1'
//                             ></img >Jamaath-1
//                         </NavLink>
//                     </NavItem>
//                     <NavItem>
//                         <NavLink
//                             active={active === '2'}
//                             onClick={() => {
//                                 toggle('2')
//                             }}
//                         >
//                             <img
//                                 src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAACEElEQVR4nO2Yv0tcQRDH12iTaC/EVKkkeG9GrxEsJEUqzZu5g2stcn9ACu21TJsqJJBCC7mdM42FyBEMKFgoSEiR+C+IljmSCHKy5+m9XHzknu9+7Mp+Yaq3u28+Oz92WaW8vLy8vLw6IEHeEeSaW0Z7t4HUXDQVB6IckXgQyyQ+IpZJXIhIOQgnBfmbAH2tKTXgHMiyWn6gkZYE6Y/xRQMfxo21FmR94uWoBtq6OSOA19aCF8NOgQiEOQ101gA4LSPTf+fYBCLThYcC9Pb63xr4s8DcWFtzuwFSCnITGvnI5PRGJv+0LUemOCvIx3UA5N+CtBhX2D0BEQwXBPlnc1fprATh87jxxllBft0saPphulTy/3JnQEwhauDVaHE2i9U4ScXWOZ8yuSd/3bKB3m1m5x8lhegYyEY2P17v81fO/DI7XF+jUBgU5DeR2+n7L7OzQ+ZbOeB80oLuKogO+JUGrjYgvpv6+HctKkZSZ0uQPkaiUFmfDB+rlJK7gtQ7DNKHaCrJs8JI3PgS5Gc00kkE4FwDrZhDLy1EKhDTkRotsmqiotqQ6WACdGA62l0KujsRAdo3dXFbKvVDYtOBmEbiQSyT+IhYJvERUUke8eiilMlNWRsRSfYKuHNfQLbvAQj1PrUEqJJwpy002nP2FV5azLk7Vqs8iPUREcdNmYrvtxNpTSPv9jszvLy8VG90Ca8qtw7l58p4AAAAAElFTkSuQmCC"
//                                 width={40} className='pe-1'
//                             ></img >Jamaath-2
//                         </NavLink>
//                     </NavItem>
//                     <NavItem>
//                         <NavLink
//                             active={active === '3'}
//                             onClick={() => {
//                                 toggle('3')
//                             }}
//                         >
//                             <img
//                                 src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAACEElEQVR4nO2Yv0tcQRDH12iTaC/EVKkkeG9GrxEsJEUqzZu5g2stcn9ACu21TJsqJJBCC7mdM42FyBEMKFgoSEiR+C+IljmSCHKy5+m9XHzknu9+7Mp+Yaq3u28+Oz92WaW8vLy8vLw6IEHeEeSaW0Z7t4HUXDQVB6IckXgQyyQ+IpZJXIhIOQgnBfmbAH2tKTXgHMiyWn6gkZYE6Y/xRQMfxo21FmR94uWoBtq6OSOA19aCF8NOgQiEOQ101gA4LSPTf+fYBCLThYcC9Pb63xr4s8DcWFtzuwFSCnITGvnI5PRGJv+0LUemOCvIx3UA5N+CtBhX2D0BEQwXBPlnc1fprATh87jxxllBft0saPphulTy/3JnQEwhauDVaHE2i9U4ScXWOZ8yuSd/3bKB3m1m5x8lhegYyEY2P17v81fO/DI7XF+jUBgU5DeR2+n7L7OzQ+ZbOeB80oLuKogO+JUGrjYgvpv6+HctKkZSZ0uQPkaiUFmfDB+rlJK7gtQ7DNKHaCrJs8JI3PgS5Gc00kkE4FwDrZhDLy1EKhDTkRotsmqiotqQ6WACdGA62l0KujsRAdo3dXFbKvVDYtOBmEbiQSyT+IhYJvERUUke8eiilMlNWRsRSfYKuHNfQLbvAQj1PrUEqJJwpy002nP2FV5azLk7Vqs8iPUREcdNmYrvtxNpTSPv9jszvLy8VG90Ca8qtw7l58p4AAAAAElFTkSuQmCC"
//                                 width={40} className='pe-1'
//                             ></img >Jamaath-3
//                         </NavLink>
//                     </NavItem>
//                 </Nav>
//                 <TabContent activeTab={active}>
//                     <TabPane tabId='1'>
//                         <div className='card-body bg-white rounded-3'>

//                         <MaktabJamaathInfo />
//                         </div>
//                     </TabPane>
//                     <TabPane tabId='2'>
//                         <p>
//                             Sugar plum tootsie roll biscuit caramels. Liquorice brownie pastry cotton candy oat cake fruitcake jelly
//                             chupa chups. Sweet fruitcake cheesecake biscuit cotton candy. Cookie powder marshmallow donut. Pudding
//                             caramels pastry powder cake soufflé wafer caramels. Jelly-o pie cupcake.
//                         </p>
//                     </TabPane>
//                     <TabPane tabId='3'>
//                         <p>
//                             Icing croissant powder jelly bonbon cake marzipan fruitcake. Tootsie roll marzipan tart marshmallow pastry
//                             cupcake chupa chups cookie. Fruitcake dessert lollipop pudding jelly. Cookie dragée jujubes croissant lemon
//                             drops cotton candy. Carrot cake candy canes powder donut toffee cookie.
//                         </p>
//                     </TabPane>
//                 </TabContent>
//             </div>
//         </div>
//     )
// }
// export default MaktabDetailInfo


// ** React Imports
import { useState } from 'react'

// ** Reactstrap Imports
import { TabContent, TabPane, Nav, NavItem, NavLink, Row, Col } from 'reactstrap'

const PillsVertical = () => {
    // ** States
    const [active, setActive] = useState('1')

    const toggle = tab => {
        setActive(tab)
    }
    return (
        <Row>
            <Col md='3' sm='12'>
                <Nav pills vertical className='border'>
                    <NavItem>
                        <NavLink
                            active={active === '1'}
                            onClick={() => {
                                toggle('1')
                            }}
                        >
                            <img
                                src={jamathIcon}
                                width={40} className='pe-1'
                            ></img >Jamaath-1
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink
                            active={active === '2'}
                            onClick={() => {
                                toggle('2')
                            }}
                        >
                            <img
                                src={jamathIcon}
                                width={40} className='pe-1'
                            ></img >Jamaath-2
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink
                            active={active === '3'}
                            onClick={() => {
                                toggle('3')
                            }}
                        >
                            <img
                                src={jamathIcon}
                                width={40} className='pe-1'
                            ></img >Jamaath-3
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink disabled>Disabled</NavLink>
                    </NavItem>
                </Nav>
            </Col>
            <Col md='9' sm='12'>
                <TabContent activeTab={active}>
                    <TabPane tabId='1'>
                    <div className='card-body bg-white rounded-3'>
                    <MaktabJamaathInfo />
                    </div>
                    </TabPane>
                    <TabPane tabId='2'>
                        <p>
                            Pudding candy canes sugar plum cookie chocolate cake powder croissant. Carrot cake tiramisu danish candy
                            cake muffin croissant tart dessert. Tiramisu caramels candy canes chocolate cake sweet roll liquorice
                            icing cupcake. Sesame snaps wafer marshmallow danish dragée candy muffin jelly beans tootsie roll. Jelly
                            beans oat cake chocolate cake tiramisu sweet.
                        </p>
                    </TabPane>
                    <TabPane tabId='3'>
                        <p>
                            Carrot cake dragée chocolate. Lemon drops ice cream wafer gummies dragée. Chocolate bar liquorice
                            cheesecake cookie chupa chups marshmallow oat cake biscuit. Dessert toffee fruitcake ice cream powder
                            tootsie roll cake. Macaroon brownie lemon drops croissant marzipan sweet roll macaroon lollipop. Danish
                            fruitcake bonbon bear claw gummi bears apple pie.
                        </p>
                    </TabPane>
                </TabContent>
            </Col>
        </Row>
    )
}
export default PillsVertical

