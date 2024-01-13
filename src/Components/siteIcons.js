import React from "react";

export const MenuIcons = ({color}) => {
    return (
        <React.Fragment>
            <svg viewBox="0 0 464.205 464.205"><path d="M435.192 406.18H29.013C12.989 406.18 0 393.19 0 377.167s12.989-29.013 29.013-29.013h406.18c16.023 0 29.013 12.99 29.013 29.013-.001 16.023-12.99 29.013-29.014 29.013zM435.192 261.115H29.013C12.989 261.115 0 248.126 0 232.103s12.989-29.013 29.013-29.013h406.18c16.023 0 29.013 12.989 29.013 29.013s-12.99 29.012-29.014 29.012zM435.192 116.051H29.013C12.989 116.051 0 103.062 0 87.038s12.989-29.013 29.013-29.013h406.18c16.023 0 29.013 12.989 29.013 29.013s-12.99 29.013-29.014 29.013z" fill={color}></path></svg>
        </React.Fragment>
    )
}

export const CartIcon = ({color}) => {
    return (
        <React.Fragment>
            <svg viewBox="0 0 511.997 511.997"><path d="M405.387 362.612c-35.202 0-63.84 28.639-63.84 63.84s28.639 63.84 63.84 63.84 63.84-28.639 63.84-63.84-28.639-63.84-63.84-63.84zm0 89.376c-14.083 0-25.536-11.453-25.536-25.536s11.453-25.536 25.536-25.536c14.083 0 25.536 11.453 25.536 25.536s-11.453 25.536-25.536 25.536zM507.927 115.875a19.128 19.128 0 0 0-15.079-7.348H118.22l-17.237-72.12a19.16 19.16 0 0 0-18.629-14.702H19.152C8.574 21.704 0 30.278 0 40.856s8.574 19.152 19.152 19.152h48.085l62.244 260.443a19.153 19.153 0 0 0 18.629 14.702h298.135c8.804 0 16.477-6.001 18.59-14.543l46.604-188.329a19.185 19.185 0 0 0-3.512-16.406zM431.261 296.85H163.227l-35.853-150.019h341.003L431.261 296.85zM173.646 362.612c-35.202 0-63.84 28.639-63.84 63.84s28.639 63.84 63.84 63.84 63.84-28.639 63.84-63.84-28.639-63.84-63.84-63.84zm0 89.376c-14.083 0-25.536-11.453-25.536-25.536s11.453-25.536 25.536-25.536 25.536 11.453 25.536 25.536-11.453 25.536-25.536 25.536z" fill={color}/></svg>
        </React.Fragment>
    )
}

export const PhoneIcon = () => {
    return (
        <React.Fragment>
            <svg aria-hidden="true" focusable="false" role="presentation" className="icon icon-phone" viewBox="0 0 64 64"><path className="cls-1" d="M16.57 5l12.32 12.33L21.26 25c2.53 8.5 8.32 15 18.78 18.78l7.63-7.63L60 48.43 49.43 59C25.4 54.11 11.05 39.5 6 15.57z"></path></svg>
        </React.Fragment>
    )
}

export const EmailIcon = ({color}) => {
    return (
        <React.Fragment>
            <svg viewBox="0 0 512 512"><path d="M467 76H45C20.137 76 0 96.262 0 121v270c0 24.885 20.285 45 45 45h422c24.655 0 45-20.03 45-45V121c0-24.694-20.057-45-45-45zm-6.302 30L287.82 277.967c-8.5 8.5-19.8 13.18-31.82 13.18s-23.32-4.681-31.848-13.208L51.302 106h409.396zM30 384.894V127.125L159.638 256.08 30 384.894zM51.321 406l129.587-128.763 22.059 21.943c14.166 14.166 33 21.967 53.033 21.967s38.867-7.801 53.005-21.939l22.087-21.971L460.679 406H51.321zM482 384.894 352.362 256.08 482 127.125v257.769z" fill={color}/></svg>
        </React.Fragment>
    )
}

export const InstagramIcon = ({color}) => {
    return (
        <React.Fragment>
            <svg className="icon icon-instagram" viewBox="0 0 32 32"><path fill={color} d="M16 3.094c4.206 0 4.7.019 6.363.094 1.538.069 2.369.325 2.925.544.738.287 1.262.625 1.813 1.175s.894 1.075 1.175 1.813c.212.556.475 1.387.544 2.925.075 1.662.094 2.156.094 6.363s-.019 4.7-.094 6.363c-.069 1.538-.325 2.369-.544 2.925-.288.738-.625 1.262-1.175 1.813s-1.075.894-1.813 1.175c-.556.212-1.387.475-2.925.544-1.663.075-2.156.094-6.363.094s-4.7-.019-6.363-.094c-1.537-.069-2.369-.325-2.925-.544-.737-.288-1.263-.625-1.813-1.175s-.894-1.075-1.175-1.813c-.212-.556-.475-1.387-.544-2.925-.075-1.663-.094-2.156-.094-6.363s.019-4.7.094-6.363c.069-1.537.325-2.369.544-2.925.287-.737.625-1.263 1.175-1.813s1.075-.894 1.813-1.175c.556-.212 1.388-.475 2.925-.544 1.662-.081 2.156-.094 6.363-.094zm0-2.838c-4.275 0-4.813.019-6.494.094-1.675.075-2.819.344-3.819.731-1.037.4-1.913.944-2.788 1.819S1.486 4.656 1.08 5.688c-.387 1-.656 2.144-.731 3.825-.075 1.675-.094 2.213-.094 6.488s.019 4.813.094 6.494c.075 1.675.344 2.819.731 3.825.4 1.038.944 1.913 1.819 2.788s1.756 1.413 2.788 1.819c1 .387 2.144.656 3.825.731s2.213.094 6.494.094 4.813-.019 6.494-.094c1.675-.075 2.819-.344 3.825-.731 1.038-.4 1.913-.944 2.788-1.819s1.413-1.756 1.819-2.788c.387-1 .656-2.144.731-3.825s.094-2.212.094-6.494-.019-4.813-.094-6.494c-.075-1.675-.344-2.819-.731-3.825-.4-1.038-.944-1.913-1.819-2.788s-1.756-1.413-2.788-1.819c-1-.387-2.144-.656-3.825-.731C20.812.275 20.275.256 16 .256z"></path><path fill={color} d="M16 7.912a8.088 8.088 0 0 0 0 16.175c4.463 0 8.087-3.625 8.087-8.088s-3.625-8.088-8.088-8.088zm0 13.338a5.25 5.25 0 1 1 0-10.5 5.25 5.25 0 1 1 0 10.5zM26.294 7.594a1.887 1.887 0 1 1-3.774.002 1.887 1.887 0 0 1 3.774-.003z"></path></svg>
        </React.Fragment>
    )
}

