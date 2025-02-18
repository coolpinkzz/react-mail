import React from 'react';
import PropTypes from 'prop-types';
import {makeStyles} from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import {inboxlist, spamlist} from '../inbox/inboxpreview';
import inboxdata from '../data/inbox.json'




function TabPanel(props) {
    const {children, value, index, ...other} = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`vertical-tabpanel-${index}`}
            aria-labelledby={`vertical-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box pt={4} >
                    <div>{children}</div>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
};

function a11yProps(index) {
    return {
        id: `vertical-tab-${index}`,
        'aria-controls': `vertical-tabpanel-${index}`,
    };
}

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.paper,
        display: 'flex',
        height: '100vh',
    },
    tabs: {
        borderRight: `1px solid ${theme.palette.divider}`,
    },
    tabpanel: {
        borderRight: `1px solid ${theme.palette.divider}`,
    }

}));

export default function VerticalTabs() {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    var count = 0;
    inboxdata.forEach((data) => {

        if (data.unread === false) {
            count += 1
        }
        return count
    })




    return (
        <div className={classes.root}>
            <Tabs
                orientation="vertical"
                variant="scrollable"
                value={value}
                onChange={handleChange}
                aria-label="Vertical tabs example"
                className={classes.tabs}
            >
                <Tab label={`Inbox ${count}`} {...a11yProps(0)} ></Tab>
                <Tab label="Junk Email" {...a11yProps(1)} />
                <Tab label="Drafts" {...a11yProps(2)} />
                <Tab label="Sent Items" {...a11yProps(3)} />
                <Tab label="Delets Items" {...a11yProps(4)} />
                <Tab label="Archive" {...a11yProps(5)} />

            </Tabs>

            <TabPanel className={classes.tabpanel} value={value} index={0}>
                {inboxlist}
            </TabPanel>
            <TabPanel className={classes.tabpanel} value={value} index={1}>
                {spamlist}
            </TabPanel>
            <TabPanel value={value} index={2}>
                Item Three
      </TabPanel>
            <TabPanel value={value} index={3}>
                Item Four
      </TabPanel>
            <TabPanel value={value} index={4}>
                Item Five
      </TabPanel>
            <TabPanel value={value} index={5}>
                Item Six
      </TabPanel>

        </div>
    );
}
