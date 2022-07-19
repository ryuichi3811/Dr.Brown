import { css } from "@emotion/react";
import axios from "axios";
import { NextPage } from "next";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import useSWR from "swr";
import LayoutAuth from "../Layout/LayoutAuth";

const pageProps = {
  name: "新規登録",
  desc: "ユーザー新規登録用ページ",
};

const classes = {
  form: css`
    display: flex;
    flex-direction: column;
  `,
  input: css`
    width: 350px;
    height: 45px;
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
  radio: css`
    width: 20px;
    height: 20px;
    border-radius: 50%;
    margin: 10px 15px 0 70px;
    border: 2px #555 solid;
    &:checked {
      background-color: #3c988d;
    }
  `,
};

const url = 'http://localhost:8000/users/';

const Login: NextPage = () => {
  const [post, setPost] = useState(null);

  const createUser = (data: any) => {
    axios.post(url, data).then((res) => {
      setPost(res.data);
    });
  };
  
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data: any) => createUser(data);
  console.log(errors);

  console.log(post);

  return (
    <LayoutAuth siteName={pageProps.name} desc={pageProps.desc}>
      <form css={classes.form} onSubmit={handleSubmit(onSubmit)}>
        <label>名前</label>
        <input
          css={classes.input}
          type="text"
          placeholder="名前を入力してください。"
          {...register("name", { required: true })}
        />
        {errors.name && (
          <span style={{ color: "red", position: "relative", bottom: "5%" }}>
            必須項目です。
          </span>
        )}

        <label>メールアドレス</label>
        <input
          css={classes.input}
          type="email"
          placeholder="メールアドレスを入力してください。"
          {...register("email", { required: true })}
        />
        {errors.email && (
          <span style={{ color: "red", position: "relative", bottom: "5%" }}>
            必須項目です。
          </span>
        )}

        <label>生年月日</label>
        <input
          css={classes.input}
          type="date"
          placeholder="生年月日を入力してください。"
          {...register("birthday", { required: true, max: -1 })}
        />
        {errors.birthday && (
          <span style={{ color: "red", position: "relative", bottom: "5%" }}>
            必須項目です。
          </span>
        )}

        <label>性別</label>
        <div>
          <input
            css={classes.radio}
            {...register("sex", { required: true })}
            type="radio"
            value="女性"
          />
          <label
            style={{ fontSize: "16px", position: "relative", bottom: "10%" }}
          >
            女性
          </label>
          <input
            css={classes.radio}
            {...register("sex", { required: true })}
            type="radio"
            value="男性"
          />
          <label
            style={{ fontSize: "16px", position: "relative", bottom: "10%" }}
          >
            男性
          </label>
        </div>
        {errors.password && (
          <span style={{ color: "red", position: "relative", bottom: 0 }}>
            必須項目です。
          </span>
        )}
        <label style={{ marginTop: "30px" }}>パスワード</label>
        <input
          css={classes.input}
          type="password"
          placeholder="パスワードを入力してください"
          {...register("password", {
            required: true,
            pattern: /^([a-zA-Z0-9]{8,})$/,
          })}
        />
        {errors.password && (
          <span style={{ color: "red", position: "relative", bottom: "5%" }}>
            必須項目です。
          </span>
        )}
        {errors.password && (
          <span style={{ color: "red", position: "relative", bottom: "5%" }}>
            8文字以上の半角英数字で入力してください。
          </span>
        )}

        <input css={classes.button} type="submit" />
      </form>
    </LayoutAuth>
  );
};

export default Login;
