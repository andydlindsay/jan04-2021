import styled from 'styled-components';
import Custom from './Custom';

const Styled = () => {
  const Paragraph = styled.p`
    color: green;
    text-decoration: underline;
  `;

  const Heading = styled.h2`
    font-size: 3em;
    font-weight: italic;

    &:hover {
      border: 5px dotted turquoise;
    }
  `;

  const Electric = styled.h3`
    color: ${props => props.poweredUp ? 'yellow' : 'lightgrey' };
    background: ${props => props.poweredUp ? 'black' : 'white'};
  `;

  const WrappedCustom = styled(Custom)`
    color: #358BDC;
    background: orange;
  `;

  return (
    <div>
      <h2>Styled Components</h2>
      <Paragraph>Am I purple with an underline?</Paragraph>
      <Heading>I am a heading</Heading>
      <Electric>Am I electric?</Electric>
      <Electric poweredUp>No, but I am!!</Electric>

      <Custom />
      <WrappedCustom />
    </div>
  )
};

export default Styled;
