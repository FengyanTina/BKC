import React from 'react';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import { SocialIcon } from 'react-social-icons';

import './info.css';

interface ContactDetail {
  value: string;
  icon: JSX.Element; // MUI icons are React components, so they return JSX
}

const contactDetails: ContactDetail[] = [
  {
    value: '1600 Amphitheatre Parkway, Mountain View, California.',
    icon: <LocationOnIcon />,
  },
  { value: '+1 234 567 8900', icon: <PhoneIcon /> },
  { value: 'support@example.com', icon: <EmailIcon /> },
];

const renderContactDetails = (): JSX.Element[] =>
  contactDetails.map((detail) => (
    <p key={detail.value} className="info-detail">
      {detail.icon} {detail.value}
    </p>
  ));

const renderIcons = (): JSX.Element[] => (
  [
    { url: 'https://facebook.com', network: 'facebook' },
    { url: 'https://linkedin.com', network: 'linkedin' },
    { url: 'https://twitter.com', network: 'twitter' },
  ].map((social, index) => (
    <SocialIcon
      key={index}
      url={social.url}
      network={social.network}
      className="info-icon"
    />
  ))
);

const Info: React.FC = () => (
  <section style={{backgroundColor: '#28a745'}} className="info">
    <h2 className="info-h2">Contact information</h2>

    <div className="info-details-container">{renderContactDetails()}</div>

    <div className="info-icons-container">{renderIcons()}</div>
  </section>
);

export default Info;