export const FacebookIcon = ({color}) => {
    return (
        <React.Fragment>
            <svg className="icon icon-facebook" viewBox="0 0 32 32"><path fill={color} d="M18.56 31.36V17.28h4.48l.64-5.12h-5.12v-3.2c0-1.28.64-2.56 2.56-2.56h2.56V1.28H19.2c-3.84 0-7.04 2.56-7.04 7.04v3.84H7.68v5.12h4.48v14.08h6.4z"></path></svg>
        </React.Fragment>
    )
}

export const TwitterIcon = ({color}) => {
    return (
        <React.Fragment>
            <svg className="icon icon-twitter" viewBox="0 0 32 32"><path fill={color} d="M31.281 6.733q-1.304 1.924-3.13 3.26 0 .13.033.408t.033.408q0 2.543-.75 5.086t-2.282 4.858-3.635 4.108-5.053 2.869-6.341 1.076q-5.282 0-9.65-2.836.913.065 1.5.065 4.401 0 7.857-2.673-2.054-.033-3.668-1.255t-2.266-3.146q.554.13 1.206.13.88 0 1.663-.261-2.184-.456-3.619-2.184t-1.435-3.977v-.065q1.239.652 2.836.717-1.271-.848-2.021-2.233t-.75-2.983q0-1.63.815-3.195 2.38 2.967 5.754 4.678t7.319 1.907q-.228-.815-.228-1.434 0-2.608 1.858-4.45t4.532-1.842q1.304 0 2.51.522t2.054 1.467q2.152-.424 4.01-1.532-.685 2.217-2.771 3.488 1.989-.261 3.619-.978z"></path></svg>
        </React.Fragment>
    )
}

export const LinkedInIcon = ({color}) => {
    return (
        <React.Fragment>
            <svg className="icon icon-linkedin" viewBox="0 0 24 24" fill={color}><path d="M4.98 3.5C4.98 4.881 3.87 6 2.5 6S.02 4.881.02 3.5C.02 2.12 1.13 1 2.5 1s2.48 1.12 2.48 2.5zM5 8H0v16h5V8zm7.982 0H8.014v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0V24H24V13.869c0-7.88-8.922-7.593-11.018-3.714V8z"></path></svg>
        </React.Fragment>
    )
}

export const BackArrowIcon = ({color}) => {
    return (
        <React.Fragment>
            <svg viewBox="0 0 240.823 240.823"><path d="M57.633 129.007 165.93 237.268c4.752 4.74 12.451 4.74 17.215 0 4.752-4.74 4.752-12.439 0-17.179l-99.707-99.671 99.695-99.671c4.752-4.74 4.752-12.439 0-17.191-4.752-4.74-12.463-4.74-17.215 0L57.621 111.816c-4.679 4.691-4.679 12.511.012 17.191z" fill={color} /></svg>
        </React.Fragment>
    )
}

export const SearchIcon = ({color}) => {
    return (
        <React.Fragment>
            <svg viewBox="0 0 56.966 56.966"><path d="M55.146 51.887 41.588 37.786A22.926 22.926 0 0 0 46.984 23c0-12.682-10.318-23-23-23s-23 10.318-23 23 10.318 23 23 23c4.761 0 9.298-1.436 13.177-4.162l13.661 14.208c.571.593 1.339.92 2.162.92.779 0 1.518-.297 2.079-.837a3.004 3.004 0 0 0 .083-4.242zM23.984 6c9.374 0 17 7.626 17 17s-7.626 17-17 17-17-7.626-17-17 7.626-17 17-17z" fill={color}/></svg>
        </React.Fragment>
    )
}

export const UserIcon = ({color}) => {
    return (
        <React.Fragment>
            <svg viewBox="0 0 32 32"><path d="M16 17a6 6 0 1 1 6-6 6 6 0 0 1-6 6zm0-10a4 4 0 1 0 4 4 4 4 0 0 0-4-4z" fill={color} /><path d="M16 31a15 15 0 0 1-11.59-5.49l-.52-.64.52-.63a15 15 0 0 1 23.18 0l.52.63-.52.64A15 15 0 0 1 16 31zm-9.49-6.12a13 13 0 0 0 19 0 13 13 0 0 0-19 0z" fill={color} /><path d="M16 31a15 15 0 1 1 11.59-5.49A15 15 0 0 1 16 31zm0-28a13 13 0 1 0 13 13A13 13 0 0 0 16 3z" fill={color} /><path d="M5.18 24.88S15.25 36.13 25.5 26l1.32-1.12S18.26 16 9.57 21.33z" fill={color} /><circle cx="16" cy="11" r="5" fill={color} opacity="1" data-original={color} ></circle></svg>
        </React.Fragment>
    )
}

