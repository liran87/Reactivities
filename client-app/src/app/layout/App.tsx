import { observer } from 'mobx-react-lite';
import React, { useContext, useEffect } from 'react';
import { Container } from 'semantic-ui-react';
import ActivityDashboard from '../../features/activities/dashboard/ActivityDashboard';
import NavBar from '../../features/nav/NavBar';
import ActivityStore from '../stores/activityStore';
import LoadingComponent from './LoadingComponent';

const App = () => {
  const activityStore = useContext(ActivityStore);

  useEffect(() => {
    activityStore.loadActivities();
  }, [activityStore]);

  if (activityStore.loadingInitial) return <LoadingComponent content={'Loading activities...'} />;

  return (
    <>
      <NavBar />
      <Container style={{ marginTop: '7em' }}>
        <ActivityDashboard />
      </Container>
    </>
  );
};

export default observer(App);
