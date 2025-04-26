import styled from "styled-components";

const Card = styled.div`
  max-width: 20rem;
  margin: 2rem auto;
  background: white;
  border-radius: 1rem;
  box-shadow: 0 4px 6px rgba(0,0,0,0.1);
  padding: 2rem;
  text-align: center;
`;

const Avatar = styled.img`
  width: 6rem;
  height: 6rem;
  border-radius: 50%;
  margin: 0 auto;
`;

const Name = styled.h2`
  margin-top: 1rem;
  font-size: 1.5rem;
  font-weight: bold;
`;

const Bio = styled.p`
  color: #4B5563;
  margin-top: 0.5rem;
`;

function CardStyled({ user }) {
  return (
    <Card>
      <Avatar src={user.avatar_url} alt={user.login} />
      <Name>{user.name || user.login}</Name>
      <Bio>{user.bio || "No bio available"}</Bio>
    </Card>
  );
}

export default CardStyled;
