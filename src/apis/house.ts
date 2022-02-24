import axios from 'axios';

const BASE_URL = 'http://localhost:8000';

axios.defaults.baseURL = BASE_URL;

// 하우스 만들기
export const makeHouseAPI = async (name: string) => {
  return await axios.post(`/houses/`, { name }).then((response) => response.data);
};

// 하우스 구성원 목록
export const getMembersAPI = (houseId: number) => {
  return axios.get(`/houses/${houseId}/members`).then((response) => response.data);
};

// 하우스 구성원 초대
export const inviteHouseAPI = (email: { email: string }[]) => {
  return axios.post(`/houses/invite`, email[0]).then((response) => response.data);
};

// 하우스 구성원 초대 수락
export const inviteAcceptAPI = (invite_Id: number) => {
  return axios.patch(`/houses/invite/accept`, { invite_Id }).then((response) => response.data);
};
