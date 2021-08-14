import React from 'react';
import { Grid } from 'semantic-ui-react';
import SideBar from './SideBar';
import './SideBarLayout.css';

function SideBarLayout() {
    return (
        <div className="sideBarLayout">
            <Grid>
                <Grid.Row>
                    <Grid.Column width={11}/>
                    <Grid.Column width={5}>
                        <SideBar />
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </div>
    );
}
export default SideBarLayout;
