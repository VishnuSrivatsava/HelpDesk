import React from "react";
/* import { UserGroupIcon, ServerIcon, CalendarIcon, ChartSquareBarIcon,PlusCircleIcon, CogIcon
} from '@heroicons/react/solid'; */
import { HiUserGroup } from 'react-icons/hi';
import { RiFolderAddFill } from 'react-icons/ri';
import { FaServer } from 'react-icons/fa';
import { FcCalendar } from 'react-icons/fc';
import { HiOutlineDocumentReport } from 'react-icons/hi';
import { FiSettings } from 'react-icons/fi';


export const links = [
    {
        title: 'Menu',
        links:[
            {
                name:'Manage',
                icon: <HiUserGroup />,
            },
            {
                name:'AddTicket',
                icon: <RiFolderAddFill />,
            },
            {
                name:'Dashboard',
                icon: <FaServer />,
            },
            {
                name:'Analytics',
                icon: <FcCalendar />,
            },
            {
                name:'Graph',
                icon: <HiOutlineDocumentReport />,
            },
            {
                name:'Settings',
                icon: <FiSettings />,
            },

            
        ]
    }
];


export const Users =[
    {
        title: 'Menu',
        links:[
            
        ]
    }
];