export const OrderIcon = ({color}) => {
    return (
        <React.Fragment>
            <svg viewBox="0 0 682.667 682.667"><defs><clipPath id="a" clipPathUnits="userSpaceOnUse"><path d="M0 512h512V0H0Z" fill={color} opacity="1"/></clipPath></defs><g clipPath="url(#a)" transform="matrix(1.33333 0 0 -1.33333 0 682.667)"><path d="M0 0h62l89.96-329.854" style={{strokeWidth:'30',strokeLinecap:'round',strokeLinejoin:'round',strokeMiterlimit:'10',strokeDasharray:'none',strokeOpacity:'1'}} transform="translate(15 481)" fill="none" stroke={color} strokeWidth="30" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeDasharray="none"/><path d="m0 0 30 180h-387.272" style={{strokeWidth:'30',strokeLinecap:'round',strokeLinejoin:'round',strokeMiterlimit:'10',strokeDasharray:'none',strokeOpacity:'1'}} transform="translate(467 181)" fill="none" stroke={color} strokeWidth="30" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeDasharray="none"/><path d="M0 0c0-16.569-13.432-30-30-30-16.568 0-30 13.431-30 30 0 16.569 13.432 30 30 30C-13.432 30 0 16.569 0 0Z" style={{strokeWidth:'30',strokeLinecap:'round',strokeLinejoin:'round',strokeMiterlimit:'10',strokeDasharray:'none',strokeOpacity:'1'}} transform="translate(437 61)" fill="none" stroke={color} strokeWidth="30" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeDasharray="none"/><path d="M0 0c0-16.569-13.432-30-30-30-16.568 0-30 13.431-30 30 0 16.569 13.432 30 30 30C-13.432 30 0 16.569 0 0Z" style={{strokeWidth:'30',strokeLinecap:'round',strokeLinejoin:'round',strokeMiterlimit:'10',strokeDasharray:'none',strokeOpacity:'1'}} transform="translate(227 61)" fill="none" stroke={color} strokeWidth="30" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeDasharray="none"/><path d="M0 0h240M0 0c-16.568 0-30 13.431-30 30 0 15.554 11.837 28.343 26.993 29.851" style={{strokeWidth:'30',strokeLinecap:'round',strokeLinejoin:'round',strokeMiterlimit:'10',strokeDasharray:'none',strokeOpacity:'1'}} transform="translate(167 91)" fill="none" stroke={color} strokeWidth="30" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeDasharray="none"/><path d="m0 0-303.007-30.149" style={{strokeWidth:'30',strokeLinecap:'round',strokeLinejoin:'round',strokeMiterlimit:'10',strokeDasharray:'none',strokeOpacity:'1'}} transform="translate(467 181)" fill="none" stroke={color} strokeWidth="30" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeDasharray="none"/><path d="M0 0v60h150" style={{strokeWidth:'30',strokeLinecap:'round',strokeLinejoin:'round',strokeMiterlimit:'10',strokeDasharray:'none',strokeOpacity:'1'}} transform="translate(167 361)" fill="none" stroke={color} strokeWidth="30" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeDasharray="none"/><path d="M0 0v90h120V0" style={{strokeWidth:'30',strokeLinecap:'round',strokeLinejoin:'round',strokeMiterlimit:'10',strokeDasharray:'none',strokeOpacity:'1'}} transform="translate(317 361)" fill="none" stroke={color} strokeWidth="30" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeDasharray="none"/><path d="m0 0 30-30" style={{strokeWidth:'30',strokeLinecap:'round',strokeLinejoin:'round',strokeMiterlimit:'10',strokeDasharray:'none',strokeOpacity:'1'}} transform="translate(347 481)" fill="none" stroke={color} strokeWidth="30" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeDasharray="none"/><path d="m0 0 30 30" style={{strokeWidth:'30',strokeLinecap:'round',strokeLinejoin:'round',strokeMiterlimit:'10',strokeDasharray:'none',strokeOpacity:'1'}} transform="translate(377 451)" fill="none" stroke={color} strokeWidth="30" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeDasharray="none"/><path d="M0 0v-60" style={{strokeWidth:'30',strokeLinecap:'round',strokeLinejoin:'round',strokeMiterlimit:'10',strokeDasharray:'none',strokeOpacity:'1'}} transform="translate(317 301)" fill="none" stroke={color} strokeWidth="30" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeDasharray="none"/><path d="M0 0v-60" style={{strokeWidth:'30',strokeLinecap:'round',strokeLinejoin:'round',strokeMiterlimit:'10',strokeDasharray:'none',strokeOpacity:'1'}} transform="translate(407 301)" fill="none" stroke={color} strokeWidth="30" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeDasharray="none"/><path d="M0 0v-60" style={{strokeWidth:'30',strokeLinecap:'round',strokeLinejoin:'round',strokeMiterlimit:'10',strokeDasharray:'none',strokeOpacity:'1'}} transform="translate(227 301)" fill="none" stroke={color} strokeWidth="30" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeDasharray="none"/></g></svg>
        </React.Fragment>
    )
}

export const LocationIcon = ({color}) => {
    return (
        <React.Fragment>
            <svg viewBox="0 0 512 512"><path d="M256 4C147.925 4 60 91.925 60 200c0 52.5 31.807 119.92 94.537 200.378a1065.816 1065.816 0 0 0 93.169 104.294 12 12 0 0 0 16.588 0 1065.816 1065.816 0 0 0 93.169-104.294C420.193 319.92 452 252.5 452 200 452 91.925 364.075 4 256 4Zm0 475.111C220.581 443.408 84 299.268 84 200c0-94.841 77.159-172 172-172s172 77.159 172 172c0 99.268-136.581 243.408-172 279.111Z" fill={color}/><path d="M256 60c-77.2 0-140 62.8-140 140s62.8 140 140 140 140-62.8 140-140S333.2 60 256 60Zm0 256a116 116 0 1 1 116-116 116.132 116.132 0 0 1-116 116Z" fill={color}/><path d="m352.072 183.121-88-80a12 12 0 0 0-16.144 0l-88 80A12 12 0 0 0 168 204h12v60a12 12 0 0 0 12 12h44a12 12 0 0 0 12-12v-36h16v36a12 12 0 0 0 12 12h44a12 12 0 0 0 12-12v-60h12a12 12 0 0 0 8.072-20.879ZM308 192v60h-20v-36a12 12 0 0 0-12-12h-40a12 12 0 0 0-12 12v36h-20v-60a12 12 0 0 0-6.453-10.644L256 128.217l58.453 53.139A12 12 0 0 0 308 192Z" fill={color}/></svg>
        </React.Fragment>
    )
}

