import AppLayout from '../../Layouts/Applayout';
import Title from '../../UI/atoms/Title/Title';
import BottomNavBar from '../../UI/molecules/BottomNavBar/BottomNavBar';
import { StyledShareHouseWork } from './ShareHouseWorkStyled';
import { ReactComponent as MakeEventBtn } from '../../../src_assets/makeEventBtn.svg';
import { Link } from 'react-router-dom';

export interface ITempShareHouseWorkProps {}

const ShareHouseWork = () => {
  return (
    <>
      <AppLayout>
        <StyledShareHouseWork>
          <div className="shareHouseWork_header">
            <h5>가사분담</h5>
            <Title color="#3F4245" fontSize="22px">
              만들어진 전체 가사
              <br />
              일정을 확인해 보세요!
            </Title>
          </div>
          <div className="shareHouseWork_img"></div>
          <div className="shareHouseWork_message">
            <span>아직 분담 계획이 없어요</span>
            <span>일정을 만들고 가사분담을 진행해보세요!</span>
          </div>
          <Link to="/eventmake">
            <MakeEventBtn className="shareHouseWork_makeEventBtn" />
          </Link>
        </StyledShareHouseWork>
      </AppLayout>
      <BottomNavBar />
    </>
  );
};

export default ShareHouseWork;