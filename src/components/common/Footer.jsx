import React from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../../images/company-logo.png";
import facebookIcon from "../../images/socials/facebook.svg";
import instagramIcon from "../../images/socials/instagram.svg";
import linkedInIcon from "../../images/socials/linkedin.svg";
import classes from "../../styles/footer.module.css";
import { useTranslation } from "react-i18next";

export default function FooterComponent() {  
  const { t } = useTranslation(); 
  return (
    <React.Fragment>
      <div className={classes.footerWrapper}>
        <div className={classes.footer}>
          <div className={classes.brand}>
            <img src={logo} alt="" />
            <ul className={classes.icons}>
              <h1>{t("footer.header-h1")}</h1>
              <div>
                <a href="">
                  <img src={facebookIcon} />
                </a>
                <a href="">
                  <img src={linkedInIcon} />
                </a>
                <a href="">
                  <img src={instagramIcon} />
                </a>
              </div>
            </ul>
          </div>
          <div className={classes.links}>
            <ul>
              <li>{t("footer.links-header")}</li>
              <li>                
                <Link to="/home">{t('footer.link_1')}</Link>
              </li>
              <li>
                <Link to="/about">{t('footer.link_2')}</Link>
              </li>
              <li>
                <Link to="/services">{t('footer.link_3')}</Link>
              </li>
              <li>
                <Link to="/contact">{t('footer.link_4')}</Link>
              </li>
              <li>
                <Link to="/careers">{t('footer.link_5')}</Link>
              </li>
              <li>
                <Link to="/contact">{t('footer.link_6')}</Link>
              </li>
            </ul>
          </div>
          <div className={classes.contact}>
            <ul>
              <li>{t('footer.contact-header')}</li>
              <li><strong>{t('footer.phone')}</strong>: (253) 719-8814</li>
              <li><strong>{t('footer.email')}</strong>: contact@skycitytrucking.com</li>             
              <li><strong>{t('footer.fax')}</strong>: 206.260.7200</li>             
              <li><strong>{t('footer.corp-office')}</strong>: <br/>5555 8th St E, Ste B, Fife, Wa 98424</li>
              <li><strong>{t('footer.ware-office')}</strong>: 4101 Industry Dr E, Suite I, Fife, WA 98424</li>
              <li><strong>{t('footer.hours-1')}</strong>{t('footer.hours-2')}</li>              
              <li>{t('footer.emergency-1')}<br/>{t('footer.emergency-2')}</li>              
            </ul>
          </div>
          <ul className={classes.icons}>
            <h1>{t('footer.header-h1')}</h1>
            <div>
              <a href="">
                <img src={facebookIcon} />
              </a>
              <a href="">
                <img src={linkedInIcon} />
              </a>
              <a href="">
                <img src={instagramIcon} />
              </a>
            </div>
          </ul>
        </div>
      </div>
      <div className={classes.copyright}>
        <span>
          {t('footer.copyright-1')}          
          <br />          
          {t('footer.copyright-2')}          
        </span>
      </div>
    </React.Fragment>
  );
}
