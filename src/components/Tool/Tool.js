import './Tool.css';
import JavaScript from './images/Backend/JavaScript-Logo.png';
import NodeJS from './images/Backend/nodejs-express.jpg';
import npm from './images/Backend/npm.png';
import yarn from './images/Backend/yarn.jpg';
import css from './images/Frontend/css.png';
import react from './images/Frontend/react.png';
import docker from './images/Conterinerization/docker.png';
import kubernetes from './images/Conterinerization/kubernetes.png';
import rancher from './images/Conterinerization/rancher.jpg';
import grafana from './images/Monitoring/grafana.jpg';
import prometheus from './images/Monitoring/prometheus.png';
import aws from './images/Cloud/aws.png';
import trivy from './images/Others/trivy.png';
import sonarqube from './images/Others/sonarqube.png';
import github from './images/CI-CD/github.png';
import gitlab from './images/CI-CD/gitlab.jpg';

function Tool() {
    return (
        <div>
            <header className='header'>Tools</header>
                <h1>Back End</h1>
                    <div class="image-container">
                        <img src={JavaScript} alt="JavaScript logo" className="image-item" />
                        <img src={NodeJS} alt="NodeJS logo" className="image-item" />
                        <img src={npm} alt="npm logo" className="image-item" />
                        <img src={yarn} alt="yarn logo" className="image-item" />
                    </div>


                <h1>Front End</h1>
                    <div class="image-container">
                            <img src={JavaScript} alt="JavaScript logo" className="image-item" />
                            <img src={css} alt="css logo" className="image-item" />
                            <img src={react} alt="react logo" className="image-item" />
                            <img src={npm} alt="npm logo" className="image-item" />
                            <img src={yarn} alt="yarn logo" className="image-item" />
                    </div>

                <h1>CI/CD</h1>
                    <div class="image-container">
                            <img src={github} alt="github logo" className="image-item" />
                            <img src={gitlab} alt="gitlab logo" className="image-item" />
                    </div>

                <h1>Containerization</h1>
                    <div class="image-container">
                            <img src={docker} alt="docker logo" className="image-item" />
                            <img src={kubernetes} alt="kubernetes logo" className="image-item" />
                            <img src={rancher} alt="rancher logo" className="image-item" />
                    </div>

                <h1>Monitoring</h1>
                    <div class="image-container">
                            <img src={grafana} alt="grafana logo" className="image-item" />
                            <img src={prometheus} alt="prometheus logo" className="image-item" />
                    </div>

                <h1>Cloud</h1>
                    <div class="image-container">
                            <img src={aws} alt="aws logo" className="image-item" />
                    </div>

                <h1>Other</h1>
                    <div class="image-container">
                            <img src={trivy} alt="trivy logo" className="image-item" />
                            <img src={sonarqube} alt="sonarqube logo" className="image-item" />
                    </div>
            <></>
        </div>
    );
}

export default Tool;