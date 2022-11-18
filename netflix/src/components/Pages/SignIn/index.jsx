import React from "react";
import { Image } from "../../atoms";
import { LandingFooter } from "../../molecules";
import { SignInDiv } from "../../organisms";
import { PageTemplate } from "../../templates/PageTemplate";
import signinBg from '../../../assets/signin-bg.jpg';
import { NavLeft } from "../../molecules/LandingNavbar/app";
import logo from "../../../assets/Logonetflix.png";




const signinMainStyle ={
    backgroundImage:`linear-gradient(to bottom, #00000090 , #00000070),url(${signinBg})`,
    backgroundCover: 'cover'

}

export const SignIn = () => {
    return (
        <PageTemplate
        header={
          <>
            
          </>
        }
        footer={
          <>
            <LandingFooter />
          </>
        }
      >
        
            <main className="signin-page-bg">
              <section style={signinMainStyle} >
                <div className="signin-page-bg"></div>
                <NavLeft>
                  <Image src={logo} alt="logo" className="signin-logo" />
                </NavLeft>
                <SignInDiv />
              </section>
            </main>

       

      </PageTemplate>
    )
}; 