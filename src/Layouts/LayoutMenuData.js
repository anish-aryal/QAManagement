import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getLoggedInUser } from "../helpers/fakebackend_helper";

const Navdata = () => {
    const history = useNavigate();
    //state data


    const[isProject, setIsProject] = useState(false);
    const[isModule, setIsModule] = useState(false);
    const[isUsers, setIsUsers] = useState(false);
    const [isDashboard, setIsDashboard] = useState(false);
  
    const authUser = getLoggedInUser();
    console.log("authUser", authUser)
    const isAdmin = authUser?.associatedRoles?.includes('SuperAdmin') || authUser?.associatedRoles?.includes('SystemAdmin');
    console.log("isAdmin", isAdmin);

   


    const [iscurrentState, setIscurrentState] = useState('Dashboard');

    function updateIconSidebar(e) {
        if (e && e.target && e.target.getAttribute("subitems")) {
            const ul = document.getElementById("two-column-menu");
            const iconItems = ul.querySelectorAll(".nav-icon.active");
            let activeIconItems = [...iconItems];
            activeIconItems.forEach((item) => {
                item.classList.remove("active");
                var id = item.getAttribute("subitems");
                if (document.getElementById(id))
                    document.getElementById(id).classList.remove("show");
            });
        }
    }

    useEffect(() => {
        document.body.classList.remove('twocolumn-panel');

     

        if (iscurrentState === 'Project') {
            history("/project");
            setIsProject(false);
        }

        if (iscurrentState === 'Modules') {
            history("/modules");
            setIsModule(false);
        }

    }, [
        history,
        iscurrentState,
        isProject,
        isModule,
    
       
    ]);

   

    const menuItems = [
        {
            label: "Menu",
            isHeader: true,
        },
        
   
        {
            id: "Dashboard",
            label: "Dashboard",
            icon: "ri-bubble-chart-line",
            link: "/dashboard",
            click: function (e) {
                e.preventDefault();
                setIsDashboard(!isDashboard);
                setIscurrentState('Dashboard');
    
            }
        },
        {
            id: "Projects",
            label: "Projects",
            icon: "ri-honour-line",
            link: "/project",
            click: function (e) {
                e.preventDefault();
                setIsQaManagement(!isProject);
                setIscurrentState('Project');
    
            }
        },
        
    ];
    if (isAdmin) {

        const usersSection ={
            id: "Users",
            label: "Team",
            icon: " ri-team-line",
            link: "/users",
            click: function (e) {
                e.preventDefault();
                setIsQaManagement(!isUsers);
                setIsUsers('Users');
            }
        }
        menuItems.push(usersSection);

       
    }
    
    return <React.Fragment>{menuItems}</React.Fragment>;
};
export default Navdata;