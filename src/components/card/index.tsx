import { StyledCard } from "./index.styles";

const Card = ({ children, className }: any) => {
  return <StyledCard className={`${className} p-5`}>{children}</StyledCard>;
};
export default Card;
