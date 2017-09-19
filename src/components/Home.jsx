import React from 'react';
import Header from './Header';
import TutorialCard from './TutorialCard';

const Home = () => (
  <div>
    <Header />
    <div className="container">
      <h3>Tutoriais em destaque</h3>
      <div className="row">
        <div className="col-md-4">
          <TutorialCard
            img={{ thubmnail: 'https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180' }}
            title="Pluviometro"
            author={{ name: 'helio13' }}
            description="Pluviometro para estação metereológica"
            url="pluviometro"
          />
        </div>
        <div className="col-md-4">
          <TutorialCard
            img={{ thubmnail: 'https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180' }}
            title="Pluviometro"
            author={{ name: 'helio13' }}
            description="Pluviometro para estação metereológica"
            url="pluviometro"
          />
        </div>
        <div className="col-md-4">
          <TutorialCard
            img={{ thubmnail: 'https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180' }}
            title="Pluviometro"
            author={{ name: 'helio13' }}
            description="Pluviometro para estação metereológica"
            url="pluviometro"
          />
        </div>
      </div>
    </div>
    <div className="container mt-4">
      <h3>Projetos em destaque</h3>
    </div>
    <div className="container mt-4">
      <h3>Próximos cursos</h3>
    </div>
  </div>
);

export default Home;
