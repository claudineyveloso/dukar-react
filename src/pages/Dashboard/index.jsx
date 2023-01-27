import React from 'react';
import { Link  } from 'react-router-dom';

import { AuthContext  } from '../../contexts/auth';
import Headers from "../../components/ui/headers"

const Dashboard = () => {
  const { authenticated, logout  } = useContext(AuthContext);
  return(
    <h1>Header do Dashboard</h1>
  )
}
