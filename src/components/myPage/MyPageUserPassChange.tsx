import { NextPage } from "next";
import * as React from 'react';
import { css } from "@emotion/react";
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';

const classes = {
    box:css`
        padding-top: 100px;
        display: flex;
        flex-direction: row;
        justify-content: space-around;
    `,
    title:css`
      font-size: 1.5rem;
    `,
    passInput:css`
        text-align: center;
        display: block;
    `,
    passLabel:css`
    @media(max-width: 480px){
      font-size: 0.8rem;
    }
    `
}

interface State {
  password: string;
  password2: string;
  password3: string;
  showPassword: boolean;
}

export default function InputAdornments() {
  const [values, setValues] = React.useState<State>({
    password: '',
    password2: '',
    password3: '',
    showPassword: false,
  });

  const handleChange =
    (prop: keyof State) => (event: React.ChangeEvent<HTMLInputElement>) => {
      setValues({ ...values, [prop]: event.target.value });
    };

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };

  const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };

  return (
    <div css={classes.box}>
      <Box sx={{ width: '100%', maxWidth: '80%', bgcolor: 'background.paper' }}>
      <nav aria-label="main mailbox folders" >
          <List>
            <ListItem css={classes.passInput} disablePadding>
              <p css={classes.title}>パスワード変更</p>
            </ListItem>
          </List>
        </nav>

        <nav aria-label="main mailbox folders" >
          <List>
            <ListItem css={classes.passInput} disablePadding>
              <FormControl  sx={{ m: 1, width: '80%' }} variant="standard">
              <InputLabel css={classes.passLabel} htmlFor="standard-adornment-password">現在のパスワード</InputLabel>
                <Input
                  id="standard-adornment-password"
                  type={values.showPassword ? 'text' : 'password'}
                  value={values.password}
                  onChange={handleChange('password')}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                      >
                        {values.showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  }
                />
              </FormControl>
            </ListItem>
          </List>
        </nav>
        <Divider />
        <nav aria-label="secondary mailbox folders">
          <List>
            <ListItem css={classes.passInput} disablePadding>
              <FormControl sx={{ m: 1, width: '80%' }} variant="standard">
                <InputLabel css={classes.passLabel} htmlFor="standard-adornment-password">新しいパスワード</InputLabel>
                <Input
                  id="standard-adornment-password"
                  type={values.showPassword ? 'text' : 'password'}
                  value={values.password2}
                  onChange={handleChange('password')}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                      >
                        {values.showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  }
                />
              </FormControl>
            </ListItem>
          </List>
        </nav>
        <Divider />
        <nav aria-label="main mailbox folders" >
          <List>
            <ListItem css={classes.passInput} disablePadding>
              <FormControl sx={{ m: 1, width: '80%' }} variant="standard">
              <InputLabel css={classes.passLabel} htmlFor="standard-adornment-password">新しいパスワード（確認）</InputLabel>
                <Input
                  id="standard-adornment-password"
                  type={values.showPassword ? 'text' : 'password'}
                  value={values.password3}
                  onChange={handleChange('password')}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                      >
                        {values.showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  }
                />
              </FormControl>
            </ListItem>
          </List>
        </nav>
        <Divider /><nav aria-label="main mailbox folders" >
          <List>
            <ListItem css={classes.passInput} disablePadding>
              <Button variant="contained">変更</Button>
            </ListItem>
          </List>
        </nav>
        <Divider />
      </Box>
    </div>
  );
}

