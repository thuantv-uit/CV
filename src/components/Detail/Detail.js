import './Detail.css';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import GitHubIcon from '@mui/icons-material/GitHub';
import ApartmentIcon from '@mui/icons-material/Apartment';

function Detail() {
    return (
        <div className='app'>
            <header className='header'>TRAN VAN THUAN</header>
                <p>
                    <span className='icon-text-container'><EmailIcon></EmailIcon>thuantranuit2004@gmail.com</span>
                    <span className='icon-text-container'> <PhoneIcon></PhoneIcon> (+84) 984 091 038</span>
                    <span className='icon-text-container'> <GitHubIcon></GitHubIcon> https://github.com/thuantv-uit </span>
                </p>
                <hr/>
                <h1>SUMMARY</h1>
                    <p>I am a third-year student at the University of Information Technology VNU-HCM, majoring in Computer
                    Networks and Data Communications. I am actively seeking job opportunities as a DevOps Engineer. I am
                    committed to continuous learning and applying knowledge to grow in this field.</p>
                    <hr/>
                <h1>EDUCATION</h1>
                    <p><b>UNIVERSITY OF INFORMATION TECHNOLOGY - VNUHCM</b></p>
                    <p>Studying Computer Networks and Data Communications</p>
                    <hr/>
                <h1>PROJECT</h1>
                {/* Project 1 */}
                    <h2>CI/CD pipeline for a microservices application</h2>
                        <p> Role: Team Leader (Team of 1) </p>
                        <p> Description: Developed a dynamic timeline web app for creating, customizing, and managing timelines </p>
                        <p>
                            <li>APIs: Developed APIs for timeline management, user authentication, and invitations.</li>
                            <li>Collaboration: Created a feature to view personal and invited timelines.</li>
                            <li>Integration: Linked React frontend with Node.js backend for smooth API handling and data processing.</li>
                        </p>
                        <p> Technology: NodeJS, MongoDB, React </p>
                {/* Project 2 */}
                    <h2>Timeline</h2>
                        <p>Role: Team Leader (Team of 1)</p>
                        <p>Description: Developed a dynamic timeline web app for creating, customizing, and managing timelines</p>
                        <p>
                            <li>APIs: Developed APIs for timeline management, user authentication, and invitations.</li>
                            <li>Collaboration: Created a feature to view personal and invited timelines.</li>
                            <li>Integration: Linked React frontend with Node.js backend for smooth API handling and data processing.</li>
                        </p>
                        <p>Technology: NodeJS, MongoDB, React</p>
                {/* Project 3 */}
                    <h2>Kubernetes Cluster Monitoring and Automation</h2>
                        <p>Role: Member (Team of 4)</p>
                        <p>Description: Built a high-availability Kubernetes cluster with monitoring and automation.</p>
                        <p>
                            <li>Cluster Setup: Deployed a 3-node Kubernetes cluster (1 master, 2 workers) for scalability.</li>
                            <li>Management: Utilized Rancher for a web-based interface to streamline cluster administration.</li>
                            <li>Monitoring & Alerts: Integrated Prometheus and Grafana for real-time CPU, memory, and pod metrics visualization,
                            with Alertmanager configured for email notifications at 70% node CPU.</li>
                            <li>Autoscaling: Implemented Horizontal Pod Autoscaler for pod scaling at 80% CPU usage, ensuring an efficient,
                            automated solution with minimal downtime.</li>
                        </p>
                        <p>Technologies: Kubernetes, Prometheus, Grafana, Rancher</p>
                    {/* Project 4 */}
                        <h2>Resort Network Infrastructure Design</h2>
                        <p>Role: Team Leader (Team of 3)</p>
                        <p>Description: Designed a network infrastructure for a 4-star Phan Thiet resort, compliant with TCVN</p>
                        <p>
                            <li>Network Design: Designed a wired and wireless network with a scalable and reliable logical topology.</li>
                            <li>Wi-Fi: Deployed a resort-wide wireless network with a user-friendly Captive Portal for secure guest and staff access.</li>
                            <li>Security: Implemented a camera surveillance system and site-to-site VPN to the corporate data center.</li>
                        </p>
                        <p>Technology: Cisco Packet Tracer</p>
                    <hr/>
                <h1>REFERENCES</h1>
                    <span className='icon-text-container'><ApartmentIcon></ApartmentIcon>University of Information Technology, VNU-HCM</span>
                    <span className='icon-text-container'> <PhoneIcon></PhoneIcon> (+84) 866 056 466</span>
                    <span className='icon-text-container'> <EmailIcon></EmailIcon> tuanla@uit.edu.vn </span>
        </div>
    );
}

export default Detail;