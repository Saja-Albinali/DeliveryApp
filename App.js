import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MainNavigation from "./src/navigation/MainNav/MainNavigation";
import CategoryNavigation from "./src/navigation/CategoryNav/CategoryNavigation";
import AuthNavigation from "./src/navigation/AuthNav/AuthNavigation";
import UserContext from "./src/context/UserContext";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const Stack = createNativeStackNavigator();
const queryClient = new QueryClient(); // Create QueryClient instance

export default function App() {
  const [authenticated, setAuthenticated] = useState(false);

  console.log(`Authenticated: ${authenticated}`);
  return (
    <UserContext.Provider value={[authenticated, setAuthenticated]}>
      <QueryClientProvider client={queryClient}>
        <NavigationContainer>
          {authenticated ? <MainNavigation /> : <AuthNavigation />}
        </NavigationContainer>
      </QueryClientProvider>
    </UserContext.Provider>
  );
}
