import Box from "./Box";
import Button from "./Button";
import styled from 'styled-components';


const CustomizedBox = styled(Box)`
  background-color: orange;
  margin-top: 10px;

`

function Exam02StyledComponent(props) {
  return(
    <div className="card">
      <div className="card-header">
        Exam03StyledComponent
      </div>
      <div className="card-body">
        <Box >
          BOx
          <Button></Button>
          <Button inverted={true}></Button>
        </Box>
        <CustomizedBox>

        </CustomizedBox>
      </div>
    </div>
  );
}
export default Exam02StyledComponent;