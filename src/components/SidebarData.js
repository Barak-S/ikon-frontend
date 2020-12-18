import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import * as GiIcons from 'react-icons/gi';

export const SidebarData = [
    {
        title: 'Home',
        path: '/',
        icon: <AiIcons.AiFillHome />,
        cName: 'nav-text'
    },
    {
        title: 'Account',
        path: '/account',
        icon: <IoIcons.IoMdPerson />,
        cName: 'nav-text'
    },
    {
        title: 'Orders',
        path: '/account/orders',
        icon: <IoIcons.IoIosPaper />,
        cName: 'nav-text'
    },
    {
        title: 'Shop',
        path: '/shop',
        icon: <FaIcons.FaShoppingCart />,
        cName: 'nav-text'
    },
    {
        title: 'Repair',
        path: '/repair',
        icon: <GiIcons.GiAutoRepair />,
        cName: 'nav-text'
    },
    {
        title: 'Contact',
        path: '/contact',
        icon: <AiIcons.AiOutlinePhone />,
        cName: 'nav-text'
    },
    // {
    //     title: 'Messages',
    //     path: '/messages',
    //     icon: <FaIcons.FaEnvelopeOpenText />,
    //     cName: 'nav-text'
    // },
    {
        title: 'Support',
        path: '/support',
        icon: <IoIcons.IoMdHelpCircle />,
        cName: 'nav-text'
    }
];