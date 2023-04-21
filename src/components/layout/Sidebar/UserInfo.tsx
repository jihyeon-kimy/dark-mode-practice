import styled from "styled-components";
import color from "../../../styles/color";
import user from "../../../assets/user.png";

const UserInfo = () => {
  return (
    <UserInfoContainer>
      <UserImage src={user} alt="유저 이미지" />
      <User>
        <Name>Jihyeon-Kimy</Name>
        <Position>Frontend Developer</Position>
      </User>
    </UserInfoContainer>
  );
};

export default UserInfo;

const UserInfoContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 20px;
`;

const UserImage = styled.img`
  width: 50px;
  height: 50px;
  object-fit: cover;
  border-radius: 5px;
`;

const User = styled.div`
  display: inline-flex;
  flex-direction: column;
  margin-left: 15px;
  color: ${color.grayLight};
`;

const Name = styled.span`
  line-height: 25px;
  font-size: 20px;
  font-weight: 700;
`;

const Position = styled.span`
  font-size: 15px;
  font-weight: 500;
`;
