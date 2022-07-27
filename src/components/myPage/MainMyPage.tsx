import { NextPage } from "next";
import { css } from "@emotion/react";
import * as React from 'react';
import Button from '@mui/material/Button';
import Link from "next/link";
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import MyPageUserInfoChange from "./MyPageUserInfoChange";
//アイコン
import MonitorWeightIcon from '@mui/icons-material/MonitorWeight';
import DeviceThermostatIcon from '@mui/icons-material/DeviceThermostat';
import RiceBowlIcon from '@mui/icons-material/RiceBowl';
import CleanHandsIcon from '@mui/icons-material/CleanHands';
import WomanIcon from '@mui/icons-material/Woman';
import TagFacesIcon from '@mui/icons-material/TagFaces';
import PregnantWomanIcon from '@mui/icons-material/PregnantWoman';
import BabyChangingStationIcon from '@mui/icons-material/BabyChangingStation';


const classes ={
    tab:css`
        margin: 0 50px;
    `,
    avatar:css`
        margin-top: 80px;
        display: grid;
        gap: 40px;
        justify-items: center;
        grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
        @media(max-width: 480px){
            display: grid;
            gap: 40px;
            justify-items: center;
            grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
        }
    `,
    Icon:css`
        height: 150px;
        width: 150px;  
        border-radius: 50%;
        padding: 16px;
        background-color: rgba(149, 76, 233, 0.8);
        color: #ffffff;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        flex-direction: column;
        -webkit-box-pack: center;
        -ms-flex-pack: center;
        justify-content: center;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        &::berfore{
        display: block;
        content: '';
        padding-top: 100%;
    }`,
    changeButton:css`
        margin-top: 60px;
        text-align: center;
    `,
    changePass:css`
        margin-top: 50px;
        text-align: center;
        font-size: 1.2rem;
    `,
    table:css`
        margin-top: 100px;
    `
}

interface TabPanelProps {
    children?: React.ReactNode;
    index: number;
    value: number;
  }

  function createData(
    columnName: string,
    valueName: string,
  ) {
    return { columnName, valueName };
  }

  const rows = [
    createData('ユーザー名', 'おっぴー'),
    createData('メールアドレス', 'xxxx@xx.xx.xx'),
    createData('生年月日', 'xx/xx/xx'),
    createData('性別', '男'),
    createData(<MyPageUserInfoChange />,<Link href="./MyPagePassChange"><Button variant="outlined">パスワード変更</Button></Link>)
  ];

  function TabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box sx={{ p: 2 }}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }
  
  function a11yProps(index: number) {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
  }
  
  export default function BasicTabs() {
    const [value, setValue] = React.useState(0);
  
    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
      setValue(newValue);
    };
    
    const [open, setOpen] = React.useState(false);
  
    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };

    return (
            <Box sx={{ width: '100%' }}>
                <Box sx={{ bgcolor: 'background.paper',borderBottom: 1, borderColor: 'divider' }}>

                <Tabs value={value}
                      onChange={handleChange}
                      indicatorColor="secondary"
                      textColor="inherit"
                      variant="fullWidth"
                      aria-label="full width tabs example"
                        >
                    
                    <Tab label="体の調子" {...a11yProps(0)} />

                    <Tab label="ユーザー情報" {...a11yProps(1)} />

                </Tabs>
                </Box>

                <TabPanel value={value} index={0}>
                    {/* 体の調子 */}
                    <div css={classes.avatar}>
                        <Link href="./MyPageUserCondition"><div css= {classes.Icon}><MonitorWeightIcon sx={{ width: 100, height: 100, color: 'white' }}/>体重</div></Link>
                        <Link href="./MyPageUserCondition"><div css= {classes.Icon}><DeviceThermostatIcon sx={{ width: 100, height: 100, color: 'white'}}/>体温</div></Link>
                        <Link href="./MyPageUserCondition"><div css= {classes.Icon}><RiceBowlIcon sx={{ width: 100, height: 100 , color: 'white'}}/>食事量</div></Link>
                        <Link href="./MyPageUserCondition"><div css= {classes.Icon}><TagFacesIcon sx={{ width: 100, height: 100, color: 'white' }}/>体調</div></Link>
                        <Link href="./MyPageUserCondition"><div css= {classes.Icon}><PregnantWomanIcon sx={{ width: 100, height: 100, color: 'white' }}/>お腹の調子</div></Link>
                        <Link href="./MyPageUserCondition"><div css= {classes.Icon}><CleanHandsIcon sx={{ width: 100, height: 100, color: 'white' }}/>肌の調子</div></Link>
                        <Link href="./MyPageUserCondition"><div css= {classes.Icon}><WomanIcon sx={{ width: 100, height: 100, color: 'white' }}/>生理</div></Link>
                        <Link href="./MyPageUserCondition"><div css= {classes.Icon}><BabyChangingStationIcon sx={{ width: 100, height: 100, color: 'white' }}/>便</div></Link>
                    </div>
                </TabPanel>

                <TabPanel value={value} index={1}>
                    {/* ユーザー情報 */}
                    <div css={classes.table}>
                        <TableContainer component={Paper}>
                            <Table sx={{ minWidth: 300 }} aria-label="simple table">
                                
                                <TableBody>
                                    {rows.map((row) => (
                                        <TableRow
                                        key={row.valueName}
                                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                        >
                                        <TableCell component="th" scope="row">
                                            {row.columnName}
                                        </TableCell>
                                        <TableCell align="right">{row.valueName}</TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>

                            </Table>
                        </TableContainer> 
                        
                    </div>

                </TabPanel>
            </Box>
    );
  }
  
