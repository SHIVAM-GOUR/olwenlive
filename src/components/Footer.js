import React from 'react'
import { MailOutlined,PhoneOutlined,EnvironmentOutlined } from '@ant-design/icons'

function Footer() {
    return (
        <div className='footer-container'>
            <div className="footer-contact">
                <div className='footer-box'>
                    <MailOutlined className='footer-icon'/>
                    <p className='footer-mail-text'>prajapatrkp@gmail.com</p>
                </div>
                <div className='footer-box'>
                <PhoneOutlined className='footer-icon'/>
                <p className='footer-mail-text'>+91 9414081152</p>
                </div>
                <div className='footer-box'>
                <EnvironmentOutlined className='footer-icon'/>
                    <p className='footer-mail-text'>GF-27/FF-9, Satyamev Arcade, Highway Road, Near Chandkheda Bus Stand, Chandkheda, Ahmedabad</p>
                </div>
            </div>
        </div>
    )
}

export default Footer