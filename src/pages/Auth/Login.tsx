import { NextPage } from "next";
import LayoutAuth from "../Layout/LayoutAuth";
import { useForm } from "react-hook-form";
import { css } from "@emotion/react";
import Link from "next/link";

const pageProps = {
  name: "ログイン",
  desc: "ログインページ",
};

const classes = {
  form: css`
    display: flex;
    flex-direction: column;
  `,
  input: css`
    width: 350px;
    height: 40px;
    font-size: 16px;
    background-color: #fff;
    border: #e5e5e5 2px solid;
    padding: 10px;
    color: #555;
    margin-bottom: 30px;
    &:last-child {
      margin-bottom: 0;
    }
    &::placeholder {
      color: #aaa;
    }
  `,
  button: css`
    width: 350px;
    height: 40px;
    font-size: 20px;
    letter-spacing: 2px;
    text-align: center;
    color: #fff;
    background-color: #3c988d;
    &:hover {
      cursor: pointer;
    }
  `,
  text: css`
    margin-top: 50px;
    margin-bottom: 10px;
    font-size: 16px;
    color: #555;
    text-align: center;
  `,
};

const Login: NextPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data: any) => console.log(data);
  console.log(errors);
  return (
    <LayoutAuth siteName={pageProps.name} desc={pageProps.desc}>
      <form css={classes.form} onSubmit={handleSubmit(onSubmit)}>
        <input
          css={classes.input}
          type="email"
          placeholder="メールアドレスを入力してください。"
          {...register("メールアドレスを入力してください。", {
            required: true,
          })}
        />
        <input
          css={classes.input}
          type="password"
          placeholder="パスワードを入力してください。"
          {...register("パスワードを入力してください。", { required: true })}
        />

        <input css={classes.button} type="submit" />
        <p css={classes.text}>アカウントをお持ちでない方はこちら</p>
        <Link href={"/Auth/SignUp"}>
          <p
            css={classes.button}
            style={{
              paddingTop: "5px",
            }}
          >
            新規登録
          </p>
        </Link>
      </form>
    </LayoutAuth>
  );
};

export default Login;
