import React from 'react';
import header from './header'
function Layout(props) {
    return (<div>
        <div>
            {props.header}
        </div>
        <div>

        </div>
        <div>
            {props.footer}
        </div>
    </div>);
}

export default Layout;