export const ServiceIcon = ({color}) => {
    return (
        <React.Fragment>
            <svg viewBox="0 0 512 512"><path d="M366 396c-5.52 0-10 4.48-10 10s4.48 10 10 10 10-4.48 10-10-4.48-10-10-10z" fill={color}/><path d="m390.622 363.663-47.53-15.84-17.063-34.127c15.372-15.646 26.045-36.348 29.644-57.941L357.801 243H376c16.542 0 30-13.458 30-30v-63C406 67.29 338.71 0 256 0c-82.922 0-150 67.097-150 150v63c0 13.036 8.361 24.152 20 28.28V253c0 16.542 13.458 30 30 30h8.782a108.487 108.487 0 0 0 16.774 25.974 103.947 103.947 0 0 0 4.406 4.741l-17.054 34.108-47.531 15.841C66.112 382.092 26 440.271 26 502c0 5.523 4.477 10 10 10h440c5.522 0 10-4.477 10-10 0-61.729-40.111-119.908-95.378-138.337zM386 213c0 5.514-4.486 10-10 10h-15.262c2.542-19.69 4.236-40.643 4.917-61.28.02-.582.036-1.148.054-1.72H386v53zm-250 10c-5.514 0-10-4.486-10-10v-53h20.298c.033 1.043.068 2.091.107 3.146l.004.107v.009c.7 20.072 2.372 40.481 4.856 59.737H136V223zm20 40c-5.514 0-10-4.486-10-10v-10h8.198l2.128 12.759a105.57 105.57 0 0 0 1.482 7.241H156zm-9.983-123H126.38C131.445 72.979 187.377 20 256 20c68.318 0 124.496 52.972 129.619 120h-19.635c-.72-55.227-45.693-100-101.033-100h-17.9c-55.339 0-100.315 44.773-101.034 100zM247.05 60h17.9c44.809 0 81.076 36.651 81.05 81.41 0 3.147-.025 5.887-.078 8.38l-.001.098-12.508-1.787c-33.98-4.852-66.064-20.894-90.342-45.172A10.003 10.003 0 0 0 236 100c-26.856 0-52.564 12.236-69.558 32.908C170.63 92.189 205.053 60 247.05 60zm-68.51 203c-5.006-16.653-10.734-65.653-12-97.053l13.459-17.946c12.361-16.476 31.592-26.713 52.049-27.888 26.917 25.616 61.739 42.532 98.537 47.786l14.722 2.104c-.984 20.885-2.995 41.843-5.876 61.118l-.003.02c-.916 6.197-1.638 10.185-3.482 21.324-5.296 31.765-28.998 60.49-60.287 68.313a81.338 81.338 0 0 1-39.313 0c-19.537-4.884-37.451-18.402-49.012-37.778h20.386c4.128 11.639 15.243 20 28.28 20h20c16.575 0 30-13.424 30-30 0-16.542-13.458-30-30-30h-20c-13.327 0-24.278 8.608-28.297 20H178.54zm56.619 78.016A101.171 101.171 0 0 0 256 343.2c5.471 0 10.943-.458 16.353-1.346l-17.67 18.687-19.524-19.525zm5.776 34.063-31.718 33.542a381.013 381.013 0 0 1-22.389-51.917l11.911-23.822 42.196 42.197zm70.631-45.585 13.604 27.209a380.908 380.908 0 0 1-22.392 51.933l-33.948-33.948 42.736-45.194zM226 273c0-5.521 4.478-10 10-10h20c5.514 0 10 4.486 10 10 0 5.522-4.479 10-10 10h-20c-5.514 0-10-4.486-10-10zM46.4 492c3.963-49.539 36.932-94.567 81.302-109.363l42.094-14.028a400.869 400.869 0 0 0 28.463 61.74l.056.101.001.002a400.974 400.974 0 0 0 27.372 41.799L237.99 492H46.4zm209.6-8.914-13.562-21.773a10.133 10.133 0 0 0-.486-.711 381.284 381.284 0 0 1-22.532-33.662l35.663-37.714 37.578 37.578A380.863 380.863 0 0 1 270.05 460.6c-.49.653.205-.376-14.05 22.486zM274.01 492l12.301-19.748a400.826 400.826 0 0 0 27.564-42.132c.05-.088.097-.178.147-.266l.018-.032a400.543 400.543 0 0 0 28.164-61.213l42.093 14.028c44.371 14.796 77.34 59.824 81.303 109.363H274.01z" fill={color}/><path d="M435.546 451.531c-6.683-13.377-16.472-25.261-28.309-34.367-4.378-3.369-10.656-2.55-14.023 1.828-3.368 4.378-2.549 10.656 1.828 14.024 9.454 7.273 17.272 16.766 22.611 27.453 2.473 4.949 8.483 6.941 13.415 4.477 4.94-2.468 6.945-8.474 4.478-13.415z" fill={color}/></svg>
        </React.Fragment>
    )
}

export const NotificationIcon = ({color}) => {
    return (
        <React.Fragment>
            <svg viewBox="0 0 512 512"><path d="M411 262.862V215c0-69.822-46.411-129.001-110-148.33V45c0-24.813-20.187-45-45-45s-45 20.187-45 45v21.67C147.41 85.999 101 145.177 101 215v47.862c0 61.332-23.378 119.488-65.827 163.756A14.999 14.999 0 0 0 46 452h136.509c6.968 34.192 37.272 60 73.491 60 36.22 0 66.522-25.808 73.491-60H466a15 15 0 0 0 10.827-25.382C434.378 382.35 411 324.193 411 262.862zM241 45c0-8.271 6.729-15 15-15s15 6.729 15 15v15.728c-4.937-.476-9.94-.728-15-.728s-10.063.252-15 .728zm15 437c-19.555 0-36.228-12.541-42.42-30h84.84c-6.192 17.459-22.865 30-42.42 30zM78.33 422C112.491 376.208 131 320.792 131 262.862V215c0-68.925 56.075-125 125-125s125 56.075 125 125v47.862c0 57.93 18.509 113.346 52.671 159.138zM451 215c0 8.284 6.716 15 15 15s15-6.716 15-15c0-60.1-23.404-116.603-65.901-159.1-5.857-5.857-15.355-5.858-21.213 0s-5.858 15.355 0 21.213C430.717 113.944 451 162.913 451 215zM46 230c8.284 0 15-6.716 15-15 0-52.086 20.284-101.055 57.114-137.886 5.858-5.858 5.858-15.355 0-21.213-5.857-5.858-15.355-5.858-21.213 0C54.404 98.398 31 154.9 31 215c0 8.284 6.716 15 15 15z" fill={color}/></svg>
        </React.Fragment>
    )
}

