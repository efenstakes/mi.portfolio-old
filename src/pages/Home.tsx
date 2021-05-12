import React from 'react'
import { 
  IonContent, IonHeader, IonPage, 
  IonTitle, IonToolbar,
  IonFab, IonFabButton, IonIcon,
  IonButton,
} from '@ionic/react';
import { mailOutline } from 'ionicons/icons';

import AppBarComponent from '../components/appbar/appbar.component'
import FooterComponent from '../components/footer/footer.component';
import SkillsComponent from '../components/skills/skills.component';
import VSpacerComponent from '../components/v_spacer/v_spacer.component';
import WelcomeComponent from '../components/welcome/welcome.component';

import './Home.css';


const Home: React.FC = () => {
  const ux =  [
    'UI/UX Design', 'Adobe XD', 'Figma', 'Adobe Illustrator',
    'Adobe PhotoShop'
  ]
  const frontend = [
    'HTML', 'CSS3', 'JS', 'TypeScript', 'React', 'Ionic', 'Angular'
  ]
  const backend = [
    'NodeJS', 'Flask', 'FastAPI', 'PHP', 'Erlang',
  ]
  const mobile = [
    'React Native', 'Flutter', 'Ionic'
  ]
  const hobbies = [
    'Designing', 'Travelling', 'Exploring'
  ]

  return (
    <IonPage>
      
      <AppBarComponent />

      <IonContent fullscreen forceOverscroll={true}>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Blank</IonTitle>
          </IonToolbar>
        </IonHeader>
        

        {/* welcome */}
        <WelcomeComponent />

        <VSpacerComponent space={8} />

        {/* worked with */}

        {/* skills */}
        {/* ux/ui */}
        <SkillsComponent 
          title="UI/UX DESIGN"
          skills={ux}
          isAlt={false}
        />
        
        <VSpacerComponent space={5} />

        {/* frontend */}
        <SkillsComponent 
          title="Frontend"
          skills={frontend}
          isAlt={true}
        />
        
        <VSpacerComponent space={5} />


        {/* backend */}
        <SkillsComponent 
          title="Backend"
          skills={backend}
          isAlt={false} 
        />
        
        <VSpacerComponent space={5} />

        {/* mobile */}
        <SkillsComponent 
          title="Mobile"
          skills={mobile}
          isAlt={true} 
        />
        
        <VSpacerComponent space={5} />

        {/* hobbies */}
        <SkillsComponent  
          title="Hobbies"
          skills={hobbies}
          isAlt={false}
        />
        
        <VSpacerComponent space={5} />

        {/* footer */}
        <FooterComponent />

        <IonFab vertical="bottom" horizontal="center" slot="fixed">
          <IonFabButton size="small">
            <IonIcon size="small" icon={mailOutline} />
          </IonFabButton>
        </IonFab>
      </IonContent>
    </IonPage>
  );
};

export default Home;
