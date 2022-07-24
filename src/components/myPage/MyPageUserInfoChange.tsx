import { NextPage } from "next";
import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import MyPageUserInfoChangeBirth from './MyPageUserBirthDay';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

//ユーザー情報変更画面
export default function FormDialog() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const [age, setAge] = React.useState('');

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value as string);
  };

  return (
    <div>

      {/* 変更ボタン */}
      <Button variant="contained" onClick={handleClickOpen}>プロフィールを変更</Button>
        

      {/* ユーザー名　メールアドレス　テキストボックス */}
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>ユーザー情報変更</DialogTitle>
        <DialogContent>
        <TextField
            autoFocus
            margin="dense"
            id="name"
            label="ユーザー名"
            type="text"
            fullWidth
            variant="standard"
          />
          
          <TextField
          autoFocus
          margin="dense"
          id="name"
          label="メールアドレス"
          type="email"
          fullWidth
          variant="standard"
        />
        
        {/* 生年月日入力をimport */}
        <MyPageUserInfoChangeBirth />

        {/* 性別 */}
        <FormControl>
        <FormLabel id="demo-row-radio-buttons-group-label">性別</FormLabel>
            <RadioGroup
                row
                aria-labelledby="demo-row-radio-buttons-group-label"
                name="row-radio-buttons-group"
                >

                <FormControlLabel value="female" control={<Radio />} label="男性" />
                <FormControlLabel value="male" control={<Radio />} label="女性" />

            </RadioGroup>
        </FormControl>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleClose}>保存</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
