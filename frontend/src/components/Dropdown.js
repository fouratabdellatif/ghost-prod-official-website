import React from 'react'
import { FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import styled from 'styled-components'
import { menuData } from '../data/MenuData'
import { ContactButton } from './Button';
import gpLogo from '../images/ghostprodLogo.png';

const DropdownContainer = styled.div`
position: fixed;
z-index: 999;
width: 100%;
height: 100%;
background: #e1a33b;
display: grid;
align-items: center;
/* left: 0; */
right: ${({ isOpen }) => (isOpen ? '0' : '-100%')};
transition: 0.3s ease-in-out;
opacity: ${({ isOpen }) => (isOpen ? '1' : '0')};
/* top: ${({ isOpen }) => (isOpen ? '0' : '-100%')}; */
`;

const Icon = styled.div`
position: absolute;
top: 1.2rem;
right: 1.5rem;
background: transparent;
font-size: 2rem;
cursor: pointer;
outline: none;
`;

const CloseIcon = styled(FaTimes)`
color: #231f20;
`;

const DropdownWrapper = styled.div`

`;

const DropdownMenu = styled.div`
display: grid;
grid-template-columns: 1fr 1fr 1fr;
grid-template-rows: repeat(4, 80px);
margin: auto auto 40px auto;
width: 80%;

@media screen and (max-width: 480px) {
    grid-template-rows: repeat(4, 60px);
}
`;

const DropdownLink = styled(Link)`
background: none;
padding: 10px 10px;
display: flex;
/* align-items: center;
justify-content: center; */
color: #231f20;
font-size: 36px;
left: 0;
font-weight: 500;
text-decoration: none;
cursor: pointer;
transition: 0.8s;
position: relative;
overflow: hidden;
width: auto;
margin: auto auto auto 0;
text-transform: uppercase;

&:hover {
    color: #e1a33b;
}

&::before {
  content: "";
  position: absolute;
  left: 0;
  width: 0%;
  height: 100%;
  background: #231f20;
  z-index: -1;
  transition: 0.8s;
  bottom: 0;
  border-radius: 0 50% 50% 0;
}

&:hover::before {
  width: 180%;
}

&:nth-child(2) {
    margin: auto;
}
&:nth-child(5) {
    font-weight: 700;
    margin: auto;
}
&:nth-child(3) {
    margin: auto 0 auto auto;
}
&:nth-child(6) {
    margin: auto 0 auto auto;
}
`;

const BtnWrap = styled.div`
display: flex;
justify-content: center;
height: 60px;
top: 0;
`;

const SocialMediaWrapper = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    position: relative;
    width: 600px;
    margin: 10px auto auto auto;
`;

const SocialMediaItem = styled.a`
    /* font-size: 18px;
    letter-spacing: 0;
    line-height: 28px;
    color: #231F20;
    padding: 0 10px;
    text-decoration: none;
    display: inline-block;
    transition: all 0.3s linear;
    overflow: hidden;
    border-bottom: 2px solid #231F20;
    margin: auto; */

    position: relative;
    text-decoration: none;
    font-family: 'Poppins', sans-serif;
    color: #231F20;
    font-size: 18px;
    letter-spacing: 0.5px;
    padding: 0 6px;
    margin: auto 8px;

    &:hover {
    }

    &::after {
        content: "";
        position: absolute;
        background-color: #231F20;
        height: 3px;
        width: 100%;
        left: 0;
        bottom: -10px;
        transition: 0.3s;
    }

    &:hover::after {
        width: 0;
    }
`;

const Dropdown = ({ isOpen, toggle }) => {
    return (
        <DropdownContainer isOpen={isOpen} onClick={toggle}>
            <DropdownWrapper>
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: '1fr 1fr 1fr',
                    gridTemplateRows: 'repeat(1, 80px)',
                    marginBottom: '140px',
                    marginTop: '-40px'
                }}>
                    <Link className="logo" to="/">
                        <img className="logo-container active" src={gpLogo} alt="Logo" />
                    </Link>
                    <BtnWrap>
                        <ContactButton primary="true" round="true" big="true" to="/contact">
                            Contact Us
                        </ContactButton>
                    </BtnWrap>
                    <Icon onClick={toggle}>
                        <CloseIcon />
                    </Icon>
                </div>
                <DropdownMenu>
                    {menuData.map((item, index) => (
                        <DropdownLink to={item.link} key={index}>
                            {item.title}
                        </DropdownLink>
                    ))}
                </DropdownMenu>
                <SocialMediaWrapper>
                    <SocialMediaItem href='https://www.instagram.com/ghostprod_officiel/?hl=fr'>Youtube</SocialMediaItem>
                    <SocialMediaItem href='https://www.instagram.com/ghostprod_officiel/?hl=fr'>Instagram</SocialMediaItem>
                    <SocialMediaItem href='https://www.facebook.com/Ghostprod.net'>Facebook</SocialMediaItem>
                    <SocialMediaItem href='https://www.instagram.com/ghostprod_officiel/?hl=fr'>Linkedin</SocialMediaItem>
                </SocialMediaWrapper>
            </DropdownWrapper>
        </DropdownContainer>
    )
}

export default Dropdown