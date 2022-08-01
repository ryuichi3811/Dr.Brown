import * as React from 'react';
import { css } from "@emotion/react";
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Line from "./graphLine";
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';

const classes = {
  search:css`
    margin: 0 0 0 auto;
    background-color: #ddd;
    width: 70%;
    @media(max-width: 480px){
      width: 100%;
      height: 5vh;
    }
  `,
  box:css`
  opacity: 0.9;
  `,
  table:css`
    margin-top:20px;
  `,
  h2:css`
    margin-top: 20px;
    font-size: 1.2rem;
    text-align: center;
  `,
  score:css`
    margin-top: 20px;
    float: left;
    width: calc(100% / 3);
    background-color: #fff;
    border: 1px #ddd dashed;
  `,
  scoreDate:css`
    text-align: center;
  `,
  scoreTitle:css`
    text-align: center;
    margin: 40px 0 0 0;
  `,
  scoreData:css`
    text-align: center;
    margin: 10px 0 0 0;
  `,
  button:css`
    margin: 0 0 0 auto;
  `
}



const MainMyBrownLog = () => {
  return (

    <div>
      
      <Card css={classes.box}>
        <CardContent>
          
          <Paper
            component="form"
            sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', }}
            css={classes.search}
          >

            <InputBase
              sx={{ ml: 1, flex: 1, color: 'black' }}
              placeholder="日付を入力してください"
              inputProps={{ 'aria-label': 'search google maps' }} />

            <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
            <IconButton type="submit" sx={{ p: '10px' }} aria-label="search">
              <SearchIcon />
            </IconButton>

          </Paper>

            {/* 折れ線グラフ import */}
          <Line />

          <h2 css={classes.h2}>過去の診断結果一覧</h2>

          <Card sx={{ width: "30%" }} css={classes.score}>
              
              <div css={classes.scoreDate}>2021/07/27</div>
              <div css={classes.scoreTitle}>スコア</div>
              <div css={classes.scoreData}>80点</div>

              <CardActions>
                <Button size="small" css={classes.button}>もっと詳しく見る</Button>
              </CardActions>
          </Card>

          <Card sx={{ width: "30%" }} css={classes.score}>
              
              <div css={classes.scoreDate}>2021/07/27</div>
              <div css={classes.scoreTitle}>スコア</div>
              <div css={classes.scoreData}>80点</div>

              <CardActions>
                <Button size="small" css={classes.button}>もっと詳しく見る</Button>
              </CardActions>
          </Card>

          <Card sx={{ width: "30%" }} css={classes.score}>
              
              <div css={classes.scoreDate}>2021/07/27</div>
              <div css={classes.scoreTitle}>スコア</div>
              <div css={classes.scoreData}>80点</div>

              <CardActions>
                <Button size="small" css={classes.button}>もっと詳しく見る</Button>
              </CardActions>
          </Card>
          
          <Card sx={{ width: "30%" }} css={classes.score}>
              
              <div css={classes.scoreDate}>2021/07/27</div>
              <div css={classes.scoreTitle}>スコア</div>
              <div css={classes.scoreData}>80点</div>

              <CardActions>
                <Button size="small" css={classes.button}>もっと詳しく見る</Button>
              </CardActions>
          </Card>

        </CardContent>
      </Card>

      
    </div>
  
  );
}
  
  export default MainMyBrownLog;