export const LogoutIcon = ({color}) => {
    return (
        <svg viewBox="0 0 512.005 512"><path d="M320 277.336c-11.797 0-21.332 9.559-21.332 21.332v85.336c0 11.754-9.559 21.332-21.336 21.332h-64v-320c0-18.219-11.605-34.496-29.055-40.555l-6.316-2.113h99.371c11.777 0 21.336 9.578 21.336 21.336v64c0 11.773 9.535 21.332 21.332 21.332s21.332-9.559 21.332-21.332v-64c0-35.285-28.715-64-64-64H48c-.812 0-1.492.363-2.281.469-1.028-.086-2.008-.47-3.051-.47C19.137.004 0 19.138 0 42.669v384c0 18.219 11.605 34.496 29.055 40.555L157.44 510.02c4.352 1.343 8.68 1.984 13.227 1.984 23.531 0 42.664-19.137 42.664-42.668v-21.332h64c35.285 0 64-28.715 64-64v-85.336c0-11.773-9.535-21.332-21.332-21.332zm0 0" fill={color}/><path d="m505.75 198.254-85.336-85.332a21.33 21.33 0 0 0-23.25-4.633C389.207 111.598 384 119.383 384 128.004v64h-85.332c-11.777 0-21.336 9.555-21.336 21.332 0 11.777 9.559 21.332 21.336 21.332H384v64c0 8.621 5.207 16.406 13.164 19.715a21.335 21.335 0 0 0 23.25-4.63l85.336-85.335c8.34-8.34 8.34-21.824 0-30.164zm0 0" fill={color}/></svg>
    )
}

export const SupportIcon = ({color}) => {
    return (
        <svg viewBox="0 0 32 32"><path d="M22.005 23.914c.417.685.542 1.49.352 2.269a2.982 2.982 0 0 1-1.356 1.854l-2.484 1.512a2.979 2.979 0 0 1-1.551.436c-.484 0-.972-.117-1.425-.353-5.216-2.705-8.194-6.722-9.505-8.875C3.131 15.985 2.521 11.283 2.52 8.18c0-1.046.538-2 1.44-2.55l2.485-1.512a2.975 2.975 0 0 1 2.269-.352c.778.189 1.437.67 1.853 1.355l1.56 2.562a3.004 3.004 0 0 1-1.003 4.123l-1.287.783c-.386.235-.574.707-.445 1.121a17.51 17.51 0 0 0 4.44 7.298.984.984 0 0 0 1.205.124l1.286-.783a3.003 3.003 0 0 1 4.123 1.002l1.56 2.563zm-5.916-12.02a4.005 4.005 0 0 1 3.343 4.563 1 1 0 1 0 1.977.305 6.007 6.007 0 0 0-5.014-6.845 1 1 0 0 0-.306 1.976zm.915-5.93a1.001 1.001 0 0 0-.305 1.977c2.112.326 3.97 1.455 5.233 3.179s1.779 3.836 1.453 5.948a1.001 1.001 0 0 0 1.977.305c.408-2.64-.237-5.28-1.816-7.435s-3.902-3.565-6.542-3.973zm.61-3.953a1.003 1.003 0 0 0-1.141.836c-.084.545.29 1.056.836 1.141 6.539 1.009 11.038 7.15 10.029 13.69a1.001 1.001 0 0 0 1.977.305c1.178-7.629-4.071-14.793-11.701-15.971z" fill={color}/></svg>
    )
}

export const MailIcon = ({color}) => {
    return (
        <svg viewBox="0 0 512 512"><path d="M467 76H45C20.137 76 0 96.262 0 121v270c0 24.885 20.285 45 45 45h422c24.655 0 45-20.03 45-45V121c0-24.694-20.057-45-45-45zm-6.302 30L287.82 277.967c-8.5 8.5-19.8 13.18-31.82 13.18s-23.32-4.681-31.848-13.208L51.302 106h409.396zM30 384.894V127.125L159.638 256.08 30 384.894zM51.321 406l129.587-128.763 22.059 21.943c14.166 14.166 33 21.967 53.033 21.967s38.867-7.801 53.005-21.939l22.087-21.971L460.679 406H51.321zM482 384.894 352.362 256.08 482 127.125v257.769z" fill={color}/></svg>
    )
}

export const YoutubeIcon = ({color}) => {
    return (
        <React.Fragment>
            <svg viewBox="0 0 461.001 461.001"><path d="M365.257 67.393H95.744C42.866 67.393 0 110.259 0 163.137v134.728c0 52.878 42.866 95.744 95.744 95.744h269.513c52.878 0 95.744-42.866 95.744-95.744V163.137c0-52.878-42.866-95.744-95.744-95.744zm-64.751 169.663-126.06 60.123c-3.359 1.602-7.239-.847-7.239-4.568V168.607c0-3.774 3.982-6.22 7.348-4.514l126.06 63.881c3.748 1.899 3.683 7.274-.109 9.082z" fill={color}/></svg>
        </React.Fragment>
    )
}

export const TruckIcon = () => {
    return (
        <React.Fragment>
            <svg viewBox="0 0 64 64"><path d="m56 29h-15a1 1 0 0 0 -1 1v13a1 1 0 0 0 1 1h17a1 1 0 0 0 1-1v-11a3.0033 3.0033 0 0 0 -3-3z" fill="#26a6fe" data-original="#26a6fe"></path><path d="m56.9487 29.6836-3.5439-10.6323a2.9967 2.9967 0 0 0 -2.8462-2.0513h-9.5586a1 1 0 0 0 -1 1v12a1 1 0 0 0 1 1h15a1.007 1.007 0 0 0 .9487-1.3164z" fill="#26a6fe" data-original="#26a6fe"></path><path d="m52.9487 26.6836-2-6a1 1 0 0 0 -.9487-.6836h-6a1 1 0 0 0 -1 1v6a1 1 0 0 0 1 1h8a1.0071 1.0071 0 0 0 .9487-1.3164z" fill="#eeeeee" data-original="#eeeeee"></path><path d="m55.5 34c-3.2421-.0453-3.2436 5.0449 0 5h3.5v-5z" fill="#ffd54f" data-original="#ffd54f" ></path><path d="m39 14h-31a3.0033 3.0033 0 0 0 -3 3v21h37v-21a3.0033 3.0033 0 0 0 -3-3z" fill="#ffd54f" data-original="#ffd54f" ></path><path d="m31.0007 19.0005c-9.3028-.0646-9.3652 14.1149-.0007 13.9995 9.3646.1166 9.302-14.0629.0007-13.9995z" fill="#ffa000" data-original="#ffa000"></path><path d="m40 36h-35v7a1 1 0 0 0 1 1h35a1 1 0 0 0 1-1v-7z" fill="#26a6fe" data-original="#26a6fe"></path><path d="m59.5 42h-55c-3.2421-.0453-3.2436 5.0449 0 5h55c3.2421.0453 3.2436-5.0449 0-5z" fill="#67676b" data-original="#67676b"></path><path d="m50.5005 39.0007c-7.3338-.1-7.3338 11.0975 0 10.9986 7.3329.0998 7.3328-11.0975 0-10.9986z" fill="#46464e" data-original="#46464e"></path><path d="m13.5005 39.0007c-7.3338-.1-7.3338 11.0975 0 10.9986 7.3329.0998 7.3328-11.0975 0-10.9986z" fill="#46464e" data-original="#46464e"></path><g fill="#eee"><path d="m13.5 42c-3.3408-.0469-3.3263 5.0492 0 4.9992 3.3406.0473 3.326-5.0492 0-4.9992z" fill="#eeeeee" data-original="#eeeeee"></path><path d="m50.5 42c-3.3408-.0469-3.3263 5.0492 0 4.9992 3.3406.0473 3.326-5.0492 0-4.9992z" fill="#eeeeee" data-original="#eeeeee"></path><path d="m32 28a.9967.9967 0 0 1 -.707-.293l-1-1a1 1 0 0 1 -.293-.707v-3a1 1 0 0 1 2 0v2.5859l.707.7071a1.0066 1.0066 0 0 1 -.707 1.707z" fill="#eeeeee" data-original="#eeeeee"></path></g><g fill="#ffa000"><path d="m14 33h-11a1 1 0 0 1 0-2h11a1 1 0 0 1 0 2z" fill="#ffa000" data-original="#ffa000"></path><path d="m18 29h-13a1 1 0 0 1 0-2h13a1 1 0 0 1 0 2z" fill="#ffa000" data-original="#ffa000"></path><path d="m14 21h-11a1 1 0 0 1 0-2h11a1 1 0 0 1 0 2z" fill="#ffa000" data-original="#ffa000"></path><path d="m18 25h-13a1 1 0 0 1 0-2h13a1 1 0 0 1 0 2z" fill="#ffa000" data-original="#ffa000"></path></g></svg>
        </React.Fragment>
    )
}

