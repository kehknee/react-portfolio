import './index.scss'
import Loader from 'react-loaders'
import Calculator from 'C:/Users/Kenneth Tran/OneDrive/Documents/VSC Code/react-portfolio-cpsc362/src/assets/images/calculator.png'

const About = () => {
  
    return (
    <>
        <div className='container about-page'>
        <div className = 'text-zone'>
            <h1>
                About Me:
            </h1>
            <p>
                My name is Kenny, and I'm a computer scientist. I'm new to software engineering
                and I hope I can expand my knowledge. I am looking for a role in cyber security
                or game development. I would also be interested in any internships as well. 
            </p>
            <p>
                I am confident in my abilities to work well with others, provide good results
                in ample time, and my willingness to learn new things. I have a deep hobby in
                gaming, keyboard building, and technology.
            </p>
            <p>
                Below you can find any projects that I have or am working on.
                *Currently, there are none but I plan to add many more in the future!*
            </p>
            <h2>
            Projects:
            </h2>
            <a href="https://github.com/kehknee/CPSC240/tree/main/CPSC240%20Assignment%201">
                <img
                src={Calculator}
                alt="Calculator"
                />
            </a>
            <p>
                A calculator that gets the pythagorean value using assembly code.
            </p>
        </div>
        
        </div>
        <Loader type="line-scale"/>
    </>
    )
}

export default About