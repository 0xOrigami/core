import React, { useState, useEffect } from 'react';
import './sidebar.scss'
import {
    ProSidebar,
    Menu,
    MenuItem,
    SidebarHeader,
    SidebarContent,
    SidebarFooter,
} from "react-pro-sidebar";

import { AiOutlinePlus, AiOutlineGateway, AiOutlineCloudServer, AiOutlineDeploymentUnit } from 'react-icons/ai';
import { MdFolderShared, MdBubbleChart, MdSchool, MdOutlineSettings, MdOutlineSettingsAccessibility } from 'react-icons/md';
import { BiLogOut } from 'react-icons/bi';
import { HiOutlineDocument } from 'react-icons/hi';
import { BsCollection, BsShopWindow, BsBadge3D } from 'react-icons/bs';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { authAC } from '../../store/action-creators';



function logout(_auth, _navigate) {
    _auth.setAuthData(null);
    _navigate('/');
}


function Sidebar() {
    const [currentPage, setCurrentPage] = useState('dashboard');
    const _location = useLocation();
    const toastId = React.useRef(null);
    const dispatch = useDispatch();
    const _auth = bindActionCreators(authAC, dispatch);
    const _navigate = useNavigate();





    useEffect(
        () => {
            setCurrentPage(_location.pathname);
        },
        [_location]
    )

    return (
        <ProSidebar collapsed={false}>
            <SidebarHeader>
                <Menu iconShape="round">
                    <MenuItem icon={<BsBadge3D />} active={true}
                    >Upload 3D Scan  <Link to='/dashboard/uploadNew' /></MenuItem>
                    <MenuItem icon={<AiOutlineDeploymentUnit />} active={false}
                    >Mint 3D NFT  <Link to='/dashboard/mintNFT' /></MenuItem>
                </Menu>
            </SidebarHeader>
            <Menu iconShape="round">
                <MenuItem icon={<MdFolderShared />} active={false}
                >Dashboard <Link to='/dashboard' /></MenuItem>
                <MenuItem icon={<MdSchool />} active={false}
                >Education <Link to='collection' /></MenuItem>
                <MenuItem icon={<BsShopWindow />} active={false}
                >Marketplace <Link to='gateway' /></MenuItem>
                <MenuItem icon={<MdBubbleChart />} active={currentPage === '/dashboard/room' ? true : false}
                >My Metaverse <Link to='room' /></MenuItem>
            </Menu>
            <SidebarContent>
            </SidebarContent>
            <SidebarFooter>
                <Menu iconShape="round">
                    <MenuItem icon={<MdOutlineSettingsAccessibility />} active={false}
                    >Account <Link to='account' /></MenuItem>
                    <MenuItem icon={<MdOutlineSettings />} active={false}
                    >Settings <Link to='settings' /></MenuItem>
                    <MenuItem icon={<BiLogOut />} active={false}
                        onClick={() => { logout(_auth, _navigate) }}
                    >Logout</MenuItem>
                </Menu>
            </SidebarFooter>
        </ProSidebar>
    );
}

export default Sidebar;
