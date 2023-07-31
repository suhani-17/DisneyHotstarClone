import styled from 'styled-components';

const Login = (props) => {
    return (
   <Container>
    <Content>
    <BgImage/>
    <CTA>
        <CTALogoOne src="images/cta-logo-one.svg" alt="logo-one"/>
        <SignUp>Get All There</SignUp>
        <Description>Get Premier Access to Raya and the Last Dragon for an additional fee with a Disney+ 
        subscription. As of 7/05/2023, the price of Disney+ and The Disney Bundle will increase by $1. 
        </Description>
        <CTALogoTwo src="images/cta-logo-two.png" alt="logo-two"/>
    </CTA>
    </Content>
   </Container>
    );
   
};
const Container = styled.section`
overflow: hidden;
display: flex;
flex-direction: column;
text-align: center;
height: 100vh;
`;
const Content = styled.div`
margin-bottom: 10vw;
width: 100%;
display:flex;
position: relative;
min-height: 100vh;
box-sizing: border-box;
justify-content: center;
align-items: center;
flex-direction: column;
padding: 80px 40px;
height: 100%;
@media only screen and (max-width: 434px) { /* adjust styling for screen width 384px */
        padding: 40px 10px; /* further reduced padding */
    }

`;

const BgImage = styled.div`
height: 100%;
background-position: top;
background-size: cover;
background-repeat: no-repeat;
background-image : url('/images/login-background.jpg');
position:absolute;
top:0;
right:0;
left:0;
z-index:-1;
`;

const CTA = styled.div`
margin-bottom: 2vw;
max-width: 650px;
flex-wrap: wrap;
display: flex;
flex-direction: column;
justify-content: center;
margin-top: 0;
align-items: center;
margin-right: auto;
margin-left: auto;
transition-timing-function: ease-out;
transition: opacity 0.2s;
width: 100%;
`;


const CTALogoOne = styled.img`
margin-bottom: 12px;
max-width: 600px;
min-height:1px;
display: block;
width: 100%;
@media only screen and (max-width: 640px) { /* adjust styling for screen width 384px */
        max-width: 300px; /* reduce logo width */
    }
`;
const SignUp = styled.a`
font-weight: bold;
color: #f9f9f9;
background-color: #0063e5;
margin-bottom: 12px;
width: 100%;
letter-spacing: 1.5px;
font-size: 18px;
padding: 16.5px 0;
border: 1px solid transparent;
border-radius: 4px;

&:hover{
    background-color: #0483ee;
}
@media only screen and (max-width: 640px) { /* adjust styling for screen width 384px */
        font-size: 14px; /* reduce font size */
        padding: 12px 0; /* reduce padding */
    }
`;

const Description = styled.p`
color: hsla(0,0%,95.3%, 1);
font-size: 11px;
margin: 0 0 24px;
line-height: 1.5;
letter-spacing: 1.5px;
@media only screen and (max-width: 640px) { /* adjust styling for screen width 384px */
        font-size: 10px; /* reduce font size */
        margin: 0 0 16px; /* reduce margin */
    }
`;

const CTALogoTwo = styled.img`
max-width: 600px;
margin-bottom: 20px;
display: inline-block;
vertical-align: bottom: 
width: 100%;
overflow: hidden;
@media only screen and (max-width: 640px) { /* adjust styling for screen width 384px */
        max-width: 250px; /* reduce logo width */
        margin-bottom: 10px; /* reduce margin */
    }

`;
export default Login;