export const LiveTrackIcon = () => {
    return (
        <React.Fragment>
            <svg viewBox="0 0 512 512"><path d="m149.107 57.558h107.716c4.144 0 7.503-3.357 7.503-7.5s-3.359-7.5-7.503-7.5h-107.716c-26.415 0-47.904 21.464-47.904 47.846v77.463l-6.272-6.269c-2.93-2.928-7.681-2.928-10.611 0-2.93 2.93-2.93 7.678 0 10.608l19.08 19.072c1.465 1.464 3.385 2.196 5.305 2.196s3.84-.732 5.305-2.196l19.08-19.072c2.93-2.93 2.93-7.678 0-10.608-2.93-2.928-7.681-2.928-10.611 0l-6.272 6.269v-77.463c.002-18.111 14.76-32.846 32.9-32.846z" fill="#68c044" data-original="#68c044"></path><path d="m413.39 313.833-19.08-19.072c-2.93-2.928-7.681-2.928-10.611 0l-19.08 19.072c-2.93 2.93-2.93 7.678 0 10.608 2.93 2.928 7.681 2.928 10.611 0l6.272-6.269v109.464c0 18.112-14.758 32.846-32.898 32.846h-115.727c-4.144 0-7.503 3.357-7.503 7.5s3.359 7.5 7.503 7.5h115.727c26.414 0 47.904-21.464 47.904-47.846v-109.464l6.272 6.269c1.465 1.464 3.385 2.196 5.305 2.196s3.84-.732 5.305-2.196c2.931-2.93 2.931-7.678 0-10.608z" fill="#ed2061" data-original="#ed2061"></path><path d="m205.233 249.287v226.263c0 20.1-16.357 36.45-36.465 36.45h-132.303c-20.108 0-36.465-16.35-36.465-36.45v-226.263c0-20.09 16.357-36.44 36.465-36.44h132.304c20.108 0 36.464 16.35 36.464 36.44z" fill="#56788b" data-original="#56788b"></path><path d="m205.233 249.287v226.263c0 20.1-16.357 36.45-36.465 36.45h-132.303c-20.108 0-36.465-16.35-36.465-36.45v-31.08c0 20.1 16.357 36.45 36.465 36.45h102.211c20.108 0 36.465-16.35 36.465-36.45v-195.183c0-20.09-16.357-36.44-36.465-36.44h30.092c20.109 0 36.465 16.35 36.465 36.44z" fill="#415e6f" data-original="#415e6f"></path><path d="m175.141 251.417v222.003c0 4.14-3.351 7.5-7.503 7.5h-130.053c-4.142 0-7.503-3.36-7.503-7.5v-222.003c0-4.14 3.361-7.5 7.503-7.5h22.289c4.152 0 7.503 3.36 7.503 7.5s3.371 7.5 7.503 7.5h54.022c4.142 0 7.503-3.36 7.503-7.5s3.361-7.5 7.503-7.5h23.73c4.152 0 7.503 3.36 7.503 7.5z" fill="#fdeda5" data-original="#fdeda5"></path><path d="m175.141 251.417v222.003c0 4.14-3.351 7.5-7.503 7.5h-130.053c-4.142 0-7.503-3.36-7.503-7.5v-30c0 4.14 3.361 7.5 7.503 7.5h100.041c4.152 0 7.503-3.36 7.503-7.5v-199.503h22.509c4.152 0 7.503 3.36 7.503 7.5z" fill="#fbdf63" data-original="#fbdf63"></path><path d="m122.174 435.919h-39.124c-4.144 0-7.503 3.358-7.503 7.5s3.359 7.5 7.503 7.5h39.124c4.144 0 7.503-3.358 7.503-7.5s-3.359-7.5-7.503-7.5z" fill="#56788b" data-original="#56788b"></path><path d="m512 122.951c0 54.441-36.175 102.661-88.226 117.961l-29.462 29.45c-1.381 1.38-3.161 2.11-4.962 2.19-.12.01-.23.01-.35.01-1.911 0-3.832-.73-5.302-2.2l-29.462-29.45c-52.051-15.3-88.226-63.521-88.226-117.961 0-62.711 47.219-114.621 107.984-122.041 4.922-.6 9.924-.91 15.006-.91 67.828 0 123 55.161 123 122.951z" fill="#ed2061" data-original="#ed2061"></path><path d="m512 122.951c0 54.441-36.175 102.661-88.226 117.961l-29.462 29.45c-1.381 1.38-3.161 2.11-4.962 2.19l4.412-31.64c52.051-15.3 88.226-63.521 88.226-117.961 0-62.711-47.219-114.621-107.994-122.041 4.922-.6 9.924-.91 15.006-.91 67.828 0 123 55.161 123 122.951z" fill="#c71e54" data-original="#c71e54"></path><path d="m459.499 122.951c0 38.85-31.623 70.471-70.499 70.471-5.142 0-10.164-.55-14.996-1.62-31.683-6.88-55.493-35.14-55.493-68.851 0-33.72 23.81-61.981 55.493-68.861 4.832-1.06 9.854-1.61 14.996-1.61 38.876.001 70.499 31.611 70.499 70.471z" fill="#eef0f5" data-original="#eef0f5"></path><path d="m459.499 122.951c0 38.85-31.623 70.471-70.499 70.471-5.142 0-10.164-.55-14.996-1.62 31.683-6.89 55.482-35.15 55.482-68.851 0-33.71-23.8-61.971-55.482-68.861 4.832-1.06 9.854-1.61 14.996-1.61 38.876.001 70.499 31.611 70.499 70.471z" fill="#dae1ea" data-original="#dae1ea"></path></svg>
        </React.Fragment>
    )
}

