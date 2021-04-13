// @ts-check
import React from "react";
import ReactDOM from "react-dom";
import {
  Box,
  CodePane,
  CodeSpan,
  Deck,
  FlexBox,
  FullScreen,
  Heading,
  MarkdownSlide,
  Appear,
  Progress,
  Slide,
  Text,
  UnorderedList,
  ListItem,
  Image,
  Notes,
} from "spectacle";

const theme = {
  fonts: {
    header: '"Open Sans Condensed", Helvetica, Arial, sans-serif',
    text: '"Open Sans Condensed", Helvetica, Arial, sans-serif',
  },
};

const Welcome = (props) => <h1>Hello, {props.name}</h1>;

const template = () => (
  <FlexBox
    justifyContent="space-between"
    position="absolute"
    bottom={0}
    width={1}
  >
    <Box padding="0 1em">
      <FullScreen />
    </Box>
    <Box padding="1em">
      <Progress />
    </Box>
  </FlexBox>
);

const Presentation = () => {
  return (
    <Deck theme={theme} template={template}>
      <Slide>
        <FlexBox flexDirection="column" height="100%">
          <Heading>React JS</Heading>
          <Image
            src="https://www.misterbit.co.il/react-workshop/img/favicon.ico"
            height="80%"
          />
        </FlexBox>
      </Slide>
      <MarkdownSlide animateListItems>
        {`
          # Brief Background

          - Created by __Jordan Walke__ at Facebook 
          - First deployed on Facebook’s newsfeed in __2011__, Instagram in __2012__ 
          - Released under the __MIT__ License as an open source project in __2013__ 
          - Additional projects such as __React Native__ and __React Fiber__ would follow in 2015 and 2017 respectively
      `}
      </MarkdownSlide>
      <MarkdownSlide animateListItems>
        {`
            # Lets Dive In

          - React is a JavaScript __library__ that focuses on __declarative syntax__ and __virtualization__ of the DOM 
          - It allows developers to write __highly efficient__ JavaScript for the purpose of rendering a UI in a web browser 
          - Basically its enables the programmer to express __UI__ as an "expression" of __state__
          - Whereas traditional JavaScript will __re-render the entire DOM__ during a state change, React will only render the parts of the DOM that have changed
      `}
      </MarkdownSlide>
      <Slide>
        <Heading>Lets look at this example</Heading>

        <Appear>
          <CodePane highlightRanges={[0]} language="jsx">
            {`const element = <h1>Hello, world!</h1>;`}
          </CodePane>
        </Appear>
        <Appear>
          <Heading fontSize="h2">Introducing JSX</Heading>
        </Appear>
        <Appear>
          <Text>
            <strong>JSX</strong> stands for JavaScript XML
          </Text>
          <Text>
            In layman's terms JSX produces React “Elements” or "Components"
          </Text>
        </Appear>
      </Slide>
      <Slide>
        <Heading>This was our very first React Component</Heading>
        <CodePane highlightRanges={[0]} language="jsx">
          {`const element = <h1>Hello, world!</h1>;`}
        </CodePane>
        <Appear>
          <Heading fontSize="h3">We just need to attach it to the DOM</Heading>
          <CodePane highlightRanges={[4]} language="jsx">
            {`
          const element = <h1>Hello, world!</h1>;
          
          // Like this
          ReactDOM.render(element,document.getElementById('root'));`}
          </CodePane>
        </Appear>
      </Slide>
      <Slide>
        <Heading>Because its just JS</Heading>
        <CodePane
          highlightRanges={[
            [1, 3],
            [10, 14],
          ]}
          language="jsx"
        >
          {`
        function getFullName(user) {
          return user.firstName + ' ' + user.lastName;
        }
        
        const user = {
          firstName: 'Yad',
          lastName: '2'
        };
        
        const element = (
          <h1>
            Hello, {getFullName(user)}!
          </h1>
        );

        ReactDOM.render(element,document.getElementById('root'));
        `}
        </CodePane>
      </Slide>
      <Slide>
        <Heading fontSize="h2">
          In the background Babel does the heavy lifting
        </Heading>

        <CodePane highlightRanges={[[3], [7, 10]]} language="jsx">
          {`
            // Turning this
            
            const element = <h1 className="greeting">Hello, world!</h1>
            
            // To this
            
            const element = React.createElement('h1',
            {className: 'greeting'},
            'Hello, world!'
            );`}
        </CodePane>
        <Appear>
          <Heading fontSize="h2" color="orange">
            And thats the last time you are going to see it
          </Heading>
        </Appear>
      </Slide>
      <Slide>
        <Heading color="red">Warning</Heading>
        <Text fontWeight="bold" textAlign="center">
          Since JSX is closer to JavaScript than to HTML
        </Text>
        <Text textAlign="center">
          React DOM uses camelCase property naming convention instead of HTML
          attribute names. For example, <strong>class</strong> becomes{" "}
          <strong>className</strong> in JSX, and <strong>tabindex</strong>{" "}
          becomes <strong>tabIndex</strong>.
        </Text>
      </Slide>
      <Slide>
        <FlexBox flexDirection="column" height="100%">
          <Heading>Virtual/Shadow DOM</Heading>
          <a
            target="_blank"
            href="https://reactjs.org/redirect-to-codepen/rendering-elements/update-rendered-element"
          >
            <Image
              height="60vh"
              src="https://soshace.com/wp-content/uploads/2019/12/virtual-dom-vs-dom-1.jpg"
            />
          </a>
          <Notes>press the Image for the code pen demo</Notes>
        </FlexBox>
      </Slide>
      <Slide>
        <Heading>Props - The One Way Street</Heading>
        <CodePane highlightRanges={[[3], [5]]} language="jsx">{`
        // Look at this code

        <Welcome name="Sara" />

        const Welcome = (props) => <h1>Hello, {props.name}</h1>
        `}</CodePane>
        <Appear>
          <Text>this will render:</Text>
          <Welcome name="Sara" />
        </Appear>
        <Appear>
          <Heading fontSize="h2" fontWeight="normal" color="orange">
            <strong>Note</strong>: Always start component names with a capital
            letter.
          </Heading>
        </Appear>
      </Slide>

      <Slide>
        <Heading>A Bit More Complicated</Heading>
        <CodePane highlightRanges={[[3], [5, 7], [15]]} language="jsx">
          {`
          const NumberList = ({numbers}) => {
            
            if(!numbers) return null

            return (
              <ul>{numbers.map((number) =><li>{number}</li>)}</ul>
            );
          }
          
          ReactDOM.render(
            <NumberList numbers={[1, 2, 3, 4, 5]} />,
            document.getElementById('root')
          );
          `}
        </CodePane>
      </Slide>
      <Slide>
        <Image src="https://i.imgur.com/4Ev6xXK.jpg" />
        <Notes>
          we see that we have the full power of JS in our disposal And ES6 of
          course
        </Notes>
      </Slide>
      <Slide>
        <Image src="https://miro.medium.com/max/2022/1*6cogEntMTBzg9rJfkdO6xg.jpeg" />
      </Slide>
      <Slide>
        <Heading>Lets Use Hooks We Just Saw</Heading>
        <CodePane highlightRanges={[[2], [7], [5]]} language="jsx">
          {`
          const Greeting = (props) => {
            const [isLoggedIn, setIsLoggedIn] = useState(props.isLoggedIn)

            if (isLoggedIn) {
              return <UserGreeting />
            }
            return <GuestGreeting loginUser={() => setIsLoggedIn(true)} />
          }
          `}
        </CodePane>
      </Slide>
      <Slide>
        <Heading>Another Example</Heading>
        <CodePane highlightRanges={[[1], [4, 7], [9]]} language="jsx">
          {`
            const UserGreeting = () => {
              const [userName, setUser] = useState('')

              useEffect(() => {
                // fetch user from server asynchronously
                ...then(setUser) 
              })

              return <h1>{\`Hello \${userName}\`}<h1>
            }
          `}
        </CodePane>
      </Slide>
      <Slide>
        <Heading>We Just Dipped Our Toes</Heading>
        <UnorderedList>
          <Appear>
            <ListItem>
              <CodeSpan>
                React Fiber & Concurrent Mode - The Suspense API
              </CodeSpan>
            </ListItem>
          </Appear>
          <Appear>
            <ListItem>
              <CodeSpan>React Server Components</CodeSpan>
            </ListItem>
          </Appear>
          <Appear>
            <ListItem>
              <CodeSpan>Giant Eco System</CodeSpan>
            </ListItem>
          </Appear>
          <Appear>
            <ListItem>
              <CodeSpan>React Native/React VR/Ink - react for CLI</CodeSpan>
            </ListItem>
          </Appear>

          <Appear>
            <ListItem>
              <CodeSpan>And So Much More...</CodeSpan>
            </ListItem>
          </Appear>
        </UnorderedList>
      </Slide>
      <Slide template={() => null}>
        <Image src="https://www.itsplaytime.co.il/wp-content/uploads/2019/08/shutterstock_310773080.jpg" />
        <Notes>שאלות</Notes>
      </Slide>
      <Slide template={() => null}>
        <Image src="https://lh3.googleusercontent.com/proxy/c_JYTfsYY5qJ6bHbgVAfSAkdiVIKS30Fy6jNpDdGhN7qPgVySXWEowHhCQ3WATiFfbH6GpYl3ODYN0ZX1HWJ-t8mEjVLh-0yJVtzC0t7T_N3UWAovJ3qXW0" />
        <Notes>
          <h1>the end</h1>
          give it a try its easy as opening a web tab with codesandbox
        </Notes>
      </Slide>
    </Deck>
  );
};

ReactDOM.render(<Presentation />, document.getElementById("root"));
