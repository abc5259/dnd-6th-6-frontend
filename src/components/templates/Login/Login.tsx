import { useState } from 'react';
import { useForm } from 'react-hook-form';
import AppLayout from '../../Layouts/Applayout';
import Button from '../../UI/atoms/Button/Button';
import Title from '../../UI/atoms/Title/Title';
import Header from '../../UI/molecules/Header/Header';
import TextInput from '../../UI/molecules/TextInput/TextInput';
import { useNavigate } from 'react-router-dom';
import { sendLoginEmailAPI, sendLoginPasswordAPI } from '../../../apis/user';

export interface ILoginForm {
  login_email: string;
  password: string;
}

const Login = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm<ILoginForm>();
  const [pageCount, setPageCount] = useState(0);

  const onMinusPageCount = () => {
    if (pageCount == 0) {
      return navigate('/'); // redirect main page
    }
    setPageCount((prev) => prev - 1);
  };

  const onValid = (data: ILoginForm) => {
    if (!errors.login_email && pageCount == 0) {
      sendLoginEmailAPI(data.login_email)
        .then(() => setPageCount((prev) => prev + 1))
        .catch((e) => setError('login_email', { message: '존재하지 않는 이메일입니다' }, { shouldFocus: true }));
      return;
    }
    //axios요청
    sendLoginPasswordAPI(data)
      .then((response) => {
        console.log(response.data);
        //유저정보 담고 메인으로navigate('/main')
      })
      .catch((e) => setError('password', { message: '비밀번호가 일치하지 않습니다' }, { shouldFocus: true }));
  };

  return (
    <>
      <AppLayout>
        <Header onClick={onMinusPageCount} title="로그인" mb="35px" />
        {pageCount == 0 ? (
          <Title mb="24px" color="#3F4245" fontSize="23px" fontWeight="700" lineHeight="33.35px">
            이메일을 입력해주세요.
          </Title>
        ) : (
          <Title mb="24px" color="#3F4245" fontSize="23px" fontWeight="700" lineHeight="33.35px">
            비밀번호를 입력해주세요.
          </Title>
        )}
        <form onSubmit={handleSubmit(onValid)}>
          {pageCount === 0 && (
            <>
              <TextInput
                register={{
                  ...register('login_email', {
                    required: '이메일을 입력하세요',
                  }),
                }}
                labelText="이메일"
                type="email"
                message={errors.login_email?.message || ''}
              />
              <Button>다음</Button>
            </>
          )}
          {pageCount === 1 && (
            <>
              <TextInput
                register={{
                  ...register('password', {
                    required: '패스워드를 입력하세요',
                  }),
                }}
                labelText="패스워드"
                type="password"
                message={errors.password?.message || ''}
              />
              <Button>로그인</Button>
            </>
          )}
        </form>
      </AppLayout>
    </>
  );
};

export default Login;
