import { NextPage } from "next";
import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import MenuItem from '@mui/material/MenuItem';
import Select, { SelectChangeEvent } from '@mui/material/Select';


//生年月日入力
export default function FormDialog() {
    
const [age, setAge] = React.useState('');

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value as string);
  };
    return (
    <><FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
            <InputLabel id="demo-simple-select-standard-label">年</InputLabel>
            <Select
                labelId="demo-simple-select-standard-label"
                id="demo-simple-select-standard"
                value={age}
                onChange={handleChange}
                label="Age"
            >
                    <MenuItem value={1930}>1930</MenuItem>
                    <MenuItem value={1930}>1930</MenuItem>
                    <MenuItem value={1930}>1930</MenuItem>
                    <MenuItem value={1930}>1930</MenuItem>
                    <MenuItem value={1930}>1930</MenuItem>
                    <MenuItem value={1930}>1930</MenuItem>
                    <MenuItem value={1930}>1930</MenuItem>
                    <MenuItem value={1930}>1930</MenuItem>
                    <MenuItem value={1930}>1930</MenuItem>
                    <MenuItem value={1930}>1930</MenuItem>
                    <MenuItem value={1930}>1930</MenuItem>
                    <MenuItem value={1930}>1930</MenuItem>
                    <MenuItem value={1930}>1930</MenuItem>
                    <MenuItem value={1930}>1930</MenuItem>
                    <MenuItem value={1930}>1930</MenuItem>
                    <MenuItem value={1930}>1930</MenuItem>
                    <MenuItem value={1930}>1930</MenuItem>
                    <MenuItem value={1930}>1930</MenuItem>
                    <MenuItem value={1930}>1930</MenuItem>
                    <MenuItem value={1930}>1930</MenuItem>
                    <MenuItem value={1930}>1930</MenuItem>
                    <MenuItem value={1930}>1930</MenuItem>
                    <MenuItem value={1930}>1930</MenuItem>
                    <MenuItem value={1930}>1930</MenuItem>
                    <MenuItem value={1930}>1930</MenuItem>
                    <MenuItem value={1930}>1930</MenuItem>
                    <MenuItem value={1930}>1930</MenuItem>
                    <MenuItem value={1930}>1930</MenuItem>
                    <MenuItem value={1930}>1930</MenuItem>
                    <MenuItem value={1930}>1930</MenuItem>
                    <MenuItem value={1930}>1930</MenuItem>
                    <MenuItem value={1930}>1930</MenuItem>
                    <MenuItem value={1930}>1930</MenuItem>
                    <MenuItem value={1930}>1930</MenuItem>
                    <MenuItem value={1930}>1930</MenuItem>
                    <MenuItem value={1930}>1930</MenuItem>
                    <MenuItem value={1930}>1930</MenuItem>
                    <MenuItem value={1930}>1930</MenuItem>
                    <MenuItem value={1930}>1930</MenuItem>
                    <MenuItem value={1930}>1930</MenuItem>
                    <MenuItem value={1930}>1930</MenuItem>
                    <MenuItem value={1930}>1930</MenuItem>
                    <MenuItem value={1930}>1930</MenuItem>
                    <MenuItem value={1930}>1930</MenuItem>
                    <MenuItem value={1930}>1930</MenuItem>
                    <MenuItem value={1930}>1930</MenuItem>
                    <MenuItem value={1930}>1930</MenuItem>
                    <MenuItem value={1930}>1930</MenuItem>
                    <MenuItem value={1930}>1930</MenuItem>
                    <MenuItem value={1930}>1930</MenuItem>
                    <MenuItem value={1930}>1930</MenuItem>
                    <MenuItem value={1930}>1930</MenuItem>
                    <MenuItem value={1930}>1930</MenuItem>
                    <MenuItem value={1930}>1930</MenuItem>
                    <MenuItem value={1930}>1930</MenuItem>
                    <MenuItem value={1930}>1930</MenuItem>
                    <MenuItem value={1930}>1930</MenuItem>
                    <MenuItem value={1930}>1930</MenuItem>
                    <MenuItem value={1930}>1930</MenuItem>
                    <MenuItem value={1930}>1930</MenuItem>
                    <MenuItem value={1930}>1930</MenuItem>
                    <MenuItem value={1930}>1930</MenuItem>
                    <MenuItem value={1930}>1930</MenuItem>
                    <MenuItem value={1930}>1930</MenuItem>
                    <MenuItem value={1930}>1930</MenuItem>
                    <MenuItem value={1930}>1930</MenuItem>
                    <MenuItem value={1930}>1930</MenuItem>
                    <MenuItem value={1930}>1930</MenuItem>
                    <MenuItem value={1930}>1930</MenuItem>
                    <MenuItem value={1930}>1930</MenuItem>
                    <MenuItem value={1930}>1930</MenuItem>
                    <MenuItem value={1930}>1930</MenuItem>
                    <MenuItem value={1930}>1930</MenuItem>
                    <MenuItem value={1930}>1930</MenuItem>
                    <MenuItem value={1930}>1930</MenuItem>
                    <MenuItem value={1930}>1930</MenuItem>
                    <MenuItem value={1930}>1930</MenuItem>
                    <MenuItem value={1930}>1930</MenuItem>
                    <MenuItem value={1930}>1930</MenuItem>
                    <MenuItem value={1930}>1930</MenuItem>
                    <MenuItem value={1930}>1930</MenuItem>
                    <MenuItem value={1930}>1930</MenuItem>
                    <MenuItem value={1930}>1930</MenuItem>
                    <MenuItem value={1930}>1930</MenuItem>
                    <MenuItem value={1930}>1930</MenuItem>
                    <MenuItem value={1930}>1930</MenuItem>
                    <MenuItem value={1930}>1930</MenuItem>
                    <MenuItem value={1930}>1930</MenuItem>
            </Select>
        </FormControl><FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
                <InputLabel id="demo-simple-select-standard-label">月</InputLabel>
                <Select
                    labelId="demo-simple-select-standard-label"
                    id="demo-simple-select-standard"
                    value={age}
                    onChange={handleChange}
                    label="Age"
                >
                        <MenuItem value={1}>1</MenuItem>
                        <MenuItem value={2}>2</MenuItem>
                        <MenuItem value={3}>3</MenuItem>
                        <MenuItem value={4}>4</MenuItem>
                        <MenuItem value={5}>5</MenuItem>
                        <MenuItem value={6}>6</MenuItem>
                        <MenuItem value={7}>7</MenuItem>
                        <MenuItem value={8}>8</MenuItem>
                        <MenuItem value={9}>9</MenuItem>
                        <MenuItem value={10}>10</MenuItem>
                        <MenuItem value={11}>11</MenuItem>
                        <MenuItem value={12}>12</MenuItem>
                </Select>
            </FormControl><FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
                <InputLabel id="demo-simple-select-standard-label">日</InputLabel>
                <Select
                    labelId="demo-simple-select-standard-label"
                    id="demo-simple-select-standard"
                    value={age}
                    onChange={handleChange}
                    label="Age"
                >
                        <MenuItem value={1}>1</MenuItem>
                        <MenuItem value={2}>2</MenuItem>
                        <MenuItem value={3}>3</MenuItem>
                        <MenuItem value={4}>4</MenuItem>
                        <MenuItem value={5}>5</MenuItem>
                        <MenuItem value={6}>6</MenuItem>
                        <MenuItem value={7}>7</MenuItem>
                        <MenuItem value={8}>8</MenuItem>
                        <MenuItem value={9}>9</MenuItem>
                        <MenuItem value={10}>10</MenuItem>
                        <MenuItem value={11}>11</MenuItem>
                        <MenuItem value={12}>12</MenuItem>
                        <MenuItem value={13}>13</MenuItem>
                        <MenuItem value={14}>14</MenuItem>
                        <MenuItem value={15}>15</MenuItem>
                        <MenuItem value={16}>16</MenuItem>
                        <MenuItem value={17}>17</MenuItem>
                        <MenuItem value={18}>18</MenuItem>
                        <MenuItem value={19}>19</MenuItem>
                        <MenuItem value={20}>20</MenuItem>
                        <MenuItem value={21}>21</MenuItem>
                        <MenuItem value={22}>22</MenuItem>
                        <MenuItem value={23}>23</MenuItem>
                        <MenuItem value={24}>24</MenuItem>
                        <MenuItem value={25}>25</MenuItem>
                        <MenuItem value={26}>26</MenuItem>
                        <MenuItem value={27}>27</MenuItem>
                        <MenuItem value={28}>28</MenuItem>
                        <MenuItem value={29}>29</MenuItem>
                        <MenuItem value={30}>30</MenuItem>
                        <MenuItem value={31}>31</MenuItem>
                </Select>
            </FormControl></>
    );
}