export const SpecialOfferIcon = () => {
    return (
        <React.Fragment>
            <svg viewBox="0 0 64 64"><path d="m37.33 21.444c-.2 0-.362-.163-.362-.362v-6.942c0-3.724-3.029-6.753-6.752-6.753h-3.018c-3.724 0-6.753 3.029-6.753 6.753v6.942c0 .199-.162.362-.362.362-.199 0-.361-.163-.361-.362v-6.942c0-4.123 3.354-7.478 7.477-7.478h3.018c4.122 0 7.476 3.355 7.476 7.478v6.942c-.002.2-.164.362-.363.362z" fill="#b7bec0" data-original="#b7bec0"></path><path d="m12.134 12.923h34.714v36.512h-34.714z" fill="#cdd5d7" data-original="#cdd5d7"></path><path d="m15.784 14.833-3.671-1.91v36.512l3.671 1.911z" fill="#30363d" data-original="#30363d"></path><path d="m15.784 51.346-6.231 2.616v-36.511l6.231-2.618z" fill="#e5e8ec" data-original="#e5e8ec"></path><path d="m40.91 14.833 5.93-1.91v36.512l-5.93 1.911z" fill="#30363d" data-original="#30363d"></path><path d="m40.91 51.346 2.47 2.939-.151-36.834-2.319-2.618z" fill="#e5e8ec" data-original="#e5e8ec"></path><path d="m9.553 17.451h33.953v36.511h-33.953z" fill="#484f59" data-original="#484f59" ></path><circle cx="18.368" cy="21.376" fill="#30363d" r=".838" data-original="#30363d"></circle><circle cx="35.542" cy="21.376" fill="#30363d" r=".838" data-original="#30363d"></circle><path d="m35.575 21.633c-.2 0-.362-.162-.362-.361v-6.943c0-3.724-3.029-6.752-6.753-6.752h-3.018c-3.723 0-6.752 3.029-6.752 6.752v6.943c0 .2-.162.361-.362.361-.199 0-.362-.162-.362-.361v-6.943c0-4.122 3.354-7.477 7.477-7.477h3.018c4.122 0 7.477 3.355 7.477 7.477v6.943c-.001.2-.164.361-.363.361z" fill="#30363d" data-original="#30363d"></path><path d="m39.272 23.488-.287 8.578 7.286 4.535 17.729-9.459-7.002-13.118zm4.537 5.834c.302.567.088 1.276-.481 1.577-.568.306-1.274.088-1.58-.479-.304-.57-.086-1.277.48-1.578.569-.303 1.277-.091 1.581.48z" fill="#ff876c" data-original="#ff876c"></path><path d="m52.134 29.263-1.02.545.102-8.94 1.016-.545z" fill="#ffffff" data-original="#ffffff"></path><path d="m54.069 23.5c-1.127.602-1.235 1.599-.686 2.625.546 1.027 1.436 1.492 2.563.89 1.133-.602 1.237-1.601.69-2.625-.545-1.029-1.438-1.491-2.567-.89zm1.244 1.488c.214.404.472.888.189 1.229-.05.06-.112.11-.188.152-.564.305-.922-.357-1.138-.752-.218-.411-.476-.898-.194-1.239.053-.062.114-.113.191-.153.144-.076.289-.094.433-.051.324.098.527.478.707.814z" fill="#ffffff" data-original="#ffffff"></path><path d="m47.491 23.066c-1.126.602-1.234 1.599-.688 2.624.551 1.027 1.438 1.493 2.567.89 1.127-.603 1.238-1.6.689-2.626-.544-1.028-1.437-1.49-2.568-.888zm1.597 1.515c.209.392.471.882.188 1.227-.048.059-.111.111-.186.15-.149.08-.44.165-.743-.144-.163-.167-.289-.406-.402-.617-.212-.402-.471-.888-.188-1.232.048-.059.108-.108.186-.148.144-.079.291-.096.439-.051.328.099.537.495.706.815z" fill="#ffffff" data-original="#ffffff"></path><path d="m37.823 45.123c-1.539 0-3.375-1.204-4.45-4.154-.177-.485-.277-.978-.302-1.474-3.278.386-6.618 2.006-8.009 4.956-.061.127-.212.182-.341.121-.127-.06-.182-.213-.122-.34 1.481-3.138 5.021-4.856 8.475-5.25.11-1.965 1.401-3.979 3.816-5.918 2.401-1.929 5.11-3.131 5.138-3.142.129-.057.28.001.336.131.058.128-.002.279-.131.336-.093.042-8.29 3.711-8.645 8.544.728-.056 1.446-.052 2.136.011 2.502.224 4.218 1.186 4.592 2.574.43 1.604-.251 3.033-1.657 3.478-.263.084-.544.127-.836.127zm-4.243-5.678c.02.441.106.892.273 1.349 1.164 3.194 3.231 4.165 4.652 3.715.956-.302 1.734-1.303 1.316-2.857-.311-1.155-1.897-1.997-4.143-2.198-.677-.062-1.383-.064-2.098-.009z" fill="#ffffff" data-original="#ffffff"></path><path d="m39.405 33.052c-.061 0-.122-.022-.171-.067-.104-.095-.112-.256-.018-.36.869-.957 3.12-2.213 3.216-2.266.123-.068.28-.025.348.099s.024.279-.099.348c-.023.013-2.274 1.268-3.087 2.162-.049.055-.118.084-.189.084z" fill="#ffffff" data-original="#ffffff"></path><path d="m12.301 34.112c.657.02 1.11.004 1.129.004l.767-.027-.401-.65c-.349-.558-2.175-3.384-4.291-4.512-1.125-.597-2.295-.942-3.297-.974-1.004-.03-1.718.259-2.015.812-.297.554-.141 1.306.443 2.119.586.814 1.526 1.591 2.647 2.188 1.171.623 2.861.975 5.018 1.04z" fill="#e5e8ec" data-original="#e5e8ec"></path><path d="m12.349 34.419c.591-.15.989-.282 1.005-.288l.676-.224-.53-.528c-.458-.451-2.834-2.726-5.02-3.275-1.158-.291-2.293-.325-3.191-.097-.901.228-1.462.693-1.579 1.307s.223 1.305.958 1.945c.737.641 1.78 1.151 2.938 1.442 1.207.304 2.805.21 4.743-.282z" fill="#e5e8ec" data-original="#e5e8ec"></path><path d="m12.405 33.34c.592-.15.989-.283 1.006-.287l.676-.225-.531-.528c-.457-.451-2.833-2.727-5.019-3.276-1.158-.29-2.292-.324-3.191-.097-.901.229-1.462.693-1.579 1.306-.117.615.223 1.306.958 1.945.738.64 1.78 1.153 2.938 1.443 1.207.304 2.805.209 4.742-.281z" fill="#e5e8ec" data-original="#e5e8ec"></path><path d="m11.258 33.325c.531.041.895.045.909.046l.619.007-.299-.54c-.259-.461-1.625-2.807-3.288-3.795-.883-.524-1.813-.846-2.618-.909-.808-.062-1.395.143-1.654.578s-.162 1.047.278 1.725c.441.678 1.169 1.338 2.05 1.862.921.546 2.268.892 4.003 1.026z" fill="#cdd5d7" data-original="#cdd5d7"></path><path d="m16.494 34.112c-.659.02-1.109.004-1.129.004l-.768-.027.401-.65c.348-.558 2.175-3.384 4.292-4.512 1.125-.597 2.296-.942 3.296-.974 1.004-.03 1.72.259 2.017.812.295.554.139 1.306-.446 2.119-.585.814-1.524 1.591-2.646 2.188-1.17.623-2.861.975-5.017 1.04z" fill="#e5e8ec" data-original="#e5e8ec"></path><path d="m16.446 34.419c-.592-.15-.989-.282-1.006-.288l-.675-.224.529-.528c.457-.451 2.834-2.726 5.019-3.275 1.159-.291 2.294-.325 3.192-.097.902.228 1.461.693 1.579 1.307.117.614-.223 1.305-.959 1.945-.737.641-1.779 1.151-2.937 1.442-1.208.304-2.805.21-4.742-.282z" fill="#e5e8ec" data-original="#e5e8ec"></path><path d="m16.39 33.34c-.593-.15-.989-.283-1.005-.287l-.676-.225.528-.528c.458-.451 2.834-2.727 5.02-3.276 1.158-.29 2.294-.324 3.192-.097.901.229 1.462.693 1.578 1.306.118.615-.222 1.306-.958 1.945-.737.64-1.78 1.153-2.938 1.443-1.207.304-2.805.209-4.741-.281z" fill="#e5e8ec" data-original="#e5e8ec"></path><path d="m17.536 33.325c-.53.041-.894.045-.909.046l-.619.007.3-.54c.259-.461 1.624-2.807 3.288-3.795.882-.524 1.813-.846 2.618-.909.808-.062 1.394.143 1.654.578.259.435.161 1.047-.278 1.725-.442.678-1.169 1.338-2.05 1.862-.92.546-2.269.892-4.004 1.026z" fill="#cdd5d7" data-original="#cdd5d7"></path><path d="m1.138 40.744h26.593v16.594h-26.593z" fill="#01c6da" data-original="#01c6da"></path><path d="m1.138 40.744h26.593v2.955h-26.593z" fill="#01bacc" data-original="#01bacc"></path><path d="m13.331 40.744h2.206v16.594h-2.206z" fill="#e5e8ec" data-original="#e5e8ec"></path><path d="m1.022 44.982h26.822v2.206h-26.822z" fill="#e5e8ec" data-original="#e5e8ec"></path><path d="m13.331 40.744h2.206v2.955h-2.206z" fill="#cdd5d7" data-original="#cdd5d7"></path><path d="m0 34.38h28.868v7.729h-28.868z" fill="#01c6da" data-original="#01c6da"></path><path d="m13.184 34.152h2.5v7.956h-2.5z" fill="#e5e8ec" data-original="#e5e8ec"></path><path d="m13.186 32.97 1.093.884 1.095.886-4.441 5.495-.683-1.394-1.507-.374z" fill="#cdd5d7" data-original="#cdd5d7"></path><path d="m9.032 38.538.337.084 4.271-5.285-.244-.197z" fill="#e5e8ec" data-original="#e5e8ec"></path><path d="m10.648 39.656.152.311 4.364-5.398-.244-.198z" fill="#e5e8ec" data-original="#e5e8ec"></path><path d="m15.479 32.97-1.096.884-1.094.886 4.443 5.495.682-1.394 1.506-.374z" fill="#cdd5d7" data-original="#cdd5d7"></path><path d="m19.631 38.538-.337.084-4.271-5.285.245-.197z" fill="#e5e8ec" data-original="#e5e8ec"></path><path d="m18.015 39.656-.153.311-4.362-5.398.244-.198z" fill="#e5e8ec" data-original="#e5e8ec"></path><path d="m16.82 34.369c0 .194-.186.353-.416.353h-4.168c-.229 0-.416-.158-.416-.353l.416-2.82c0-.193.187-.351.417-.351h3.334c.23 0 .417.158.417.351z" fill="#cdd5d7" data-original="#cdd5d7"></path><path d="m16.366 34.268c0 .188-.153.34-.341.34h-3.41c-.188 0-.342-.151-.342-.34l.342-2.729c0-.189.153-.341.341-.341h2.728c.188 0 .342.152.342.341z" fill="#e5e8ec" data-original="#e5e8ec"></path></svg>
        </React.Fragment>
    )
}