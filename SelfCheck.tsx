import { NextPage } from 'next'
import Layout from './Layout/Layout'
import { css } from '@emotion/react'

import * as React from 'react'
import Radio from '@mui/material/Radio'
import RadioGroup from '@mui/material/RadioGroup'
import FormControlLabel from '@mui/material/FormControlLabel'
import FormControl from '@mui/material/FormControl'
import FormLabel from '@mui/material/FormLabel'
import Image from 'next/image'
import Img from '../../public/Pain.png'

export type Props = {
  siteName: String
}

const siteName = 'セルフチェック'
const desc = '問診機能のページ'

const crasses = {
  wrap: css`
    text-align: center;
  `,
  h1: css`
    font-size: 50px;
  `,
  form: css`
    text-align: left;
    display: flex;
    flex-flow: column;
    background-color: #ff9999; //後で外そうね
  `,
  img: css`
    width: 210px;
    height: 240px;
  `
  // left: css`
  // display: inline-block;
  //   text-align: left;
  //   background-color: #99ff99;
  // `
}

const style = {
  backgroundColor: '#99ff99'
}

const SelfCheck: NextPage = () => {
  return (
    <>
      <Layout siteName={siteName} desc={desc}>
        <div css={crasses.wrap}>
          <h1 css={crasses.h1}>{siteName}</h1>
          <div css={crasses.form}>
            <FormControl sx={style}>
              <FormLabel id='When_did_the_symptoms_start'>
                1.症状はいつから始まりましたか？
              </FormLabel>
              <RadioGroup
                aria-labelledby='When_did_the_symptoms_start'
                defaultValue='oneWeek'
                name='radio-buttons-group'
              >
                <FormControlLabel
                  value='oneWeek'
                  control={<Radio />}
                  label='1週間以内'
                />
                <FormControlLabel
                  value='oneMonth'
                  control={<Radio />}
                  label='1ヶ月以内'
                />
                <FormControlLabel
                  value='helfYear'
                  control={<Radio />}
                  label='半年以内'
                />
                <FormControlLabel
                  value='oneYear'
                  control={<Radio />}
                  label='1年以上経過'
                />
              </RadioGroup>
            </FormControl>
            <FormControl sx={style}>
              <FormLabel id='mitigated'>2.どのような痛みですか？</FormLabel>
              <RadioGroup
                aria-labelledby='mitigated'
                defaultValue=''
                name='radio-buttons-group'
              >
                <FormControlLabel value='1' control={<Radio />} label='鋭い' />
                <FormControlLabel value='2' control={<Radio />} label='鈍い' />
                <FormControlLabel
                  value='3'
                  control={<Radio />}
                  label='持続する'
                />
                <FormControlLabel value='4' control={<Radio />} label='時々' />
                <FormControlLabel
                  value='5'
                  control={<Radio />}
                  label='狭い範囲'
                />
                <FormControlLabel
                  value='6'
                  control={<Radio />}
                  label='広い範囲'
                />
              </RadioGroup>
            </FormControl>
            <FormControl sx={style}>
              <FormLabel id='ChooseSituation'>
                3.症状が始まった時の状況で、合うもの全てを選んで下さい。*チェックボックスに変更予定
              </FormLabel>
              <RadioGroup
                aria-labelledby='ChooseSituation'
                defaultValue=''
                name='radio-buttons-group'
              >
                <FormControlLabel
                  value='1'
                  control={<Radio />}
                  label='ある一瞬で急に症状が最高潮に達した。'
                />
                <FormControlLabel
                  value='2'
                  control={<Radio />}
                  label='症状が出始めてから数分で症状が最高潮に達した。'
                />
                <FormControlLabel
                  value='3'
                  control={<Radio />}
                  label='数十分〜数時間で症状が最高潮に達した。'
                />
                <FormControlLabel
                  value='4'
                  control={<Radio />}
                  label='あぶら（脂肪）の多いものを食べた後（30 分〜3 時間後）にお腹が痛くなった。'
                />
                <FormControlLabel
                  value='5'
                  control={<Radio />}
                  label='ここ 1 週間の間に、生もしくは加熱不十分な状態の魚介類を食べた。'
                />
                <FormControlLabel
                  value='6'
                  control={<Radio />}
                  label='お酒をよく飲む、または前日お酒を飲みすぎた。'
                />
                <FormControlLabel
                  value='7'
                  control={<Radio />}
                  label='痛み止め（ロキソニンやボルタレンなど）やステロイドを内服している。'
                />
                <FormControlLabel
                  value='8'
                  control={<Radio />}
                  label='痛みは、みぞおちのあたりから右下腹部に移動してきた。'
                />
                <FormControlLabel
                  value='9'
                  control={<Radio />}
                  label='最初に下腹に痛みがあり、徐々にその痛みが上に移動してきた。'
                />
              </RadioGroup>
            </FormControl>
            <FormControl sx={style}>
              <FormLabel id='worsens'>
                4.痛みが悪化するのはどのようなときですか？
              </FormLabel>
              <RadioGroup
                aria-labelledby='worsens'
                defaultValue=''
                name='radio-buttons-group'
              >
                <FormControlLabel
                  value='1'
                  control={<Radio />}
                  label='動く時'
                />
                <FormControlLabel
                  value='2'
                  control={<Radio />}
                  label='咳をしたとき'
                />
                <FormControlLabel
                  value='3'
                  control={<Radio />}
                  label='空腹時'
                />
                <FormControlLabel
                  value='4'
                  control={<Radio />}
                  label='食事後'
                />
                <FormControlLabel
                  value='5'
                  control={<Radio />}
                  label='飲酒後'
                />
                <FormControlLabel
                  value='other'
                  control={<Radio />}
                  label='その他'
                />
              </RadioGroup>
            </FormControl>
            <FormControl sx={style}>
              <FormLabel id='mitigated'>
                5.痛みが軽減されるのはどのようなときですか？
              </FormLabel>
              <RadioGroup
                aria-labelledby='mitigated'
                defaultValue=''
                name='radio-buttons-group'
              >
                <FormControlLabel
                  value='1'
                  control={<Radio />}
                  label='座った時'
                />
                <FormControlLabel
                  value='2'
                  control={<Radio />}
                  label='前屈みになった時'
                />
                <FormControlLabel
                  value='3'
                  control={<Radio />}
                  label='嘔吐後'
                />
                <FormControlLabel
                  value='4'
                  control={<Radio />}
                  label='排便後'
                />
                <FormControlLabel
                  value='other'
                  control={<Radio />}
                  label='その他'
                />
              </RadioGroup>
            </FormControl>
            <FormControl sx={style}>
              <FormLabel id='mitigated'>
                6.痛い場所は図のどの辺りですか？
              </FormLabel>
              <div>
                <Image src={Img} alt='' css={crasses.img} />
              </div>
              <RadioGroup
                aria-labelledby='mitigated'
                defaultValue=''
                name='radio-buttons-group'
              >
                <FormControlLabel value='1' control={<Radio />} label='①' />
                <FormControlLabel value='2' control={<Radio />} label='②' />
                <FormControlLabel value='3' control={<Radio />} label='③' />
                <FormControlLabel value='4' control={<Radio />} label='④' />
                <FormControlLabel value='5' control={<Radio />} label='⑤' />
                <FormControlLabel value='6' control={<Radio />} label='⑥' />
                <FormControlLabel value='7' control={<Radio />} label='⑦' />
                <FormControlLabel value='8' control={<Radio />} label='全体' />
              </RadioGroup>
            </FormControl>
            <div>
              <a>8.痛み以外の症状があれば教えてください</a>
              <br />
              <a>自由入力なので飛ばしています</a>
            </div>
            <FormControl sx={style}>
              <FormLabel id='mitigated'>9.普段お酒は飲みますか</FormLabel>
              <RadioGroup
                aria-labelledby='mitigated'
                defaultValue=''
                name='radio-buttons-group'
              >
                <FormControlLabel
                  value='1'
                  control={<Radio />}
                  label='よく飲む'
                />
                <FormControlLabel
                  value='2'
                  control={<Radio />}
                  label='時々飲む'
                />
                <FormControlLabel
                  value='3'
                  control={<Radio />}
                  label='飲まない'
                />
              </RadioGroup>
            </FormControl>

            <FormControl sx={style}>
              <FormLabel id='mitigated'>10.妊娠・授乳中</FormLabel>
              <RadioGroup
                aria-labelledby='mitigated'
                defaultValue=''
                name='radio-buttons-group'
              >
                <FormControlLabel value='1' control={<Radio />} label='はい' />
                <FormControlLabel
                  value='2'
                  control={<Radio />}
                  label='いいえ'
                />
                <FormControlLabel value='3' control={<Radio />} label='男性' />
              </RadioGroup>
            </FormControl>
          </div>
        </div>
      </Layout>
    </>
  )
}

export default SelfCheck
