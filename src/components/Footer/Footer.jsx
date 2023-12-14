import { MainContainer } from 'components/App/App.styled';
import Logo from 'components/SharedHeader/Logo';
import Socials from 'components/SharedHeader/Socials';
import SubForm from './SubForm';
import {
  FooterSection,
  FooterPositioning,
  FormAndTitleWrap,
  FooterSocialsWrap,
  FooterTitle,
  FooterPolicyTabPosition,
  FooterPolicyWrap,
  FooterPolicyText,
} from './Footer.styled';

const Footer = () => {
  return (
    <FooterSection>
      <MainContainer>
        <FooterPositioning>
          <FooterSocialsWrap>
            <Logo variant="footer" />
            <Socials variant="footer" />
          </FooterSocialsWrap>

          <FormAndTitleWrap>
            <FooterTitle>
              Transforming your <span>body</span> shape with us
            </FooterTitle>
            <SubForm />
          </FormAndTitleWrap>
        </FooterPositioning>

        <FooterPolicyTabPosition>
          <FooterPolicyText>Your Energy. All rights reserved.</FooterPolicyText>
          <FooterPolicyWrap>
            <FooterPolicyText>
              Privacy Policy / Terms of Service
            </FooterPolicyText>
            <FooterPolicyText>©2023 </FooterPolicyText>
          </FooterPolicyWrap>
        </FooterPolicyTabPosition>
      </MainContainer>
    </FooterSection>
  );
};

export default Footer;
