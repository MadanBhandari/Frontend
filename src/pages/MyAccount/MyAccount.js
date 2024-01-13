import React, {useEffect} from "react";
import styles from "./MyAccount.module.css";
import { PageHeader } from "../../Components/PageHeader/PageHeader";
import { OrderIcon, UserIcon, LocationIcon, LogoutIcon } from "../../Components/siteIcons";
import { useApp } from '../../context/AppContextProvider';
import { enviroment } from "../../enviroment";
import { useNavigate } from "react-router-dom";
import { Footer } from "../../Components/Footer/Footer";
import { AppNotification } from "../../utils/helper";

export const MyAccount = () => {
    const appData = useApp();
    
    let userInfo = '';
    const isJSON = (str) => {
        try {
            JSON.stringify(JSON.parse(str));
            return true;
        } catch (e) {
            return false;
        }
    }

    if(isJSON(appData)){
        userInfo = JSON.parse(appData?.appData?.user);
    }else{
        userInfo = appData?.appData?.user;
        userInfo = JSON.parse(userInfo);
    }

    const navigate = useNavigate();

    const userLoggedOut = () => {
        appData.setAppData({ ...appData.appData, user: '', loggedIn: false });
        localStorage.removeItem('user');
        localStorage.removeItem('loggedIn');
        AppNotification('Logged Out', 'You have been successfully logged out.', 'success');
        navigate('/');
    }

    useEffect(() => {
        document.title = enviroment.BUSINESS_NAME+' - My Account';
    }, []);
    return (
        <React.Fragment>
            <PageHeader title="My Account" />
            <div className="d-inline-flex col-12 p-3 flex-column gap-3">
                <div className={`${styles.loginBox} d-inline-flex align-items-center col-12 gap-2 p-3`}>
                    <div className={`${styles.loginImage} d-inline-flex flex-shrink-0 align-items-center justify-content-center`}>
                        <UserIcon color="#000" />
                    </div>
                    <div className="d-inline-flex flex-column flex-grow-1">
                        {userInfo?.name && <h5 className={`${styles.profileName} col-12 d-inline-block mb-0`}>{userInfo?.name}</h5>}
                        <span className={`${styles.profileNumber} col-12 d-inline-block`}>+91- {userInfo?.contact}</span>
                        <span className={`${styles.profileEmail} col-12 d-inline-block`}></span>
                    </div>
                </div>
                <div className={`${styles.loginBox} d-inline-flex flex-column col-12 gap-2 py-4 p-3`}>
                    <div className={`${styles.accountRow} col-12 d-inline-flex align-items-center gap-2`} onClick={() => navigate('/my-orders')}>
                        <span className={`${styles.accountIcon} d-inline-flex flex-shrink-0 align-items-center justify-content-center`}>
                            <OrderIcon color="#454545"/>
                        </span>
                        <h6 className={`${styles.accountLabel} d-inline-flex m-0`}>My Orders</h6>
                    </div>
                    <div className={`${styles.accountRow} col-12 d-inline-flex align-items-center gap-2`} onClick={() => navigate('/my-address')}>
                        <span className={`${styles.accountIcon} d-inline-flex flex-shrink-0 align-items-center justify-content-center`}>
                            <LocationIcon color="#454545" />
                        </span>
                        <h6 className={`${styles.accountLabel} d-inline-flex m-0`}>Delivery Address</h6>
                    </div>
                    {/* <div className={`${styles.accountRow} col-12 d-inline-flex align-items-center gap-2`}>
                        <span className={`${styles.accountIcon} d-inline-flex flex-shrink-0 align-items-center justify-content-center`}>
                            <ServiceIcon color="#454545" />
                        </span>
                        <h6 className={`${styles.accountLabel} d-inline-flex m-0`}>Customer Service</h6>
                    </div>
                    <div className={`${styles.accountRow} col-12 d-inline-flex align-items-center gap-2`}>
                        <span className={`${styles.accountIcon} d-inline-flex flex-shrink-0 align-items-center justify-content-center`}>
                            <NotificationIcon color="#454545" />
                        </span>
                        <h6 className={`${styles.accountLabel} d-inline-flex m-0`}>Notification</h6>
                    </div> */}
                    <div className={`${styles.accountRow} ${styles.LoggedOutRow} col-12 d-inline-flex align-items-center gap-2`} role="button" onClick={() => userLoggedOut()}>
                        <span className={`${styles.accountIcon} d-inline-flex flex-shrink-0 align-items-center justify-content-center`}>
                            <LogoutIcon color="var(--PRIMARY_COLOR)" />
                        </span>
                        <h6 className={`${styles.accountLabel} d-inline-flex m-0`}>Logout</h6>
                    </div>
                </div>
            </div>
            <Footer />
        </React.Fragment>
    )
}