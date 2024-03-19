import styled, { createGlobalStyle } from "styled-components";
import "./reset.css";

import mainImg from "./assets/image-omelette.jpeg";
import GlobalStyles from "./GlobalStyles";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  background-color: var(--colors-white);
  font-family: var(--ff-primary);
  margin: 0 auto;
  max-width: 768px;
  padding: 50px;
  margin-top: 80px;
  border-radius: var(--radii);

  @media (max-width: 768px) {
    position: relative;
    padding: 25px;
    margin-top: 0px;
  }
`;

const MainIMG = styled.img`
  max-width: 100%;
  border-radius: var(--radii);
  @media (max-width: 768px) {
    border-radius: 0px;
    position: relative;
    min-width: 100vw;
    top: -25px;
    left: -25px;
  }
`;

const RecipeName = styled.h1`
  font-family: var(--ff-secondary);
  font-size: 2rem;
  margin: 20px 0;
`;

const Section = styled.section`
  display: flex;
  flex-direction: column;
  gap: 25px;
  padding: 40px 0;
  background-color: ${(props) => props.$bgColor ?? "inherit"};
  color: ${(props) => props.$headerColor ?? "inherit"};
  border-bottom: ${(props) =>
    props.$underline ? "2px solid var(--colors-light-grey)" : "none"};
`;

const Paragraph = styled.p`
  color: var(--colors-wenge-brown);
  line-height: 1.5rem;
`;

const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 10px;
  counter-reset: ${(props) => (props.as === "ol" ? "list-counter" : "unset")};
  & > li {
    display: inline-flex;
    align-items: center;
    gap: 20px;
  }
  & > li::before {
    content: ${(props) =>
      props.as === "ol" ? "counter(list-counter)" : `"•"`};
    counter-increment: ${(props) =>
      props.as === "ol" ? "list-counter" : `unset`};
    font-size: 1.2em;
    display: inline-block;
    min-width: 15px;
    text-align: center;
  }
  & > li > p {
    /*  padding-left: 30px; */
  }
`;

const H3 = styled.h3`
  font-size: 1.2rem;
  font-weight: var(--fw-mid);
`;

const H2 = styled.h2`
  font-family: var(--ff-secondary);
  font-size: 1.6rem;
`;

const Bold = styled.span`
  font-weight: var(--fw-bold);
`;

const TableRow = styled.tr`
  display: flex;
  justify-content: space-between;
  border-bottom: 2px solid var(--colors-light-grey);
  &:last-child {
    border: none;
  }
`;

const TableColumn = styled.td`
  width: 50%;
  padding: 10px 50px;
  color: ${(props) => props.color ?? "inherit"};
`;

function App() {
  return (
    <>
      <GlobalStyles />
      <Wrapper>
        <header>
          <MainIMG src={mainImg} />
          <RecipeName>Simple Omelette Recipe</RecipeName>
          <Paragraph>
            An easy and quick dish, perfect for any meal. This classic omelette
            combines beaten eggs cooked to perfection, optionally filled with
            your choice of cheese, vegetables, or meats.
          </Paragraph>
        </header>

        <Section
          style={{
            padding: "20px 40px",
            marginTop: "30px",
            borderRadius: "10px",
          }}
          $headerColor={"var(--colors-dark-raspberry)"}
          $bgColor={"hsla(332, 51%, 32%, 0.1)"}
        >
          <H3>Preparation time</H3>
          <List>
            <li>
              <Paragraph>
                <Bold>Total</Bold> : Approximately 10 minutes
              </Paragraph>
            </li>
            <li>
              <Paragraph>
                <Bold>Preparation</Bold>: 5 minutes
              </Paragraph>
            </li>
            <li>
              <Paragraph>
                <Bold>Cooking</Bold>: 5 minutes
              </Paragraph>
            </li>
          </List>
        </Section>

        <Section $headerColor={"var(--colors-nutmeg)"} $underline>
          <H2>Ingridients</H2>
          <List>
            <li>
              <Paragraph>2-3 large eggs</Paragraph>
            </li>
            <li>
              <Paragraph>Salt, to taste</Paragraph>
            </li>
            <li>
              <Paragraph>Pepper, to taste </Paragraph>
            </li>
            <li>
              <Paragraph>1 tablespoon of butter or oil</Paragraph>
            </li>
            <li>
              <Paragraph>
                Optional fillings: cheese, diced vegetables, cooked meats, herbs
              </Paragraph>
            </li>
          </List>
        </Section>
        <Section $headerColor={"var(--colors-nutmeg)"} $underline>
          <H2>Instructions</H2>
          <List as={"ol"}>
            <li>
              <Paragraph>
                <Bold>Beat the eggs:</Bold>
                In a bowl, beat the eggs with a pinch of salt and pepper until
                they are well mixed. You can add a tablespoon of water or milk
                for a fluffier texture.
              </Paragraph>
            </li>
            <li>
              <Paragraph>
                <Bold>Heat the pan:</Bold>
                Place a non-stick frying pan over medium heat and add butter or
                oil.
              </Paragraph>
            </li>
            <li>
              <Paragraph>
                <Bold>Cook the omelette:</Bold>
                Once the butter is melted and bubbling, pour in the eggs. Tilt
                the pan to ensure the eggs evenly coat the surface.
              </Paragraph>
            </li>
            <li>
              <Paragraph>
                <Bold>Add fillings (optional):</Bold>
                When the eggs begin to set at the edges but are still slightly
                runny in the middle, sprinkle your chosen fillings over one half
                of the omelette.
              </Paragraph>
            </li>
            <li>
              <Paragraph>
                <Bold>Fold and serve:</Bold>
                As the omelette continues to cook, carefully lift one edge and
                fold it over the fillings. Let it cook for another minute, then
                slide it onto a plate.
              </Paragraph>
            </li>
            <li>
              <Paragraph>
                <Bold>Enjoy:</Bold>
                Serve hot, with additional salt and pepper if needed.
              </Paragraph>
            </li>
          </List>
        </Section>
        <Section $headerColor={"var(--colors-nutmeg)"}>
          <H2>Nutrition</H2>
          <Paragraph>
            The table below shows nutritional values per serving without the
            additional fillings.
          </Paragraph>
          <table>
            <tbody>
              <TableRow>
                <TableColumn color="var(--colors-wenge-brown)">
                  Calories
                </TableColumn>
                <TableColumn>
                  <Bold>277kcal</Bold>
                </TableColumn>
              </TableRow>
              <TableRow>
                <TableColumn color="var(--colors-wenge-brown)">
                  Carbs
                </TableColumn>
                <TableColumn>
                  <Bold>0g</Bold>
                </TableColumn>
              </TableRow>
              <TableRow>
                <TableColumn color="var(--colors-wenge-brown)">
                  Protein
                </TableColumn>
                <TableColumn>
                  <Bold>20g</Bold>
                </TableColumn>
              </TableRow>
              <TableRow>
                <TableColumn color="var(--colors-wenge-brown)">Fat</TableColumn>
                <TableColumn>
                  <Bold>20g</Bold>
                </TableColumn>
              </TableRow>
            </tbody>
          </table>
        </Section>
      </Wrapper>
    </>
  );
}

export default App;
