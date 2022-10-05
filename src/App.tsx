import React, { ReactElement, ReactNode, useState, useEffect } from 'react';
import './App.css';
import "normalize.css";
import Navbar from "./Navbar";
import About from "./routes/About";
import Pricing from "./routes/Pricing";
import Home from "./routes/Home";
import Contact from "./routes/Contact";
import { Route, Routes } from 'react-router-dom';
import UseStateComponent from "./components/UseStateComponent";
import UseEffectComponent from "./components/UseEffectComponent";
import UseContextComponent from "./components/UseContextComponent";
import UseReducerComponent from "./components/UseReducerComponent";
import UseRefComponent from "./components/UseReducerComponent";
import CustomHookComponent from "./hooks/CustomHookComponent";
import MoreReactComponentTsStuff from "./components/MoreReactComponentTsStuff";

// Legacy - adding defaultProps for props.children

const HeadingFc: React.FC<{ title: string }> = ({title}) => <h1>{title}</h1>

function Heading({title} : {title: string}) {
  return <h1>{title}</h1>;
}

function HeadingWithContent({children} : {children: ReactNode | ReactElement }) {
  return <h1>{children}</h1>;
}

// defaultContainerProps

const defaultContainerProps = {
  heading: <strong>MyHeading!</strong>
}

type ContainerPropsTypes = {children: ReactNode } & typeof defaultContainerProps;

function Container({heading, children} : ContainerPropsTypes ) : ReactElement {
  return <div><h1>{heading}</h1><h1>{children}</h1></div>;
}

Container.defaultProps = defaultContainerProps;

// Functional Props

type numberAndNode = (num: number) => ReactNode;

function TextWithNumber({ children, header } : { children: numberAndNode, header?: numberAndNode }) {
    const [ state, setState ] = useState<number>(1);

    // @ts-ignore
    return (
        <div>
            {header && <h1>{header?.(state)}</h1>}
            <div>
                {children(state)}
            </div>
            <div>
                <button onClick={() => setState(prevState => prevState + 1)}>Add</button>
            </div>
        </div>
    )
}

// List/ Generics usage in React with Typescript

function List<ListItem>({items, render} : {items: ListItem[], render: (item: ListItem) => ReactNode }) {
    return (
        <ul>
            {items.map((item, index) => (
                <li key={index}><a href='#'>{render(item)}</a></li>
            ))}
        </ul>
    )
}

// Class Component

class MyHeader extends React.Component<{title: ReactNode}>{
    render() {
        return (
            <div>{this.props.title}</div>
        )
    }
}

function App() {

    useEffect(() => {
        console.log(window.location.pathname);
    })
    {/*
    console.log(window.location.pathname)

    let component;

    switch(window.location.pathname) {
        case '/':
            component = <Home title='Whatever' />;
            break;
        case '/about':
            component = <About title='Yeah Whatever' />;
            break;
        case '/pricing':
            component = <Pricing title='Whatever Ever' />;
            break;
        case '/home':
            component = <Home title='Homeeeey' />;
            break;
    }
    */}

  return (
    <div className="App">
        <Navbar items={[{link: 'home', path: '/'},{link: 'pricing', path: '/pricing'}, {link: 'about', path: '/about'},{link: 'Contact', path: '/contact'}]} render={(item: string) => <>{item.toLowerCase()}</>}/>
        <div>
            {/*<MyHeader title="Class Cmp HEADER" />
            <Heading title="Hello There!" />
            <HeadingWithContent><strong>Hello Guys!</strong></HeadingWithContent>
            <Container heading={<span>This shit is great</span>}>Foo</Container>
            <HeadingFc title="Whats up dude"/>
            <TextWithNumber header={(num: number) => <span>This is our header {num}</span>}>{(num: number) => <div>Todays number is {num}</div>}</TextWithNumber>
            <List items={['jack', 'john', 'Mery']} render={(item: string) => <>{item.toLowerCase()}</>}></List>
            <ExampleForm />*/}
            <div className='container'>
                 {/* component */}
                <Routes>
                    <Route path='/' element={<Home title='HOME' />}></Route>
                    <Route path='/about' element={<About title='SHIT' />}></Route>
                    <Route path='/pricing' element={<Pricing title='PRICING' />}></Route>
                    <Route path='/contact' element={<Contact title='Contact' />}></Route>
                </Routes>
            </div>
        </div>
        <div>
            <UseStateComponent />
        </div>
        <div>
            <UseEffectComponent />
        </div>
        <div>
            <UseContextComponent />
        </div>
        <div>
            <UseReducerComponent />
        </div>
        <div>
            <UseRefComponent />
        </div>
        <div>
            <CustomHookComponent />
        </div>
        <div>
            <MoreReactComponentTsStuff />
        </div>
    </div>

  );
}

export default App;
