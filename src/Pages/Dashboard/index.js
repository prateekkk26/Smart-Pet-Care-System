import React, { Component } from 'react'
import { DashboarContainer, DashboardImages, DashboardImg, DashboardImgLink, DashboarMain } from './style'
import FeedingImg from '../../images/feeding.jpeg'
import AppointmentImg from '../../images/appointment.jpeg'
import ReportImg from '../../images/report.jpeg'
import { Context } from '../../ContextProvider'
import { Navigate } from 'react-router'
import { getStorageItem } from '../../utils/BasicFunctions'

class Dashboard extends Component {
    componentDidMount() {
        this.context.contextOnChange('path', '/dashboard');
    }
    render() {
        let isLoggedIn = getStorageItem('loggedIn');
        
        return (
            isLoggedIn ? <DashboarContainer>
                <DashboarMain>
                    <DashboardImages>
                        <DashboardImgLink>
                            <DashboardImg
                                src={FeedingImg}
                                alt="Feeding"
                            />
                        </DashboardImgLink>
                        <DashboardImgLink>
                            <DashboardImg
                                src={AppointmentImg}
                                alt="Appointment"
                            />
                        </DashboardImgLink>
                        <DashboardImgLink                                 
                            href="https://smartpetcaretemperature.herokuapp.com/"
                            target="_blank"
                        >
                            <DashboardImg
                                src={FeedingImg}
                                alt="Temperature"
                            />
                        </DashboardImgLink>
                        <DashboardImgLink>
                            <DashboardImg
                                src={ReportImg}
                                alt="Reporting"
                            />
                        </DashboardImgLink>
                    </DashboardImages>
                </DashboarMain>
            </DashboarContainer> : <Navigate replace to="/" />
        )
    }
}

Dashboard.contextType = Context;

export default Dashboard
