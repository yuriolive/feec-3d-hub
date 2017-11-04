import React from 'react';
import Header from './Header';
import TutorialCard from '../containers/TutorialCard';

const Home = () => (
  <div>
    <Header />
    <div className="container">
      <h3>Tutoriais em destaque</h3>
      <div className="row">
        <div className="col-md-4">
          <TutorialCard
            img={{ thubmnail: 'https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180' }}
            title="Como parar/iniciar o servidor para impressão Repetier-Server?"
            url="tutorial/-KxprnnMGE9TTYxL9Vjf"
          />
        </div>
        <div className="col-md-4">
          <TutorialCard
            img={{ thubmnail: 'https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180' }}
            title="Como se conectar ao servidor de impressão?"
            url="tutorial/-Kxq19eZa6X_sPgZLr2S"
          />
        </div>
        <div className="col-md-4">
          <TutorialCard
            img={{ thubmnail: 'https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180' }}
            title="Como trocar o filamento?"
            url="tutorial/-Ky2MLwrkfv0VFTC3ZcA"
          />
        </div>
      </div>
    </div>
  </div>
);

export default Home;
