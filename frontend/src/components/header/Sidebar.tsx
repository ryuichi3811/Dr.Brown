import { css } from "@emotion/react";
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import SideNav from "./SideNav";
const classes = {
    // サイドナビ
    sidenav: css`
        height: 100vh;
        width: 15vw;
        min-width: 160px;
    `,
    // ロゴ
    logo:css`
        height: 14vh;
        width: 100%;
        background-image: url("logo1.png");
        background-repeat: no-repeat;
        background-size: contain;
    `,
    // ボタン
    top_button:css`
        width: 56px;
        position: absolute;
        left: 9%;
        bottom: 8%;
        opacity: 0.85;
    `,
    // // スクロールバー
    scroll:css`
        height: 100vh;
        width: 100%;
        overflow-y: auto;
        &::-webkit-scrollbar{
            width: 5px;
            height: 5px;
        }
        &::-webkit-scrollbar-track{
            border-radius: 10px;
	        background: #f2f2f2;
        }
        &::-webkit-scrollbar-thumb{
            border-radius: 10px;
	        background: grey;
        }
    `
}

const Sidebar = () => {
    return (
        <>
            <div css={classes.scroll}>
                <div css={classes.sidenav}>
                    {/* ロゴ */}
                    <div css={classes.logo}></div>

                    <SideNav />

                    <div css={classes.top_button}>
                        <Box sx={{ '& > :not(style)': { m: 1 } }}>
                            <Fab size="small" color="inherit" aria-label="add">
                                {/* <ArrowDropUpIcon /> */}
                            </Fab>
                        </Box>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Sidebar;