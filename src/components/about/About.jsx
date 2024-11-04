import './About.css'
import video from "../../assets/Red and Black Futuristic Gaming Channel YouTube Intro.mp4";

const About = () => {

    return (
        <div className="about">


            <div className="about-text">
                <p>
                    ACM ENISo is a thriving community of
                    passionate problem solvers,
                    programmers, and tech enthusiasts!
                    Our club is a hub for students who are eager to explore the world of computer science,
                    enhance their technical skills,
                    and collaborate on innovative projects
                </p>
                <center><h2>Our mission</h2></center>
                <p>
                    is to foster a deep understanding of computer science principles
                    and encourage the application of these concepts to solve real-world problems.
                    We aim to build a supportive environment where members can grow their skills, share knowledge,
                    and prepare for competitive programming contests, hackathons, and future careers in technology.
                </p>
                <center><h2>What We Do
                </h2></center>
                <p>
                    At the ACM ENISo Club, we host a variety of activities designed to engage and challenge our
                    members:
                    Workshops and Tutorials: Regular sessions on algorithms, data structures, and various
                    programming
                    languages, catering to all skill levels.
                    Competitive Programming Practice: Weekly problem-solving sessions where members tackle coding
                    challenges and prepare for competitions like ICPC, Codeforces, and more.
                    Hackathons and Projects: Opportunities to work on innovative projects and participate in
                    hackathons,
                    fostering creativity and teamwork.
                    Guest Lectures and Networking: Talks from industry professionals and alumni, providing insights
                    into
                    the latest trends in tech and career opportunities.
                </p>
                <center><h2>Join Us
                </h2>
                </center>
                <p>
                    Whether you re a seasoned coder or just starting out,
                    the ACM ENISo Club is the perfect place to develop your skills,
                    meet like-minded individuals, and embark on an exciting journey in the world of technology.
                    Come be a part of a community that thrives on curiosity, collaboration, and a shared passion
                    for
                    computing!
                </p>

            </div>
            <br/><br/>
            <center>

                    <video className='about-video' src={video} controls ></video>
            </center>
        </div>
    );
};

export default About;
